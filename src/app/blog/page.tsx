import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {
    title: "Como a Pop66 está transformando a mobilidade nas cidades",
    excerpt: "Conheça as iniciativas e tecnologias que estão revolucionando o transporte urbano.",
    date: "15 Jul 2026",
    readTime: "4 min",
    category: "Mobilidade",
  },
  {
    title: "Dicas para uma viagem segura com a Pop66",
    excerpt: "Confira as melhores práticas para garantir sua segurança durante as corridas.",
    date: "10 Jul 2026",
    readTime: "3 min",
    category: "Segurança",
  },
  {
    title: "Pop Pet: como funciona o transporte para animais",
    excerpt: "Tire todas as suas dúvidas sobre o serviço de transporte pet-friendly da Pop66.",
    date: "05 Jul 2026",
    readTime: "5 min",
    category: "Serviços",
  },
  {
    title: "Seja um motorista parceiro: vantagens e requisitos",
    excerpt: "Saiba como se cadastrar e começar a ganhar dinheiro com a Pop66.",
    date: "28 Jun 2026",
    readTime: "6 min",
    category: "Carreiras",
  },
  {
    title: "Pop Empresa: mobilidade corporativa simplificada",
    excerpt: "Entenda como sua empresa pode economizar e otimizar viagens com a Pop66.",
    date: "20 Jun 2026",
    readTime: "4 min",
    category: "Corporativo",
  },
  {
    title: "App Pop66: guia completo de funcionalidades",
    excerpt: "Descubra todos os recursos que o aplicativo oferece para facilitar seu dia a dia.",
    date: "15 Jun 2026",
    readTime: "7 min",
    category: "Tecnologia",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#040404]">
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>
            </div>

            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Blog</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Últimos artigos
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mb-12">
              Fique por dentro das novidades, dicas e histórias da Pop66.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.title}
                  href="#"
                  className="group p-6 bg-[#0d0d0d] rounded-2xl border border-white/5 hover:border-primary/30 transition-all"
                >
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
