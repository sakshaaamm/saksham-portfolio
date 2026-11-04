// ─────────────────────────────────────────────
//  SITE IDENTITY — single source of truth
//  Change the name / role here and set the env vars in .env.local.
// ─────────────────────────────────────────────

export const SITE = {
  name: "Saksham",
  role: "AI Engineer",
  handle: "saksham",
  tagline: "AI Engineer building intelligent software",
  description:
    "Saksham is an AI engineer who builds applied machine learning and language-model products, from data pipelines and evaluation to APIs and clean interfaces.",

  // Set NEXT_PUBLIC_SITE_URL once you have a domain. Falls back to localhost.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),

  // Public contact details (override with NEXT_PUBLIC_CONTACT_EMAIL / NEXT_PUBLIC_CONTACT_PHONE).
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "narotrasaksham0@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 70186 72122",
};

export const SITE_TITLE = `${SITE.name} — ${SITE.role}`;

// Phone in tel: link format, e.g. "+917018672122"
export const PHONE_HREF = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
