import { siteConfig, socialLinks, ventures } from "./site-data";

export const SITE_URL = siteConfig.url;

export function buildMetadata({ title, description, path = "/" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    url: SITE_URL,
    email: siteConfig.email,
    logo: `${SITE_URL}/logo-512.png`,
    description: siteConfig.description,
    founder: [
      { "@type": "Person", name: "Waleed Anwar" },
      { "@type": "Person", name: "Asad Anwar" },
    ],
    subOrganization: ventures.map((v) => ({
      "@type": "Organization",
      name: v.name,
      url: v.link,
    })),
    sameAs: socialLinks.map((link) => link.href),
  };
}
