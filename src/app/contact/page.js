import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/site";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact",
  description: "Get in touch with Saksham to talk about AI, machine learning, or language-model projects.",
  keywords:    ["hire AI engineer", "machine learning consultant", "LLM developer", "contact Saksham"],
  alternates:  { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Saksham — AI Engineer",
    description: "Reach out to Saksham about AI and machine learning projects.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
