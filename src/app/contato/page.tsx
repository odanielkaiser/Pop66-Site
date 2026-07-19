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
                  <Link
                    href="https://www.instagram.com/pop66aracruz?utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-[#040404] font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-primary/20"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @pop66aracruz
                  </Link>
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
