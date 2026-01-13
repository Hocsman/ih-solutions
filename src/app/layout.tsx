import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PlausibleAnalytics } from "@/components/analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IH Solutions - Éditeur de solutions SaaS innovantes",
    template: "%s | IH Solutions",
  },
  description: "IH Solutions accompagne les entreprises françaises avec des solutions SaaS innovantes : ChantiPay, Mon Rempart, SimplRH. Découvrez nos produits.",
  keywords: ["SaaS", "logiciel", "entreprise", "France", "ChantiPay", "Mon Rempart", "SimplRH", "paiement BTP", "cybersécurité", "RH"],
  authors: [{ name: "IH Solutions" }],
  creator: "IH Solutions",
  publisher: "IH Solutions",
  metadataBase: new URL("https://ih-solutions.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "IH Solutions",
    title: "IH Solutions - Éditeur de solutions SaaS innovantes",
    description: "IH Solutions accompagne les entreprises françaises avec des solutions SaaS innovantes.",
    url: "https://ih-solutions.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "IH Solutions - Éditeur de solutions SaaS innovantes",
    description: "IH Solutions accompagne les entreprises françaises avec des solutions SaaS innovantes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <PlausibleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
