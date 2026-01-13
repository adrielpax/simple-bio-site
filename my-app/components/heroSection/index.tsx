"use client";

import { ArrowRight, Play, TrendingUp, Users } from "lucide-react";

interface HeroSectionProps {
  videoUrl?: string;
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export default function HeroSection({
  videoUrl,
  imageUrl,
  title = "Eleve Seu Negócio ao Próximo Nível",
  subtitle = "Transformação digital que gera resultados reais. Mais de 500 empresas já confiaram em nós para alcançar o sucesso online.",
  ctaText = "Quero Transformar Minha Empresa",
  ctaAction,
}: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[80vh] md:min-h-[150vh] -mt-40 flex items-center justify-center overflow-hidden"
    >
      {/* Background - Vídeo, Imagem ou Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-900">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-green-900/20" />
        )}
      </div>

      {/* Overlay Gradient para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
        <div className="flex flex-col gap-6 md:gap-8 items-center">
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm mb-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-xs font-bold uppercase">+500 Empresas Transformadas</span>
          </div>

          <h1 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl text-shadow-lg/50 leading-relaxed">
            {subtitle}
          </p>

          {/* Estatísticas rápidas */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-4">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm md:text-base"><strong className="text-white">200+</strong> Clientes Ativos</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm md:text-base"><strong className="text-white">98%</strong> Taxa de Satisfação</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
            <a
              href="#contact-section"
              className="uppercase text-shadow-lg/20 rounded-full px-8 py-4 border border-white/30 
                bg-gradient-to-r from-cyan-400 to-green-400 w-full sm:w-auto
                font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                shadow-lg hover:shadow-green-500/60 active:bg-cyan-500 flex items-center justify-center gap-2
                text-gray-900"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              className="uppercase text-shadow-lg/20 rounded-full px-8 py-4 border border-white/30 
                bg-black/20 w-full sm:w-auto hover:bg-gradient-to-b
                font-bold active:scale-95 hover:border-b-cyan-500 transition-all ease-in-out
                shadow-lg hover:bg-white/10 active:bg-gradient-to-r active:from-cyan-400 active:to-green-400
                active:shadow-green-500/30 flex items-center justify-center gap-2 text-white"
            >
              <Play className="w-5 h-5" />
              Ver Cases de Sucesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
