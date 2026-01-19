"use client";

import Image from "next/image";
import { ArrowRight, Play, TrendingUp, Users } from "lucide-react";
import SplitText from "@/animations/SplitText";
import CountUp from "@/animations/CountUp";


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
      className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-24"
    >
      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center">
          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
            bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm mb-2">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="text-emerald-400 text-[10px] sm:text-xs font-bold uppercase animate-pulse cursor-default">
              Embarque junto de +500 Negócios
            </span>
          </div>

          {/* Título */}
          <h1 className="uppercase text-shadow-lg text-shadow-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2">

            {/* {title} */}
          </h1>

          <SplitText
            text={title}
            className="uppercase text-shadow-lg text-shadow-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight px-2"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => console.log("Animation complete")}
          />

          <SplitText
            text={subtitle}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl text-shadow-lg/50 leading-relaxed px-2"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => console.log("Animation complete")}
          />


          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl text-shadow-lg/50 leading-relaxed px-2">
            {/* {subtitle} */}
          </p>

          {/* Estatísticas rápidas */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <span className="text-xs sm:text-sm md:text-base">
                <strong className="text-white"><CountUp
                  from={0}
                  to={200}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"

                />+</strong> Clientes Ativos
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <span className="text-xs sm:text-sm md:text-base">
                <strong className="text-white"><CountUp
                  from={0}
                  to={95}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"

                />%</strong> Taxa de Satisfação
              </span>
            </div>
          </div>

          {/* Imagem como plano de fundo */}
          {/* <div className="absolute inset-0 w-full h-full -z-10">
            <Image
              fill
              src="/img/backgroundaisecond.png"
              alt="Hero background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div> */}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto justify-center">
            <div className="rounded-xl p-1 group hover:scale-105 border-2 border-emerald-500 bg-transparent">
              <a
                href="#contact-section"
                className="uppercase text-shadow-lg/20 rounded-lg px-6 sm:px-8 py-3 sm:py-4 border border-white/30 
                bg-black/20 w-full sm:w-auto cursor-pointer bg-gradient-to-l from-emerald-400/70 to-green-500
                font-bold active:scale-95 hover:border-b-cyan-500 transition-all ease-in-out ring-3 ring-black/60
                hover:ring-blue-500 hover:ring-2 hover:opacity-90 text-white text-shadow-black text-shadow-lg
                shadow-lg hover:bg-white/10 active:to-green-400
                active:shadow-green-500/30 flex items-center justify-center gap-2 text-white text-sm sm:text-base"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            <button
              className="uppercase text-shadow-lg/20 rounded-lg px-6 sm:px-8 py-3 sm:py-4 border border-white/30 
              bg-black/20 w-full sm:w-auto hover:bg-gradient-to-b cursor-pointer
              font-bold active:scale-95 hover:border-b-cyan-500 transition-all ease-in-out
              shadow-lg hover:bg-white/10 active:bg-gradient-to-r active:from-cyan-400 active:to-green-400
              active:shadow-green-500/30 flex items-center justify-center gap-2 text-white text-sm sm:text-base"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver Cases de Sucesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}