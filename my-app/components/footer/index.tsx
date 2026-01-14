import { ChevronsDown, Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Wrapper from "../wrapper";

export default function Footer() {
  const footerLinks = {
    empresa: [
      { label: "Sobre Nós", href: "#" },
      { label: "Nossos Serviços", href: "#benefits-section" },
      { label: "Portfólio", href: "#clients-section" },
      { label: "Carreiras", href: "#" },
    ],
    recursos: [
      { label: "Blog", href: "#" },
      { label: "Documentação", href: "#" },
      { label: "Suporte", href: "#contact-section" },
      { label: "FAQ", href: "#" },
    ],
    legal: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Contratos", href: "/contratos" },
      { label: "Garantia", href: "/garantia" },
      { label: "Proposta Comercial", href: "/proposta" },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-zinc-900 to-zinc-950 border-t border-white/10">
      <Wrapper>
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
            {/* Logo e Descrição */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-row items-center text-shadow-lg font-sans select-none mb-3 sm:mb-4">
                <div className="uppercase flex flex-col border-r border-white/20 mr-2 pr-2">
                  <span className="flex items-center self-start text-lg sm:text-xl">
                    Elevar
                    <ChevronsDown
                      className="text-green-400 rotate-225 self-end relative -top-3 right-0 w-3 h-3 sm:w-4 sm:h-4"
                    />
                  </span>
                  <span className="flex items-center text-cyan-500 self-end text-[10px] sm:text-xs -mt-2">
                    Digital
                  </span>
                </div>
              </div>
              <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 max-w-md">
                Transformando ideias em realidade digital. Soluções inovadoras que elevam seu
                negócio para o próximo nível.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-1.5 sm:p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 
                      hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Empresa */}
            <div>
              <h3 className="uppercase text-shadow-lg font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white">
                Empresa
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Recursos */}
            <div>
              <h3 className="uppercase text-shadow-lg font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white">
                Recursos
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Legal */}
            <div>
              <h3 className="uppercase text-shadow-lg font-bold text-xs sm:text-sm mb-3 sm:mb-4 text-white">
                Legal
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-cyan-400 text-xs sm:text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contato Rápido */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-[10px] sm:text-xs uppercase">Email</p>
                  <p className="text-white/80 text-xs sm:text-sm break-all">contato@elevardigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-[10px] sm:text-xs uppercase">Telefone</p>
                  <p className="text-white/80 text-xs sm:text-sm">+55 (11) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 sm:col-span-2 lg:col-span-1">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                <div>
                  <p className="text-white/50 text-[10px] sm:text-xs uppercase">Localização</p>
                  <p className="text-white/80 text-xs sm:text-sm">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-4 sm:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-white/50 text-[10px] sm:text-xs text-center md:text-left">
                © {new Date().getFullYear()} Elevar Digital. Todos os direitos reservados.
              </p>
              <p className="text-white/40 text-[10px] sm:text-xs text-center md:text-right">
                Desenvolvido com ❤️ por{" "}
                <Link
                  href="https://adrieldev.vercel.app/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Adrieldev
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
