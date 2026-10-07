"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, LayoutGrid, X, Maximize } from "lucide-react";
import { TableZone, TableStatus } from "@/models/Table";

type TableDoc = {
  _id: string;
  tableNumber: string;
  zone: TableZone;
  capacity: number;
  status: TableStatus;
  createdAt: string;
  updatedAt: string;
};

export function TablesManager() {
  const [tables, setTables] = useState<TableDoc[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Add Table Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTable, setNewTable] = useState({ tableNumber: "", zone: "dining-room", capacity: 2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/tables", { signal: controller.signal })
      .then((response) => response.json())
      .then((result) => { if (result.success) setTables(result.data); })
      .catch((error) => { if (!controller.signal.aborted) console.error("Failed to load dashboard data", error); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  const handleAddTable = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/tables", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTable),
      });
      const data = await res.json();
      
      if (data.success) {
        setTables([...tables, data.data].sort((a, b) => a.tableNumber.localeCompare(b.tableNumber)));
        setIsModalOpen(false);
        setNewTable({ tableNumber: "", zone: "dining-room", capacity: 2 });
      } else {
        setError(data.error);
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/tables/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setTables((prev) =>
          prev.map((t) => (t._id === id ? { ...t, status: newStatus as TableStatus } : t))
        );
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const deleteTable = async (id: string) => {
    if (!confirm("Are you sure you want to delete this table?")) return;
    try {
      const res = await fetch(`/api/tables/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setTables((prev) => prev.filter((t) => t._id !== id));
      }
    } catch (err) {
      console.error("Failed to delete table", err);
    }
  };

  const getStatusColor = (status: TableStatus) => {
    switch(status) {
      case "available": return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "reserved": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "occupied": return "text-orange-400 bg-orange-500/10 border-orange-500/20";
      case "cleaning": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "blocked": return "text-red-400 bg-red-500/10 border-red-500/20";
      default: return "text-stone-500 bg-stone-500/10";
    }
  };

  // Group by zone
  const zones = ["dining-room", "terrace", "chefs-counter"];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-medium text-stone-900">All Tables</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-stone-950 rounded-lg text-sm font-medium hover:bg-amber-400 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Table
        </button>
      </div>

      <div className="space-y-12">
        {zones.map((zone) => {
          const zoneTables = tables.filter(t => t.zone === zone);
          if (zoneTables.length === 0) return null;
          
          return (
            <div key={zone}>
              <h3 className="text-lg font-medium text-stone-700 capitalize mb-4 flex items-center gap-2">
                <LayoutGrid className="w-5 h-5 text-stone-400" />
                {zone.replace("-", " ")}
                <span className="text-sm font-normal text-stone-400 ml-2">({zoneTables.length} tables)</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {zoneTables.map((table) => (
                  <div key={table._id} className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col items-center text-center relative group">
                    <button 
                      onClick={() => deleteTable(table._id)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500/10 text-red-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    
                    <div className="w-12 h-12 rounded-full bg-[#F7F7F5] border border-stone-200 flex items-center justify-center mb-3 mt-2">
                      <span className="text-lg font-medium text-stone-900">{table.tableNumber}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-4">
                      <Maximize className="w-3.5 h-3.5" /> {table.capacity} Seats
                    </div>

                    <select
                      value={table.status}
                      onChange={(e) => updateStatus(table._id, e.target.value)}
                      className={`w-full appearance-none border rounded-lg text-xs px-2 py-1.5 text-center font-medium focus:outline-none focus:ring-1 focus:ring-white/20 transition-all cursor-pointer ${getStatusColor(table.status)}`}
                    >
                      <option value="available" className="bg-white text-stone-800">Available</option>
                      <option value="reserved" className="bg-white text-stone-800">Reserved</option>
                      <option value="occupied" className="bg-white text-stone-800">Occupied</option>
                      <option value="cleaning" className="bg-white text-stone-800">Cleaning</option>
                      <option value="blocked" className="bg-white text-stone-800">Blocked</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Table Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4 animate-in fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white border border-stone-200 rounded-2xl w-full max-w-md shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-medium text-stone-900">Add New Table</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-500 hover:text-stone-900">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleAddTable} className="space-y-4">
              <div>
                <label className="block text-sm text-stone-500 mb-1.5">Table Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. A01"
                  value={newTable.tableNumber}
                  onChange={e => setNewTable({...newTable, tableNumber: e.target.value})}
                  className="w-full bg-[#F7F7F5] border border-stone-200 rounded-lg px-4 py-2 text-stone-800 focus:outline-none focus:border-amber-500/50"
                />
              </div>
              
              <div>
                <label className="block text-sm text-stone-500 mb-1.5">Zone</label>
                <select 
                  value={newTable.zone}
                  onChange={e => setNewTable({...newTable, zone: e.target.value as TableZone})}
                  className="w-full bg-[#F7F7F5] border border-stone-200 rounded-lg px-4 py-2 text-stone-800 focus:outline-none focus:border-amber-500/50"
                >
                  <option value="dining-room">Dining Room</option>
                  <option value="terrace">Terrace</option>
                  <option value="chefs-counter">Chef&apos;s Counter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-stone-500 mb-1.5">Capacity (Seats)</label>
                <input 
                  type="number" 
                  min="1"
                  max="20"
                  required
                  value={newTable.capacity || ""}
                  onChange={e => setNewTable({...newTable, capacity: parseInt(e.target.value) || 0})}
                  className="w-full bg-[#F7F7F5] border border-stone-200 rounded-lg px-4 py-2 text-stone-800 focus:outline-none focus:border-amber-500/50"
                />
              </div>

              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium py-2.5 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Add Table"}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
