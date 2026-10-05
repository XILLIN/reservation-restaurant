"use client";

import { useEffect, useState } from "react";
import { Search, User, Mail, Phone, Calendar, Ban, CheckCircle2, History } from "lucide-react";
import { ICustomer } from "@/models/Customer";

type CustomerDoc = ICustomer & { _id: string };

export function CustomersManager() {
  const [customers, setCustomers] = useState<CustomerDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await fetch("/api/customers");
      const data = await res.json();
      if (data.success) {
        setCustomers(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch customers", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-amber-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500/50 shadow-sm transition-all"
          />
        </div>
        <div className="text-sm text-stone-500 bg-white px-4 py-2 rounded-xl border border-stone-200 shadow-sm">
          Total Customers: <strong>{filteredCustomers.length}</strong>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.length === 0 ? (
          <div className="col-span-full py-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200">
            No customers found matching "{searchTerm}"
          </div>
        ) : (
          filteredCustomers.map(customer => (
            <div key={customer._id} className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <User className="w-16 h-16 text-amber-500" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-medium text-stone-900 mb-4">{customer.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Mail className="w-4 h-4 text-stone-400" />
                    <span className="truncate">{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-stone-600">
                    <Phone className="w-4 h-4 text-stone-400" />
                    <span>{customer.phone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="flex items-center gap-2 text-stone-500 mb-1">
                      <History className="w-3.5 h-3.5" />
                      <span className="text-xs uppercase font-medium tracking-wider">Bookings</span>
                    </div>
                    <span className="text-xl font-medium text-stone-900">{customer.totalReservations}</span>
                  </div>
                  
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <div className="flex items-center gap-2 text-stone-500 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs uppercase font-medium tracking-wider">Last Visit</span>
                    </div>
                    <span className="text-sm font-medium text-stone-900">
                      {customer.lastVisit ? new Date(customer.lastVisit).toLocaleDateString() : "N/A"}
                    </span>
                  </div>
                </div>

                {/* Badges for bad behavior / good behavior */}
                <div className="mt-4 flex gap-2">
                  {customer.completedReservations > 0 && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" /> {customer.completedReservations} Completed
                    </span>
                  )}
                  {customer.noShowCount > 0 && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-medium bg-red-50 text-red-600 border border-red-200">
                      <Ban className="w-3 h-3" /> {customer.noShowCount} No-show
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
