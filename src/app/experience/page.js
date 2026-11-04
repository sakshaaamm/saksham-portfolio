import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/site";
import ExperiencePage from "@/views/experience";

export const metadata = {
  title:       "Experience",
  description: "Saksham's experience and growth mindset — credentials earned so far, plus the AI products being built: an AI Interviewer and an AI Mentor.",
  keywords:    ["AI engineer experience", "AI interviewer", "AI mentor", "Saksham", "growth mindset"],
  alternates:  { canonical: `${SITE.url}/experience` },
  openGraph: {
    title: "Experience — Saksham | AI Engineer",
    description: "Credentials and the AI products I'm building: an AI Interviewer and a one-on-one AI Mentor.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <ExperiencePage />
    </PageShell>
  );
}
