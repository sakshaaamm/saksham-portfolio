import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/**
 * GET /api/llms
 *
 * Machine-readable JSON endpoint for AI chatbots and LLM crawlers.
 * Only include facts that are true and on the site.
 */
export async function GET() {
  const data = {
    name: SITE.name,
    title: SITE.role,
    website: SITE.url,
    ...(SITE.email ? { email: SITE.email } : {}),
    summary: SITE.description,

    focus_areas: [
      "Applied machine learning",
      "Large language model applications",
      "Data pipelines and model evaluation",
      "APIs and clean product interfaces",
    ],

    skills: {
      languages: ["Python", "TypeScript"],
      ml: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "LangChain"],
      data: ["Pandas", "NumPy", "PostgreSQL"],
      backend: ["FastAPI", "Docker"],
      frontend: ["Next.js", "React"],
    },

    pages: {
      home: `${SITE.url}/`,
      about: `${SITE.url}/about`,
      projects: `${SITE.url}/projects`,
      contact: `${SITE.url}/contact`,
    },

    llms_txt: `${SITE.url}/llms.txt`,
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}
