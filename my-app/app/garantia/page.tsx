import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Shield, CheckCircle2, Clock, RotateCcw, Headphones, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garantia | Elevar Digital",
  description: "Nossas garantias e políticas de satisfação",
};

export default function GarantiaPage() {
  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de Qualidade",
      description: "Todos os projetos passam por rigoroso controle de qualidade antes da entrega",
      period: "30 dias após entrega",
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Garantia de Funcionamento",
      description: "Garantimos que tudo funciona perfeitamente conforme especificado no contrato",
      period: "90 dias após entrega",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Incluso",
      description: "Suporte técnico gratuito para ajustes e correções durante o período de garantia",
      period: "Conforme contrato",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Garantia de Satisfação",
      description: "Trabalhamos até você ficar 100% satisfeito com o resultado entregue",
      period: "Sem limite de tempo",
    },
  ];

  const coverage = [
    "Correção de bugs e erros",
    "Ajustes de funcionalidades conforme especificação",
    "Suporte técnico para dúvidas",
    "Ajustes de design dentro do escopo",
    "Otimizações de performance",
    "Correções de compatibilidade",
  ];

  const notCovered = [
    "Alterações fora do escopo original",
    "Integração com sistemas não especificados",
    "Danos causados por uso indevido",
    "Modificações realizadas por terceiros",
    "Atualizações de conteúdo",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      <Navbar />
      <main className="flex-1 w-full py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-green-500/20 border border-green-500/30 mb-6">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-xs font-bold uppercase">Garantia Total</span>
            </div>
            <h1 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-4">
              Nossa Garantia
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Estamos tão confiantes na qualidade do nosso trabalho que oferecemos garantias
              abrangentes. Seu sucesso é nossa prioridade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 backdrop-blur border border-white/10
                  bg-gradient-to-br from-black/10 to-white/10
                  hover:border-green-500/50 hover:shadow-xl transition-all"
              >
                <div className="text-green-400 mb-4">{guarantee.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{guarantee.title}</h3>
                <p className="text-white/70 mb-4">{guarantee.description}</p>
                <div className="flex items-center gap-2 text-cyan-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">{guarantee.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl p-8 backdrop-blur border border-green-500/30
              bg-gradient-to-br from-green-500/10 to-green-500/5">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                O Que Está Coberto
              </h3>
              <ul className="space-y-3">
                {coverage.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                O Que Não Está Coberto
              </h3>
              <ul className="space-y-3">
                {notCovered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/60 text-sm">• {item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-8 backdrop-blur border border-cyan-500/30
            bg-gradient-to-br from-cyan-500/10 to-green-500/10 text-center">
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Compromisso com a Excelência</h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Nossa garantia não é apenas uma promessa, é nosso compromisso de entregar
              resultados que superem suas expectativas. Trabalhamos até você ficar
              completamente satisfeito.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-lg bg-white/10 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <div className="text-white/70 text-sm">Taxa de Satisfação</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/10 border border-white/20">
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-white/70 text-sm">Projetos Entregues</div>
              </div>
              <div className="px-6 py-3 rounded-lg bg-white/10 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-white/70 text-sm">Suporte Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
