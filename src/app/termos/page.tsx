import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Termos() {
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
              Termos de Uso
            </h1>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
              <p>
                Estes Termos de Uso regulam a utilização do aplicativo e site da Pop66. 
                Ao utilizar nossos serviços, você aceita integralmente estas condições.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">1. Definições</h2>
              <p>
                Pop66: plataforma digital que conecta usuários a motoristas parceiros para 
                prestação de serviços de transporte e delivery.
              </p>
              <p>
                Usuário: pessoa física que utiliza o aplicativo para solicitar serviços.
              </p>
              <p>
                Motorista Parceiro: prestador de serviço autônomo cadastrado na plataforma.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">2. Cadastro</h2>
              <p>
                Para utilizar a plataforma, o usuário deve se cadastrar fornecendo dados 
                pessoais verdadeiros e atualizados. A Pop66 se reserva o direito de 
                suspender contas que forneçam informações falsas.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">3. Responsabilidades</h2>
              <p>
                A Pop66 atua como intermediadora, não se responsabilizando por atos 
                praticados por motoristas parceiros ou usuários fora da plataforma.
              </p>

              <h2 className="text-white text-lg font-semibold mt-8">4. Disposições Gerais</h2>
              <p>
                Estes Termos podem ser alterados a qualquer momento, sendo as alterações 
                comunicadas aos usuários por meio do aplicativo.
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
