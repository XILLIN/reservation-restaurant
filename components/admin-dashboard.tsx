"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Clock, XCircle, Trash2, Calendar, Users, MapPin, Search, LogOut, ChevronDown, User, Activity, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { IReservation } from "@/models/Reservation";

type ReservationDoc = {
  _id: string;
  reservationCode: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingOption: string;
  tableId?: string;
  specialRequests?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export function AdminDashboard() {
  const [reservations, setReservations] = useState<ReservationDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      if (data.success) {
        setReservations(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch reservations", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/reservations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setReservations((prev) =>
          prev.map((r) => (r._id === id ? { ...r, status: newStatus } : r))
        );
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const deleteReservation = async (id: string) => {
    if (!confirm("Are you sure you want to delete this reservation?")) return;
    try {
      const res = await fetch(`/api/reservations/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setReservations((prev) => prev.filter((r) => r._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete reservation", error);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  const filteredReservations = reservations.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.phone.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]"><CheckCircle className="w-3.5 h-3.5" /> Confirmed</span>;
      case "cancelled":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-500/15 text-red-400 border border-red-500/20 shadow-[0_0_10px_rgba(239,68,68,0.1)]"><XCircle className="w-3.5 h-3.5" /> Cancelled</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]"><Clock className="w-3.5 h-3.5" /> Pending</span>;
    }
  };

  // Stats calculation
  const totalBookings = reservations.length;
  const pendingBookings = reservations.filter(r => r.status === "pending").length;
  const confirmedBookings = reservations.filter(r => r.status === "confirmed").length;

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh] space-y-4">
        <div className="w-8 h-8 border-2 border-stone-800 border-t-amber-500 rounded-full animate-spin"></div>
        <p className="text-stone-400 tracking-wider text-sm uppercase">Loading Data...</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-stone-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-stone-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-stone-500/20 transition-colors duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Total Bookings</p>
              <p className="text-4xl font-light text-stone-100 mt-2">{totalBookings}</p>
            </div>
            <div className="p-3 bg-stone-800/50 rounded-xl text-stone-400">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-stone-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-colors duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Pending Action</p>
              <p className="text-4xl font-light text-white mt-2">{pendingBookings}</p>
            </div>
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
              <Activity className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-stone-900/40 border border-white/5 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-stone-500 text-sm font-medium tracking-wide uppercase">Confirmed</p>
              <p className="text-4xl font-light text-stone-100 mt-2">{confirmedBookings}</p>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="bg-stone-900/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
        <div className="p-4 md:p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white/[0.01]">
          <h2 className="text-xl font-medium text-stone-200 flex items-center gap-2">
            Recent Reservations
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-black/20 border border-white/10 rounded-xl text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all shadow-inner"
              />
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-stone-300 transition-all hover:shadow-lg"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/20 text-xs tracking-wider text-stone-500 uppercase border-b border-white/5">
                <th className="p-4 md:p-5 font-medium whitespace-nowrap">Customer Details</th>
                <th className="p-4 md:p-5 font-medium whitespace-nowrap">Booking Time</th>
                <th className="p-4 md:p-5 font-medium whitespace-nowrap">Requirements</th>
                <th className="p-4 md:p-5 font-medium whitespace-nowrap">Status</th>
                <th className="p-4 md:p-5 font-medium text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredReservations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center">
                    <div className="flex flex-col items-center justify-center text-stone-500">
                      <Search className="w-8 h-8 mb-3 opacity-20" />
                      <p>No reservations found matching your criteria.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredReservations.map((res) => (
                  <tr key={res._id} className="group hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="p-4 md:p-5">
                      <div className="font-medium text-stone-200 text-base">{res.name}</div>
                      <div className="text-stone-400 text-sm mt-1">{res.email}</div>
                      <div className="text-stone-500 text-xs mt-0.5">{res.phone}</div>
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-2 text-stone-300 font-medium whitespace-nowrap">
                        <Calendar className="w-4 h-4 text-amber-500/70" /> {res.date}
                      </div>
                      <div className="flex items-center gap-2 text-stone-400 text-sm mt-1.5">
                        <Clock className="w-4 h-4 text-stone-500" /> {res.time}
                      </div>
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-2 text-stone-300 text-sm whitespace-nowrap">
                        <Users className="w-4 h-4 text-stone-500" /> {res.guests} <span className="text-stone-500">Guests</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-400 text-sm mt-1.5">
                        <MapPin className="w-4 h-4 text-stone-500" /> <span className="capitalize">{res.seatingOption.replace("-", " ")}</span>
                      </div>
                      {res.specialRequests && (
                        <div className="mt-3 text-xs text-amber-200/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1.5 rounded-md inline-block max-w-[200px] truncate">
                          {res.specialRequests}
                        </div>
                      )}
                    </td>
                    <td className="p-4 md:p-5">
                      {getStatusBadge(res.status)}
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="flex items-center justify-end gap-2 md:gap-3 opacity-100 lg:opacity-50 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <div className="relative">
                          <select
                            value={res.status}
                            onChange={(e) => updateStatus(res._id, e.target.value)}
                            className="appearance-none bg-black/30 border border-white/10 hover:border-white/20 text-stone-300 text-xs rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all cursor-pointer"
                          >
                            <option value="pending" className="bg-stone-900 text-stone-200">Pending</option>
                            <option value="confirmed" className="bg-stone-900 text-stone-200">Confirmed</option>
                            <option value="cancelled" className="bg-stone-900 text-stone-200">Cancelled</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        <button
                          onClick={() => deleteReservation(res._id)}
                          className="p-2 text-stone-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                          title="Delete Reservation"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
