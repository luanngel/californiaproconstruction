import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import logo from "../../assets/californiaproconstruccion.png";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type SubItem = {
  label: string;
  id: string;
  desc: string;
  icon: React.ReactNode;
};

type NavItem = { label: string; id: string; subItems?: SubItem[] };

/* ─────────────────────────────────────────────
   Service icons (inline SVG)
───────────────────────────────────────────── */
const IconGate = () => (
  <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
    <rect x="2" y="4" width="4" height="24" rx="1" fill="currentColor" />
    <rect x="26" y="4" width="4" height="24" rx="1" fill="currentColor" />
    <rect x="6" y="8"    width="20" height="2.5" rx="1" fill="currentColor" opacity=".7" />
    <rect x="6" y="13.5" width="20" height="2.5" rx="1" fill="currentColor" opacity=".7" />
    <rect x="6" y="19"   width="20" height="2.5" rx="1" fill="currentColor" opacity=".7" />
    <rect x="14.5" y="4" width="3"  height="24"  rx="1" fill="currentColor" opacity=".5" />
  </svg>
);

const IconStairs = () => (
  <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
    <path d="M4 28h6v-6h6v-6h6v-6h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 28v-6h6v-6h6v-6h6v-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".35" />
  </svg>
);

const IconWeld = () => (
  <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
    <path d="M6 26L26 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="26" cy="6" r="3" fill="currentColor" />
    <path d="M6 26l-2 4 4-2z" fill="currentColor" />
    <circle cx="14" cy="14" r="2" fill="currentColor" opacity=".5" />
    <path d="M18 10l2-3M22 14l3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
  </svg>
);

const IconRepair = () => (
  <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
    <path d="M20 4a8 8 0 00-7.94 9.06L4 21.12V28h6.88l8.06-8.06A8 8 0 1020 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="22" cy="10" r="2" fill="currentColor" />
    <line x1="7" y1="25" x2="11" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
  </svg>
);

const IconFab = () => (
  <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
    <rect x="4"  y="4"  width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
    <rect x="18" y="4"  width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
    <rect x="4"  y="18" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
    <circle cx="23" cy="23" r="5" fill="currentColor" opacity=".15" stroke="currentColor" strokeWidth="2.2" />
    <path d="M21 23h4M23 21v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const serviceItems: SubItem[] = [
  { label: "Custom Gates & Metal Doors",       id: "services-gates",   desc: "Driveway, pedestrian & security gates built to spec.",     icon: <IconGate />   },
  { label: "Metal Staircases",                 id: "services-stairs",  desc: "Interior & exterior steel staircases with custom railing.", icon: <IconStairs /> },
  { label: "Welding Services",                 id: "services-welding", desc: "MIG, TIG & stick welding for any structural need.",         icon: <IconWeld />   },
  { label: "Metal Repairs & Reinforcement",    id: "services-repairs", desc: "Restore, reinforce or modify existing metalwork.",          icon: <IconRepair /> },
  { label: "Custom Fabrication",               id: "services-custom",  desc: "One-off parts, frames & structures from raw steel.",        icon: <IconFab />    },
];

const navItems: NavItem[] = [
  { label: "Home",     id: "inicio" },
  { label: "Services", id: "servicios", subItems: serviceItems },
  { label: "Projects", id: "proyectos" },
  { label: "About Us", id: "quienes-somos" },
];

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const ORANGE      = "#FF8C00";
const ORANGE_DARK = "#CC7000";
const WHITE       = "#ffffff";
const BG          = "rgba(8,8,8,0.99)";

function scrollToId(id: string, offset = 90) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
}

/* ═══════════════════════════════════════════
   MEGA MENU (desktop)
═══════════════════════════════════════════ */
function MegaMenu({
  visible,
  items,
  onNavigate,
  headerH,
}: {
  visible: boolean;
  items: SubItem[];
  onNavigate: (id: string) => void;
  headerH: number;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      aria-hidden={!visible}
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        top: headerH,
        zIndex: 49,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
    >
      {/* Panel */}
      <div
        style={{
          backgroundColor: BG,
          borderBottom: `2px solid ${ORANGE}`,
          borderTop: "1px solid rgba(255,140,0,0.2)",
          boxShadow: "0 28px 60px rgba(0,0,0,0.85)",
        }}
      >
        {/* top gradient stripe */}
        <div style={{ height: 3, background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE_DARK} 55%, transparent)` }} />

        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "36px 40px 42px",
            display: "grid",
            gridTemplateColumns: "240px 1fr",
            gap: 48,
          }}
        >
          {/* ── Left: label + tagline + CTA ── */}
          <div
            style={{
              borderRight: "1px solid rgba(255,140,0,0.15)",
              paddingRight: 40,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            <p style={{ margin: 0, fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", color: ORANGE, textTransform: "uppercase" }}>
              What We Build
            </p>
            <h2 style={{ margin: "10px 0 0", fontSize: 26, fontWeight: 900, color: WHITE, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Steel Crafted<br />
              <span style={{ color: ORANGE }}>to Last.</span>
            </h2>
            <p style={{ margin: "12px 0 0", fontSize: 12.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.65 }}>
              Every piece fabricated in-house with industrial-grade materials and precision welding.
            </p>

            <button
              type="button"
              onClick={() => onNavigate("servicios")}
              style={{
                marginTop: "auto",
                paddingTop: 28,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: ORANGE,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                paddingTop: 28,
              } as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.color = WHITE)}
              onMouseLeave={(e) => (e.currentTarget.style.color = ORANGE)}
            >
              View all services
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* ── Right: service cards grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px 14px",
            }}
          >
            {items.map((s, i) => {
              const isHov = hoveredId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="menuitem"
                  onClick={() => onNavigate(s.id)}
                  onMouseEnter={() => setHoveredId(s.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "16px 18px",
                    borderRadius: 3,
                    border: `1px solid ${isHov ? ORANGE : "rgba(255,255,255,0.06)"}`,
                    backgroundColor: isHov ? "rgba(255,140,0,0.09)" : "rgba(255,255,255,0.025)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.15s ease",
                    transform: isHov ? "translateY(-2px)" : "none",
                    boxShadow: isHov ? "0 10px 28px rgba(0,0,0,0.5)" : "none",
                    opacity: visible ? 1 : 0,
                    transitionDelay: visible ? `${i * 30}ms` : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: 42,
                      height: 42,
                      borderRadius: 3,
                      backgroundColor: isHov ? ORANGE : "rgba(255,140,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isHov ? "#000" : ORANGE,
                      transition: "all 0.15s ease",
                    }}
                  >
                    {s.icon}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 12.5, fontWeight: 800, color: isHov ? ORANGE : WHITE, letterSpacing: "0.01em", lineHeight: 1.25, transition: "color 0.15s" }}>
                      {s.label}
                    </p>
                    <p style={{ margin: "5px 0 0", fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* click-outside dimmer */}
      <div style={{ position: "absolute", inset: 0, top: "100%", zIndex: -1 }} />
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOBILE ACCORDION for Services
═══════════════════════════════════════════ */
function MobileServicesAccordion({
  items,
  onNavigate,
  parentLabel,
  parentId,
}: {
  items: SubItem[];
  onNavigate: (id: string) => void;
  parentLabel: string;
  parentId: string;
}) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    setHeight(open ? bodyRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: open ? ORANGE : WHITE,
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          transition: "color 0.2s",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "inline-block", width: 3, height: 16, borderRadius: 2, backgroundColor: open ? ORANGE : "transparent", transition: "background-color 0.2s", flexShrink: 0 }} />
          {parentLabel}
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s ease", flexShrink: 0 }}>
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div ref={bodyRef} style={{ height, overflow: "hidden", transition: "height 0.3s cubic-bezier(0.4,0,0.2,1)" }}>
        <div style={{ paddingBottom: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          {/* View all CTA */}
          <button
            type="button"
            onClick={() => onNavigate(parentId)}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "9px 12px",
              background: "rgba(255,140,0,0.07)",
              border: `1px solid rgba(255,140,0,0.3)`,
              borderRadius: 3,
              cursor: "pointer",
              color: ORANGE,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View all services
          </button>

          {items.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onNavigate(s.id)}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "12px 14px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 3,
                cursor: "pointer",
                textAlign: "left",
                color: WHITE,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = ORANGE;
                e.currentTarget.style.backgroundColor = "rgba(255,140,0,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
              }}
            >
              <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 3, backgroundColor: "rgba(255,140,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: ORANGE }}>
                {s.icon}
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: WHITE, lineHeight: 1.2 }}>{s.label}</p>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.4 }}>{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CTA BUTTON
═══════════════════════════════════════════ */
function CtaButton({ onClick, fullWidth }: { onClick: () => void; fullWidth?: boolean }) {
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
        border: `2px solid ${hov ? ORANGE_DARK : ORANGE}`,
        borderRadius: 3,
        padding: "10px 24px",
        backgroundColor: hov ? ORANGE_DARK : ORANGE,
        color: "#000",
        fontSize: 12,
        fontWeight: 900,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "pointer",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 8px 20px rgba(255,140,0,0.35)` : "none",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
          transform: hov ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.4s ease",
          pointerEvents: "none",
        }}
      />
      Free Quote
    </button>
  );
}

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen,   setMegaOpen]   = useState(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout>>();

  const headerH  = isScrolled ? 66 : 86;
  const navOffset = useMemo(() => (isScrolled ? 68 : 90), [isScrolled]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileOpen(false); setMegaOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMega  = useCallback(() => { clearTimeout(megaTimer.current); setMegaOpen(true);  }, []);
  const closeMega = useCallback(() => { megaTimer.current = setTimeout(() => setMegaOpen(false), 140); }, []);

  const navigateTo = (id: string) => {
    setMegaOpen(false);
    setMobileOpen(false);
    scrollToId(id, navOffset);
  };

  return (
    <>
      {/* ══ HEADER ══ */}
      <header
        style={{
          position: "fixed", left: 0, right: 0, top: 0, zIndex: 50,
          backgroundColor: BG,
          borderBottom: `2px solid ${ORANGE}`,
          boxShadow: isScrolled ? "0 4px 32px rgba(0,0,0,0.65)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1400, margin: "0 auto", padding: "0 40px",
            height: headerH,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            transition: "height 0.3s",
          }}
        >
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigateTo("inicio")}
            aria-label="Go to home"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <img
              src={logo}
              alt="California Pro Construction & Welding"
              style={{ height: isScrolled ? 44 : 62, width: "auto", transition: "height 0.3s" }}
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 36 }}
          >
            {navItems.map((n) => {
              const isServices = n.id === "servicios" && !!n.subItems?.length;

              if (!isServices) {
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => navigateTo(n.id)}
                    onMouseEnter={(e) => {
                      closeMega(); // close mega if hovering other items
                      e.currentTarget.style.color = ORANGE;
                    }}
                    onMouseLeave={(e) => (e.currentTarget.style.color = WHITE)}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                      fontSize: 13, fontWeight: 800, letterSpacing: "0.07em",
                      textTransform: "uppercase", color: WHITE, transition: "color 0.15s",
                    }}
                  >
                    {n.label}
                  </button>
                );
              }

              return (
                <div key={n.id} onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    type="button"
                    onClick={() => setMegaOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    style={{
                      background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                      fontSize: 13, fontWeight: 800, letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      color: megaOpen ? ORANGE : WHITE,
                      display: "inline-flex", alignItems: "center", gap: 5,
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = megaOpen ? ORANGE : WHITE)}
                  >
                    {n.label}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                      style={{ transform: megaOpen ? "rotate(180deg)" : "none", transition: "transform 0.22s" }}>
                      <path d="M1.5 3.5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              );
            })}

            <CtaButton onClick={() => navigateTo("contacto")} />
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className="flex lg:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, flexDirection: "column", gap: 5, alignItems: "flex-end" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {[28, 20, 14].map((w, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 2.5,
                  width: mobileOpen ? 28 : w,
                  borderRadius: 9999,
                  backgroundColor: ORANGE,
                  transform:
                    mobileOpen && i === 0 ? "translateY(7.5px) rotate(45deg)" :
                    mobileOpen && i === 2 ? "translateY(-7.5px) rotate(-45deg)" : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                  transition: "all 0.28s cubic-bezier(0.4,0,0.2,1)",
                  transformOrigin: "center",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* ══ MEGA MENU (desktop only) ══ */}
      <div
        className="hidden lg:block"
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <MegaMenu
          visible={megaOpen}
          items={serviceItems}
          onNavigate={navigateTo}
          headerH={headerH}
        />
      </div>

      {/* click-outside to close mega */}
      {megaOpen && (
        <div
          className="hidden lg:block"
          onClick={() => setMegaOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 48 }}
        />
      )}

      {/* ══ MOBILE OVERLAY ══ */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 40,
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            border: "none", cursor: "pointer",
          }}
        />
      )}

      {/* ══ MOBILE PANEL ══ */}
      <div
        className="lg:hidden"
        aria-hidden={!mobileOpen}
        style={{
          position: "fixed", right: 0, top: headerH,
          height: `calc(100vh - ${headerH}px)`,
          width: "100%", maxWidth: 400,
          zIndex: 50,
          backgroundColor: "rgba(10,10,10,0.98)",
          borderLeft: `2px solid ${ORANGE}`,
          boxShadow: "-8px 0 32px rgba(0,0,0,0.6)",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
        }}
      >
        <div style={{ padding: "24px 22px 40px" }}>
          {navItems.map((n) => {
            const isServices = n.id === "servicios" && !!n.subItems?.length;

            if (isServices) {
              return (
                <MobileServicesAccordion
                  key={n.id}
                  parentLabel={n.label}
                  parentId={n.id}
                  items={n.subItems!}
                  onNavigate={navigateTo}
                />
              );
            }

            return (
              <button
                key={n.id}
                type="button"
                onClick={() => navigateTo(n.id)}
                style={{
                  width: "100%",
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "14px 0",
                  background: "none", border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  color: WHITE,
                  fontSize: 15, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
                  textAlign: "left", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = WHITE)}
              >
                <span style={{ display: "inline-block", width: 3, height: 16, borderRadius: 2, backgroundColor: "transparent", flexShrink: 0 }} />
                {n.label}
              </button>
            );
          })}

          <div style={{ marginTop: 28 }}>
            <CtaButton onClick={() => navigateTo("contacto")} fullWidth />
          </div>
        </div>
      </div>
    </>
  );
}