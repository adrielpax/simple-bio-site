"use client";

import { ChevronsDown, Menu, X, LogIn } from "lucide-react";
import Wrapper from "../wrapper";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#benefits-section", label: "Benefícios" },
    { href: "#process-section", label: "Como Funciona" },
    { href: "#contact-section", label: "Contato" },
    { href: "#clients-section", label: "Clientes" },
  ];

    return (
    <nav className="w-full bg-black/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
            <Wrapper>
        <div className="flex flex-row gap-4 justify-between items-center py-3">
          {/* Logo - mantido intacto */}
                    <div className="flex flex-row items-center text-shadow-lg font-sans select-none">
                        <div className="uppercase flex flex-col border-r border-white/20 mr-2 pr-2">
                        <span className="flex items-center self-start text-xl">
                            Elevar
                <ChevronsDown
                  className="text-green-400 rotate-225 self-end relative -top-3 right-0"
                            />
                        </span>
                        <span className="flex items-center text-cyan-500 self-end text-xs -mt-2">
                            Digital
                        </span>
                        </div>
            <div className="hidden sm:flex flex-col text-xs">
                            <span className="text-xs text-white/40">made by :</span>
              <Link
                href={"https://adrieldev.vercel.app/"}
                className="hover:text-cyan-500 transition-colors"
              >
                Adrieldev
              </Link>
            </div>
                        </div>
                        
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
              Entrar
            </Link>
                    </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg backdrop-blur-md bg-white/5 
              border border-white/10 hover:bg-white/10 transition-all"
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
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white/70 hover:text-cyan-400 
                    transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-white/10 hover:bg-white/20 border border-white/20
                  transition-all text-sm font-medium"
              >
                <LogIn className="w-4 h-4" />
                Entrar
              </Link>
            </div>
          </div>
        )}
      </Wrapper>
    </nav>
  );
}
