"use client";

import { Send, Mail, Phone, MapPin, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    "Resposta em até 24 horas",
    "Consulta gratuita inicial",
    "Orçamento personalizado",
    "Equipe especializada à disposição",
  ];

  return (
    <section
      id="contact-section"
      className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 -mt-24 sm:-mt-32 md:-mt-24 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Card destacado com gradiente */}
        <div
          className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 border border-white/20
            bg-transparent
            backdrop-blur-xl shadow-2xl
            relative overflow-hidden"
        >
          {/* Efeito de brilho decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
                bg-cyan-500/20 border border-cyan-500/30">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-cyan-400 text-[10px] sm:text-xs font-bold uppercase">Oportunidade Limitada</span>
              </div>
              <h2 className="uppercase text-shadow-lg font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white px-2">
                Comece Sua Transformação Hoje
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-2">
                <span className="font-bold text-cyan-400">Não perca mais tempo</span> esperando resultados.
                Preencha o formulário agora e receba uma{" "}
                <span className="font-bold text-green-400">proposta personalizada</span> em até 24 horas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {/* Formulário - Ocupa 2 colunas */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="uppercase text-xs text-white/70 font-bold"
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
                          border border-white/20 bg-white/10 backdrop-blur-sm
                          text-white placeholder-white/40 text-sm sm:text-base
                          focus:outline-none focus:border-cyan-500 focus:bg-white/15
                          transition-all"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="uppercase text-xs text-white/70 font-bold"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
                          border border-white/20 bg-white/10 backdrop-blur-sm
                          text-white placeholder-white/40 text-sm sm:text-base
                          focus:outline-none focus:border-cyan-500 focus:bg-white/15
                          transition-all"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="uppercase text-xs text-white/70 font-bold"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="shadow-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
                        border border-white/20 bg-white/10 backdrop-blur-sm
                        text-white placeholder-white/40 text-sm sm:text-base
                        focus:outline-none focus:border-cyan-500 focus:bg-white/15
                        transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="uppercase text-xs text-white/70 font-bold"
                    >
                      Conte-nos Sobre Seu Projeto *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="shadow-sm px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg
                        border border-white/20 bg-white/10 backdrop-blur-sm
                        text-white placeholder-white/40 text-sm sm:text-base
                        focus:outline-none focus:border-cyan-500 focus:bg-white/15
                        transition-all resize-none"
                      placeholder="Descreva sua ideia, desafios ou objetivos..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="uppercase text-shadow-lg/20 rounded-lg px-6 sm:px-8 py-3 sm:py-4 border border-white/30 
                      bg-gradient-to-r from-cyan-400 to-green-400 w-full
                      font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                      shadow-lg hover:shadow-green-500/60 active:bg-cyan-500 flex items-center gap-2 justify-center mt-2
                      text-gray-200 text-sm sm:text-base"
                  >
                    Solicitar Proposta Gratuita
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>

              {/* Benefícios - Ocupa 1 coluna */}
              <div className="lg:col-span-1 flex flex-col gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur border border-white/10
                  bg-gradient-to-br from-white/5 to-white/10">
                  <h3 className="uppercase text-shadow-lg font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">
                    O Que Você Recebe:
                  </h3>
                  <ul className="flex flex-col gap-2 sm:gap-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-xs sm:text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur border border-cyan-500/20
                  bg-gradient-to-br from-cyan-500/10 to-green-500/10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <span className="text-white font-bold text-xs sm:text-sm">Email Rápido</span>
                  </div>
                  <a
                    href="mailto:contato@elevardigital.com"
                    className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors break-all"
                  >
                    contato@elevardigital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
