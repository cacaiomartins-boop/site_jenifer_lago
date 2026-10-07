import { site } from "../config/site";

type PageSeo = { title: string; description: string; path: string };

// Metadados de SEO/compartilhamento de uma página: canonical, Open Graph e Twitter Cards.
export function pageHead({ title, description, path }: PageSeo) {
  const url = `${site.url}${path}`;
  const image = `${site.url}${site.ogImage}`;
  const imageAlt = "Consultório de psicologia e psicanálise em Brasília, com poltronas e ampla janela";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
