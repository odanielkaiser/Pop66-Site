const steps = [
  {
    number: "01",
    title: "Solicite",
    description: "Informe seu destino e escolha a categoria ideal. Em segundos você tem o valor e o tempo estimado.",
  },
  {
    number: "02",
    title: "Acompanhe",
    description: "Veja em tempo real a localização do motorista. Compartilhe a viagem com quem você confia.",
  },
  {
    number: "03",
    title: "Pague fácil",
    description: "Cartão, débito, dinheiro ou PIX. Sem surpresas: o valor é combinado antes da viagem.",
  },
  {
    number: "04",
    title: "Avalie",
    description: "Ao final, avalie seu motorista. Quanto mais você usa, mais vantagens acumula no Pop66.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#040404]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Como funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Simples como pedir um app
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Em poucos toques você está a caminho do seu destino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center lg:text-left">
              <div className="text-6xl font-bold text-primary/10 select-none leading-none mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
