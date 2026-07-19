import Link from "next/link";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-[#040404]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Vamos transformar sua mobilidade
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Baixe o app Pop66 e descubra uma nova forma de se locomover pela cidade.
              Rápido, seguro e com o melhor custo-benefício.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-[#040404] px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 font-bold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div>
                  <div className="text-xs text-[#040404]/60">Download na</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-3 border-2 border-white/10 hover:border-primary text-gray-300 hover:text-primary px-6 py-3.5 rounded-xl transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Disponível no</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>

            <div className="pt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contato@pop66.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(11) 99999-8888</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d0d] rounded-2xl p-8 border border-white/5">
            <h3 className="text-lg font-semibold text-white mb-6">Seja um motorista parceiro</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nome completo</label>
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
                <label className="block text-sm font-medium text-gray-300 mb-1">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040404] border border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-white placeholder-gray-600"
                  placeholder="(11) 99999-8888"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-[#040404] font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20"
              >
                Quero ser motorista
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
