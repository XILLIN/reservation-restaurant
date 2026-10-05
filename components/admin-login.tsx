"use client";

import { useState } from "react";
import { Lock, ArrowRight, Loader2, UtensilsCrossed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = `/${locale}/admin`;
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      {/* Logo Area */}
      <div className="mb-10 text-center animate-in slide-in-from-bottom-4 duration-700">
        <UtensilsCrossed className="w-10 h-10 text-amber-500 mx-auto mb-4" />
        <h1 className="text-3xl tracking-widest uppercase font-light text-white">Maison Ember</h1>
        <div className="flex items-center justify-center gap-2 mt-2 opacity-60">
          <div className="w-8 h-[1px] bg-white"></div>
          <p className="text-xs tracking-[0.3em] uppercase text-white font-medium">Management</p>
          <div className="w-8 h-[1px] bg-white"></div>
        </div>
      </div>

      <div className="w-full max-w-md p-8 sm:p-10 bg-white/10 border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both relative overflow-hidden">

        {/* Subtle glass reflection */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-full text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Lock className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-xl font-medium text-center text-white mb-2 tracking-wide">Authorized Personnel Only</h2>
          <p className="text-white/50 text-sm text-center mb-8 font-light">
            Please enter your secure access key.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <input
                type="password"
                placeholder="Access Key..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-2xl text-white placeholder:text-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all font-mono tracking-widest text-center shadow-inner"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center py-2 rounded-xl animate-in fade-in">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-4 py-4 bg-white/5 border border-white/20 text-white font-light tracking-[0.2em] uppercase text-sm rounded-2xl hover:bg-white/10 hover:border-amber-500/60 hover:text-amber-400 transition-all duration-500 disabled:opacity-50 overflow-hidden relative"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out"></div>

              <span className="relative z-10 flex items-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Authenticate
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
