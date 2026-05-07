import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

import { site } from "@/lib/site";
import {
  jsonLdScript,
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { MobileStickyBar } from "@/components/global/MobileStickyBar";
import { ScrollProgress } from "@/components/global/ScrollProgress";
import { LanguageProvider } from "@/components/global/LanguageProvider";
import { SpanishContentBanner } from "@/components/global/SpanishContentBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Floor Restoration in Miami, FL`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "floor restoration Miami",
    "concrete polishing Miami",
    "polished concrete Miami",
    "terrazzo restoration Miami",
    "marble restoration Miami",
    "garage epoxy Miami",
    "Mexican tile restoration Miami",
    "hardwood floor refinishing Miami",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} – Floor Restoration in Miami, FL`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Floor Restoration in Miami, FL`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = site.analytics.gtmId;
  const ga4Id = site.analytics.ga4Id;
  const clarityId = site.analytics.clarityId;

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteSchema())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(localBusinessSchema())}
        />
        {clarityId ? (
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");`,
            }}
          />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-ink)] font-sans antialiased pb-16 lg:pb-0">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-charcoal)] focus:text-white focus:px-4 focus:py-2 focus:rounded"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Header />
          <SpanishContentBanner />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {ga4Id ? <GoogleAnalytics gaId={ga4Id} /> : null}
      </body>
    </html>
  );
}
