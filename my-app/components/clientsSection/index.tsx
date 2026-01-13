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
      className="w-full py-16 md:py-24 px-4 bg-gradient-to-br from-zinc-800 to-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="uppercase text-shadow-lg font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Empresas Que Confiam na Elevar Digital
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Nossos clientes alcançam <span className="font-bold text-cyan-400">resultados extraordinários</span>.
            Veja como transformamos negócios em líderes de mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl p-6 backdrop-blur border border-white/10
                bg-gradient-to-br from-black/10 to-white/10
                shadow-lg transition-all ease-in-out text-shadow-lg/30
                hover:border-b-cyan-500 hover:shadow-cyan-500/10 hover:bg-gradient-to-b hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg backdrop-blur-md bg-cyan-500/10 border border-cyan-500/20">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="uppercase text-shadow-lg font-bold text-lg text-white">
                    {client.name}
                  </h3>
                  <p className="text-xs text-cyan-400/70 uppercase mt-1">
                    {client.category}
                  </p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed flex-1">
                {client.description}
              </p>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div
            className="flex flex-col items-center rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-green-500 hover:shadow-green-500/10 text-center
              hover:-translate-y-1"
          >
            <div className="p-4 rounded-full backdrop-blur-md bg-green-500/10 border border-green-500/20 mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-2 text-white">500+</h3>
            <p className="text-white/70 text-sm md:text-base">Projetos Entregues</p>
          </div>

          <div
            className="flex flex-col items-center rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-cyan-500 hover:shadow-cyan-500/10 text-center
              hover:-translate-y-1"
          >
            <div className="p-4 rounded-full backdrop-blur-md bg-cyan-500/10 border border-cyan-500/20 mb-4">
              <Building2 className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-2 text-white">200+</h3>
            <p className="text-white/70 text-sm md:text-base">Clientes Satisfeitos</p>
          </div>

          <div
            className="flex flex-col items-center rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10
              shadow-lg transition-all ease-in-out hover:border-b-green-500 hover:shadow-green-500/10 text-center
              hover:-translate-y-1"
          >
            <div className="p-4 rounded-full backdrop-blur-md bg-green-500/10 border border-green-500/20 mb-4">
              <Award className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-2 text-white">98%</h3>
            <p className="text-white/70 text-sm md:text-base">Taxa de Satisfação</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl backdrop-blur border border-cyan-500/20
            bg-gradient-to-br from-cyan-500/10 to-green-500/10">
            <h3 className="uppercase text-shadow-lg font-bold text-2xl md:text-3xl text-white">
              Pronto Para Ser Nosso Próximo Case de Sucesso?
            </h3>
            <p className="text-white/80 text-sm md:text-base max-w-2xl">
              Junte-se a centenas de empresas que já transformaram seus negócios com a Elevar Digital
            </p>
            <Link
              href="#contact-section"
              className="uppercase text-shadow-lg/20 rounded-full px-8 py-4 border border-white/30 
                bg-gradient-to-r from-cyan-400 to-green-400
                font-bold hover:scale-105 active:scale-95 hover:border-b-white transition-all ease-in-out
                shadow-lg hover:shadow-green-500/60 active:bg-cyan-500 flex items-center gap-2 justify-center
                text-gray-900 mt-2"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
