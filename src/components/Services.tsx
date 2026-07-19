const services = [
  {
    title: "Pop Econômica",
    description: "O melhor custo-benefício para o dia a dia. Carros compactos, confortáveis e preços acessíveis para suas viagens urbanas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Pop Mercado",
    description: "Suas compras de supermercado entregues no conforto da sua casa. Rapidez e cuidado com cada item.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Pop Executivo",
    description: "Experiência premium para reuniões e compromissos. Carros de luxo com motoristas qualificados.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 18M3 21l14-18" />
      </svg>
    ),
  },
  {
    title: "Pop Pet",
    description: "Transporte seguro para você e seu animal de estimação. Motoristas preparados para receber seu pet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Pop Empresa",
    description: "Soluções corporativas para sua equipe. Gestão simplificada, relatórios detalhados e faturamento unificado.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Soluções para cada momento
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Do mercado ao escritório, a Pop66 tem o carro ideal para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-[#040404] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
