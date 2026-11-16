import { services } from "../lib/site-data";
import { SITE_URL } from "../lib/seo";

const pages = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"];

export default function sitemap() {
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.2 : 0.8,
    })),
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
