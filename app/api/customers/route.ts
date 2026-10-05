import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Customer } from "@/models/Customer";
import { Reservation } from "@/models/Reservation";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Auto-sync customers from reservations to ensure perfect accuracy
    const reservations = await Reservation.find({});
    
    const customerMap = new Map();
    
    for (const res of reservations) {
      const email = res.email.toLowerCase();
      if (!customerMap.has(email)) {
        customerMap.set(email, {
          name: res.name,
          email: email,
          phone: res.phone,
          totalReservations: 0,
          completedReservations: 0,
          cancelledReservations: 0,
          noShowCount: 0,
          lastVisit: new Date(res.date),
        });
      }
      
      const cust = customerMap.get(email);
      cust.totalReservations += 1;
      
      if (res.status === "completed") cust.completedReservations += 1;
      if (res.status === "cancelled") cust.cancelledReservations += 1;
      if (res.status === "no-show") cust.noShowCount += 1;
      
      // Update last visit if this reservation is newer
      const resDate = new Date(res.date);
      if (resDate > cust.lastVisit) {
        cust.lastVisit = resDate;
        cust.name = res.name; // Keep most recent name
        cust.phone = res.phone;
      }
    }
    
    // Wipe and re-insert for perfect sync (in a real app, use upsert/bulkWrite)
    await Customer.deleteMany({});
    if (customerMap.size > 0) {
      await Customer.insertMany(Array.from(customerMap.values()));
    }
    
    const customers = await Customer.find({}).sort({ totalReservations: -1 });
    
    return NextResponse.json({ success: true, data: customers });
  } catch (error: any) {
    console.error("API GET Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Failed to fetch customers" }, { status: 400 });
  }
}
