import { useState } from "react";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type ContactCard = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subdtail: string;
  link: string | null;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const ORANGE = "#FF8C00";

  const cards: ContactCard[] = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      detail: "(619) 902-8005 | (619) 745-8718",
      subdtail: "Mon-Fri: 7AM - 6PM",
      link: "tel:+1234567890",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      detail: "californiaproconstruction@gmail.com",
      subdtail: "We reply within 24 hours",
      link: "mailto:info@californiapro.com",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      detail: "San Diego, California",
      subdtail: "United States",
      link: null,
    },
  ];

  const projectLabels: Record<string, string> = {
    industrial:   "Industrial Construction",
    welding:      "Professional Welding",
    garage:       "Garage Door Repair",
    fabrication:  "Metal Fabrication",
    other:        "Other / Consultation",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const lines = [
      "Hello! I'm interested in your services.",
      "",
      `Name: ${formData.fullName}`,
      formData.company ? `Company: ${formData.company}` : null,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Project: ${projectLabels[formData.projectType] ?? formData.projectType}`,
      "",
      `Details: ${formData.message}`,
    ]
      .filter((l): l is string => l !== null)
      .join("\n");

    window.open(`https://wa.me/16197458718?text=${encodeURIComponent(lines)}`, "_blank");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950 px-6 py-24"
    >
      {/* Background decorative elements */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.15),transparent_70%)]" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(255,140,0,0.08),transparent_70%)]" />

      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(255,140,0,0.5)_30px,rgba(255,140,0,0.5)_31px)]" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,140,0,0.3) 0px, rgba(255,140,0,0.3) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, rgba(255,140,0,0.3) 0px, rgba(255,140,0,0.3) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            {/* Header */}
            <div>
              <h2 style={{
                margin: 0,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(34px, 4vw, 52px)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                textTransform: "uppercase",
              }}>
                Ready to Start <span style={{ color: "#FF8C00" }}>Your Project?</span>
              </h2>

              <p style={{
                margin: "20px 0 0",
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
              }}>
                Contact us today and receive a free, no-obligation quote. Our team is ready to bring your vision to life.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-12 space-y-6">
              {cards.map((item, idx) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/10"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">{item.title}</h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="mt-1 block text-lg font-semibold text-white transition-colors duration-300 hover:text-orange-500"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-semibold text-white">{item.detail}</p>
                    )}

                    <p className="mt-1 text-sm text-white/50">{item.subdtail}</p>
                  </div>
                </div>
              ))}
            </div>

            
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Form Container */}
            <div className="relative rounded-sm border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm">
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1 w-full rounded-t-sm" style={{ backgroundColor: ORANGE }} />

              {submitted ? (
                /* Success Message */
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-3 text-white/70">We've received your message and will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                        Full Name *
                      </label>
                      <input
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                        Phone *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Project Type *
                    </label>
                    <select
                      required
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                    >
                      <option value="" className="bg-zinc-900">
                        Select a project type...
                      </option>
                      <option value="industrial" className="bg-zinc-900">
                        Industrial Construction
                      </option>
                      <option value="welding" className="bg-zinc-900">
                        Professional Welding
                      </option>
                      <option value="garage" className="bg-zinc-900">
                        Garage Door Repair
                      </option>
                      <option value="fabrication" className="bg-zinc-900">
                        Metal Fabrication
                      </option>
                      <option value="other" className="bg-zinc-900">
                        Other / Consultation
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
                      Project Details *
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project... What do you need?"
                      rows={5}
                      className="w-full resize-none rounded-sm border-2 border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 focus:border-orange-500 focus:bg-white/10 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-sm border-2 border-orange-500 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {/* WhatsApp icon */}
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Send via WhatsApp</span>
                    </span>
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-white/40">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>

            {/* Corner accents */}
            <div className="absolute -left-2 -top-2 h-16 w-16 border-l-2 border-t-2 border-orange-500/30" />
            <div className="absolute -bottom-2 -right-2 h-16 w-16 border-b-2 border-r-2 border-orange-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
