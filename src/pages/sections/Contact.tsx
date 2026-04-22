"use client";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
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
      detail: "(123) 456-7890",
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
      detail: "info@californiapro.com",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
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
    }, 3000);
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
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border-2 border-orange-500/30 bg-orange-500/10 px-6 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500">
                  Get In Touch
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to Start <span className="text-orange-500">Your Project?</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Contact us today and receive a free, no-obligation quote. Our team is ready to bring your vision
                to life.
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

            {/* 24/7 Emergency Badge */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-sm bg-orange-500 px-6 py-4 shadow-lg shadow-orange-500/30">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-white">
                24/7 Emergency Service Available
              </span>
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
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-sm border-2 border-orange-500 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:border-orange-600 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Request</span>
                          <svg
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>

                    {/* Shine effect */}
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
