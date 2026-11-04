
// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiPython, SiPytorch, SiTensorflow, SiKeras, SiScikitlearn,
  SiPandas, SiNumpy, SiHuggingface, SiLangchain, SiOpenai,
  SiFastapi, SiDocker, SiKubernetes, SiGit, SiLinux,
  SiPostgresql, SiMongodb, SiRedis,
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs,
  SiJupyter, SiStreamlit, SiOllama, SiNvidia, SiGooglecloud, SiVercel, SiGithub,
} from "react-icons/si";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "Building",
  line2: "intelligent",
  line3: "systems.",   // ghost (outline) style
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I am an *AI engineer* focused on turning machine learning ideas into *reliable, useful products*. I work across the stack, from *data pipelines* and *model training* to *APIs* and *interfaces* that people actually enjoy using.",
  "My interests sit around *large language models*, *retrieval and agents*, and *applied machine learning*. I care about systems that are *measurable*, *properly evaluated*, and honest about what they can and cannot do.",
  "I like building things end to end: *cleaning the data*, *choosing the right model*, *evaluating it carefully*, and *shipping it* behind a fast, well designed product. Good engineering and *clear design* matter as much as model accuracy.",
  "This portfolio is a work in progress. *Projects*, *experience* and *writing* will be added here as they are ready. If you want to build something with AI, *get in touch*.",
];

// Set NEXT_PUBLIC_RESUME_URL (or drop a file at public/resume.pdf and use "/resume.pdf").
// While empty, the "View Resume" button is hidden.
export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "";

export const TECH = [
  { name: "Python",        icon: SiPython },
  { name: "PyTorch",       icon: SiPytorch },
  { name: "TensorFlow",    icon: SiTensorflow },
  { name: "Keras",         icon: SiKeras },
  { name: "scikit-learn",  icon: SiScikitlearn },
  { name: "Pandas",        icon: SiPandas },
  { name: "NumPy",         icon: SiNumpy },
  { name: "Hugging Face",  icon: SiHuggingface },
  { name: "LangChain",     icon: SiLangchain },
  { name: "OpenAI API",    icon: SiOpenai },
  { name: "FastAPI",       icon: SiFastapi },
  { name: "Node.js",       icon: SiNodedotjs },
  { name: "TypeScript",    icon: SiTypescript },
  { name: "React",         icon: SiReact },
  { name: "Next.js",       icon: SiNextdotjs },
  { name: "PostgreSQL",    icon: SiPostgresql },
  { name: "MongoDB",       icon: SiMongodb },
  { name: "Redis",         icon: SiRedis },
  { name: "Docker",        icon: SiDocker },
  { name: "Kubernetes",    icon: SiKubernetes },
  { name: "Linux",         icon: SiLinux },
  { name: "Git",           icon: SiGit },
];

// Shown under "Tools & Platforms"
export const CREATIVE = [
  { name: "Jupyter",       icon: SiJupyter },
  { name: "Streamlit",     icon: SiStreamlit },
  { name: "Ollama",        icon: SiOllama },
  { name: "CUDA",          icon: SiNvidia },
  { name: "Google Cloud",  icon: SiGooglecloud },
  { name: "Vercel",        icon: SiVercel },
  { name: "GitHub",        icon: SiGithub },
];

// Placeholder until you add real experience.
export const EXPERIENCE = [
  { role: "Details coming soon", period: "—" },
];
