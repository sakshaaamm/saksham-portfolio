"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION } from "@/app/work/content";

gsap.registerPlugin(ScrollTrigger);

const ICON_CLASS = "w-8 h-8 opacity-20 group-hover:opacity-60 transition-opacity duration-500";

const CATEGORIES = [
  {
    num: "01",
    label: "Machine Learning",
    title: "Applied Machine Learning",
    description:
      "Training, evaluating, and improving models for real problems, with clear metrics and honest results.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className={ICON_CLASS}>
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="30" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="32" cy="20" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 11l6 7M11 29l6-7M23 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    href: "/projects",
  },
  {
    num: "02",
    label: "LLM Applications",
    title: "Language Model Products",
    description:
      "Retrieval, agents, and assistants built on language models, designed to be useful, testable, and safe to rely on.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className={ICON_CLASS}>
        <path d="M6 9h28a2 2 0 012 2v16a2 2 0 01-2 2H20l-8 6v-6H6a2 2 0 01-2-2V11a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 16h16M12 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    href: "/projects",
  },
  {
    num: "03",
    label: "Data & Deployment",
    title: "Data Pipelines & Shipping",
    description:
      "Clean data, reproducible pipelines, and APIs that take a model from a notebook to something people can use.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className={ICON_CLASS}>
        <ellipse cx="20" cy="10" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10v10c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V10M8 20v10c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    href: "/projects",
  },
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="work-section"
      className="relative w-full min-h-screen px-10 md:px-20 pt-64 pb-72 flex flex-col justify-center"
    >
      <div className="max-w-4xl w-full">

        {/* Header and Filters */}
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#3b6ef5] tracking-[0.5em] uppercase mb-4 font-medium">
            {SECTION.label}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              {SECTION.heading}
            </h2>

            {/* Focus-area pills */}
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {["Machine Learning", "LLM Apps", "Data & MLOps"].map((cat) => (
                <Link
                  key={cat}
                  href="/projects"
                  className="px-4 py-2 rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-transparent text-white/40 border border-white/10 hover:text-white hover:border-white/30"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Category Cards */}
        <div className="flex flex-col">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.num}
              href={cat.href}
              className="work-item group relative flex items-start gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3b6ef5] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

              {/* Number */}
              <div className="pl-3 shrink-0 w-8 pt-1">
                <span className="font-mono text-[10px] text-white/20 group-hover:text-[#3b6ef5] tracking-widest transition-colors duration-300">
                  {cat.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                <p className="font-sans text-[10px] text-white/30 group-hover:text-[#3b6ef5]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                  {cat.label}
                </p>
                <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter mb-3 group-hover:text-white transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-2xl transition-colors duration-300">
                  {cat.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] text-white/20 group-hover:text-white/55 tracking-widest uppercase transition-colors duration-200">
                  View Projects
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </div>

              {/* Icon */}
              <div className="hidden md:flex shrink-0 items-center pt-2 text-white">
                {cat.icon}
              </div>
            </Link>
          ))}

          {/* 4th item — View Full Projects CTA */}
          <Link
            href="/projects"
            className="work-item group relative flex items-center gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#3b6ef5] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="pl-3 shrink-0 w-8">
              <span className="font-mono text-[10px] text-white/20 group-hover:text-[#3b6ef5] tracking-widest transition-colors duration-300">→</span>
            </div>
            <div className="flex-1 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
              <p className="font-sans text-[10px] text-white/30 group-hover:text-[#3b6ef5]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                Full Portfolio
              </p>
              <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter group-hover:text-white transition-colors duration-300">
                View All Projects
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 group-hover:text-[#3b6ef5] transition-colors duration-300 pr-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
