import { Inter, Space_Grotesk } from "next/font/google";
import AmbientBackground from "../components/ambient-background";
import AppShell from "../components/app-shell";
import { organizationJsonLd, websiteJsonLd } from "../lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
    template: "%s | Barcha Digital",
  },
  description:
    "Barcha Digital is a remote-first digital agency serving local businesses across the US, Canada, UK, and Australia — custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO.",
  keywords:
    "web development agency, local business marketing, WordPress development, Shopify development, Google Ads, SEO agency, branding agency, AI design",
  metadataBase: new URL("https://barchadigital.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-CA": "/",
      "en-GB": "/",
      "en-AU": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
    description:
      "Custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO — built for local businesses that want measurable growth.",
    type: "website",
    siteName: "Barcha Digital",
    url: "/",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "en_AU"],
    images: [
      {
        url: "/logo/logo-barcha-digital.png",
        width: 200,
        height: 134,
        alt: "Barcha Digital logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
    description:
      "Custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO — built for local businesses that want measurable growth.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#050914",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 z-0 bg-white/[0.01]" />
          <AmbientBackground />
          <div className="relative z-10">
            <AppShell>{children}</AppShell>
          </div>
        </div>
      </body>
    </html>
  );
}
