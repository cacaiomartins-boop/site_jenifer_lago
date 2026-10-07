import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { BookOpen, ChevronUp, Download, ExternalLink } from "lucide-react";
import { site, type Publication } from "../config/site";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { pageHead } from "../lib/seo";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const pubSeo = pageHead({
  title: "Publicações | Jennifer Patrícia Kuhn Lago, psicóloga",
  description: "Artigos, livros e capítulos de Jennifer Patrícia Kuhn Lago, psicóloga e psicanalista em Brasília, sobre luto, transtornos alimentares e preconceito.",
  path: "/publicacoes",
});

const pubStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "CollectionPage", "@id": `${site.url}/publicacoes#pagina`, url: `${site.url}/publicacoes`, name: "Publicações", inLanguage: "pt-BR", isPartOf: { "@id": `${site.url}/#website` }, about: { "@id": `${site.url}/#pessoa` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Publicações", item: `${site.url}/publicacoes` },
    ] },
  ],
};

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: pubSeo.meta,
    links: pubSeo.links,
    scripts: [{ type: "application/ld+json", children: JSON.stringify(pubStructuredData) }],
  }),
  component: Publicacoes,
});

// Transforma marcações como (1-4) em números de referência sobrescritos.
function WithRefs({ text }: { text: string }) {
  return <>{text.split(/(\(\d+(?:[-,]\d+)*\))/g).map((part, index) => /^\(\d/.test(part) ? <sup className="pub-ref" key={index}>{part.slice(1, -1)}</sup> : part)}</>;
}

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const textId = `publicacao-${index + 1}`;
  const blocks = pub.sections ?? (pub.body ? [{ paragraphs: pub.body }] : []);
  const words = blocks.flatMap(block => [...(block.paragraphs ?? []), ...(block.list ?? [])]).join(" ").split(/\s+/).length;
  const readMeta = pub.readMeta ?? `Texto completo · leitura de cerca de ${Math.max(1, Math.round(words / 200))} min`;

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
            {open ? "Recolher" : pub.readLabel}{open ? <ChevronUp size={16} strokeWidth={1.5} /> : <BookOpen size={16} strokeWidth={1.5} />}
          </button>
          <a className="btn btn-outline" href={pub.url} {...external}>{pub.linkLabel} <ExternalLink size={15} strokeWidth={1.5} /></a>
          {pub.pdf ? <a className="btn btn-outline" href={pub.pdf} {...external}>Baixar PDF <Download size={16} strokeWidth={1.5} /></a> : null}
        </div>

        {open ? (
          <div className="pub-fulltext" id={textId}>
            <p className="pub-fulltext-meta">{readMeta}</p>
            <div className="pub-fulltext-body">{blocks.map((block, i) => (
              <div className="pub-block" key={i}>
                {"heading" in block && block.heading ? <h4>{block.heading}</h4> : null}
                {"note" in block && block.note ? <p className="pub-block-note">{block.note}</p> : null}
                {block.paragraphs?.map(paragraph => <p key={paragraph.slice(0, 40)}><WithRefs text={paragraph} /></p>)}
                {"list" in block && block.list ? <ul className="pub-points">{block.list.map(item => <li key={item}>{item}</li>)}</ul> : null}
              </div>
            ))}</div>
            {pub.references?.length ? <>
              <h3>Referências</h3>
              <ol className="pub-refs">{pub.references.map(ref => <li key={ref.text}>{ref.text}{ref.url ? <> <a href={ref.url} {...external}>{ref.url}</a></> : null}</li>)}</ol>
            </> : null}
            <button type="button" className="btn btn-outline pub-fulltext-close" onClick={collapse}>Recolher <ChevronUp size={16} strokeWidth={1.5} /></button>
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
    <main id="conteudo">
      <section className="pub-hero"><div className="container">
        <span className="section-label">Publicações</span>
        <h1 className="section-title">Textos e <em>pesquisas.</em></h1>
        <p className="text-copy">Artigos, livros e capítulos publicados, para ler aqui mesmo ou na fonte original.</p>
      </div></section>

      <section className="pub-section"><div className="container">
        <ol className="pub-list">{site.publications.map((pub, index) => <li key={pub.title}><PublicationCard pub={pub} index={index} /></li>)}</ol>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
