"use client";

import { useEffect, useState } from "react";
import { Maximize, Users } from "lucide-react";
import { ITable, TableStatus } from "@/models/Table";

type TableDoc = ITable & { _id: string };

export function FloorPlan() {
  const [tables, setTables] = useState<TableDoc[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const res = await fetch("/api/tables");
      const data = await res.json();
      if (data.success) {
        setTables(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch tables", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: TableStatus) => {
    switch(status) {
      case "available": return "bg-emerald-500/20 border-emerald-500 text-emerald-400";
      case "reserved": return "bg-blue-500/20 border-blue-500 text-blue-400";
      case "occupied": return "bg-orange-500/20 border-orange-500 text-orange-400";
      case "cleaning": return "bg-purple-500/20 border-purple-500 text-purple-400";
      case "blocked": return "bg-red-500/20 border-red-500 text-red-400";
      default: return "bg-stone-100 border-stone-300 text-stone-500";
    }
  };

  const renderZone = (zoneKey: string, title: string) => {
    const zoneTables = tables.filter(t => t.zone === zoneKey);
    
    return (
      <div className="bg-white border border-stone-200 rounded-2xl p-6 relative overflow-hidden">
        {/* Subtle grid background to look like a blueprint */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <h3 className="text-lg font-medium text-stone-900 mb-6 relative z-10">{title}</h3>
        
        {zoneTables.length === 0 ? (
          <div className="text-sm text-stone-400 italic relative z-10">No tables assigned to this zone yet. Add them in Table Management.</div>
        ) : (
          <div className="flex flex-wrap gap-6 relative z-10">
            {zoneTables.map(table => (
              <div 
                key={table._id}
                className={`relative w-24 h-24 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 transition-transform shadow-lg ${getStatusColor(table.status)}`}
              >
                <span className="font-bold text-lg">{table.tableNumber}</span>
                <div className="flex items-center gap-1 text-[10px] mt-1 font-medium opacity-80">
                  <Users className="w-3 h-3" /> {table.capacity}
                </div>
                
                {/* Table "Chairs" indicators based on capacity (just visual decoration) */}
                <div className="absolute -top-1.5 w-8 h-1.5 bg-current rounded-t-sm opacity-50"></div>
                <div className="absolute -bottom-1.5 w-8 h-1.5 bg-current rounded-b-sm opacity-50"></div>
                {table.capacity > 2 && <div className="absolute -left-1.5 h-8 w-1.5 bg-current rounded-l-sm opacity-50"></div>}
                {table.capacity > 2 && <div className="absolute -right-1.5 h-8 w-1.5 bg-current rounded-r-sm opacity-50"></div>}
              </div>
            ))}
          </div>
        )}
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
    <div className="w-full animate-in fade-in duration-700 ease-out space-y-8">
      {/* Legend */}
      <div className="flex flex-wrap gap-4 bg-white border border-stone-200 rounded-xl p-4">
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div><span className="text-xs text-stone-500 uppercase">Available</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-xs text-stone-500 uppercase">Reserved</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div><span className="text-xs text-stone-500 uppercase">Occupied</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div><span className="text-xs text-stone-500 uppercase">Cleaning</span></div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><span className="text-xs text-stone-500 uppercase">Blocked</span></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {renderZone("dining-room", "Main Dining Room")}
          {renderZone("chefs-counter", "Chef's Counter")}
        </div>
        <div>
          {renderZone("terrace", "Outdoor Terrace")}
        </div>
      </div>
    </div>
  );
}
