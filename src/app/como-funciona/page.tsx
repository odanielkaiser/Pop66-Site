import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Link from "next/link";

export default function ComoFuncionaPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#040404]">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Como funciona</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Simples como pedir um app
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Em poucos toques você está a caminho do seu destino.
            </p>
          </div>
        </section>
        <HowItWorks />
        <section className="py-24 bg-[#181818]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Baixe o app Pop66 e faça sua primeira viagem agora mesmo.
            </p>
            <Link
              href="/baixar"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-[#040404] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/20"
            >
              Baixar o App
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
