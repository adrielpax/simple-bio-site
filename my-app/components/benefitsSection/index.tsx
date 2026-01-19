import { CheckCircle2, Zap, Shield, TrendingUp, Users, Code, Sparkles, Award, Target } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
  color: "cyan" | "green";
}

const benefits: Benefit[] = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Performance Máxima",
    description: "Soluções otimizadas para velocidade e eficiência, garantindo a melhor experiência para seus usuários.",
    highlight: "3x Mais Rápido",
    color: "cyan",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Segurança Avançada",
    description: "Proteção de dados de classe empresarial com criptografia de ponta e conformidade total.",
    highlight: "100% Seguro",
    color: "green",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Escalabilidade",
    description: "Crescimento sem limites. Nossa infraestrutura acompanha a evolução do seu negócio.",
    highlight: "Sem Limites",
    color: "cyan",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Suporte Dedicado",
    description: "Equipe especializada disponível 24/7 para ajudar você a alcançar seus objetivos.",
    highlight: "24/7 Disponível",
    color: "green",
  },
  {
    icon: <Code className="w-10 h-10" />,
    title: "Tecnologia Moderna",
    description: "Utilizamos as mais recentes tecnologias e melhores práticas do mercado.",
    highlight: "Stack Atualizado",
    color: "cyan",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Resultados Comprovados",
    description: "Centenas de clientes satisfeitos e projetos de sucesso em nosso portfólio.",
    highlight: "98% Satisfação",
    color: "green",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits-section"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 bg-transparent relative overflow-hidden"
    >
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header melhorado */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
            bg-gradient-to-r from-cyan-100/10 to-green-100/10 mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600" />
            <span className="text-white text-[10px] sm:text-xs font-bold uppercase">Vantagens Exclusivas</span>
          </div>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white leading-tight px-2">
            Por Que Escolher a{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
              Elevar Digital?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed px-2">
            Não somos apenas mais uma agência. Somos seus{" "}
            <span className="font-bold text-white">parceiros estratégicos</span> na jornada de
            transformação digital que vai <span className="font-bold text-cyan-600">elevar seu negócio</span> para novos patamares.
          </p>
        </div>

        {/* Grid de benefícios melhorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
                <div
                  className={`flex flex-col rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-white/10
                    bg-zinc-800/35 backdrop-blur-sm text-shadow-md text-shadow-zinc-900
                    shadow-lg transition-all duration-300 ease-out
                    hover:shadow-xl hover:-translate-y-2
                    h-full relative overflow-hidden
                    ${benefit.color === "cyan" 
                      ? "border-cyan-100/50 hover:border-cyan-300/70" 
                      : "border-green-100/50 hover:border-green-300/70"
                    }`}
                >
                {/* Efeito de brilho no hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                  bg-gradient-to-br ${
                    benefit.color === "cyan"
                      ? "from-cyan-50/10 to-transparent"
                      : "from-green-50/10 to-transparent"
                  }`} />

                {/* Badge de destaque */}
                {benefit.highlight && (
                  <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold
                    ${
                      benefit.color === "cyan"
                        ? "bg-white/10 text-white"
                        : "bg-green-100/10 text-green-500"
                    }`}>
                    {benefit.highlight}
                  </div>
                )}

                <div className="relative z-10">
                  {/* Ícone */}
                  <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl w-fit
                    ${
                      benefit.color === "cyan"
                        ? "bg-gradient-to-br from-cyan-100/10 to-cyan-50/10 text-cyan-500"
                        : "bg-gradient-to-br from-green-100/10 to-green-50/10 text-green-500"
                    } group-hover:scale-110 transition-transform duration-300 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10`}>
                    {benefit.icon}
                  </div>

                  {/* Título */}
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-white">
                    {benefit.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA no final */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full
            bg-gradient-to-r from-cyan-600 to-green-600
            shadow-xl hover:shadow-2xl hover:scale-105 transition-all
            cursor-pointer group">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:rotate-12 transition-transform" />
            <span className="text-white font-bold text-sm sm:text-base md:text-lg">Veja Todos os Benefícios</span>
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
