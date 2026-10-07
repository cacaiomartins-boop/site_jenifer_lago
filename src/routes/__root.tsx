import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { site } from "../config/site";

function NotFoundComponent() {
  return (
    <>
      <title>Página não encontrada | Jennifer Patrícia Kuhn Lago</title>
      <meta name="robots" content="noindex" />
      <SiteHeader solid />
      <main id="conteudo">
        <section className="pub-hero">
          <div className="container">
            <span className="section-label">Erro 404</span>
            <h1 className="section-title">Página não <em>encontrada.</em></h1>
            <p className="text-copy">O endereço que você acessou não existe ou foi alterado. Você pode voltar ao início ou conhecer as publicações.</p>
            <p style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <Link to="/" className="btn btn-dark">Voltar ao início</Link>
              <Link to="/publicacoes" className="btn btn-outline">Ver publicações</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main id="conteudo">
      <section className="pub-hero">
        <div className="container">
          <span className="section-label">Algo deu errado</span>
          <h1 className="section-title">Esta página não <em>carregou.</em></h1>
          <p className="text-copy">Ocorreu um problema do nosso lado. Tente atualizar a página ou volte ao início.</p>
          <p style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <button type="button" className="btn btn-dark" onClick={() => { router.invalidate(); reset(); }}>Tentar novamente</button>
            <a href="/" className="btn btn-outline">Voltar ao início</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "qs22OauP6Z1ZVyxiY_4S4LXUHtMptooVRmPTKlYo9VU" },
      { name: "theme-color", content: "#30506c" },
      { name: "author", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&family=DM+Sans:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
