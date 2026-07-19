import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Sobre() {
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

            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Sobre nós</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-8">
              Quem somos
            </h1>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                A <strong className="text-white">Pop66</strong> nasceu para transformar a mobilidade urbana. 
                Somos uma plataforma que conecta passageiros a motoristas parceiros de forma rápida, 
                segura e com preços justos.
              </p>
              <p>
                Com presença em diversas cidades, oferecemos soluções que vão do transporte econômico 
                ao executivo, além de serviços como entregas de mercado e transporte pet-friendly.
              </p>
              <p>
                Nossa missão é simplificar o deslocamento das pessoas, combinando tecnologia de ponta 
                com um atendimento humano e acolhedor.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="p-6 bg-[#0d0d0d] rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-gray-400 mt-1">Viagens realizadas</div>
                </div>
                <div className="p-6 bg-[#0d0d0d] rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-400 mt-1">Motoristas parceiros</div>
                </div>
                <div className="p-6 bg-[#0d0d0d] rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-gray-400 mt-1">Avaliação média</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
