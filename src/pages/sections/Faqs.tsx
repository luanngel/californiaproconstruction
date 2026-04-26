import { useState } from "react";

type Faq = {
  id: string;
  q: string;
  a: string;
  category?: string;
};

const faqs: Faq[] = [
  {
    id: "f1",
    q: "What types of construction projects do you handle?",
    a: "We handle residential and commercial construction — new builds, room additions, remodels, and commercial build-outs. We also specialize in custom ironwork, gates, fences, railings, and structural welding, so we can cover every phase of a project under one contractor.",
    category: "Services",
  },
  {
    id: "f2",
    q: "Are you licensed and insured?",
    a: "Yes. We are a fully licensed general contractor and carry comprehensive liability and workers' compensation insurance on every project. Our welders are also AWS certified, so both the construction and metalwork sides meet the highest industry standards.",
    category: "Qualifications",
  },
  {
    id: "f3",
    q: "How long does a typical project take?",
    a: "It depends on scope. Custom ironwork and small remodels typically wrap in 1–4 weeks. Room additions and larger remodels run 6–12 weeks. New construction and commercial build-outs are 3–6+ months. We give you a detailed timeline during the free consultation so there are no surprises.",
    category: "Timeline",
  },
  {
    id: "f4",
    q: "Do you offer free quotes?",
    a: "Yes, completely free with no obligation. We visit the site, assess the scope, review any plans or drawings, and deliver a clear written estimate with pricing and a realistic schedule.",
    category: "Pricing",
  },
  {
    id: "f5",
    q: "Do you pull permits and handle inspections?",
    a: "Yes. We handle all necessary building permits and coordinate inspections through the city. Every project is built to California building codes and local requirements — no shortcuts.",
    category: "Compliance",
  },
  {
    id: "f6",
    q: "Do you provide emergency repair services?",
    a: "Yes, we offer 24/7 emergency response for urgent structural repairs, damaged gates, broken security doors, and critical welding failures. Our team can be on-site quickly to assess and stabilize the situation.",
    category: "Services",
  },
];


export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const ORANGE = "#FF8C00";

  return (
    <section id="faqs" className="relative overflow-hidden bg-white px-6 py-24">
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.05),transparent_70%)]" />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h2 style={{
            margin: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(34px, 4vw, 52px)",
            fontWeight: 900,
            color: "#111",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            Got <span style={{ color: "#FF8C00" }}>Questions?</span>
          </h2>

          <p style={{
            margin: "20px auto 0",
            maxWidth: 560,
            fontSize: 15,
            color: "rgba(0,0,0,0.5)",
            lineHeight: 1.8,
          }}>
            Quick answers to common questions about our construction and ironwork services.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
            <div className="h-2 w-2 rotate-45 bg-orange-500" />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-16 space-y-4">
          {faqs.map((f, idx) => {
            const open = activeFaq === f.id;

            return (
              <div
                key={f.id}
                className="group relative overflow-hidden bg-white transition-all duration-300"
                style={{
                  boxShadow: open ? "0 10px 40px rgba(255,140,0,0.15)" : "0 2px 15px rgba(0,0,0,0.06)",
                }}
              >
                {/* Left accent bar */}
                <div
                  className={[
                    "absolute left-0 top-0 h-full w-1 transition-all duration-300",
                    open ? "bg-orange-500" : "bg-orange-500/30 group-hover:bg-orange-500/60",
                  ].join(" ")}
                />

                {/* Question button */}
                <button
                  type="button"
                  className="flex w-full items-center gap-4 px-6 py-6 text-left transition-colors duration-200 hover:bg-orange-500/5"
                  onClick={() => setActiveFaq(open ? null : f.id)}
                  aria-expanded={open}
                >
                  {/* Number badge */}
                  <div
                    className={[
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm font-bold text-white transition-all duration-300",
                      open ? "scale-110 rotate-6" : "group-hover:scale-105",
                    ].join(" ")}
                    style={{ backgroundColor: ORANGE }}
                  >
                    <span className="text-sm">{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Question text */}
                  <div className="flex-1">
                    <div
                      className={[
                        "text-lg font-bold transition-colors duration-300",
                        open ? "text-orange-500" : "text-black group-hover:text-orange-500",
                      ].join(" ")}
                    >
                      {f.q}
                    </div>
                    {f.category && (
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-black/40">{f.category}</div>
                    )}
                  </div>

                  {/* Toggle icon */}
                  <div
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      open
                        ? "rotate-45 bg-orange-500 text-white"
                        : "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20",
                    ].join(" ")}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                {/* Answer panel */}
                <div
                  className={[
                    "overflow-hidden transition-all duration-300",
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="border-t border-orange-500/10 bg-gradient-to-br from-orange-500/5 to-transparent px-6 py-6 pl-20">
                    <p className="text-sm leading-relaxed text-black/70">{f.a}</p>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
