import { Building2, TrendingUp, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Client {
  name: string;
  description: string;
  category: string;
}

const clients: Client[] = [
  {
    name: "TechCorp Solutions",
    description: "Aumento de 300% em conversões online após implementação de nossa plataforma",
    category: "Tecnologia",
  },
  {
    name: "InnovateHub",
    description: "Automação que reduziu custos operacionais em 45% no primeiro trimestre",
    category: "Consultoria",
  },
  {
    name: "DigitalFlow",
    description: "Sistema que aumentou produtividade da equipe em 400% com IA integrada",
    category: "Automação",
  },
  {
    name: "CloudSystems",
    description: "Migração para nuvem que escalou negócio para 10x em 6 meses",
    category: "Infraestrutura",
  },
  {
    name: "DataInsights",
    description: "Dashboard analítico que transformou decisões estratégicas da empresa",
    category: "Analytics",
  },
  {
    name: "MarketLeader",
    description: "Soluções que elevaram a marca ao top 3 do mercado em menos de 1 ano",
    category: "Marketing",
  },
];

export default function ClientsSection() {
  return (
    <section
      id="clients-section"
      className="w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="uppercase text-shadow-lg font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white px-2">
            Empresas Que Confiam na Elevar Digital
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
            Nossos clientes alcançam <span className="font-bold text-cyan-400">resultados extraordinários</span>.
            Veja como transformamos negócios em líderes de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10
                bg-gradient-to-br from-black/10 to-white/10
                shadow-lg transition-all ease-in-out text-shadow-lg/30
                hover:border-b-cyan-500 hover:shadow-cyan-500/10 hover:bg-gradient-to-b hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg backdrop-blur-md bg-cyan-500/10 border border-cyan-500/20">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="uppercase text-shadow-lg font-bold text-base sm:text-lg text-white">
                    {client.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-cyan-400/70 uppercase mt-1">
                    {client.category}
                  </p>
                </div>
              </div>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed flex-1">
                {client.description}
              </p>
            </div>
          ))}
        </div>

      
        {/* CTA Final */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl backdrop-blur border border-cyan-500/20
            bg-gradient-to-br from-cyan-500/10 to-green-500/10">
            <h3 className="uppercase text-shadow-lg font-bold text-xl sm:text-2xl md:text-3xl text-white px-2">
              Pronto Para Ser Nosso Próximo Case de Sucesso?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl px-2">
              Junte-se a centenas de empresas que já transformaram seus negócios com a Elevar Digital
            </p>
            <Link
              href="#contact-section"
              className="uppercase text-shadow-lg/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/30 
                bg-gradient-to-r from-cyan-400 to-green-400
                font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                shadow-lg hover:shadow-green-500/60 active:bg-cyan-500 flex items-center gap-2 justify-center
                text-gray-900 mt-2 text-sm sm:text-base"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
