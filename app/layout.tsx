import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";

// Self-hosted via next/font — no layout shift, no external requests at runtime.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.tagline,
  keywords: [
    "Mudassar Ishtiaq",
    "Mudassar Online Earning",
    "Web3 Educator",
    "Crypto Content Creator",
    "Crypto Pakistan",
    "Blockchain Education",
    "Online Earning",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.brand,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.brand }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    creator: "@MudassarIshtiaq",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SmoothScroll>
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
