import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Privacidade() {
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
              Política de Privacidade
            </h1>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
                A Pop66 valoriza a privacidade dos seus usuários. Esta política descreve 
                como coletamos, usamos e protegemos suas informações pessoais.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">1. Dados Coletados</h2>
              <p>
                Coletamos dados como nome, e-mail, telefone, localização e histórico de 
                viagens para viabilizar a prestação dos serviços.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">2. Uso dos Dados</h2>
              <p>
                Seus dados são utilizados para processar solicitações, melhorar a 
                experiência do usuário e garantir a segurança das viagens.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">3. Compartilhamento</h2>
              <p>
                Não compartilhamos seus dados com terceiros sem seu consentimento, exceto 
                quando exigido por lei ou necessário para a prestação do serviço.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">4. Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus dados 
                contra acesso não autorizado, perda ou destruição.
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
