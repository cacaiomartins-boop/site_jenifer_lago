import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { BookOpen, ChevronUp, Download, ExternalLink } from "lucide-react";
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

// Transforma marcações como (1-4) em números de referência sobrescritos.
function WithRefs({ text }: { text: string }) {
  return <>{text.split(/(\(\d+(?:[-,]\d+)*\))/g).map((part, index) => /^\(\d/.test(part) ? <sup className="pub-ref" key={index}>{part.slice(1, -1)}</sup> : part)}</>;
}

type Publication = (typeof site.publications)[number];

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const textId = `artigo-${index + 1}`;
  const minutes = Math.max(1, Math.round(pub.body.join(" ").split(/\s+/).length / 200));

  const collapse = () => {
    setOpen(false);
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="pub" ref={cardRef}>
      <div className="pub-meta"><span className="pub-year">{pub.year}</span><span className="pub-type">{pub.type}</span></div>
      <div className="pub-body">
        <h2 className="pub-title">{pub.title}</h2>
        <p className="pub-authors">{pub.authors.map((author, i) => <span key={author}>{i > 0 ? ", " : ""}{author === pub.highlight ? <strong>{author}</strong> : author}</span>)}</p>
        <p className="pub-venue"><em>{pub.venue}</em> · {pub.reference}</p>
        <p className="pub-summary">{pub.summary}</p>
        <div className="pub-actions">
          <button type="button" className="btn btn-dark" aria-expanded={open} aria-controls={textId} onClick={() => (open ? collapse() : setOpen(true))}>
            {open ? "Recolher artigo" : "Ler artigo completo"}{open ? <ChevronUp size={16} strokeWidth={1.5} /> : <BookOpen size={16} strokeWidth={1.5} />}
          </button>
          <a className="btn btn-outline" href={pub.url} {...external}>Ver na revista <ExternalLink size={15} strokeWidth={1.5} /></a>
          {pub.pdf ? <a className="btn btn-outline" href={pub.pdf} {...external}>Baixar PDF <Download size={16} strokeWidth={1.5} /></a> : null}
        </div>

        {open ? (
          <div className="pub-fulltext" id={textId}>
            <p className="pub-fulltext-meta">Texto completo · leitura de cerca de {minutes} min</p>
            <div className="pub-fulltext-body">{pub.body.map(paragraph => <p key={paragraph.slice(0, 40)}><WithRefs text={paragraph} /></p>)}</div>
            <h3>Referências</h3>
            <ol className="pub-refs">{pub.references.map(ref => <li key={ref.text}>{ref.text}{ref.url ? <> <a href={ref.url} {...external}>{ref.url}</a></> : null}</li>)}</ol>
            <button type="button" className="btn btn-outline pub-fulltext-close" onClick={collapse}>Recolher artigo <ChevronUp size={16} strokeWidth={1.5} /></button>
          </div>
        ) : null}

        <details className="faq-item pub-cite"><summary>Como citar<span className="faq-plus" aria-hidden="true">+</span></summary><p>{pub.citation}</p></details>
      </div>
    </article>
  );
}

function Publicacoes() {
  return <>
    <SiteHeader solid />
    <main>
      <section className="pub-hero"><div className="container">
        <span className="section-label">Publicações</span>
        <h1 className="section-title">Textos e <em>pesquisas.</em></h1>
        <p className="text-copy">Trabalhos publicados em revistas científicas, para ler aqui mesmo ou na revista.</p>
      </div></section>

      <section className="pub-section"><div className="container">
        <ol className="pub-list">{site.publications.map((pub, index) => <li key={pub.url}><PublicationCard pub={pub} index={index} /></li>)}</ol>
        <p className="pub-note">Também sou autora de livro e capítulo sobre transtornos alimentares e tratamentos psicológicos com suporte empírico.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
