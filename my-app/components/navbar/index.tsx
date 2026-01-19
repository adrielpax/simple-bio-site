"use client";

import { ChevronsDown, Menu, X, LogIn, ChevronsUp } from "lucide-react";
import Wrapper from "../wrapper";
import Link from "next/link";
import { useState } from "react";
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import LogoElevarDigital from "@/components/Logo"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#benefits-section", label: "Benefícios" },
    { href: "#process-section", label: "Como Funciona" },
    { href: "#contact-section", label: "Contato" },
    { href: "#clients-section", label: "Clientes" },
  ];

  return (
    <nav className="w-full bg-gradient-to-br from-zinc-400/20 to-zinc-600/20 backdrop-blur-md sticky top-0 z-50 border-b border-black/10">
      <Wrapper>
        <div className="flex rounded px-4 py-1 bg-gradient-to-bl from-zinc-600/70 to-zinc-700/70 flex-row gap-2 sm:gap-4 justify-between  items-center py-2 sm:py-3">
          {/* Logo - mantido intacto */}
          <LogoElevarDigital/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-cyan-400 
                  transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 
                  group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                bg-white/10 hover:bg-white/20 border border-white/20
                transition-all text-sm font-medium"
            >
              <LogIn className="w-4 h-4" />
              Entrar / Registrar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-md bg-white/5 
              border border-white/10 hover:bg-white/10 transition-all flex-shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 animate-in slide-in-from-top">
            <div className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-cyan-400 
                    transition-colors py-2 px-2 -mx-2 rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                  bg-white/10 hover:bg-white/20 border border-white/20
                  transition-all text-sm font-medium mt-1"
              >
                <LogIn className="w-4 h-4" />
                Entrar / Registrar
              </Link>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
}
