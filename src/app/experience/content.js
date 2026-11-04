// ─────────────────────────────────────────────
//  EXPERIENCE PAGE — edit everything here
// ─────────────────────────────────────────────
import { FiCpu, FiUsers } from "react-icons/fi";

export const EXP_SECTION = {
  label: "Experience",
  heading1: "Experience and",
  heading2: "Growth Mindset",     // ghost (outline) style
  subtitle:
    "Two lenses on the journey — the credentials earned so far, and the growth plays now being engineered.",
};

// The two tabs under the heading.
export const EXP_TABS = [
  { id: "credentials", label: "Experience & Credentials" },
  { id: "growth",      label: "Growth Strategy" },
];

// ── TAB 1: Experience & Credentials ──
// Add real roles / certs here as you earn them. Leave the array as-is to show
// a single "more coming soon" note.
export const CREDENTIALS = [
  // { role: "Machine Learning Intern", org: "Company", period: "2025", note: "What you did." },
];

// ── TAB 2: Growth Strategy — the two campaigns (C-01, C-02) ──
export const GROWTH_CAMPAIGNS = [
  {
    code: "C-01",
    icon: FiCpu,
    title: "AI Interviewer",
    tagline: "Learn from AI",
    description:
      "An AI that runs realistic mock interviews, asks follow-up questions, and gives honest, structured feedback so you can practise and improve on your own schedule.",
    tags: ["Mock Interviews", "Instant Feedback", "Learn from AI"],
  },
  {
    code: "C-02",
    icon: FiUsers,
    title: "AI Mentor",
    tagline: "One-on-one AI mentorship",
    description:
      "A personal AI mentor that guides you one on one — it understands your goals, suggests a path, and keeps you accountable as you build real skills.",
    tags: ["1:1 Mentorship", "Personalised Path", "Accountability"],
  },
];

// Heading for the "let people talk" section that follows the two campaigns.
export const EXP_TALK = {
  label: "Let's Talk",
  heading: "Want to try these out?",
  subtitle:
    "Interested in the AI Interviewer or AI Mentor, or just want to talk about building with AI? Drop a message and I'll get back to you.",
};
