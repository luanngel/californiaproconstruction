import { useEffect, useState } from "react";

import projectImg001 from "../../assets/construccion.jpg";
import projectImg002 from "../../assets/arlberca.jpg";
import projectImg003 from "../../assets/construccion2.jpg";
import projectImg004 from "../../assets/porton.jpg";
import projectImg005 from "../../assets/rejas.jpg";
import projectImg006 from "../../assets/escaleras.jpg";

const O = "#FF8C00";

type Project = {
  id: string;
  category: string;
  title: string;
  desc: string;
  specs?: { k: string; v: string }[];
  image: string;
};

const projects: Project[] = [
  {
    id: "p1",
    category: "New Construction",
    title: "Residential Construction Project",
    desc: "Full residential build — foundation, framing, and structural work completed to code and on schedule.",
    image: projectImg001,
    specs: [
      { k: "Type",   v: "New residential build" },
      { k: "Scope",  v: "Full structural work" },
      { k: "Status", v: "Completed on schedule" },
    ],
  },
  {
    id: "p2",
    category: "Outdoor Construction",
    title: "Custom Pool & Outdoor Build",
    desc: "Complete outdoor construction including pool, hardscape, and surrounding structural work.",
    image: projectImg002,
    specs: [
      { k: "Type",     v: "Outdoor & pool build" },
      { k: "Includes", v: "Hardscape & structure" },
      { k: "Finish",   v: "Full turnkey delivery" },
    ],
  },
  {
    id: "p3",
    category: "Commercial Build",
    title: "Commercial Construction Project",
    desc: "Commercial build-out with structural framing, concrete work, and full coordination of all trades.",
    image: projectImg003,
    specs: [
      { k: "Type",   v: "Commercial build-out" },
      { k: "Scope",  v: "Structural + finishing" },
      { k: "Permit", v: "Fully permitted" },
    ],
  },
  {
    id: "p4",
    category: "Custom Gate",
    title: "Heavy-Duty Entry Gate Installation",
    desc: "Custom fabricated entry gate built from structural steel — designed for security, durability, and curb appeal.",
    image: projectImg004,
    specs: [
      { k: "Material", v: "Structural steel" },
      { k: "Type",     v: "Swing entry gate" },
      { k: "Finish",   v: "Protective coating" },
    ],
  },
  {
    id: "p5",
    category: "Iron Fencing",
    title: "Custom Ornamental Iron Fence",
    desc: "Ornamental iron fence with vertical pickets fabricated and installed for security and a clean street presence.",
    image: projectImg005,
    specs: [
      { k: "Style",    v: "Vertical picket design" },
      { k: "Material", v: "Iron construction" },
      { k: "Finish",   v: "Black outdoor coating" },
    ],
  },
  {
    id: "p6",
    category: "Metal Stairs",
    title: "Metal Staircase & Railing",
    desc: "Custom steel staircase with matching railing — fabricated to spec and installed safely to California building codes.",
    image: projectImg006,
    specs: [
      { k: "Type",   v: "Steel staircase" },
      { k: "Railing", v: "Custom metal rail" },
      { k: "Code",   v: "CBC compliant" },
    ],
  },
];

/* ─── desktop grid layout positions ─────────────────────────────────── */
const desktopLayout: { col: string; row: string }[] = [
  { col: "1 / 3", row: "1 / 3" }, // P1 — featured 2×2
  { col: "3",     row: "1"      }, // P2
  { col: "3",     row: "2"      }, // P3
  { col: "1",     row: "3"      }, // P4
  { col: "2",     row: "3"      }, // P5
  { col: "3",     row: "3"      }, // P6
];

/* ─── photo card ─────────────────────────────────────────────────────── */
function PhotoCard({
  p,
  featured,
  onOpen,
}: {
  p: Project;
  featured?: boolean;
  onOpen: (id: string) => void;
}) {
  const [hov, setHov] = useState(false);

  return (
    <button
      type="button"
      className="group relative block h-full w-full overflow-hidden"
      onClick={() => onOpen(p.id)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`View ${p.title}`}
    >
      {/* photo */}
      <img
        src={p.image}
        alt={p.title}
        className="h-full w-full object-cover"
        style={{
          transform: hov ? "scale(1.07)" : "scale(1.02)",
          transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />

      {/* permanent bottom gradient — category + title always visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.28) 40%, transparent 70%)",
          transition: "opacity 0.35s ease",
          opacity: hov ? 0 : 1,
        }}
      />

      {/* always-visible label */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5"
        style={{
          opacity: hov ? 0 : 1,
          transform: hov ? "translateY(6px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <span
          className="mb-2 inline-block px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white"
          style={{ backgroundColor: O }}
        >
          {p.category}
        </span>
        <h3
          className="mt-2 font-bold leading-snug text-white"
          style={{ fontSize: featured ? 20 : 15 }}
        >
          {p.title}
        </h3>
      </div>

      {/* hover overlay — full detail */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{
          background:
            "linear-gradient(to top, rgba(6,6,6,0.97) 0%, rgba(6,6,6,0.72) 45%, rgba(0,0,0,0.18) 100%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        <div
          className="p-5 lg:p-6"
          style={{
            transform: hov ? "none" : "translateY(14px)",
            transition: "transform 0.35s ease",
          }}
        >
          <span
            className="inline-block px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white"
            style={{ backgroundColor: O }}
          >
            {p.category}
          </span>

          <h3
            className="mt-3 font-bold leading-snug text-white"
            style={{ fontSize: featured ? 22 : 16 }}
          >
            {p.title}
          </h3>

          <p
            className="mt-2 leading-relaxed text-white/60"
            style={{ fontSize: featured ? 13 : 11.5 }}
          >
            {p.desc}
          </p>

          {p.specs && (
            <div
              className="mt-4 grid grid-cols-3 gap-x-2 gap-y-1 border-t pt-4"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              {p.specs.map((s) => (
                <div key={s.k}>
                  <p style={{ fontSize: 9, fontWeight: 800, color: O, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {s.k}
                  </p>
                  <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div
            className="mt-4 flex items-center gap-1.5"
            style={{ fontSize: 10, fontWeight: 800, color: O, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            <span>View full photo</span>
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* orange top bar on hover */}
      <div
        className="absolute left-0 right-0 top-0 h-[3px] origin-left transition-transform duration-500"
        style={{
          backgroundColor: O,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </button>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   SECTION
══════════════════════════════════════════════════════════════════════ */
export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const openProject = openProjectId
    ? projects.find((p) => p.id === openProjectId) ?? null
    : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenProjectId(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openProjectId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openProjectId]);

  return (
    <>
      <section id="proyectos" className="relative overflow-hidden bg-black px-6 py-24">
        {/* bg grid */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:repeating-linear-gradient(0deg,transparent,transparent_80px,rgba(255,140,0,0.1)_80px,rgba(255,140,0,0.1)_81px),repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,140,0,0.1)_80px,rgba(255,140,0,0.1)_81px)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">

          {/* ── header ── */}
          <div className="text-center">
            <h2 style={{
              margin: "24px 0 0",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textTransform: "uppercase",
            }}>
              Featured <span style={{ color: "#FF8C00" }}>Projects</span>
            </h2>
            <p style={{
              margin: "20px auto 0",
              maxWidth: 600,
              fontSize: 15,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
            }}>
              A sample of our custom ironwork and construction projects — every piece built in-house and installed by our team.
            </p>
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
              <div className="h-2 w-2 rotate-45 bg-orange-500" />
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
          </div>

          {/* ── desktop asymmetric grid (lg+) ── */}
          <div
            className="mt-16 hidden lg:grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 300px)",
              gap: 8,
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.id}
                style={{
                  gridColumn: desktopLayout[i].col,
                  gridRow:    desktopLayout[i].row,
                }}
              >
                <PhotoCard
                  p={p}
                  featured={i === 0}
                  onOpen={setOpenProjectId}
                />
              </div>
            ))}
          </div>

          {/* ── mobile / tablet grid (< lg) ── */}
          <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:hidden">
            {projects.map((p) => (
              <div key={p.id} style={{ height: 280 }}>
                <PhotoCard p={p} onOpen={setOpenProjectId} />
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ── lightbox ── */}
      {openProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* backdrop */}
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setOpenProjectId(null)}
          />

          <div className="relative mx-auto w-full max-w-5xl px-4">
            {/* close */}
            <button
              type="button"
              onClick={() => setOpenProjectId(null)}
              className="absolute -top-12 right-4 z-10 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 text-white transition hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* image */}
            <img
              src={openProject.image}
              alt={openProject.title}
              className="mx-auto block max-h-[82vh] w-auto max-w-full object-contain"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.8)" }}
            />

            {/* caption */}
            <div className="mt-5 flex items-center justify-center gap-3 text-sm">
              <span
                className="px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white"
                style={{ backgroundColor: O }}
              >
                {openProject.category}
              </span>
              <span className="font-semibold text-white">{openProject.title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
