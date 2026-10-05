import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { site } from "../config/site";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações | Jennifer Lago, psicóloga e psicanalista" },
      { name: "description", content: "Artigos e publicações de Jennifer Lago, psicóloga e psicanalista em Brasília. Luto, psicanálise e saúde mental." },
      { property: "og:title", content: "Publicações | Jennifer Lago" },
      { property: "og:description", content: "Artigos e publicações de Jennifer Lago, psicóloga e psicanalista CRP 01/26397." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Publicacoes,
});

function Publicacoes() {
  return <>
    <SiteHeader solid />
    <main>
      <section className="pub-hero"><div className="container">
        <span className="section-label">Publicações</span>
        <h1 className="section-title">Textos e <em>pesquisas.</em></h1>
        <p className="text-copy">Trabalhos publicados em revistas científicas, com links para a leitura.</p>
      </div></section>

      <section className="pub-section"><div className="container">
        <ol className="pub-list">{site.publications.map(pub => (
          <li key={pub.url}><article className="pub">
            <div className="pub-meta"><span className="pub-year">{pub.year}</span><span className="pub-type">{pub.type}</span></div>
            <div className="pub-body">
              <h2 className="pub-title">{pub.title}</h2>
              <p className="pub-authors">{pub.authors.map((author, index) => <span key={author}>{index > 0 ? ", " : ""}{author === pub.highlight ? <strong>{author}</strong> : author}</span>)}</p>
              <p className="pub-venue"><em>{pub.venue}</em> · {pub.reference}</p>
              <p className="pub-summary">{pub.summary}</p>
              <div className="pub-actions">
                <a className="btn btn-dark" href={pub.url} {...external}>Ler o artigo <ArrowRight size={16} strokeWidth={1.5} /></a>
                {pub.pdf ? <a className="btn btn-outline" href={pub.pdf} {...external}>Baixar PDF <Download size={16} strokeWidth={1.5} /></a> : null}
              </div>
              <details className="faq-item pub-cite"><summary>Como citar<span className="faq-plus" aria-hidden="true">+</span></summary><p>{pub.citation}</p></details>
            </div>
          </article></li>
        ))}</ol>
        <p className="pub-note">Também sou autora de livro e capítulo sobre transtornos alimentares e tratamentos psicológicos com suporte empírico.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
