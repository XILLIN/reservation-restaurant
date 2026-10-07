"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Utensils, UserCheck } from "lucide-react";
import { IReservation } from "@/models/Reservation";

type ReservationDoc = IReservation & { _id: string };

export function DashboardOverview() {
  const [reservations, setReservations] = useState<ReservationDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/reservations", { signal: controller.signal })
      .then((response) => response.json())
      .then((result) => { if (result.success) setReservations(result.data); })
      .catch((error) => { if (!controller.signal.aborted) console.error("Failed to load dashboard data", error); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(new Date());
  const todayReservations = reservations.filter(r => r.date === today);

  const stats = {
    total: todayReservations.length,
    pending: todayReservations.filter(r => r.status === "pending").length,
    confirmed: todayReservations.filter(r => r.status === "confirmed").length,
    arrived: todayReservations.filter(r => r.status === "arrived").length,
    seated: todayReservations.filter(r => r.status === "seated").length,
    completed: todayReservations.filter(r => r.status === "completed").length,
    cancelled: todayReservations.filter(r => r.status === "cancelled").length,
    noShow: todayReservations.filter(r => r.status === "no-show").length,
    totalGuests: todayReservations.reduce((acc, curr) => acc + curr.guests, 0)
  };

  const activeTables = stats.seated + stats.arrived; // Rough estimate until Table logic is fully integrated

  // Timeline (Group by time)
  const timelineGroups = todayReservations.reduce((acc, curr) => {
    if (!acc[curr.time]) acc[curr.time] = [];
    acc[curr.time].push(curr);
    return acc;
  }, {} as Record<string, ReservationDoc[]>);

  const sortedTimes = Object.keys(timelineGroups).sort();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 backdrop-blur-md">
          <p className="text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">Today&apos;s Bookings</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-light text-stone-900">{stats.total}</span>
            <span className="text-sm text-stone-500 mb-1">({stats.totalGuests} guests)</span>
          </div>
        </div>
        
        <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 backdrop-blur-md">
          <p className="text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">Active Tables</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-light text-amber-400">{activeTables}</span>
            <span className="text-sm text-stone-500 mb-1">occupied</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 backdrop-blur-md">
          <p className="text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">Pending Action</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-light text-stone-900">{stats.pending}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white shadow-sm border border-stone-200 backdrop-blur-md">
          <p className="text-stone-500 text-xs font-medium uppercase tracking-wider mb-1">Completed / No-show</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-light text-emerald-400">{stats.completed}</span>
            <span className="text-stone-600 mb-1 text-lg">/</span>
            <span className="text-xl font-light text-red-400 mb-0.5">{stats.noShow}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Status Breakdown */}
        <div className="lg:col-span-2 bg-white shadow-sm border border-stone-200 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-stone-900 mb-6">Reservation Status</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
              <Clock className="w-5 h-5 text-amber-500 mb-2" />
              <span className="text-2xl font-light text-stone-900">{stats.pending}</span>
              <span className="text-xs text-stone-500 uppercase mt-1">Pending</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-5 h-5 text-blue-500 mb-2" />
              <span className="text-2xl font-light text-stone-900">{stats.confirmed}</span>
              <span className="text-xs text-stone-500 uppercase mt-1">Confirmed</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
              <UserCheck className="w-5 h-5 text-purple-500 mb-2" />
              <span className="text-2xl font-light text-stone-900">{stats.arrived}</span>
              <span className="text-xs text-stone-500 uppercase mt-1">Arrived</span>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col items-center justify-center text-center">
              <Utensils className="w-5 h-5 text-orange-500 mb-2" />
              <span className="text-2xl font-light text-stone-900">{stats.seated}</span>
              <span className="text-xs text-stone-500 uppercase mt-1">Seated</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white shadow-sm border border-stone-200 rounded-2xl p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-stone-900 mb-6">Today&apos;s Timeline</h3>
          {sortedTimes.length === 0 ? (
            <div className="text-stone-500 text-sm text-center py-8">
              No reservations for today.
            </div>
          ) : (
            <div className="space-y-6">
              {sortedTimes.map((time) => {
                const resList = timelineGroups[time];
                const totalSlotGuests = resList.reduce((sum, r) => sum + r.guests, 0);
                
                return (
                  <div key={time} className="relative pl-6">
                    <div className="absolute w-2 h-2 bg-amber-500 rounded-full -left-[4.5px] top-1.5 ring-4 ring-stone-950"></div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-stone-900 font-medium">{time}</span>
                      <span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">{totalSlotGuests} Guests</span>
                    </div>
                    <div className="space-y-2">
                      {resList.map(res => {
                        let statusColor = "bg-stone-100 text-stone-500";
                        if (res.status === "pending") statusColor = "bg-amber-100 text-amber-700";
                        if (res.status === "confirmed") statusColor = "bg-blue-100 text-blue-700";
                        if (res.status === "arrived") statusColor = "bg-purple-100 text-purple-700";
                        if (res.status === "seated") statusColor = "bg-orange-100 text-orange-700";
                        if (res.status === "completed") statusColor = "bg-emerald-100 text-emerald-700";
                        if (res.status === "cancelled") statusColor = "bg-stone-200 text-stone-500";
                        if (res.status === "no-show") statusColor = "bg-red-100 text-red-700";
                        
                        return (
                          <div key={res._id} className="text-sm bg-stone-50 p-3 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-stone-700 font-medium">{res.name}</span>
                              <span className="text-stone-500 text-xs shrink-0">({res.guests} pax)</span>
                            </div>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wider ${statusColor}`}>
                              {res.status}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
