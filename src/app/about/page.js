import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/site";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About",
  description: "Meet Saksham — an AI engineer building applied machine learning and language-model products, from data pipelines and evaluation to APIs and interfaces.",
  keywords:    ["AI engineer", "machine learning engineer", "LLM applications", "applied machine learning", "Saksham"],
  alternates:  { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Saksham — AI Engineer",
    description: "AI engineer focused on applied machine learning and language-model products.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
