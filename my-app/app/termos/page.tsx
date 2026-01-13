import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FileText, Shield, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Elevar Digital",
  description: "Termos e condições de uso dos serviços da Elevar Digital",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-700 to-zinc-600 text-white">
      <Navbar />
      <main className="flex-1 w-full py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-bold uppercase">Documento Legal</span>
            </div>
            <h1 className="uppercase text-shadow-lg font-bold text-4xl md:text-5xl mb-4">
              Termos de Uso
            </h1>
            <p className="text-white/80 text-lg">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                1. Aceitação dos Termos
              </h2>
              <p className="text-white/80 leading-relaxed">
                Ao utilizar os serviços da Elevar Digital, você concorda com estes termos de uso.
                Se não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </section>

            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                2. Descrição dos Serviços
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A Elevar Digital oferece serviços de desenvolvimento web, automação de processos,
                consultoria em tecnologia e soluções digitais personalizadas.
              </p>
            </section>

            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4">3. Obrigações do Cliente</h2>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Fornecer informações precisas e atualizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Respeitar os prazos acordados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Manter confidencialidade sobre processos internos</span>
                </li>
              </ul>
            </section>

            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
              <p className="text-white/80 leading-relaxed">
                Todo código, design e conteúdo desenvolvido pela Elevar Digital permanece como
                propriedade da empresa até o pagamento integral do projeto. Após o pagamento,
                os direitos são transferidos ao cliente conforme acordo contratual.
              </p>
            </section>

            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-white/80 leading-relaxed">
                A Elevar Digital não se responsabiliza por danos indiretos ou perdas de lucro
                decorrentes do uso ou impossibilidade de uso dos serviços, dentro dos limites
                permitidos por lei.
              </p>
            </section>

            <section className="rounded-2xl p-8 backdrop-blur border border-white/10
              bg-gradient-to-br from-black/10 to-white/10">
              <h2 className="text-2xl font-bold mb-4">6. Modificações dos Termos</h2>
              <p className="text-white/80 leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. Alterações
                serão comunicadas através do nosso site e entrarão em vigor após publicação.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm">
              Em caso de dúvidas sobre estes termos, entre em contato conosco através do email:
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
