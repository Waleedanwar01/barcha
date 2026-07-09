import { Inter, Space_Grotesk } from "next/font/google";
import AmbientBackground from "../components/ambient-background";
import AppShell from "../components/app-shell";
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
    "Barcha Digital is a premium digital agency for local businesses — custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO.",
  keywords:
    "web development agency, local business marketing, WordPress development, Shopify development, Google Ads, SEO agency, branding agency, AI design",
  metadataBase: new URL("https://barchadigital.com"),
  openGraph: {
    title: "Barcha Digital | Web, SEO & Ads Agency for Local Businesses",
    description:
      "Custom web development, WordPress, Shopify, Google & social ads, branding, AI-powered design, and SEO — built for local businesses that want measurable growth.",
    type: "website",
    siteName: "Barcha Digital",
  },
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
