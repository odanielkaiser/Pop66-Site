import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LGPD() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#040404]">
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>

            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-8">
              LGPD - Lei Geral de Proteção de Dados
            </h1>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
                Em conformidade com a Lei nº 13.709/2018 (LGPD), a Pop66 estabelece 
                diretrizes sobre o tratamento de dados pessoais dos seus usuários.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">Seus Direitos</h2>
              <p>
                Nos termos da LGPD, você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>

              <h2 className="text-white text-lg font-semibold mt-8">Encarregado de Dados (DPO)</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de 
                dados, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <div className="p-4 bg-[#0d0d0d] rounded-xl border border-white/5">
                <p className="text-white">E-mail: <a href="mailto:dpo@pop66.com.br" className="text-primary hover:underline">dpo@pop66.com.br</a></p>
              </div>

              <h2 className="text-white text-lg font-semibold mt-8">Base Legal</h2>
              <p>
                O tratamento de dados realizado pela Pop66 tem como base legal o 
                consentimento do titular e a execução do contrato de prestação de serviços.
              </p>

              <p className="text-gray-500 pt-4">
                Última atualização: Julho de 2026.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
