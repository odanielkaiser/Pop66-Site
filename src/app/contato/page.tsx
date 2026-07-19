import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contato() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#040404]">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>

            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Fale conosco</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-12">
              Entre em contato
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Canais de atendimento</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-medium">E-mail</div>
                        <a href="mailto:pop66drive.aracruz@gmail.com" className="text-gray-400 hover:text-primary text-sm transition-colors">
                          pop66drive.aracruz@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-medium">Telefone</div>
                        <a href="tel:+5527988260143" className="text-gray-400 hover:text-primary text-sm transition-colors">
                          (27) 98826-0143
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Redes sociais</h3>
                  <div className="flex gap-3">
                    <Link
                      href="https://www.instagram.com/pop66aracruz?utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#0d0d0d] border border-white/5 rounded-xl text-gray-400 hover:text-primary hover:border-primary/30 text-sm transition-all"
                    >
                      Instagram
                    </Link>
                    <span className="px-4 py-2 bg-[#0d0d0d] border border-white/5 rounded-xl text-gray-500 text-sm">
                      Facebook
                    </span>
                    <span className="px-4 py-2 bg-[#0d0d0d] border border-white/5 rounded-xl text-gray-500 text-sm">
                      LinkedIn
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d0d0d] rounded-2xl p-8 border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Envie sua mensagem</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#040404] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-gray-600"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#040404] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-gray-600"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#040404] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-gray-600 resize-none"
                      placeholder="Digite sua mensagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-[#040404] font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
