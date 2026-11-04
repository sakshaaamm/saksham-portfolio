import { Suspense } from "react";
import { SITE } from "@/lib/site";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects",
  description: "Selected AI and machine learning projects by Saksham. New work is being added.",
  keywords:    ["AI projects", "machine learning projects", "LLM applications", "portfolio"],
  alternates:  { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: "Projects — Saksham | Selected Work",
    description: "Selected AI and machine learning projects by Saksham.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
