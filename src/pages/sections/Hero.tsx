import { useState, useEffect, useRef, useCallback } from "react";
import heroBg from "../../assets/logo22.jpg";
import { scrollToId } from "../../utils/scrollToId";

function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const frame = useRef<number | undefined>(undefined);

  const onMove = useCallback((e: MouseEvent) => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setPos({
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [onMove]);

  return pos;
}

const O  = "#FF8C00";
const OD = "#CC7000";

export default function Hero() {
  const [vis, setVis] = useState(false);
  const mouse = useMouseParallax();

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="hero-section"
    >
      <style>{`
        @keyframes line-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fade-up   { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in   { from { opacity: 0; } to { opacity: 1; } }

        .hero-section {
          position: relative;
          margin-top: 76px;
          min-height: calc(100vh - 76px);
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          overflow: hidden;
        }

        .hero-right {
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 767px) {
          .hero-section {
            grid-template-columns: 1fr;
            min-height: calc(100svh - 66px);
            margin-top: 66px;
          }
          .hero-right {
            display: none;
          }
        }
      `}</style>

      {/* LEFT */}
      <div style={{
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(32px, 5vw, 60px) clamp(24px, 6vw, 64px)", // ← cambio
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}>

        <div aria-hidden style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 16px)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute", left: 0, top: "15%", bottom: "15%",
          width: 4,
          backgroundColor: O,
          borderRadius: "0 2px 2px 0",
          opacity: vis ? 1 : 0,
          transition: "opacity 0.6s ease 0.8s",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 560 }}> {/* ← cambio */}

          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            marginBottom: 32,
            animation: vis ? "fade-up 0.7s ease 0.1s both" : "none",
          }}>
            <div style={{ width: 28, height: 2, backgroundColor: O }} />
            <span style={{
              fontSize: 10, fontWeight: 800,
              letterSpacing: "0.22em", color: O,
              textTransform: "uppercase",
            }}>
              California
            </span>
          </div>

          <h1 style={{
            margin: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 900,
            color: "#fff",
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            textTransform: "uppercase",
            animation: vis ? "fade-up 0.8s ease 0.2s both" : "none",
          }}>
            California
          </h1>

          <h1 style={{
            margin: "6px 0 0",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 62px)",
            fontWeight: 900,
            color: O,
            letterSpacing: "-0.04em",
            lineHeight: 1.0,
            textTransform: "uppercase",
            textShadow: `0 0 60px rgba(255,140,0,0.35)`,
            animation: vis ? "fade-up 0.8s ease 0.3s both" : "none",
          }}>
            PRO
          </h1>

          <h1 style={{
            margin: "6px 0 0",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: 700,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textTransform: "uppercase",
            animation: vis ? "fade-up 0.8s ease 0.4s both" : "none",
          }}>
            Construction & Welding
          </h1>

          <div style={{
            margin: "32px 0",
            height: 2,
            backgroundColor: O,
            transformOrigin: "left",
            animation: vis ? "line-grow 0.8s ease 0.6s both" : "none",
            width: 72,
          }} />

          <p style={{
            margin: 0,
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            maxWidth: 380,
            animation: vis ? "fade-up 0.8s ease 0.55s both" : "none",
          }}>
            Professional construction and welding services delivering safe,
            reliable, and high-quality industrial solutions across California.
          </p>

          <div style={{
            marginTop: 40,
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            alignItems: "flex-start", // ← cambio
            rowGap: 10, // ← cambio
            animation: vis ? "fade-up 0.8s ease 0.7s both" : "none",
          }}>
            <HeroBtn primary label="Free Quote" onClick={() => window.open("https://wa.me/16197458718", "_blank")} />
            <HeroBtn label="Our Services" onClick={() => scrollToId("servicios", 76)} />
          </div>

          <div style={{
            marginTop: 48,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            animation: vis ? "fade-in 0.8s ease 0.9s both" : "none",
          }}>
            {["General Construction", "Remodeling", "Custom Ironwork", "Welding"].map((t) => (
              <span key={t} style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "5px 12px",
                borderRadius: 2,
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div style={{
          position: "absolute",
          inset: "-4%", // ← cambio
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translate(${mouse.x * -14}px, ${mouse.y * -10}px)`,
          transition: "transform 0.18s ease-out",
          willChange: "transform",
          animation: vis ? "fade-in 1.2s ease 0.2s both" : "none",
        }} />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.35) 100%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(255,140,0,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            right: 24, top: "50%", transform: "translateY(-50%)",
            flexDirection: "column", alignItems: "center", gap: 8,
            opacity: vis ? 0.4 : 0,
            transition: "opacity 1s ease 1.4s",
          }}
        >
          <div style={{
            writingMode: "vertical-rl",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#fff"
          }}>
            Scroll
          </div>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${O}, transparent)` }} />
        </div>

      </div>
    </section>
  );
}

function HeroBtn({ label, onClick, primary }: { label: string; onClick: () => void; primary?: boolean }) {
  const [hov, setHov] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "13px 32px",
        fontSize: 12,
        fontWeight: 900,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: 3,
        border: `2px solid ${O}`,
        backgroundColor: primary
          ? hov ? OD : O
          : hov ? "rgba(255,140,0,0.12)" : "transparent",
        color: primary ? "#000" : hov ? O : "rgba(255,255,255,0.7)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov && primary ? `0 12px 28px rgba(255,140,0,0.35)` : "none",
        transition: "all 0.22s ease",
      }}
    >
      {primary && (
        <span aria-hidden style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
          transform: hov ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.4s ease",
          pointerEvents: "none",
        }} />
      )}
      {label}
    </button>
  );
}