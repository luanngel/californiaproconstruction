import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { servicesData } from "./data/service";
import Navbar from "./sections/Navbar";

import imgConstruction  from "../assets/construccion.jpg";
import imgCommercial    from "../assets/construccion2.jpg";
import imgResidential   from "../assets/escalerasconstruccion.jpg";
import imgIronwork      from "../assets/porton.jpg";
import imgWelding       from "../assets/rejas.jpg";

const servicePhotos: Record<string, string> = {
  "services-construction": imgConstruction,
  "services-residential":  imgResidential,
  "services-commercial":   imgCommercial,
  "services-ironwork":     imgIronwork,
  "services-welding":      imgWelding,
};

const O    = "#FF8C00";
const DARK = "#080808";

/* ─── hooks ─────────────────────────────────────────────────────────── */

function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, vis };
}


/* ─── shared button components ──────────────────────────────────────── */


function OutlineBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "12px 30px",
        border: `2px solid ${hov ? O : "rgba(255,255,255,0.15)"}`,
        backgroundColor: hov ? "rgba(255,140,0,0.08)" : "transparent",
        color: hov ? O : "rgba(255,255,255,0.6)",
        fontSize: 12,
        fontWeight: 900,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: 2,
        transform: hov ? "translateY(-2px)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </button>
  );
}


/* ─── feature card ───────────────────────────────────────────────────── */

function FeatureCard({
  title,
  desc,
  index,
  vis,
}: {
  title: string;
  desc: string;
  index: number;
  vis: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="group relative overflow-hidden bg-white"
      style={{
        boxShadow: hov
          ? "0 24px 56px rgba(255,140,0,0.16)"
          : "0 4px 28px rgba(0,0,0,0.07)",
        transform: vis ? (hov ? "translateY(-6px)" : "none") : "translateY(20px)",
        opacity: vis ? 1 : 0,
        transition: `box-shadow 0.3s ease, transform 0.4s ease ${index * 0.06}s, opacity 0.4s ease ${index * 0.06}s`,
      }}
    >
      {/* top accent bar */}
      <div
        className="absolute top-0 left-0 h-[3px] transition-all duration-500"
        style={{ backgroundColor: O, width: hov ? "100%" : "0" }}
      />

      <div className="p-8">
        {/* Number + icon row */}
        <div className="mb-5 flex items-center justify-between">
          <div
            className="grid h-12 w-12 place-items-center text-sm font-black text-black transition-all duration-300"
            style={{
              backgroundColor: O,
              transform: hov ? "rotate(6deg) scale(1.1)" : "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Corner accent */}
          <div
            className="h-3 w-3 border-r-2 border-t-2 border-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <h3
          className="mb-3 text-lg font-bold leading-snug transition-colors duration-300"
          style={{ color: hov ? O : "#0f0f0f" }}
        >
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-black/60">{desc}</p>

        {/* Bottom check row */}
        <div
          className="mt-6 flex items-center gap-2 border-t border-black/5 pt-5"
        >
          <div
            className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full text-xs font-bold transition-colors duration-300"
            style={{
              backgroundColor: hov ? O : "rgba(255,140,0,0.1)",
              border: `1.5px solid ${hov ? O : "rgba(255,140,0,0.3)"}`,
              color: hov ? "#000" : O,
            }}
          >
            ✓
          </div>
          <span className="text-xs font-semibold text-black/40">Included in this service</span>
        </div>
      </div>

      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </div>
  );
}



/* ══════════════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════════════ */

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate      = useNavigate();
  const service       = serviceId ? servicesData[serviceId] : null;

  const [loaded, setLoaded] = useState(false);

  const { ref: featRef, vis: featVis } = useInView<HTMLElement>(0.08);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(false);
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, [serviceId]);

  /* ── 404 ── */
  if (!service) {
    return (
      <div
        style={{ minHeight: "100vh", backgroundColor: DARK }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <p className="text-xl font-bold text-white">Service not found.</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="border-2 border-orange-500 bg-orange-500 px-8 py-3 text-sm font-black uppercase tracking-wider text-black transition hover:bg-orange-600"
        >
          Go Home
        </button>
      </div>
    );
  }


  /* ───────────────────────────────── JSX ───────────────────────────── */
  return (
    <div style={{ minHeight: "100vh", backgroundColor: DARK }}>
      <Navbar />

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: 86,
          borderBottom: "1px solid rgba(255,140,0,0.12)",
        }}
      >
        {/* bg grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,140,0,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,140,0,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        {/* orange radial right */}
        <div
          className="pointer-events-none absolute right-0 top-0"
          style={{
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle at 75% 20%, rgba(255,140,0,0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* ── text side ── */}
            <div>
              {/* breadcrumb */}
              <nav className="mb-8 flex flex-wrap items-center gap-2">
                {[
                  { label: "Home",     action: () => navigate("/") },
                  { label: "Services", action: () => { window.location.href = "/#servicios"; } },
                  { label: service.label, action: null },
                ].map((crumb, i, arr) => (
                  <span key={crumb.label} className="flex items-center gap-2">
                    {crumb.action ? (
                      <button
                        type="button"
                        onClick={crumb.action}
                        className="text-xs font-bold uppercase tracking-widest transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                        onMouseEnter={e => (e.currentTarget.style.color = O)}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                      >
                        {crumb.label}
                      </button>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: O }}>
                        {crumb.label}
                      </span>
                    )}
                    {i < arr.length - 1 && (
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                    )}
                  </span>
                ))}
              </nav>

              {/* title */}
              <h1
                className="font-black leading-none text-white"
                style={{
                  fontSize: "clamp(34px, 5vw, 64px)",
                  letterSpacing: "-0.03em",
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "none" : "translateY(18px)",
                  transition: "all 0.5s ease 0.1s",
                }}
              >
                {service.label}
              </h1>

              {/* tagline */}
              <p
                className="mt-4 font-bold"
                style={{
                  fontSize: "clamp(15px, 2vw, 21px)",
                  color: O,
                  letterSpacing: "-0.01em",
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "none" : "translateY(14px)",
                  transition: "all 0.5s ease 0.15s",
                }}
              >
                {service.tagline}
              </p>

              {/* divider */}
              <div
                style={{
                  height: 2,
                  width: 64,
                  margin: "28px 0",
                  background: `linear-gradient(90deg, ${O}, transparent)`,
                  opacity: loaded ? 1 : 0,
                  transition: "all 0.5s ease 0.2s",
                }}
              />

              {/* description */}
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.85,
                  maxWidth: 520,
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "none" : "translateY(14px)",
                  transition: "all 0.5s ease 0.22s",
                }}
              >
                {service.description}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap gap-4"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "none" : "translateY(14px)",
                  transition: "all 0.5s ease 0.3s",
                }}
              >
                <OutlineBtn onClick={() => { window.location.href = "/#servicios"; }}>
                  ← All Services
                </OutlineBtn>
              </div>
            </div>

            {/* ── photo side ── */}
            <div
              className="relative hidden lg:block"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s ease 0.3s",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: 520 }}>
                {/* photo */}
                <img
                  src={servicePhotos[serviceId ?? ""] ?? imgConstruction}
                  alt={service.label}
                  className="h-full w-full object-cover"
                  style={{
                    transform: "scale(1.04)",
                    transition: "transform 6s ease",
                  }}
                />

                {/* left-to-right dark fade so it blends with the dark left column */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(8,8,8,0.55) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.25) 100%)",
                  }}
                />

                {/* subtle orange tint */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 65% 35%, rgba(255,140,0,0.1) 0%, transparent 60%)",
                  }}
                />

                {/* bottom caption strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-7 py-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.88) 0%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 10,
                      fontWeight: 800,
                      color: O,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 5,
                    }}
                  >
                    Featured Work
                  </p>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#fff" }}>
                    {service.label}
                  </p>
                </div>

                {/* thin orange left edge */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px]"
                  style={{ backgroundColor: O }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══ 3. FEATURES / BENEFITS ═══════════════════════════════════════ */}
      <section
        ref={featRef}
        className="relative overflow-hidden bg-white px-6 py-24 lg:px-10"
      >
        {/* subtle texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 12px)",
          }}
        />
        <div className="absolute top-0 right-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.04),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.03),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          {/* section header */}
          <div className="text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div
                className="h-px w-12"
                style={{ background: `linear-gradient(90deg, transparent, ${O})` }}
              />
              <span
                className="text-xs font-black uppercase tracking-[0.22em]"
                style={{ color: O }}
              >
                What's Included
              </span>
              <div
                className="h-px w-12"
                style={{ background: `linear-gradient(90deg, ${O}, transparent)` }}
              />
            </div>

            <h2
              className="font-black leading-tight text-black"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              Everything in this{" "}
              <span style={{ color: O }}>service</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/60">
              A complete breakdown of what we deliver — no hidden extras, no surprises.
            </p>

            {/* diamond divider */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
              <div className="h-2 w-2 rotate-45 bg-orange-500" />
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
          </div>

          {/* feature cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                desc={f.desc}
                index={i}
                vis={featVis}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CTA BOTTOM ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-6 py-28 lg:px-10"
        style={{ backgroundColor: DARK }}
      >
        {/* diagonal stripe */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(255,140,0,0.5)_30px,rgba(255,140,0,0.5)_31px)]" />

        {/* central glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 900,
            height: 420,
            background:
              "radial-gradient(ellipse at center, rgba(255,140,0,0.11) 0%, transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* pulsing badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 border-2 px-6 py-2"
            style={{
              borderColor: "rgba(255,140,0,0.3)",
              backgroundColor: "rgba(255,140,0,0.07)",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: O }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: O }}
              />
            </span>
            <span
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{ color: O }}
            >
              Free Estimate — No Commitment
            </span>
          </div>

          <h2
            className="font-black leading-tight text-white"
            style={{
              fontSize: "clamp(30px, 5vw, 56px)",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to start your
            <br />
            <span style={{ color: O }}>{service.label.toLowerCase()}</span> project?
          </h2>

          <p
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            We'll visit your site, measure the space, and deliver a detailed quote
            within 24 hours — no obligation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <OutlineBtn onClick={() => navigate("/")}>
              Back to Home
            </OutlineBtn>
          </div>

          {/* trust row */}
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            {[
              "Fast Response Time",
              "Expert Consultation",
              "No Obligation Quote",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="h-4 w-4" style={{ color: O }} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
