import { useEffect, useRef, useState } from "react";
import construccionImg from "../../assets/construccion.jpg";

const O = "#FF8C00";
const TEXT = "#111";

const pillars = [
  {
    num: "01",
    title: "Precision First",
    desc: "Every measurement, cut, and finish is checked twice. We don't rush — we get it right.",
  },
  {
    num: "02",
    title: "Built to Last",
    desc: "Materials and methods that hold up under real conditions, not just on paper.",
  },
  {
    num: "03",
    title: "Local Expertise",
    desc: "Deep roots in San Diego mean we know the codes, the clients, and the terrain.",
  },
];


function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, vis };
}

export default function AboutUs() {
  const { ref, vis } = useInView();

  return (
    <section
      id="quienes-somos"
      style={{
        backgroundColor: "#fff",
        overflow: "hidden",
        paddingTop: "clamp(56px, 7vw, 88px)",
        paddingBottom: "clamp(56px, 7vw, 88px)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap');

        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: none; }
        }
        .ab-1 { animation: abFadeUp 0.65s ease both 0s; }
        .ab-2 { animation: abFadeUp 0.65s ease both 0.1s; }
        .ab-3 { animation: abFadeUp 0.65s ease both 0.22s; }
        .ab-hidden { opacity: 0; }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-photo {
          position: relative;
          min-height: 520px;
        }

        .about-content {
          padding: clamp(48px, 6vw, 80px) clamp(32px, 5vw, 68px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid rgba(0,0,0,0.05);
        }

        .ab-pillar {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 0 12px;
          padding: 15px 4px;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background 0.18s;
        }
        .ab-pillar:last-child { border-bottom: none; }
        .ab-pillar:hover { background: rgba(255,140,0,0.025); }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-photo { min-height: 300px; }
          .about-content {
            padding: 40px 24px;
            border-left: none;
            border-top: 1px solid rgba(0,0,0,0.05);
          }
        }
      `}</style>

      <div ref={ref} className="about-grid">

        {/* PHOTO */}
        <div className={`about-photo ${vis ? "ab-1" : "ab-hidden"}`}>
          <img
            src={construccionImg}
            alt="California Pro construction"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
          }} />

        </div>

        {/* CONTENT */}
        <div className={`about-content ${vis ? "ab-2" : "ab-hidden"}`}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 20, height: 2, backgroundColor: O, flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: O,
            }}>
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            margin: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(34px, 4vw, 50px)",
            fontWeight: 900,
            color: TEXT,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            Built on<br />
            <span style={{ color: O }}>Experience</span>
          </h2>

          {/* Divider */}
          <div style={{
            margin: "22px 0",
            width: 36,
            height: 1,
            background: `linear-gradient(90deg, ${O}, transparent)`,
          }} />

          {/* Description */}
          <p style={{
            margin: 0,
            fontSize: 13.5,
            color: "rgba(0,0,0,0.48)",
            lineHeight: 1.85,
            maxWidth: 400,
          }}>
            We specialize in residential and commercial construction across San Diego,
            backed by more than 20 years of hands-on experience. New builds, full
            renovations, commercial build-outs, and custom ironwork — delivered with
            precision and built to last.
          </p>

          {/* Pillars */}
          <div
            className={vis ? "ab-3" : "ab-hidden"}
            style={{ marginTop: 32 }}
          >
            {pillars.map((p) => (
              <div key={p.num} className="ab-pillar">
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(255,140,0,0.5)",
                  paddingTop: 1,
                }}>
                  {p.num}
                </span>
                <div>
                  <h4 style={{
                    margin: "0 0 3px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: 14,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    color: TEXT,
                  }}>
                    {p.title}
                  </h4>
                  <p style={{
                    margin: 0,
                    fontSize: 12,
                    color: "rgba(0,0,0,0.4)",
                    lineHeight: 1.72,
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
