"use client";

import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Save, Store, Shield, Clock, Bell, CheckCircle2 } from "lucide-react";

export function SettingsManager() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate save delay
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out flex flex-col lg:flex-row gap-8">
      
      {/* Sidebar Navigation for Settings */}
      <div className="w-full lg:w-64 shrink-0">
        <nav className="space-y-1">
          <button 
            onClick={() => setActiveTab("general")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${activeTab === "general" ? "bg-amber-500/10 text-amber-600" : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"}`}
          >
            <Store className="w-4 h-4" /> Restaurant Profile
          </button>
          <button 
            onClick={() => setActiveTab("booking")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${activeTab === "booking" ? "bg-amber-500/10 text-amber-600" : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"}`}
          >
            <Clock className="w-4 h-4" /> Booking Rules
          </button>
          <button 
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${activeTab === "notifications" ? "bg-amber-500/10 text-amber-600" : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"}`}
          >
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${activeTab === "security" ? "bg-amber-500/10 text-amber-600" : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"}`}
          >
            <Shield className="w-4 h-4" /> Security
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <form onSubmit={handleSave} className="bg-white border border-stone-200 shadow-sm rounded-2xl overflow-hidden">
          
          <div className="p-6 sm:p-8 border-b border-stone-100">
            {activeTab === "general" && (
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-6">Restaurant Profile</h3>
                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Restaurant Name</label>
                      <input type="text" defaultValue="Maison Ember" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Contact Phone</label>
                      <input type="text" defaultValue="+66 2 123 4567" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Contact Email</label>
                    <input type="email" defaultValue="reservations@maisonember.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Address</label>
                    <textarea rows={3} defaultValue="123 Sukhumvit Road, Bangkok, Thailand" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"></textarea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "booking" && (
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-6">Booking Rules</h3>
                <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center justify-between p-4 border border-stone-200 rounded-xl">
                    <div>
                      <p className="font-medium text-stone-900">Accept Online Bookings</p>
                      <p className="text-sm text-stone-500 mt-1">Allow customers to book via the website</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Maximum Party Size</label>
                    <select defaultValue="8 Guests" className="w-full sm:w-64 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all">
                      <option>4 Guests</option>
                      <option>6 Guests</option>
                      <option>8 Guests</option>
                      <option>10 Guests</option>
                      <option>12 Guests</option>
                    </select>
                    <p className="text-xs text-stone-500 mt-2">Groups larger than this will be asked to call the restaurant.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Advance Booking Limit</label>
                    <select defaultValue="30 Days in advance" className="w-full sm:w-64 bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all">
                      <option>14 Days in advance</option>
                      <option>30 Days in advance</option>
                      <option>60 Days in advance</option>
                      <option>90 Days in advance</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-6">Security & Access</h3>
                <div className="space-y-6 max-w-2xl">
                  <div className="bg-stone-50 p-4 border border-stone-200 rounded-xl mb-6 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-stone-900 text-sm">Secure Password Management</p>
                      <p className="text-sm text-stone-600 mt-1">{locale === "th" ? "จัดการข้อมูลส่วนตัวและเปลี่ยนรหัสผ่านได้ที่หน้าบัญชีของฉัน" : "Manage your personal details and password from your account."}</p>
                    </div>
                  </div>
                  
                  <Link href="/account" className="button button-dark">{locale === "th" ? "บัญชีของฉัน" : "My account"}</Link>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div>
                <h3 className="text-lg font-medium text-stone-900 mb-6">Email Notifications</h3>
                <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center justify-between p-4 border border-stone-200 rounded-xl">
                    <div>
                      <p className="font-medium text-stone-900">New Booking Alerts</p>
                      <p className="text-sm text-stone-500 mt-1">Receive an email when a customer books a table</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-stone-200 rounded-xl">
                    <div>
                      <p className="font-medium text-stone-900">Cancellation Alerts</p>
                      <p className="text-sm text-stone-500 mt-1">Receive an email when a customer cancels</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-stone-50/50 p-6 sm:p-8 flex items-center justify-end gap-4">
            {saved && <span className="text-sm text-emerald-600 font-medium flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Settings saved successfully</span>}
            <button 
              type="submit" 
              disabled={isSaving}
              className="px-6 py-2.5 bg-amber-500 text-stone-900 font-medium rounded-xl hover:bg-amber-400 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
