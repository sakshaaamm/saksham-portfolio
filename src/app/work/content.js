// ─────────────────────────────────────────────
//  WORK SECTION — edit everything here
// ─────────────────────────────────────────────

export const SECTION = {
  label: "Selected Work",
  heading: "Projects.",
};

// Projects shown on /projects and /project/[id].
// These work without a database. Projects added later through the admin panel
// (Supabase) are shown in addition to these.
//
//  filter : which filter tab it appears under — "LLM" | "DATA" | "APPS"
//  image  : card / hero image (files live in /public/projects)
//  link   : primary button; links: extra buttons (first one is highlighted)
export const PROJECTS = [
  {
    id: "intentflow",
    filter: "LLM",
    category: "AI Platform",
    title: "IntentFlow",
    description:
      "A full-stack platform that captures user behavior from AI chat providers (ChatGPT, Claude, Perplexity and Grok) through a Chrome extension and turns it into structured SEO campaign data. Every conversation becomes a Prompt → Subquery → Site tree, which background queues enrich with SEMrush and Ahrefs data. It includes campaign versioning, lead-intent scoring and a role-based admin dashboard. Built as a team project. My part was the backend and data pipelines: the SEMrush and Ahrefs integrations, BullMQ queue optimisation and NLP intent extraction.",
    tech: "TypeScript · Node.js · Express · PostgreSQL · Redis · React",
    services: [
      "Backend & data pipelines",
      "SEMrush / Ahrefs integrations",
      "BullMQ job queues",
      "NLP intent extraction",
    ],
    client: "Team project",
    year: "2026",
    image: "/projects/intentflow.png",
    gallery: ["/projects/intentflow-light.png"],
    link: "https://github.com/sakshaaamm/IntentFlow",
    links: [
      { label: "View on GitHub", url: "https://github.com/sakshaaamm/IntentFlow" },
      { label: "Live app", url: "https://intentflow-frontend-production.up.railway.app" },
    ],
  },
  {
    id: "chocolate-sales-analytics",
    filter: "DATA",
    category: "Data Analytics",
    title: "Chocolate Sales Analytics",
    description:
      "A data visualization and analytics capstone at Newton School of Technology (Rishihood University). In a two-week industry simulation, five raw retail datasets (sales transactions, products, stores, customers and a calendar) were turned into business intelligence using Python notebooks and Tableau dashboards for sales, customers and stores. Built by a team of six, where I was the Visualization Lead.",
    tech: "Python · Jupyter · Tableau",
    services: [
      "Data visualization",
      "Tableau dashboards",
      "Python & Jupyter analysis",
      "Business intelligence",
    ],
    client: "Newton School of Technology · Team of six",
    year: "2026",
    image: "/projects/chocolate-sales.png",
    gallery: ["/projects/chocolate-customers.png", "/projects/chocolate-stores.png"],
    link: "https://github.com/sakshaaamm/SectionB_G-17_ChocolateSalesDataset",
    links: [
      { label: "View on GitHub", url: "https://github.com/sakshaaamm/SectionB_G-17_ChocolateSalesDataset" },
      { label: "Sales dashboard", url: "https://public.tableau.com/views/Chocolate_Sales_G17/SalesDashboard" },
      { label: "Customer dashboard", url: "https://public.tableau.com/views/Chocolate_Sales_G17/CustomerDashboard" },
      { label: "Store dashboard", url: "https://public.tableau.com/views/Chocolate_Sales_G17/StoreDashboard" },
    ],
  },
  {
    id: "snapfree",
    filter: "APPS",
    category: "macOS App",
    title: "SnapFree",
    description:
      "A fast, native macOS screenshot and screen-recording app built with SwiftUI and ScreenCaptureKit. Capture a selected area, window or the full screen, stitch scrolling captures into one tall image, or record the screen with optional system audio, microphone and a picture-in-picture face cam. A built-in editor handles annotations, and OCR extracts text from captures. It lives in the menu bar for quick access.",
    tech: "Swift · SwiftUI · AppKit · ScreenCaptureKit · AVFoundation",
    services: [
      "Screenshots & scrolling capture",
      "Screen recording",
      "Annotation editor",
      "OCR text extraction",
    ],
    year: "2026",
    image: "/projects/snapfree.png",
    gallery: [],
    link: "https://github.com/sakshaaamm/SnapFree",
    links: [
      { label: "View on GitHub", url: "https://github.com/sakshaaamm/SnapFree" },
      { label: "Download latest release", url: "https://github.com/sakshaaamm/SnapFree/releases/latest" },
    ],
  },
];
