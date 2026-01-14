"use client";

import { Play, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Você pode adicionar um vídeo real aqui
  const videoUrl = ""; // Adicione a URL do vídeo aqui

  return (
    <section
      id="video-section"
      className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden"
    >
      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="uppercase text-shadow-lg font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white px-2">
            Veja Como Funciona na Prática
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
            Descubra como transformamos empresas em líderes de mercado através da tecnologia
          </p>
        </div>

        {/* Container do Vídeo */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10
          bg-gradient-to-br from-black/50 to-zinc-900/50 backdrop-blur-sm
          aspect-video max-w-4xl mx-auto group">
          {videoUrl ? (
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
              <div className="text-center p-4 sm:p-6 md:p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full 
                  bg-gradient-to-r from-cyan-400 to-green-400 mb-4 sm:mb-6
                  hover:scale-110 transition-transform cursor-pointer
                  shadow-lg shadow-cyan-500/50 animate-pulse">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900 ml-1" fill="currentColor" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Vídeo Demonstrativo</h3>
                <p className="text-white/60 text-sm sm:text-base">Adicione seu vídeo aqui</p>
              </div>
            </div>
          )}
        </div>

        {/* Benefícios destacados */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16">
          {[
            "Resultados em 30 dias",
            "Suporte 24/7 disponível",
            "Garantia de satisfação",
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur border border-white/10
                bg-gradient-to-br from-white/5 to-white/10
                hover:border-cyan-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-green-500/20
                border border-cyan-500/30 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
