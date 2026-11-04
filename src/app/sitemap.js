import { createClient } from "@supabase/supabase-js";
import { SITE } from "@/lib/site";

const BASE = SITE.url;

export default async function sitemap() {
  const staticPages = [
    { url: BASE,                       lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/projects`,         lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/experience`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/contact`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.75 },
  ];

  let projectPages = [];

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // ── Project pages ─────────────────────────────────────────────────
    const { data: projects } = await supabase
      .from("projects")
      .select("id, updated_at")
      .order("created_at", { ascending: false });

    if (projects) {
      projectPages = projects.map((p) => ({
        url: `${BASE}/project/${p.id}`,
        lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      }));
    }
  } catch {
    // DB unreachable — serve static pages only
  }

  return [...staticPages, ...projectPages];
}
