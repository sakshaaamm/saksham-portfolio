import { SITE, SITE_TITLE } from "@/lib/site";

/**
 * SeoContent — visually hidden semantic HTML for search engines & AI crawlers.
 * Keep this factual: only describe what is actually on the site.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">{SITE_TITLE}</h1>

      <p itemProp="description">{SITE.description}</p>

      <p itemProp="jobTitle">{SITE.role}</p>

      <section aria-label="Focus areas">
        <h2>What {SITE.name} works on</h2>
        <ul>
          <li>Applied machine learning</li>
          <li>Large language model applications</li>
          <li>Data pipelines and model evaluation</li>
          <li>APIs and clean product interfaces</li>
        </ul>
      </section>

      <section aria-label="Technical skills">
        <h2>Technical skills</h2>
        <p itemProp="knowsAbout">
          Python, PyTorch, TensorFlow, scikit-learn, Pandas, NumPy, Hugging Face, LangChain,
          FastAPI, Docker, PostgreSQL, Next.js, React, TypeScript, Git
        </p>
      </section>

      <section aria-label="Contact">
        <h2>Contact {SITE.name}</h2>
        <p>
          <span itemProp="url">{SITE.url}</span>
          {SITE.email ? <> | <span itemProp="email">{SITE.email}</span></> : null}
        </p>
      </section>
    </div>
  );
}
