import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FileText, Shield, CheckCircle2, Lock, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contratos | Elevar Digital",
  description: "Informações sobre nossos contratos de serviços",
};

export default function ContratosPage() {
  const contractTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contrato de Desenvolvimento",
      description: "Acordo formal para projetos de desenvolvimento de software, sites e aplicações",
      features: [
        "Escopo detalhado do projeto",
        "Cronograma e entregas",
        "Valores e formas de pagamento",
        "Direitos de propriedade intelectual",
        "Política de revisões e alterações",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contrato de Prestação de Serviços",
      description: "Para serviços contínuos como manutenção, suporte e consultoria",
      features: [
        "Serviços incluídos",
        "SLAs (Service Level Agreements)",
        "Valores mensais/anuais",
        "Termo de rescisão",
        "Renovação automática",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "NDA - Acordo de Confidencialidade",
      description: "Proteção mútua de informações confidenciais durante o projeto",
      features: [
        "Proteção de dados sensíveis",
        "Cláusulas de não concorrência",
        "Prazo de vigência",
        "Consequências de violação",
        "Jurisdição aplicável",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      <Navbar />
      <main className="flex-1 w-full py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase">Documentação Legal</span>
            </div>
            <h1 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-4">
              Contratos e Acordos
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              Transparência e segurança em todos os nossos acordos. Conheça os tipos de
              contratos que utilizamos para garantir proteção mútua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contractTypes.map((contract, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 backdrop-blur border border-white/10
                  bg-gradient-to-br from-black/10 to-white/10
                  hover:border-cyan-500/50 hover:shadow-xl transition-all"
              >
                <div className="text-cyan-400 mb-4">{contract.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{contract.title}</h3>
                <p className="text-white/70 mb-6 text-sm">{contract.description}</p>
                <ul className="space-y-3">
                  {contract.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 backdrop-blur border border-white/10
            bg-gradient-to-br from-black/10 to-white/10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              Garantias do Contrato
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2 text-cyan-400">Para o Cliente:</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Transparência total em valores e prazos</li>
                  <li>• Direitos de propriedade após pagamento</li>
                  <li>• Garantia de qualidade do serviço</li>
                  <li>• Suporte durante todo o projeto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-green-400">Para a Elevar Digital:</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Pagamento conforme cronograma</li>
                  <li>• Colaboração e feedback oportuno</li>
                  <li>• Acesso necessário a informações</li>
                  <li>• Respeito aos prazos acordados</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm mb-4">
              Todos os contratos são personalizados conforme as necessidades do projeto.
            </p>
            <p className="text-white/80">
              Para solicitar um contrato ou esclarecer dúvidas, entre em contato:
              <a href="mailto:legal@elevardigital.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                legal@elevardigital.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
