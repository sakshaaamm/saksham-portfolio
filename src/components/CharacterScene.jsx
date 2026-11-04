"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Fixed home-page background: your character in a blue-lit scene.
// It replaces the old 3D video (VideoScrub.jsx, still in the repo) because that video has
// the previous owner's character baked into every frame.
//
// POSES: where the character sits while each section is on screen. x / y are in vw / vh,
// opacity dims it where text sits on top of it. Between sections it eases to the next pose.
// Desktop layout starts at 1024px (same breakpoint as the .scene-* rules in globals.css).
const POSES_DESKTOP = [
  { id: null,              x: 0, y: 0, scale: 1,    opacity: 1    }, // hero: text left, character right
  { id: "about-section",   x: 2, y: 3, scale: 0.94, opacity: 0.2  }, // skills list sits on top of it
  { id: "work-section",    x: 0, y: 0, scale: 1,    opacity: 0.85 }, // right side is free next to the projects
  { id: "contact-section", x: 2, y: 3, scale: 0.94, opacity: 0.22 }, // "Let's build something cool" sits on top
];
const POSES_MOBILE = [
  { id: null,              x: 0, y: 0, scale: 1,    opacity: 0.42 },
  { id: "about-section",   x: 0, y: 4, scale: 0.95, opacity: 0.16 },
  { id: "work-section",    x: 0, y: 0, scale: 1,    opacity: 0.3  },
  { id: "contact-section", x: 0, y: 4, scale: 0.95, opacity: 0.16 },
];
const KEYS = ["x", "y", "scale", "opacity"];

// Floating shapes (like the ring / sphere / cube in the old video). speed = how much they bob while scrolling.
const SHAPES = [
  { cls: "scene-shape-sphere", float: "scene-float-a", amp: 34, rot: 0,     phase: 0   },
  { cls: "scene-shape-cube",   float: "scene-float-b", amp: 26, rot: 0.012, phase: 1.7 },
  { cls: "scene-shape-ring",   float: "scene-float-c", amp: 40, rot: -0.01, phase: 3.1 },
];

const smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

export default function CharacterScene() {
  const charRef = useRef(null);
  const glowRef = useRef(null);
  const shapeRefs = useRef([]);

  useEffect(() => {
    const char = charRef.current;
    const glow = glowRef.current;
    if (!char) return;

    const desktopMq = window.matchMedia("(min-width: 1024px)");
    let poses = POSES_MOBILE;
    let bounds = [];
    let half = 1;
    let raf = 0;

    // Scroll positions where each next section's top reaches the middle of the screen.
    const measure = () => {
      const vh = window.innerHeight;
      poses = desktopMq.matches ? POSES_DESKTOP : POSES_MOBILE;
      half = vh * 0.35; // the hand-off between two poses takes 70% of a screen of scrolling
      bounds = poses.slice(1).map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY - vh * 0.5 : Infinity;
      });
      schedule();
    };

    const draw = () => {
      raf = 0;
      const y = window.scrollY;
      const p = { ...poses[0] };
      bounds.forEach((b, k) => {
        const t = smooth((y - (b - half)) / (2 * half));
        if (t) for (const key of KEYS) p[key] += (poses[k + 1][key] - poses[k][key]) * t;
      });
      char.style.transform = `translate3d(${p.x}vw, ${p.y}vh, 0) scale(${p.scale})`;
      char.style.opacity = p.opacity.toFixed(3);
      if (glow) glow.style.opacity = (0.55 + 0.45 * Math.min(1, p.opacity / poses[0].opacity)).toFixed(3);
      shapeRefs.current.forEach((el, i) => {
        if (!el) return;
        const s = SHAPES[i];
        el.style.transform = `translate3d(0, ${(Math.sin(y / 650 + s.phase) * s.amp).toFixed(1)}px, 0) rotate(${(y * s.rot).toFixed(2)}deg)`;
      });
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(draw); };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    desktopMq.addEventListener("change", measure);
    // sections change height when fonts, images or projects load
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      desktopMq.removeEventListener("change", measure);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a] pointer-events-none select-none" aria-hidden="true">
      {/* blue light behind the character */}
      <div ref={glowRef} className="scene-glow absolute inset-0" />

      {/* floating shapes (behind the character) */}
      {SHAPES.map((s, i) => (
        <div key={s.cls} ref={(el) => { shapeRefs.current[i] = el; }} className={`scene-shape ${s.cls}`}>
          <div className={`scene-shape-inner ${s.float}`}>
            {s.cls === "scene-shape-cube" ? (
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="scene-cube-side" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0a101d" />
                    <stop offset="1" stopColor="#1e3f8a" />
                  </linearGradient>
                </defs>
                <polygon points="50,6 92,28 50,50 8,28" fill="#17223b" />
                <polygon points="8,28 50,50 50,96 8,74" fill="#090e19" />
                <polygon points="92,28 50,50 50,96 92,74" fill="url(#scene-cube-side)" />
                <path d="M50 6 L92 28 L92 74 L50 96 L8 74 L8 28 Z M8 28 L50 50 L92 28 M50 50 L50 96"
                  fill="none" stroke="rgba(96,165,250,0.35)" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            ) : (
              <div className={s.cls === "scene-shape-ring" ? "scene-ring" : "scene-sphere"} />
            )}
          </div>
        </div>
      ))}

      {/* the character */}
      <div className="scene-char-pos">
        <div ref={charRef} className="scene-char-move">
          <div className="scene-enter w-full h-full">
            <Image
              src="/photo/saksham-character.webp"
              alt=""
              width={816}
              height={1520}
              priority
              draggable={false}
              sizes="(min-width: 1024px) 26vw, 80vw"
              className="scene-char-img"
            />
          </div>
        </div>
      </div>

      {/* same readability shading the old video used */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
    </div>
  );
}
