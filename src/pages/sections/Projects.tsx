import { useEffect, useState } from "react";

import projectImg001 from "../../assets/001.jpg";
import projectImg002 from "../../assets/002.jpg";
import projectImg003 from "../../assets/003.jpg";
import projectImg004 from "../../assets/004.jpg";
import projectImg005 from "../../assets/005.jpg";
import projectImg006 from "../../assets/006.jpg";

type Project = {
  id: string;
  category: string;
  title: string;
  desc: string;
  icon: string;
  specs?: { k: string; v: string }[];
  image?: string;
};

const projects: Project[] = [
  {
    id: "p1",
    category: "Sliding Driveway Gate",
    title: "Modern Horizontal Steel Sliding Gate",
    desc: "Custom steel sliding driveway gate with horizontal slats, built for privacy, smooth operation, and a clean modern look.",
    icon: "🏗️",
    image: projectImg001,
    specs: [
      { k: "Style", v: "Horizontal slat design" },
      { k: "Material", v: "Steel construction" },
      { k: "Finish", v: "Matte black coating" },
    ],
  },
  {
    id: "p2",
    category: "Security Door",
    title: "Decorative Wrought Iron Security Door",
    desc: "Heavy-duty security door with decorative scrollwork and a reinforced frame, designed to improve safety without sacrificing curb appeal.",
    icon: "🛡️",
    image: projectImg002,
    specs: [
      { k: "Design", v: "Ornamental scrollwork" },
      { k: "Build", v: "Reinforced steel frame" },
      { k: "Finish", v: "Black protective coating" },
    ],
  },
  {
    id: "p3",
    category: "Driveway Gate + Walk Gate",
    title: "Horizontal Privacy Gate with Side Entry Door",
    desc: "Custom horizontal-slat driveway gate with a matching pedestrian access door for daily entry and secure vehicle access.",
    icon: "🚪",
    image: projectImg003,
    specs: [
      { k: "System", v: "Drive gate + walk gate" },
      { k: "Style", v: "Modern horizontal slats" },
      { k: "Finish", v: "Durable outdoor coating" },
    ],
  },
  {
    id: "p4",
    category: "Ornamental Iron Fence",
    title: "Custom Iron Fence with Decorative Details",
    desc: "Ornamental iron fencing featuring spear-top pickets and scroll accents, fabricated for strength, security, and classic style.",
    icon: "🧱",
    image: projectImg004,
    specs: [
      { k: "Top", v: "Spear picket finials" },
      { k: "Detail", v: "Decorative scroll band" },
      { k: "Mount", v: "Post base plate anchored" },
    ],
  },
  {
    id: "p5",
    category: "Interior Railings",
    title: "Modern Stair Railing Installation",
    desc: "Clean, modern interior stair railing with horizontal bars—installed for safety, code-friendly function, and a sleek finish.",
    icon: "🏠",
    image: projectImg005,
    specs: [
      { k: "Application", v: "Stairs + landing guardrail" },
      { k: "Style", v: "Modern horizontal bars" },
      { k: "Finish", v: "Black powder-style coating" },
    ],
  },
  {
    id: "p6",
    category: "Custom Entry Gate",
    title: "Arched Decorative Front Entry Gate",
    desc: "Custom arched entry gate with circular accents and vertical pickets—built to enhance the home’s entrance with security and style.",
    icon: "✨",
    image: projectImg006,
    specs: [
      { k: "Shape", v: "Arched top design" },
      { k: "Detail", v: "Circular ornamental accents" },
      { k: "Finish", v: "Outdoor-grade white coating" },
    ],
  },
];

function scrollToId(id: string, offset = 90) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // ✅ Lightbox state
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const openProject = openProjectId
    ? projects.find((p) => p.id === openProjectId) ?? null
    : null;

  const ORANGE = "#FF8C00";

  // ✅ ESC closes modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenProjectId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // ✅ Lock scroll when modal open
  useEffect(() => {
    document.body.style.overflow = openProjectId ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProjectId]);

  return (
    <>
      <section id="proyectos" className="relative overflow-hidden bg-black px-6 py-24">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.15] [background-image:repeating-linear-gradient(0deg,transparent,transparent_80px,rgba(255,140,0,0.1)_80px,rgba(255,140,0,0.1)_81px),repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,140,0,0.1)_80px,rgba(255,140,0,0.1)_81px)]" />

        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Featured <span className="text-orange-500">Projects</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Every project reflects our commitment to excellence, safety, and quality craftsmanship.
            </p>

            {/* Divider */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
              <div className="h-2 w-2 rotate-45 bg-orange-500" />
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
          </div>

          {/* Projects Grid - Compact */}
          <div className="relative mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <div
                key={p.id}
                className="group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(255,140,0,0.2)";
                  setSelectedProject(p.id);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 30px rgba(0,0,0,0.5)";
                  setSelectedProject(null);
                }}
              >
                {/* Top orange bar */}
                <div
                  className="absolute top-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: ORANGE }}
                />

                {/* Image / Icon background */}
                <button
                  type="button"
                  onClick={() => p.image && setOpenProjectId(p.id)}
                  className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 text-left"
                  aria-label={p.image ? `Open ${p.title} image` : `Project ${p.title}`}
                >
                  {p.image ? (
                    <>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-7xl opacity-20 transition-all duration-500 group-hover:scale-125 group-hover:opacity-30">
                      {p.icon}
                    </div>
                  )}

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 h-16 w-16 border-r-2 border-t-2 border-orange-500/30 transition-all duration-500 group-hover:border-orange-500" />
                  <div className="absolute bottom-0 left-0 h-16 w-16 border-l-2 border-b-2 border-orange-500/30 transition-all duration-500 group-hover:border-orange-500" />

                  {/* Project number */}
                  <div
                    className="absolute top-4 left-4 grid h-10 w-10 place-items-center font-bold text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </button>

                {/* Content */}
                <div className="p-6">
                  {/* Category badge */}
                  <span
                    className="inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white"
                    style={{ backgroundColor: ORANGE }}
                  >
                    {p.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-500">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>

                  {/* Specs */}
                  {p.specs?.length ? (
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {p.specs.map((s) => (
                        <div key={s.k} className="flex items-center justify-between text-xs">
                          <span className="font-bold text-orange-500">{s.k}</span>
                          <span className="text-white/70">{s.v}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* View details link */}
                  <button
                    type="button"
                    onClick={() => p.image && setOpenProjectId(p.id)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-500 transition-all duration-300 hover:gap-3"
                  >
                    <span>View Details</span>
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Shine effect */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { num: "100%", label: "Licensed & Insured" },
              { num: "20+", label: "Years of Experience" },
              { num: "5★", label: "Client Reviews" },
            ].map((stat, idx) => (
              <div key={stat.label} className="group text-center" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="text-5xl font-bold text-orange-500 transition-all duration-300 group-hover:scale-110">
                  {stat.num}
                </div>
                <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mx-auto mt-20 max-w-2xl text-center">
            <p className="text-lg font-medium text-white/80 mb-6">Ready to discuss your project?</p>
            <button
              type="button"
              onClick={() => scrollToId("contacto", 90)}
              className="group inline-flex items-center gap-3 rounded-sm border-2 border-orange-500 bg-orange-500 px-10 py-5 text-sm font-extrabold uppercase tracking-[0.15em] text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 hover:border-orange-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40"
            >
              <span>Contact Us Now</span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Lightbox Modal */}
      {openProject?.image && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close image"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenProjectId(null)}
          />

          {/* Content */}
          <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-4 py-8">
            <div className="relative w-full">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpenProjectId(null)}
                className="absolute -top-2 right-0 z-10 grid h-10 w-10 place-items-center rounded-sm border border-white/20 bg-black/60 text-white transition hover:bg-black/80"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={openProject.image}
                alt={openProject.title}
                className="mx-auto max-h-[85vh] w-auto max-w-full rounded-sm border border-white/10 object-contain shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
              />

              {/* Caption (minimal, no design change) */}
              <div className="mt-4 text-center text-sm text-white/70">
                <span className="font-semibold text-white">{openProject.title}</span>
                <span className="mx-2 text-white/30">•</span>
                <span>{openProject.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
