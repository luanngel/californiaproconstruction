import videoSrc from "../../assets/video011.mp4";

const O = "#FF8C00";

export default function Testimonials() {
  return (
    <section
      id="video"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: 540,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&display=swap');

        .vid-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 0;
          pointer-events: none;
        }

        .vid-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.68) 0%,
            rgba(0,0,0,0.52) 50%,
            rgba(0,0,0,0.70) 100%
          );
          pointer-events: none;
        }

        .vid-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: clamp(48px, 7vw, 88px) clamp(20px, 5vw, 48px);
          max-width: 680px;
          margin: 0 auto;
        }

        .vid-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: #FF8C00;
          color: #000;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #FF8C00;
          transition: all 0.22s ease;
          margin-top: 32px;
        }
        .vid-cta:hover {
          background: #CC7000;
          border-color: #CC7000;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255,140,0,0.4);
        }
      `}</style>

      {/* Background video */}
      <video className="vid-bg" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="vid-overlay" />

      {/* Content */}
      <div className="vid-content">
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 18,
        }}>
          <div style={{ width: 18, height: 1, background: O }} />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: O,
          }}>
            Our Work
          </span>
          <div style={{ width: 18, height: 1, background: O }} />
        </div>

        <h2 style={{
          margin: 0,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}>
          Built With <span style={{ color: O }}>Purpose</span>
        </h2>

        <p style={{
          marginTop: 16,
          fontSize: 14,
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.82,
          maxWidth: 440,
          margin: "16px auto 0",
        }}>
          Every project is a reflection of our commitment to quality and lasting results.
        </p>

      </div>
    </section>
  );
}
