import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { site } from "../config/site";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// "hash" aponta para uma seção da home; "to" aponta para outra página.
const navLinks = [
  { label: "Sobre", hash: "sobre" },
  { label: "Como trabalho", hash: "como-trabalho" },
  { label: "Atendimento", hash: "atendimento" },
  { label: "Como funciona", hash: "como-funciona" },
  { label: "Publicações", to: "/publicacoes" },
  { label: "Depoimentos", hash: "depoimentos" },
  { label: "Dúvidas", hash: "duvidas" },
] as const;

function NavItem({ item, home, onClick }: { item: (typeof navLinks)[number]; home: boolean; onClick?: () => void }) {
  if ("to" in item) return <Link to={item.to} onClick={onClick}>{item.label}</Link>;
  return <a href={home ? `#${item.hash}` : `/#${item.hash}`} onClick={onClick}>{item.label}</a>;
}

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);
  const home = !solid;

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const close = () => setMenuOpen(false);
  const brandContent = <><span className="brand-name">{site.name}</span><span className="brand-detail">{site.profession} · {site.registration}</span></>;

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="container header-inner">
        {home
          ? <a className="brand" href="#topo" onClick={close} aria-label="Jennifer Patrícia Kuhn Lago, voltar ao início">{brandContent}</a>
          : <Link className="brand" to="/" onClick={close} aria-label="Jennifer Patrícia Kuhn Lago, voltar ao início">{brandContent}</Link>}
        <nav className="desktop-nav" aria-label="Navegação principal">{navLinks.map(item => <NavItem key={item.label} item={item} home={home} />)}</nav>
        <a href={site.profileUrl} {...external} className="btn header-cta">Agendar consulta <ArrowRight size={15} strokeWidth={1.5} /></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}</button>
      </div>
      <nav className="mobile-nav" aria-label="Navegação para celular">{navLinks.map(item => <NavItem key={item.label} item={item} home={home} onClick={close} />)}<a className="btn btn-dark" href={site.profileUrl} {...external} onClick={close}>Agendar consulta <ArrowRight size={16} /></a></nav>
    </header>
  );
}

export function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className="footer"><div className="container">
      <section className="footer-urgent" aria-labelledby="urgencia-titulo">
        <h3 id="urgencia-titulo">É urgente? <em>Ligue para:</em></h3>
        <ul>{site.emergency.map(item => <li key={item.number}><a className="urgent-number" href={`tel:${item.number}`} aria-label={`Ligar para ${item.number}, ${item.name}`}>{item.number}</a><strong>{item.name}</strong><p>{item.text}</p></li>)}</ul>
      </section>
      <div className="footer-grid">
        <div><h3>{site.name}</h3><p>{site.profession}</p><p>{site.registration}</p></div>
        <div><p>{site.address}</p><a href={site.mapUrl} {...external}>Ver no mapa ↗</a></div>
        <div><a href={site.profileUrl} {...external}>Doctoralia ↗</a><a href={site.reviewUrl} {...external}>Avaliações ↗</a>{site.serenitahUrl ? <a href={site.serenitahUrl} {...external}>Serenitah ↗</a> : null}</div>
      </div>
      <div className="footer-social"><span>Acompanhe</span>{site.social.map(item => <a key={item.label} href={item.url} {...external}>{item.label} ↗</a>)}</div>
      <div className="footer-bottom"><nav className="footer-links" aria-label="Links do rodapé">{navLinks.map(item => <NavItem key={item.label} item={item} home={home} />)}</nav><p>© {new Date().getFullYear()} · {site.name} · {site.registration} · <em>Escuta em seu tempo.</em></p></div>
    </div></footer>
  );
}
