import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
import Effects from "../components/effects";
import { siteConfig } from "../lib/site-data";
import { SITE_URL, organizationJsonLd } from "../lib/seo";

// Fonts are self-hosted from app/fonts so builds never depend on Google Fonts.
const sans = localFont({
  src: "./fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});
const display = localFont({
  src: "./fonts/inter-tight.woff2",
  weight: "100 900",
  variable: "--font-display",
  display: "swap",
});
const serif = localFont({
  src: "./fonts/instrument-serif-italic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-serif",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} — Digital Agency for Web, Brand & Growth`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/favicon.svg" },
  // Google Search Console ownership verification
  verification: {
    google: "at8vMi9CR5Tr5WO2KtF0cQYD2ct-8LpEL0NY3oO2DeY",
  },
};

export const viewport = {
  themeColor: "#F7F6F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Effects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}
