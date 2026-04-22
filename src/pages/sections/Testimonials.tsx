type Testimonial = {
    id: string;
    text: string;
    initials: string;
    name: string;
    role: string;
    rating: number;
  };
  
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      text:
        "They transformed our industrial plant with exceptional work. Met deadlines and quality exceeded our expectations. Professional team from start to finish.",
      initials: "MR",
      name: "Miguel Rodriguez",
      role: "Operations Director, TechManufacturing Inc.",
      rating: 5,
    },
    {
      id: "t2",
      text:
        "Complex metal structures with impeccable results. Attention to detail and unmatched safety standards. Would highly recommend for any industrial project.",
      initials: "JC",
      name: "Jennifer Chen",
      role: "Project Manager, Pacific Logistics",
      rating: 5,
    },
    {
      id: "t3",
      text:
        "They stand out for professionalism and expertise. Top-tier welding quality and excellent availability. Our go-to partner for all construction needs.",
      initials: "DT",
      name: "David Thompson",
      role: "CEO, Coastal Industrial Solutions",
      rating: 5,
    },
  ];
  
  export default function Testimonials() {
    const ORANGE = "#FF8C00";
    const ORANGE_DARK = "#E67E00";
  
    return (
      <section id="testimonios" className="relative overflow-hidden bg-zinc-50 px-6 py-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.05),transparent_60%)]" />
        
        {/* Quote pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <pattern id="quote-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="40" fontSize="60" fill="currentColor" opacity="0.3">"</text>
            </pattern>
            <rect width="100%" height="100%" fill="url(#quote-pattern)" />
          </svg>
        </div>
  
        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
  
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              What Our <span className="text-orange-500">Clients Say</span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-black/70">
              Client trust is our greatest achievement. Here's what they have to say.
            </p>
  
            {/* Divider */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-orange-500" />
              <div className="h-2 w-2 rotate-45 bg-orange-500" />
              <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
          </div>
  
          {/* Testimonials Grid */}
          <div className="relative mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="group relative overflow-hidden bg-white transition-all duration-300 hover:-translate-y-3"
                style={{
                  boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                  transitionDelay: `${idx * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(255,140,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 5px 30px rgba(0,0,0,0.08)";
                }}
              >
                {/* Top orange accent */}
                <div 
                  className="absolute top-0 left-0 h-1.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: ORANGE }}
                />
  
                <div className="p-8">
                  {/* Quote icon */}
                  <div className="mb-4 flex items-start justify-between">
                    <svg 
                      className="h-10 w-10 text-orange-500/20 transition-all duration-300 group-hover:text-orange-500/40 group-hover:scale-110" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
  
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            fill: ORANGE,
                            transitionDelay: `${i * 50}ms`,
                          }}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
  
                  {/* Testimonial text */}
                  <p className="text-sm leading-relaxed text-black/70 italic">
                    "{t.text}"
                  </p>
  
                  {/* Author info */}
                  <div className="mt-6 flex items-center gap-4 border-t border-black/5 pt-6">
                    {/* Avatar */}
                    <div 
                      className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_DARK})`,
                      }}
                    >
                      <span className="text-lg">{t.initials}</span>
                      
                      {/* Ring animation */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          border: `2px solid ${ORANGE}`,
                          transform: "scale(1.2)",
                        }}
                      />
                    </div>
  
                    {/* Name and role */}
                    <div className="flex-1 text-left">
                      <div className="font-bold text-black transition-colors duration-300 group-hover:text-orange-500">
                        {t.name}
                      </div>
                      <div className="mt-1 text-xs text-black/60 leading-relaxed">
                        {t.role}
                      </div>
                    </div>
                  </div>
  
                  {/* Verified badge */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verified Client</span>
                  </div>
                </div>
  
                {/* Side accent line */}
                <div 
                  className="absolute left-0 top-0 h-0 w-1 transition-all duration-500 group-hover:h-full"
                  style={{ backgroundColor: ORANGE }}
                />
  
                {/* Shine effect */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            ))}
          </div>
  
          
  
        </div>
      </section>
    );
  }