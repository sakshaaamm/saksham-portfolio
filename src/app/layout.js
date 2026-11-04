import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import { SITE, SITE_TITLE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = SITE.url;

export const viewport = {
  themeColor: "#3b6ef5",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: SITE_TITLE,
    template: `%s — ${SITE.name} | ${SITE.role}`,
  },
  description: SITE.description,
  keywords: [
    "AI Engineer", "Machine Learning Engineer", "LLM Applications",
    "Applied Machine Learning", "Python", "Data Pipelines",
    "AI Portfolio", "Saksham",
  ],
  authors: [{ name: SITE.name, url: BASE }],
  creator: SITE.name,
  publisher: SITE.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE.description,
  },

  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE.description,
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
      { url: "/photo/favicon-blue.png", type: "image/png" },
    ],
    apple: "/photo/favicon-blue.png",
    shortcut: "/photo/favicon-blue.png",
  },

  manifest: "/manifest.webmanifest",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": SITE.name,
      "url": BASE,
      "jobTitle": SITE.role,
      ...(SITE.email ? { "email": SITE.email } : {}),
      "description": SITE.description,
      "knowsAbout": [
        "Artificial Intelligence", "Machine Learning", "Large Language Models",
        "Python", "Data Engineering", "Model Evaluation", "APIs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": SITE_TITLE,
      "description": SITE.description,
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${BASE}/#profilepage`,
      "url": BASE,
      "name": `${SITE.name} — ${SITE.role} Portfolio`,
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "mainEntity": { "@id": `${BASE}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* ── Resource hints ── */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        {/* ── Structured Data for Google + AI bots ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── LLMs.txt discovery (AI chatbot standard) ── */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />

        {/* ── Custom Search/Keywords XML index for AEO ── */}
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {/* ── Google Search Console verification ── */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {/* ── Bing Webmaster Tools verification ── */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}
