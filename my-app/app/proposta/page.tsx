import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FileText, CheckCircle2, DollarSign, Clock, Gift } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta Comercial | Elevar Digital",
  description: "Conheça nossas propostas comerciais e planos de serviços",
};

export default function PropostaPage() {
  const plans = [
    {
      name: "Starter",
      price: "A partir de R$ 5.000",
      description: "Perfeito para pequenas empresas começando sua jornada digital",
      features: [
        "Site institucional responsivo",
        "SEO básico incluído",
        "Suporte por 3 meses",
        "2 revisões de design",
        "Hospedagem inclusa (1 ano)",
      ],
      color: "cyan",
    },
    {
      name: "Business",
      price: "A partir de R$ 15.000",
      description: "Ideal para empresas que buscam crescimento e automação",
      features: [
        "Site + Sistema personalizado",
        "Automação de processos",
        "Integração com APIs",
        "Suporte por 6 meses",
        "Treinamento da equipe",
        "Hospedagem premium (1 ano)",
      ],
      color: "green",
    },
    {
      name: "Enterprise",
      price: "Sob consulta",
      description: "Soluções completas para grandes corporações",
      features: [
        "Solução completa personalizada",
        "Desenvolvimento ágil",
        "Suporte 24/7 dedicado",
        "Consultoria estratégica",
        "Equipe dedicada",
        "Garantia estendida",
      ],
      color: "cyan",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      <Navbar />
      <main className="flex-1 w-full py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-green-500/20 border border-green-500/30 mb-6">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-xs font-bold uppercase">Proposta Comercial</span>
            </div>
            <h1 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-4">
              Nossas Propostas
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Escolha o plano ideal para transformar seu negócio. Todos os planos incluem
              consultoria inicial gratuita e proposta personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 backdrop-blur border-2
                  bg-gradient-to-br from-black/20 to-white/10
                  shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2
                  ${plan.color === "cyan" ? "border-cyan-500/30 hover:border-cyan-500/50" : "border-green-500/30 hover:border-green-500/50"}`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 text-cyan-400">{plan.price}</div>
                <p className="text-white/70 mb-6 text-sm">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact-section"
                  className={`block text-center uppercase font-bold py-3 px-6 rounded-lg
                    transition-all hover:scale-105
                    ${
                      plan.color === "cyan"
                        ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900"
                        : "bg-gradient-to-r from-green-400 to-green-500 text-gray-900"
                    }`}
                >
                  Solicitar Proposta
                </Link>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 backdrop-blur border border-white/10
            bg-gradient-to-br from-black/10 to-white/10 text-center">
            <Gift className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Benefícios Adicionais</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white/80">Entrega rápida garantida</p>
              </div>
              <div>
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white/80">Garantia de qualidade</p>
              </div>
              <div>
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white/80">Documentação completa</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
