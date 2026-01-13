"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, Image, Users, Mail, Briefcase } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import Link from "next/link";

export default function DashboardContent() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      setUser(session.user);
    } catch (error) {
      console.error("Error checking user:", error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-white/70 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                bg-white/10 hover:bg-white/20 border border-white/20
                transition-all"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Portfolio */}
          <Link
            href="/dashboard/portfolio"
            className="rounded-2xl p-6 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              hover:border-cyan-500/50 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-8 h-8 text-cyan-400" />
              <Plus className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-white/70 text-sm">Gerencie seus projetos e cases</p>
          </Link>

          {/* Card Clientes */}
          <Link
            href="/dashboard/clientes"
            className="rounded-2xl p-6 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              hover:border-green-500/50 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-green-400" />
              <Plus className="w-5 h-5 text-white/40" />
            </div>
            <h3 className="text-xl font-bold mb-2">Clientes</h3>
            <p className="text-white/70 text-sm">Gerencie logos e informações dos clientes</p>
          </Link>

          {/* Card Contatos */}
          <Link
            href="/dashboard/contatos"
            className="rounded-2xl p-6 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              hover:border-cyan-500/50 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
              <div className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contatos</h3>
            <p className="text-white/70 text-sm">Veja mensagens recebidas do formulário</p>
          </Link>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 rounded-2xl p-8 backdrop-blur border border-white/10
          bg-gradient-to-br from-cyan-500/10 to-green-500/10">
          <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard!</h2>
          <p className="text-white/80">
            Gerencie seu portfolio, clientes e mensagens de contato em um só lugar.
          </p>
        </div>
      </main>
    </div>
  );
}
