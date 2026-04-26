type Service = {
  id: string;
  title: string;
  desc: string;
  features: string[];
};

const services: Service[] = [
  {
    id: "services-construction",
    title: "General Construction",
    desc:
      "Full-scope construction from ground up — new builds, additions, and structural work for residential and commercial properties across San Diego.",
    features: [
      "New residential & commercial builds",
      "Room additions & structural expansions",
      "Foundations, framing & concrete work",
    ],
  },
  {
    id: "services-residential",
    title: "Remodeling & Renovations",
    desc:
      "Complete home and commercial remodels built with quality materials and attention to detail — on schedule and within budget.",
    features: [
      "Kitchen, bath & full-home remodels",
      "Interior & exterior renovations",
      "Custom metalwork & finishing details",
    ],
  },
  {
    id: "services-ironwork",
    title: "Ironwork & Welding",
    desc:
      "Custom gates, fences, railings, and structural welding. Every piece fabricated in-house with industrial-grade steel and a clean finish.",
    features: [
      "Driveway gates & security doors",
      "Ornamental fences & railings",
      "MIG, TIG & structural welding",
    ],
  },
];

const O = "#FF8C00";

export default function Services() {
  return (
    <section
      id="servicios"
      style={{ backgroundColor: "#fff", overflow: "hidden", position: "relative" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap');

        .svc-section {
          padding: clamp(64px, 8vw, 96px) clamp(20px, 5vw, 48px);
        }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.07);
          margin-top: 56px;
        }

        .svc-card {
          background: #fff;
          padding: clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px);
          position: relative;
          overflow: hidden;
          transition: background 0.2s ease;
        }
        .svc-card:hover { background: #fafafa; }

        .svc-top-bar {
          position: absolute;
          top: 0; left: 0;
          height: 3px;
          width: 0;
          background: ${O};
          transition: width 0.5s ease;
        }
        .svc-card:hover .svc-top-bar { width: 100%; }

        .svc-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,140,0,0.6);
          margin-bottom: 12px;
          display: block;
        }

        .svc-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 900;
          color: #111;
          letter-spacing: -0.02em;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0 0 16px;
          transition: color 0.2s;
        }
        .svc-card:hover .svc-title { color: ${O}; }

        .svc-divider {
          width: 28px;
          height: 1px;
          background: linear-gradient(90deg, ${O}, transparent);
          margin-bottom: 16px;
        }

        .svc-desc {
          font-size: 13.5px;
          color: rgba(0,0,0,0.5);
          line-height: 1.8;
          margin: 0 0 24px;
        }

        .svc-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 12.5px;
          color: rgba(0,0,0,0.65);
          font-weight: 500;
          margin-bottom: 10px;
        }
        .svc-feature-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${O};
          flex-shrink: 0;
          margin-top: 5px;
        }

        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${O};
          text-decoration: none;
          margin-top: 28px;
          transition: gap 0.25s ease;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
        }
        .svc-cta:hover { gap: 12px; }

        @media (max-width: 900px) {
          .svc-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="svc-section" style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: 560 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 20, height: 2, backgroundColor: O, flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: O,
            }}>
              What We Do
            </span>
          </div>

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
            Our <span style={{ color: O }}>Services</span>
          </h2>

          <p style={{
            marginTop: 16,
            fontSize: 13.5,
            color: "rgba(0,0,0,0.45)",
            lineHeight: 1.85,
            maxWidth: 480,
          }}>
            From new builds and full renovations to custom gates and structural welding —
            one contractor for every phase of your project.
          </p>
        </div>

        {/* Cards grid */}
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="svc-card">
              <div className="svc-top-bar" />

              <span className="svc-label">
                {String(i + 1).padStart(2, "0")} — {s.title.split(" ")[0]}
              </span>

              <h3 className="svc-title">{s.title}</h3>
              <div className="svc-divider" />
              <p className="svc-desc">{s.desc}</p>

              <div>
                {s.features.map((f) => (
                  <div key={f} className="svc-feature">
                    <span className="svc-feature-dot" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
