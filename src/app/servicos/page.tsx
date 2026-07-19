import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Link from "next/link";

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-[#181818]">
        <section className="py-16 bg-[#040404]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Serviços</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Nossos serviços
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Do mercado ao escritório, a Pop66 tem o carro ideal para cada momento do seu dia.
            </p>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </>
  );
}
