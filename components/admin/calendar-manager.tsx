"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Users, X, Trash2, MapPin } from "lucide-react";
import { ReservationStatus } from "@/models/Reservation";

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

type ViewMode = "month" | "day";

export function CalendarManager() {
  const [reservations, setReservations] = useState<ReservationDoc[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<ViewMode>("month");
  const [selectedRes, setSelectedRes] = useState<ReservationDoc | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/reservations", { signal: controller.signal })
      .then((response) => response.json())
      .then((result) => { if (result.success) setReservations(result.data); })
      .catch((error) => { if (!controller.signal.aborted) console.error("Failed to load dashboard data", error); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-100 text-amber-700 border-amber-200";
      case "confirmed": return "bg-blue-100 text-blue-700 border-blue-200";
      case "arrived": return "bg-purple-100 text-purple-700 border-purple-200";
      case "seated": return "bg-orange-100 text-orange-700 border-orange-200";
      case "completed": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "cancelled": return "bg-stone-100 text-stone-500 border-stone-200";
      case "no-show": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-stone-100 text-stone-700 border-stone-200";
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

  // Calendar Helpers
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const today = () => setCurrentDate(new Date());

  const prevDay = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 1));
  const nextDay = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1));

  // Render Month View
  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    // Adjust so Monday is first (if desired), but standard is Sunday=0
    // We'll stick to Sunday = 0
    const days = [];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Empty slots for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="bg-stone-50 border-r border-b border-stone-200 min-h-[120px] p-2 opacity-50"></div>);
    }

    // Days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const dayReservations = reservations.filter(r => r.date === dateStr);
      
      const isToday = dateStr === new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(new Date());

      days.push(
        <div 
          key={`day-${i}`} 
          className={`bg-white border-r border-b border-stone-200 min-h-[120px] p-2 transition-colors hover:bg-stone-50 cursor-pointer ${isToday ? 'bg-amber-50/30' : ''}`}
          onClick={() => {
            setCurrentDate(new Date(year, month, i));
            setView("day");
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm font-medium ${isToday ? 'bg-amber-500 text-white w-6 h-6 flex items-center justify-center rounded-full' : 'text-stone-700'}`}>{i}</span>
            {dayReservations.length > 0 && <span className="text-[10px] text-stone-500 font-medium">{dayReservations.length} bookings</span>}
          </div>
          <div className="space-y-1">
            {dayReservations.slice(0, 3).map(res => (
              <div 
                key={res._id} 
                onClick={(e) => { e.stopPropagation(); setSelectedRes(res); }}
                className={`text-[10px] truncate px-1.5 py-0.5 rounded border ${getStatusColor(res.status)}`}
              >
                {res.time} - {res.name}
              </div>
            ))}
            {dayReservations.length > 3 && (
              <div className="text-[10px] text-stone-500 font-medium px-1">
                +{dayReservations.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white border-t border-l border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-7 bg-stone-50 border-b border-stone-200">
          {weekDays.map(day => (
            <div key={day} className="py-3 text-center text-xs font-semibold text-stone-500 uppercase tracking-wider border-r border-stone-200">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days}
        </div>
      </div>
    );
  };

  // Render Day View
  const renderDayView = () => {
    const dateStr = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok" }).format(currentDate);
    const dayReservations = reservations.filter(r => r.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));

    return (
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="p-4 border-b border-stone-200 bg-stone-50/50 flex justify-between items-center">
          <h3 className="font-medium text-stone-900">
            {currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h3>
          <span className="text-sm text-stone-500">{dayReservations.length} Reservations</span>
        </div>
        <div className="divide-y divide-stone-100">
          {dayReservations.length === 0 ? (
            <div className="p-12 text-center text-stone-500">No reservations for this day.</div>
          ) : (
            dayReservations.map(res => (
              <div 
                key={res._id} 
                onClick={() => setSelectedRes(res)}
                className="p-4 hover:bg-stone-50 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="text-lg font-medium text-stone-900 w-16">{res.time}</div>
                  <div>
                    <h4 className="font-medium text-stone-900">{res.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mt-1">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {res.guests}</span>
                      <span className="flex items-center gap-1 capitalize"><MapPin className="w-3 h-3" /> {res.seatingOption.replace("-", " ")}</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(res.status)}`}>
                  {res.status.charAt(0).toUpperCase() + res.status.slice(1)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
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
      
      {/* Calendar Header Controls */}
      <div className="flex justify-between items-center mb-6 bg-white p-2 rounded-xl shadow-sm border border-stone-200">
        <div className="flex items-center gap-2">
          <div className="flex bg-stone-100 rounded-lg p-1">
            <button 
              onClick={() => setView("month")} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${view === "month" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
            >
              Month
            </button>
            <button 
              onClick={() => setView("day")} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${view === "day" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
            >
              Day
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-stone-900 w-48 text-center">
            {view === "month" 
              ? currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
              : currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            }
          </h2>
          <div className="flex items-center gap-1">
            <button 
              onClick={view === "month" ? prevMonth : prevDay}
              className="p-1.5 text-stone-500 hover:bg-stone-100 rounded-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={today}
              className="px-3 py-1.5 text-sm font-medium text-stone-600 hover:bg-stone-100 rounded-md transition-colors"
            >
              Today
            </button>
            <button 
              onClick={view === "month" ? nextMonth : nextDay}
              className="p-1.5 text-stone-500 hover:bg-stone-100 rounded-md transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {view === "month" ? renderMonthView() : renderDayView()}

      {/* Reservation Drawer (Reused simplified version) */}
      {selectedRes && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/40 backdrop-blur-sm animate-in fade-in" onClick={() => setSelectedRes(null)}>
          <div 
            className="w-full max-w-md bg-white border-l border-stone-200 h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right-8 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h3 className="text-lg font-medium text-stone-900">Reservation Details</h3>
                <p className="text-sm text-stone-500 font-mono mt-1">{selectedRes.reservationCode || selectedRes._id}</p>
              </div>
              <button onClick={() => setSelectedRes(null)} className="p-2 hover:bg-stone-100 rounded-full text-stone-400 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 mb-3">Current Status</h4>
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedRes.status)}`}>
                    {selectedRes.status.charAt(0).toUpperCase() + selectedRes.status.slice(1)}
                  </div>
                  <select
                    value={selectedRes.status}
                    onChange={(e) => updateStatus(selectedRes._id, e.target.value)}
                    className="bg-white border border-stone-200 text-stone-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500 shadow-sm"
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

              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 mb-4">Customer Info</h4>
                <div className="bg-stone-50 rounded-xl p-4 space-y-4 border border-stone-200">
                  <div><p className="text-xs text-stone-500 mb-1">Name</p><p className="text-sm text-stone-900">{selectedRes.name}</p></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-xs text-stone-500 mb-1">Phone</p><p className="text-sm text-stone-900">{selectedRes.phone}</p></div>
                    <div><p className="text-xs text-stone-500 mb-1">Email</p><p className="text-sm text-stone-900 truncate">{selectedRes.email}</p></div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-stone-500 mb-4">Booking Details</h4>
                <div className="bg-stone-50 rounded-xl p-4 space-y-4 border border-stone-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-xs text-stone-500 mb-1">Date</p><p className="text-sm text-stone-900">{selectedRes.date}</p></div>
                    <div><p className="text-xs text-stone-500 mb-1">Time</p><p className="text-sm text-stone-900">{selectedRes.time}</p></div>
                    <div><p className="text-xs text-stone-500 mb-1">Guests</p><p className="text-sm text-stone-900">{selectedRes.guests}</p></div>
                    <div><p className="text-xs text-stone-500 mb-1">Zone</p><p className="text-sm text-stone-900 capitalize">{selectedRes.seatingOption.replace("-", " ")}</p></div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-100 pb-8">
                <button 
                  onClick={() => deleteReservation(selectedRes._id)}
                  className="w-full py-3 flex items-center justify-center gap-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors border border-red-200"
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
