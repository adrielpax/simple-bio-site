"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn, Mail, Lock, AlertCircle } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import { loginSchema, type LoginData } from "@/app/lib/validations";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginData, string>>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro do campo ao digitar
    if (errors[name as keyof LoginData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setErrors({});

    // Validar com Zod
    const validation = loginSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof LoginData, string>> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof LoginData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsLoading(true);
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) throw signInError;

      if (data.user) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-zinc-700 to-zinc-600">
      <div className="w-full max-w-md">
        <div className="rounded-3xl p-8 md:p-12 border border-white/10
          bg-gradient-to-br from-black/20 to-white/10 backdrop-blur-xl shadow-2xl">
          
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl
              bg-gradient-to-r from-cyan-400 to-green-400 mb-4">
              <LogIn className="w-8 h-8 text-gray-900" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
            <p className="text-white/70 text-sm">Acesse sua conta para continuar</p>
          </div>

          {/* Erro geral */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30
              flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-white/20
                    bg-white/10 backdrop-blur-sm text-white placeholder-white/40
                    focus:outline-none focus:border-cyan-500 focus:bg-white/15
                    transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-white/20
                    bg-white/10 backdrop-blur-sm text-white placeholder-white/40
                    focus:outline-none focus:border-cyan-500 focus:bg-white/15
                    transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full uppercase text-shadow-lg/20 rounded-lg px-6 py-4 border border-white/30 
                bg-gradient-to-r from-cyan-400 to-green-400
                font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                shadow-lg hover:shadow-green-500/60 disabled:opacity-50 disabled:cursor-not-allowed
                text-gray-900 flex items-center justify-center gap-2"
            >
              {isLoading ? "Entrando..." : "Entrar"}
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          {/* Link para voltar */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-white/60 hover:text-cyan-400 text-sm transition-colors"
            >
              ← Voltar para o site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
