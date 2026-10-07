import { setRequestLocale } from "next-intl/server";
import { AdminLogin } from "@/components/admin-login";

type Locale = "th" | "en";

export const metadata = {
  title: "Admin Access - Maison Ember",
  description: "Secure login for Maison Ember staff",
};

export default async function AdminLoginPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-stone-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-stone-950/70 backdrop-blur-[2px]"></div>
        
        {/* Decorative gradient glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full animate-in fade-in duration-1000">
        <AdminLogin />
      </div>
    </div>
  );
}
