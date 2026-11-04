"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FiArrowRight, FiSend, FiCheck } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  EXP_SECTION, EXP_TABS, CREDENTIALS, GROWTH_CAMPAIGNS, EXP_TALK,
} from "@/app/experience/content";

export default function ExperiencePage() {
  const ref = useRef(null);
  const [tab, setTab] = useState(EXP_TABS[0].id);

  // "let people talk" form state
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [message, setMsg]   = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ex-label", { y: 18, opacity: 0, duration: 0.5, delay: 0.2 });
      gsap.from(".ex-h",     { y: 50, opacity: 0, duration: 0.8, ease: "power4.out", delay: 0.35 });
      gsap.from(".ex-sub",   { y: 20, opacity: 0, duration: 0.6, delay: 0.55 });
      gsap.from(".ex-tabs",  { y: 20, opacity: 0, duration: 0.6, delay: 0.7 });
    }, ref);
    return () => ctx.revert();
  }, []);

  // animate the panel each time the tab changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ex-card", { y: 28, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out" });
    }, ref);
    return () => ctx.revert();
  }, [tab]);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const whatsapp = () => {
    const num = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
    if (!num) { alert("WhatsApp isn't set up yet. Please use the form instead."); return; }
    const text = encodeURIComponent(
      `Hi Saksham! I'm interested in your AI Interviewer / AI Mentor. ${message ? "\n\n" + message : ""}`
    );
    window.open(`https://wa.me/${num}?text=${text}`, "_blank");
  };

  const field =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#3b6ef5]/60 transition-colors text-sm";

  return (
    <section ref={ref} className="relative w-full min-h-dvh overflow-x-hidden">
      <div className="max-w-[1150px] mx-auto px-5 md:px-14 pt-28 md:pt-[16vh] pb-24">

        {/* Header */}
        <p className="ex-label text-[10px] md:text-xs text-[#3b6ef5] tracking-[0.5em] uppercase font-bold mb-5">
          {EXP_SECTION.label}
        </p>
        <h1 className="ex-h font-black tracking-tighter leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}>
          <span className="block text-white">{EXP_SECTION.heading1}</span>
          <span className="block ghost">{EXP_SECTION.heading2}</span>
        </h1>
        <p className="ex-sub max-w-xl text-sm md:text-base text-white/50 font-light leading-relaxed mb-10">
          {EXP_SECTION.subtitle}
        </p>

        {/* Tabs */}
        <div className="ex-tabs inline-flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl mb-12">
          {EXP_TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 md:px-6 py-2.5 rounded-xl text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                tab === t.id
                  ? "bg-[#1d4ed8] text-white"
                  : "text-white/45 hover:text-white/80"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── TAB 1: Experience & Credentials ── */}
        {tab === "credentials" && (
          <div>
            {CREDENTIALS.length === 0 ? (
              <div className="ex-card border border-white/10 rounded-3xl p-10 md:p-14 bg-white/[0.02] text-center">
                <p className="text-white/70 text-lg md:text-xl font-semibold mb-2">
                  Building real experience right now.
                </p>
                <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
                  Roles, internships and certifications will appear here as they land. In the
                  meantime, the growth strategy tab shows what I'm actively building.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {CREDENTIALS.map((c, i) => (
                  <div key={i} className="ex-card border-l-2 border-[#3b6ef5]/40 pl-5 py-3">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="text-white font-bold text-base md:text-lg">{c.role}</h3>
                      <span className="text-white/40 text-xs tracking-widest uppercase">{c.period}</span>
                    </div>
                    {c.org && <p className="text-[#3b6ef5] text-sm mt-0.5">{c.org}</p>}
                    {c.note && <p className="text-white/45 text-sm mt-2 leading-relaxed">{c.note}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: Growth Strategy — two campaigns ── */}
        {tab === "growth" && (
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6">
              Two AI products I'm building
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {GROWTH_CAMPAIGNS.map((c) => (
                <div
                  key={c.code}
                  className="ex-card group relative border border-white/10 hover:border-[#3b6ef5]/40 rounded-3xl p-7 md:p-8 bg-white/[0.02] transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#3b6ef5]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3b6ef5]/15 text-[#3b6ef5] flex items-center justify-center">
                      <c.icon size={22} />
                    </div>
                    <span className="text-[10px] text-white/30 tracking-[0.3em] font-mono">{c.code}</span>
                  </div>
                  <h3 className="relative text-xl md:text-2xl font-black tracking-tight text-white mb-1">{c.title}</h3>
                  <p className="relative text-[#3b6ef5] text-xs font-bold uppercase tracking-widest mb-4">{c.tagline}</p>
                  <p className="relative text-white/50 text-sm leading-relaxed mb-6">{c.description}</p>
                  <div className="relative flex gap-2 flex-wrap">
                    {c.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-white/50 tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── After both steps: let people talk ── */}
        <div className="mt-20 pt-14 border-t border-white/10 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-[10px] text-[#3b6ef5] tracking-[0.5em] uppercase font-bold mb-4">
              {EXP_TALK.label}
            </p>
            <h2 className="font-black tracking-tighter leading-[0.95] mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              <span className="text-white">{EXP_TALK.heading}</span>
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm">{EXP_TALK.subtitle}</p>
          </div>

          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-3 border border-[#3b6ef5]/30 rounded-2xl p-7 bg-[#3b6ef5]/5">
                <div className="w-12 h-12 rounded-full bg-[#3b6ef5]/15 flex items-center justify-center">
                  <FiCheck size={22} className="text-[#3b6ef5]" />
                </div>
                <p className="text-white font-bold">Message sent!</p>
                <p className="text-white/40 text-sm">Thanks for reaching out — I'll reply soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3">
                <input suppressHydrationWarning className={field} placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
                <input suppressHydrationWarning className={field} type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea suppressHydrationWarning className={field + " resize-none"} rows={4} placeholder="Tell me what you're interested in…" required value={message} onChange={(e) => setMsg(e.target.value)} />
                {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Try again.</p>}
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  <button
                    suppressHydrationWarning
                    type="submit"
                    disabled={status === "sending"}
                    className="flex-1 py-3.5 bg-[#1d4ed8] text-white font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <FiSend size={14} />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                  <button
                    suppressHydrationWarning
                    type="button"
                    onClick={whatsapp}
                    className="shrink-0 py-3.5 px-5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-[#25D366] hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <IoLogoWhatsapp size={16} />
                    WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
