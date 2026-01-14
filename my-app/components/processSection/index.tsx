import { CheckCircle2, ArrowRight, FileText, Handshake, Rocket, Gift, Clock, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <FileText className="w-8 h-8" />,
    title: "Análise e Proposta",
    description: "Analisamos suas necessidades e criamos uma proposta personalizada com soluções sob medida para seu negócio.",
    duration: "1-2 dias",
    color: "cyan",
  },
  {
    number: "02",
    icon: <Handshake className="w-8 h-8" />,
    title: "Aprovação e Contrato",
    description: "Você revisa nossa proposta, aprovamos juntos os detalhes e formalizamos nossa parceria com transparência total.",
    duration: "1 dia",
    color: "green",
  },
  {
    number: "03",
    icon: <Rocket className="w-8 h-8" />,
    title: "Desenvolvimento",
    description: "Nossa equipe especializada desenvolve sua solução com metodologia ágil, mantendo você informado em cada etapa.",
    duration: "Conforme projeto",
    color: "cyan",
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Testes e Ajustes",
    description: "Realizamos testes rigorosos e ajustes finos para garantir que tudo funcione perfeitamente antes da entrega.",
    duration: "2-5 dias",
    color: "green",
  },
  {
    number: "05",
    icon: <Gift className="w-8 h-8" />,
    title: "Entrega e Treinamento",
    description: "Entregamos sua solução completa com treinamento da equipe e documentação detalhada para uso imediato.",
    duration: "1 dia",
    color: "cyan",
  },
  {
    number: "06",
    icon: <Star className="w-8 h-8" />,
    title: "Suporte Contínuo",
    description: "Oferecemos suporte contínuo, monitoramento e melhorias para garantir que sua solução continue evoluindo.",
    duration: "Contínuo",
    color: "green",
  },
];

const colorClasses = {
  cyan: "from-cyan-500/20 to-cyan-500/10 border-cyan-500/30 hover:border-cyan-500/50",
  green: "from-green-500/20 to-green-500/10 border-green-500/30 hover:border-green-500/50",
};

export default function ProcessSection() {
  return (
    <section
      id="process-section"
      className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="uppercase text-shadow-lg font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white px-2">
            Do Contato ao Resultado Final
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
            Um processo transparente e estruturado que garante qualidade em cada etapa do seu projeto
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha conectora - apenas desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 
            bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-cyan-500/20 
            transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div
                  className={`flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur border
                    bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]}
                    shadow-lg transition-all ease-in-out hover:shadow-xl hover:-translate-y-2
                    h-full relative`}
                >
                  {/* Número do passo */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                    bg-gradient-to-r from-cyan-400 to-green-400
                    flex items-center justify-center text-gray-900 font-bold text-sm sm:text-lg
                    shadow-lg border-2 border-white/20">
                    {step.number}
                  </div>

                  {/* Ícone */}
                  <div className={`mb-3 sm:mb-4 mt-2 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8 ${
                    step.color === "cyan" ? "text-cyan-400" : "text-green-400"
                  }`}>
                    {step.icon}
                  </div>

                  {/* Conteúdo */}
                  <h3 className="uppercase font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 flex-1">
                    {step.description}
                  </p>

                  {/* Duração */}
                  <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-white/10">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white/60" />
                    <span className="text-white/60 text-[10px] sm:text-xs uppercase font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>

                {/* Seta conectora - apenas entre cards */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-cyan-400/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl backdrop-blur border border-cyan-500/20
            bg-gradient-to-br from-cyan-500/10 to-green-500/10 max-w-2xl">
            <h3 className="uppercase font-bold text-xl sm:text-2xl md:text-3xl text-white px-2">
              Pronto Para Começar?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base px-2">
              Entre em contato agora e inicie sua jornada de transformação digital
            </p>
            <a
              href="#contact-section"
              className="uppercase text-shadow-lg/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/30 
                bg-gradient-to-r from-cyan-400 to-green-400
                font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                shadow-lg hover:shadow-green-500/60 active:bg-cyan-500 flex items-center gap-2 justify-center
                text-gray-900 mt-2 text-sm sm:text-base"
            >
              Iniciar Processo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
