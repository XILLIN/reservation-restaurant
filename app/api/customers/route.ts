import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Customer } from "@/models/Customer";
import { Reservation } from "@/models/Reservation";
import { requireAdmin } from "@/lib/auth-guards";
import { apiError } from "@/lib/api";

type CustomerSummary = {
  _id: string; name: string; email: string; phone: string;
  totalReservations: number; completedReservations: number;
  cancelledReservations: number; noShowCount: number;
  lastVisit?: Date; specialNotes?: string;
};

export async function GET(request: Request) {
  try {
    await requireAdmin(request);
    await connectToDatabase();
    // Compute live statistics without overwriting saved customer identities or notes.
    const statistics = await Reservation.aggregate([
      { $sort: { date: -1, createdAt: -1 } },
      { $group: {
        _id: { $toLower: "$email" },
        name: { $first: "$name" }, phone: { $first: "$phone" },
        totalReservations: { $sum: 1 },
        completedReservations: { $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] } },
        cancelledReservations: { $sum: { $cond: [{ $eq: ["$status", "cancelled"] }, 1, 0] } },
        noShowCount: { $sum: { $cond: [{ $eq: ["$status", "no-show"] }, 1, 0] } },
        lastVisit: { $max: { $cond: [{ $eq: ["$status", "completed"] }, "$date", null] } },
      } },
    ]);
    const saved = await Customer.find({}).lean();
    const customers = new Map<string, CustomerSummary>(saved.map((customer) => [customer.email.toLowerCase(), { ...customer, _id: String(customer._id) }]));
    for (const stats of statistics) {
      const email = stats._id as string;
      const customer = customers.get(email);
      customers.set(email, {
        ...customer,
        _id: customer?._id ?? `reservation:${email}`,
        name: customer?.name ?? stats.name,
        email,
        phone: customer?.phone ?? stats.phone,
        totalReservations: stats.totalReservations,
        completedReservations: stats.completedReservations,
        cancelledReservations: stats.cancelledReservations,
        noShowCount: stats.noShowCount,
        lastVisit: stats.lastVisit ? new Date(`${stats.lastVisit}T12:00:00+07:00`) : undefined,
      });
    }
    return NextResponse.json({ success: true, data: Array.from(customers.values()).sort((a, b) => b.totalReservations - a.totalReservations) });
  } catch (error) { return apiError(error); }
}
