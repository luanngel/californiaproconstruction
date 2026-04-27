export default function Footer() {
  const ORANGE = "#FF8C00";
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "inicio" },
    { label: "Services", id: "servicios" },
    { label: "Projects", id: "proyectos" },
    { label: "About Us", id: "quienes-somos" },
    { label: "FAQ", id: "faqs" },
  ];

  const socials = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* Top orange accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${ORANGE} 20%, ${ORANGE} 80%, transparent)`,
        }}
      />

      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.08),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[radial-gradient(circle,rgba(255,140,0,0.08),transparent_70%)]" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,140,0,0.5) 0px, rgba(255,140,0,0.5) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,140,0,0.5) 0px, rgba(255,140,0,0.5) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                California <span className="text-orange-500">PRO</span>
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Construction & Welding
              </p>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Professional construction and welding services delivering safe, reliable, and high-quality industrial
              solutions across California.
            </p>

            {/* Certifications badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Licensed Contractor", "Fully Insured"].map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-sm border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-500"
                >
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <a
                  href="tel:+16197458718"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-orange-500"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="group-hover:underline">(619) 745-8718</span>
                </a>
                <a
                  href="tel:+16199028005"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-orange-500"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="group-hover:underline">(619) 902-8005</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@californiapro.com"
                  className="group flex items-start gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-orange-500"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="group-hover:underline">californiaproconstruction@gmail.com</span>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-sm text-white/60">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    San Diego, California
                    <br />
                    United States
                  </span>
                </div>
              </li>
            </ul>

    
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60">
              © {currentYear} <span className="font-semibold text-white/80">California Pro Construction & Welding</span>.
              All rights reserved.
            </p>
            <p className="mt-1 text-xs text-white/40">Built with precision, dedication, and excellence.</p>
          </div>

        
        </div>

      
      </div>

      {/* Decorative bottom accent */}
      <div
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, ${ORANGE}, #E67E00, ${ORANGE})`,
        }}
      />
    </footer>
  );
}
