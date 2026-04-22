"use client";

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
    a: "We specialize in industrial and commercial projects including manufacturing facilities, warehouses, distribution centers, metal structures, and complete infrastructure. Our expertise covers everything from ground-up construction to facility expansions and renovations.",
    category: "Services",
  },
  {
    id: "f2",
    q: "Are your welders certified?",
    a: "Yes, absolutely. All our welders are AWS certified professionals with extensive experience in MIG, TIG, Arc, and specialized welding processes. We maintain strict quality standards and focus on safety in every project.",
    category: "Qualifications",
  },
  {
    id: "f3",
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. Small projects typically take 3-4 months, medium-sized projects 6-8 months, and large-scale industrial facilities 12+ months. We provide detailed timelines during the consultation phase.",
    category: "Timeline",
  },
  {
    id: "f4",
    q: "Do you offer free quotes?",
    a: "Yes, we provide free, no-obligation quotes for all projects. Our team will evaluate the site, assess project scope, review material requirements, and provide a detailed estimate with a realistic timeline.",
    category: "Pricing",
  },
  {
    id: "f5",
    q: "What safety standards do you follow?",
    a: "We strictly adhere to OSHA regulations and industry best practices. Our team is fully trained in safety protocols, and we maintain comprehensive insurance coverage for all projects.",
    category: "Safety",
  },
  {
    id: "f6",
    q: "Do you provide emergency repair services?",
    a: "Yes, we offer 24/7 emergency services for critical structural repairs and welding needs. Our rapid response team can be on-site quickly to assess and address urgent situations.",
    category: "Services",
  },
];

function scrollToId(id: string, offset = 90) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const ORANGE = "#FF8C00";

  return (
    <section id="faqs" className="relative overflow-hidden bg-zinc-50 px-6 py-24">
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
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border-2 border-orange-500/20 bg-orange-500/5 px-6 py-2">
            <svg className="h-4 w-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">FAQ</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Got <span className="text-orange-500">Questions?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70">
            Quick answers to common questions about our industrial construction and welding services.
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

        {/* Contact CTA */}
        <div className="mx-auto mt-16 max-w-2xl rounded-lg border-2 border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-orange-500/10 p-3">
            <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-black">Still Have Questions?</h3>
          <p className="mt-3 text-base text-black/70">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToId("contacto", 90)}
              className="group inline-flex items-center gap-3 rounded-sm border-2 border-orange-500 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
            >
              <span>Contact Us</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-orange-500 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-orange-500 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/5"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-black/60">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Fast Response Time</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Expert Consultation</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No Obligation Quote</span>
          </div>
        </div>
      </div>
    </section>
  );
}
