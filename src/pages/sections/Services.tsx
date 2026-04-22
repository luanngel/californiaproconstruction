type Service = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
};

const services: Service[] = [
  {
    id: "services-commercial",
    icon: "apartment",
    title: "Commercial Construction",
    desc:
      "Commercial construction services focused on durability, safety, and clean execution. We deliver reliable solutions for offices, retail spaces, and commercial facilities.",
    features: [
      "Commercial build-outs & renovations",
      "Structural steel & metal framing",
      "Code-compliant installations",
    ],
  },
  {
    id: "services-residential",
    icon: "home",
    title: "Residential Construction",
    desc:
      "Residential construction and metalwork designed to enhance safety, functionality, and visual appeal for your home.",
    features: [
      "Home renovations & upgrades",
      "Custom gates, rails & metal features",
      "Structural repairs & reinforcements",
    ],
  },
  {
    id: "services-welding",
    icon: "hardware",
    title: "Professional Welding",
    desc:
      "High-quality welding services for residential and commercial projects. Strong, clean welds built to last.",
    features: [
      "MIG, TIG & Arc welding",
      "Metal fabrication & repairs",
      "On-site welding solutions",
    ],
  },
];

export default function Services() {
  const ORANGE = "#FF8C00";
  const BLACK = "#000000";
  const GRAY_DARK = "#1a1a1a";

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-white px-6 py-24"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.03),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.03),transparent_70%)]" />

      {/* Subtle steel texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Our <span className="text-orange-500">Services</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-black/70">
            Commercial and residential construction services combined with
            professional welding solutions you can trust.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
            <div className="h-2 w-2 rotate-45 bg-orange-500" />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={s.id}
              id={s.id}
              className="group relative overflow-hidden bg-white transition-all duration-300 hover:-translate-y-3"
              style={{ boxShadow: "0 5px 30px rgba(0,0,0,0.08)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(255,140,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 5px 30px rgba(0,0,0,0.08)";
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: ORANGE }}
              />

              <div className="relative p-8">
                {/* Icon + number */}
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className="relative grid h-20 w-20 place-items-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      border: "2px solid rgba(0,0,0,0.08)",
                      backgroundColor: "rgba(255,140,0,0.05)",
                    }}
                  >
                    <span
                      className="material-icons text-4xl transition-colors duration-300"
                      style={{ color: GRAY_DARK }}
                    >
                      {s.icon}
                    </span>

                    <div className="absolute top-0 left-0 h-3 w-3 border-l-2 border-t-2 border-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 right-0 h-3 w-3 border-r-2 border-b-2 border-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div
                    className="grid h-12 w-12 place-items-center font-bold text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <span className="text-lg">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black transition-colors duration-300 group-hover:text-orange-500">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-black/70">
                  {s.desc}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {s.features.map((f, fIdx) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-medium text-black/80"
                      style={{ transitionDelay: `${fIdx * 50}ms` }}
                    >
                      <span
                        className="mt-1 flex h-5 w-5 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "rgba(255,140,0,0.1)",
                          border: "1.5px solid rgba(255,140,0,0.3)",
                        }}
                      >
                        <span className="text-xs font-bold text-orange-500">
                          ✓
                        </span>
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 transition-all duration-300 hover:gap-4"
                >
                  <span>Learn More</span>
                  <svg
                    className="h-4 w-4"
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
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}