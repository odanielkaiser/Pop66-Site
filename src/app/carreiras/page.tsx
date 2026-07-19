import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const jobs = [
  {
    title: "Desenvolvedor(a) Full Stack",
    type: "Remoto",
    area: "Tecnologia",
  },
  {
    title: "Analista de Marketing Digital",
    type: "Presencial / SP",
    area: "Marketing",
  },
  {
    title: "Motorista Parceiro",
    type: "Flexível",
    area: "Operações",
  },
  {
    title: "Analista de Sucesso do Cliente",
    type: "Remoto",
    area: "Atendimento",
  },
];

export default function Carreiras() {
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

            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Carreiras</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Trabalhe conosco
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-12">
              Junte-se à Pop66 e ajude a transformar a mobilidade urbana. 
              Valorizamos talento, diversidade e vontade de fazer a diferença.
            </p>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="p-6 bg-[#0d0d0d] rounded-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                      <span>{job.area}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-[#040404] transition-all text-sm whitespace-nowrap">
                    Candidatar-se
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#0d0d0d] rounded-2xl border border-white/5">
              <h3 className="text-white font-semibold mb-2">Não encontrou a vaga ideal?</h3>
              <p className="text-gray-400 text-sm mb-4">
                Envie seu currículo para nosso banco de talentos.
              </p>
              <Link
                href="mailto:talentos@pop66.com.br"
                className="text-primary hover:underline text-sm font-semibold"
              >
                talentos@pop66.com.br
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
