import { useEffect, useRef, useState } from "react";

const O = "#FF8C00";
const BG = "#ffffff";
const TEXT = "#0f0f0f";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, vis };
}

const services = [
  "Residential Projects",
  "Commercial Work",
  "Custom Fabrication",
  "Professional Welding",
];

const pillars = [
  {
    num: "01",
    title: "Precision First",
    desc: "Every cut, weld, and finish is measured twice. We don't rush — we get it right.",
  },
  {
    num: "02",
    title: "Built to Last",
    desc: "We use materials and methods that hold up under real conditions, not just on paper.",
  },
  {
    num: "03",
    title: "Local Expertise",
    desc: "Deep roots in San Diego mean we understand the projects, codes, and clients here.",
  },
];

export default function AboutUs() {
  const { ref, vis } = useInView();

  return (
    <section
      id="about-us"
      style={{
        backgroundColor: BG,
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Barlow+Condensed:wght@700;900&display=swap');

        .about-service-tag {
          font-size: 10px;
          font-weight: 700;
          font-family: 'Barlow Condensed', sans-serif;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          border: 1px solid rgba(0,0,0,0.15);
          padding: 7px 14px;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          cursor: default;
        }
        .about-service-tag:hover {
          color: #fff;
          background: #FF8C00;
          border-color: #FF8C00;
        }

        .about-pillar {
          transition: background 0.2s;
        }
        .about-pillar:hover {
          background: rgba(255,140,0,0.06);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: none; }
        }
        .anim-1 { animation: fadeUp 0.55s ease both; animation-delay: 0s; }
        .anim-2 { animation: fadeUp 0.55s ease both; animation-delay: 0.1s; }
        .anim-3 { animation: fadeUp 0.55s ease both; animation-delay: 0.2s; }
        .anim-4 { animation: fadeUp 0.55s ease both; animation-delay: 0.3s; }
        .anim-hidden { opacity: 0; }
      `}</style>



      {/* ── HEADER ── */}
      <div
        style={{
          padding: "80px 60px 0",
          maxWidth: 1160,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          ref={ref}
          className={vis ? "anim-1" : "anim-hidden"}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          {/* Left: label + title */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div style={{ width: 28, height: 2, backgroundColor: O }} />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: O,
                  textTransform: "uppercase",
                }}
              >
                About Us
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(44px, 5.5vw, 72px)",
                fontWeight: 900,
                color: TEXT,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                textTransform: "uppercase",
              }}
            >
              Built on{" "}
              <span style={{ color: O }}>Experience</span>
            </h2>
          </div>

          {/* Right: tagline */}
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(0,0,0,0.4)",
              lineHeight: 1.8,
              maxWidth: 300,
              borderLeft: `2px solid rgba(255,140,0,0.4)`,
              paddingLeft: 16,
            }}
          >
            Serving San Diego with precision metal work and professional welding.
          </p>
        </div>

        {/* Full-width divider */}
        <div
          style={{
            marginTop: 40,
            height: 1,
            background:
              "linear-gradient(90deg, rgba(255,140,0,0.7), rgba(255,140,0,0.15) 60%, transparent)",
          }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          maxWidth: 1160,
          margin: "56px auto 0",
          padding: "0 60px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
          position: "relative",
        }}
      >
        {/* LEFT COLUMN */}
        <div className={vis ? "anim-2" : "anim-hidden"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 18,
            }}
          >
            <div style={{ width: 3, height: 20, backgroundColor: O }} />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: O,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Welding & Metal Works
            </span>
          </div>

          <h3
            style={{
              margin: "0 0 20px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(30px, 2.8vw, 42px)",
              fontWeight: 900,
              color: TEXT,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              textTransform: "uppercase",
            }}
          >
            Professional Craftsmanship
            <br />
            <span style={{ color: "rgba(0,0,0,0.28)" }}>in San Diego</span>
          </h3>

          <div
            style={{
              marginBottom: 24,
              height: 1,
              width: 48,
              background: `linear-gradient(90deg, ${O}, transparent)`,
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: 14.5,
              color: "rgba(0,0,0,0.5)",
              lineHeight: 1.95,
              maxWidth: 440,
            }}
          >
            We specialize in custom metalwork and professional welding services
            across San Diego, backed by more than 20 years of industry experience.
            Our work spans residential projects, commercial construction, and
            precision fabrication, delivering durable and reliable results on every job.
          </p>

          <div
            className={vis ? "anim-3" : "anim-hidden"}
            style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 8 }}
          >
            {services.map((s) => (
              <span key={s} className="about-service-tag">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — PILLARS */}
        <div
          className={vis ? "anim-4" : "anim-hidden"}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="about-pillar"
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "0 20px",
                padding: "28px 12px",
                borderBottom:
                  i < pillars.length - 1
                    ? "1px solid rgba(0,0,0,0.08)"
                    : "none",
                alignItems: "start",
              }}
            >
              <div style={{ paddingTop: 2 }}>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: O,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {p.num}
                </span>
                <div
                  style={{
                    width: 1,
                    height: 32,
                    background: `linear-gradient(to bottom, ${O}, transparent)`,
                    marginLeft: 4,
                  }}
                />
              </div>

              <div>
                <h4
                  style={{
                    margin: "0 0 8px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 20,
                    fontWeight: 900,
                    color: TEXT,
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "rgba(0,0,0,0.45)",
                    lineHeight: 1.85,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}

          <div
            style={{
              marginTop: 20,
              height: 2,
              background: `linear-gradient(90deg, ${O}, rgba(255,140,0,0.1), transparent)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}