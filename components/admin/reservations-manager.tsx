"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Clock, XCircle, Trash2, Calendar, Users, MapPin, Search, LogOut, ChevronDown, CheckCircle2, UserCheck, Utensils, Ban, Filter, X } from "lucide-react";
import { IReservation, ReservationStatus } from "@/models/Reservation";

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
  status: ReservationStatus;
  createdAt: string;
  updatedAt: string;
};

export function ReservationsManager() {
  const [reservations, setReservations] = useState<ReservationDoc[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<ReservationStatus | "all">("all");
  const [dateFilter, setDateFilter] = useState("all");
  
  // Drawer state
  const [selectedRes, setSelectedRes] = useState<ReservationDoc | null>(null);

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
          prev.map((r) => (r._id === id ? { ...r, status: newStatus as ReservationStatus } : r))
        );
        if (selectedRes?._id === id) {
          setSelectedRes(prev => prev ? { ...prev, status: newStatus as ReservationStatus } : null);
        }
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
        if (selectedRes?._id === id) setSelectedRes(null);
      }
    } catch (error) {
      console.error("Failed to delete reservation", error);
    }
  };

  // Date filtering logic
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(new Date());
  const tomorrow = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(new Date(Date.now() + 86400000));
  
  const filteredReservations = reservations.filter((r) => {
    const matchesSearch = 
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.includes(searchTerm) ||
      (r.reservationCode && r.reservationCode.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter === "today") matchesDate = r.date === today;
    if (dateFilter === "tomorrow") matchesDate = r.date === tomorrow;
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const getStatusBadge = (status: ReservationStatus) => {
    switch (status) {
      case "pending":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20"><Clock className="w-3 h-3" /> Pending</span>;
      case "confirmed":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-blue-500/15 text-blue-400 border border-blue-500/20"><CheckCircle className="w-3 h-3" /> Confirmed</span>;
      case "arrived":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-purple-500/15 text-purple-400 border border-purple-500/20"><UserCheck className="w-3 h-3" /> Arrived</span>;
      case "seated":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-orange-500/15 text-orange-400 border border-orange-500/20"><Utensils className="w-3 h-3" /> Seated</span>;
      case "completed":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"><CheckCircle2 className="w-3 h-3" /> Completed</span>;
      case "cancelled":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-stone-500/15 text-stone-500 border border-stone-500/20"><XCircle className="w-3 h-3" /> Cancelled</span>;
      case "no-show":
        return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-red-500/15 text-red-400 border border-red-500/20"><Ban className="w-3 h-3" /> No-show</span>;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Filters & Actions */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <input
              type="text"
              placeholder="Search ID, name, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-sm text-stone-800 placeholder:text-stone-600 focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="relative w-full sm:w-40">
            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full pl-10 pr-8 py-2 appearance-none bg-white border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:border-amber-500/50 transition-all cursor-pointer"
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
          </div>
          <div className="relative w-full sm:w-40">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full pl-4 pr-8 py-2 appearance-none bg-white border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:border-amber-500/50 transition-all cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="arrived">Arrived</option>
              <option value="seated">Seated</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
              <option value="no-show">No-show</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
          </div>
        </div>
        <div className="text-sm text-stone-500">
          Showing {filteredReservations.length} reservations
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white shadow-sm border border-stone-200 rounded-2xl overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50 text-[11px] tracking-wider text-stone-500 uppercase border-b border-stone-200">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date & Time</th>
                <th className="p-4 font-medium">Details</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredReservations.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-stone-500">
                    No reservations found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredReservations.map((res) => (
                  <tr 
                    key={res._id} 
                    className="group hover:bg-stone-800/[0.02] transition-colors cursor-pointer"
                    onClick={() => setSelectedRes(res)}
                  >
                    <td className="p-4">
                      <div className="font-medium text-stone-800">{res.name}</div>
                      <div className="text-stone-500 text-xs mt-1">{res.reservationCode || "N/A"}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-stone-700 text-sm">
                        <Calendar className="w-3.5 h-3.5 text-stone-500" /> {res.date}
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 text-xs mt-1">
                        <Clock className="w-3.5 h-3.5 text-stone-500" /> {res.time}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-stone-700 text-sm">
                        <Users className="w-3.5 h-3.5 text-stone-500" /> {res.guests} Guests
                      </div>
                      <div className="flex items-center gap-2 text-stone-500 text-xs mt-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-500" /> <span className="capitalize">{res.seatingOption.replace("-", " ")}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {getStatusBadge(res.status)}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3" onClick={e => e.stopPropagation()}>
                        <div className="relative">
                          <select
                            value={res.status}
                            onChange={(e) => updateStatus(res._id, e.target.value)}
                            className="appearance-none bg-stone-50 border border-stone-200 hover:border-stone-300 text-stone-700 text-xs rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all cursor-pointer"
                          >
                            <option value="pending" className="bg-white">Pending</option>
                            <option value="confirmed" className="bg-white">Confirmed</option>
                            <option value="arrived" className="bg-white">Arrived</option>
                            <option value="seated" className="bg-white">Seated</option>
                            <option value="completed" className="bg-white">Completed</option>
                            <option value="cancelled" className="bg-white">Cancelled</option>
                            <option value="no-show" className="bg-white">No-show</option>
                          </select>
                          <ChevronDown className="w-3 h-3 text-stone-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reservation Detail Drawer */}
      {selectedRes && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/40 backdrop-blur-sm animate-in fade-in" onClick={() => setSelectedRes(null)}>
          <div 
            className="w-full max-w-md bg-[#F7F7F5] border-l border-stone-200 h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right-8 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-stone-200 flex justify-between items-center bg-white shadow-sm sticky top-0 z-10">
              <div>
                <h3 className="text-lg font-medium text-stone-900">Reservation Details</h3>
                <p className="text-sm text-stone-400 font-mono mt-1">{selectedRes.reservationCode || selectedRes._id}</p>
              </div>
              <button onClick={() => setSelectedRes(null)} className="p-2 hover:bg-stone-800/5 rounded-full text-stone-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Status & Actions */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-3">Current Status</h4>
                <div className="flex items-center gap-4">
                  {getStatusBadge(selectedRes.status)}
                  <select
                    value={selectedRes.status}
                    onChange={(e) => updateStatus(selectedRes._id, e.target.value)}
                    className="appearance-none bg-white border border-stone-200 text-stone-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="arrived">Arrived</option>
                    <option value="seated">Seated</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="no-show">No-show</option>
                  </select>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-4">Customer Information</h4>
                <div className="bg-white shadow-sm rounded-xl p-4 space-y-4 border border-stone-200">
                  <div>
                    <p className="text-xs text-stone-400 mb-1">Name</p>
                    <p className="text-sm text-stone-800">{selectedRes.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Phone</p>
                      <p className="text-sm text-stone-800">{selectedRes.phone}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Email</p>
                      <p className="text-sm text-stone-800 truncate">{selectedRes.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-4">Booking Details</h4>
                <div className="bg-white shadow-sm rounded-xl p-4 space-y-4 border border-stone-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Date</p>
                      <p className="text-sm text-stone-800">{selectedRes.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Time</p>
                      <p className="text-sm text-stone-800">{selectedRes.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Guests</p>
                      <p className="text-sm text-stone-800">{selectedRes.guests} People</p>
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-1">Zone</p>
                      <p className="text-sm text-stone-800 capitalize">{selectedRes.seatingOption.replace("-", " ")}</p>
                    </div>
                  </div>
                  {selectedRes.specialRequests && (
                    <div className="pt-4 border-t border-stone-200">
                      <p className="text-xs text-stone-400 mb-1">Special Requests</p>
                      <p className="text-sm text-amber-400 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">{selectedRes.specialRequests}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline mockup for now based on status */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-4">Timeline</h4>
                <div className="relative border-l border-stone-200 ml-3 space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute w-2 h-2 bg-stone-500 rounded-full -left-[4.5px] top-1.5 ring-4 ring-stone-950"></div>
                    <p className="text-sm text-stone-800">Created</p>
                    <p className="text-xs text-stone-400 mt-1">{new Date(selectedRes.createdAt).toLocaleString()}</p>
                  </div>
                  {["confirmed", "arrived", "seated", "completed"].includes(selectedRes.status) && (
                    <div className="relative pl-6">
                      <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-1.5 ring-4 ring-stone-950"></div>
                      <p className="text-sm text-stone-800">Confirmed</p>
                    </div>
                  )}
                  {["arrived", "seated", "completed"].includes(selectedRes.status) && (
                    <div className="relative pl-6">
                      <div className="absolute w-2 h-2 bg-purple-500 rounded-full -left-[4.5px] top-1.5 ring-4 ring-stone-950"></div>
                      <p className="text-sm text-stone-800">Arrived</p>
                    </div>
                  )}
                  {["seated", "completed"].includes(selectedRes.status) && (
                    <div className="relative pl-6">
                      <div className="absolute w-2 h-2 bg-orange-500 rounded-full -left-[4.5px] top-1.5 ring-4 ring-stone-950"></div>
                      <p className="text-sm text-stone-800">Seated</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Danger Zone */}
              <div className="pt-8 border-t border-stone-200 pb-8">
                <button 
                  onClick={() => deleteReservation(selectedRes._id)}
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm text-red-400 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-colors border border-red-500/20"
                >
                  <Trash2 className="w-4 h-4" /> Delete Reservation
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
