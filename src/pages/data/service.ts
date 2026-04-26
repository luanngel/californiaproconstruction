export type ServiceDetail = {
  label: string;
  tagline: string;
  description: string;
  icon: string;
  features: { title: string; desc: string }[];
  process: string[];
};

export const servicesData: Record<string, ServiceDetail> = {
  "services-construction": {
    label: "General Construction",
    tagline: "Built right. Built to last. Built for you.",
    description:
      "We handle full-scope construction projects for homeowners and businesses across San Diego — from the foundation to the final finish. Whether you're building new or expanding an existing structure, we manage the entire process: permits, framing, concrete, structural steel, and all finishing work. One contractor. No surprises.",
    icon: "🏗️",
    features: [
      { title: "New Residential Builds", desc: "Ground-up construction of single-family homes with full permit management and structural oversight." },
      { title: "Room Additions", desc: "Seamless additions that match your existing structure — additional bedrooms, garages, ADUs, and more." },
      { title: "Concrete & Foundation Work", desc: "Footings, slabs, stem walls, and concrete flatwork built to California soil and seismic requirements." },
      { title: "Structural Framing", desc: "Wood and steel framing for walls, roofs, and floor systems — engineered and code-compliant." },
      { title: "Commercial New Builds", desc: "Light commercial construction for offices, warehouses, retail units, and mixed-use properties." },
      { title: "Permit Coordination", desc: "We pull all permits, submit plans, and coordinate inspections so you don't have to." },
    ],
    process: [
      "Free site visit and project scope review",
      "Architectural plans and permit application",
      "Foundation and site preparation",
      "Structural framing and rough-in work",
      "Inspections at each phase",
      "Finishing, punch list, and final sign-off",
    ],
  },
  "services-residential": {
    label: "Remodeling & Renovation",
    tagline: "Your home. Rebuilt better.",
    description:
      "From kitchen and bathroom remodels to complete whole-home renovations, we transform existing spaces into something you're proud of. Every project is managed from design to final inspection — quality materials, clean work, and a crew that respects your home.",
    icon: "🏠",
    features: [
      { title: "Kitchen Remodels", desc: "Full gut and rebuild — new layout, cabinetry, countertops, plumbing, and electrical." },
      { title: "Bathroom Renovations", desc: "Tile, fixtures, vanities, showers, and full layout changes built to current code." },
      { title: "Full Home Renovations", desc: "Whole-house remodels including structural changes, new flooring, windows, and finishes." },
      { title: "Interior Build-Outs", desc: "Partition walls, closets, built-ins, and custom interior framing." },
      { title: "Exterior Upgrades", desc: "Stucco, siding, exterior painting, driveway slabs, and curb appeal improvements." },
      { title: "Custom Metalwork Details", desc: "Matching ironwork, railings, gates, and metal accents to complete the look." },
    ],
    process: [
      "In-home consultation and scope definition",
      "Design selections and material sourcing",
      "Demo and site protection",
      "Rough-in: framing, plumbing, electrical",
      "Finish work: tile, cabinetry, fixtures",
      "Final walkthrough and client sign-off",
    ],
  },
  "services-commercial": {
    label: "Commercial Build-Outs",
    tagline: "Your space. Ready for business.",
    description:
      "We build and renovate commercial spaces that are functional, compliant, and built to handle daily use. From tenant improvements to full commercial construction, we coordinate every trade under one roof — on schedule and on budget.",
    icon: "🏢",
    features: [
      { title: "Tenant Improvements (TI)", desc: "Office, retail, and restaurant build-outs customized to your business requirements." },
      { title: "Warehouse & Industrial", desc: "Structural work, mezzanines, dock areas, and industrial flooring for operational facilities." },
      { title: "ADA Compliance Upgrades", desc: "Bring existing commercial spaces into full ADA compliance — accessible entrances, restrooms, and pathways." },
      { title: "Steel Structures", desc: "Steel framing, mezzanine platforms, and structural reinforcements for commercial and industrial use." },
      { title: "Security & Access Features", desc: "Commercial-grade security doors, gates, bollards, and access control installations." },
      { title: "Project Management", desc: "Single point of contact managing all trades — GC, electrical, plumbing, and specialty subs." },
    ],
    process: [
      "Space assessment and construction drawings",
      "Permit application and city approvals",
      "Demo and site preparation",
      "Structural and rough-in work",
      "Interior finishes and specialty installs",
      "Final inspection and certificate of occupancy",
    ],
  },
  "services-ironwork": {
    label: "Gates & Ironwork",
    tagline: "Built for security. Designed to impress.",
    description:
      "Custom ironwork is our craft. We design and fabricate driveway gates, security doors, ornamental fences, railings, and staircases from industrial-grade steel — built to your exact dimensions, style, and security needs. Every piece is finished to withstand the California climate.",
    icon: "🔐",
    features: [
      { title: "Driveway & Sliding Gates", desc: "Automated or manual sliding and swing gates for residential and commercial driveways." },
      { title: "Security Entry Doors", desc: "Heavy steel doors with reinforced frames for warehouses, garages, and commercial spaces." },
      { title: "Ornamental Iron Fencing", desc: "Spear-top, horizontal slat, and decorative panel fencing fabricated to spec." },
      { title: "Metal Railings & Staircases", desc: "Interior and exterior steel staircases and railings — modern or ornamental styles." },
      { title: "Pedestrian Walk Gates", desc: "Matching access gates that complement your main gate or fence design." },
      { title: "Powder Coat & Finishing", desc: "Durable outdoor powder coating in any color to protect against rust and weather." },
    ],
    process: [
      "Site visit and measurement",
      "Design consultation and style selection",
      "Fabrication in our shop",
      "Surface prep and powder coat finish",
      "On-site installation and alignment",
      "Test run and client walk-through",
    ],
  },
  "services-welding": {
    label: "Welding & Fabrication",
    tagline: "Precision welds. Structural strength. Any material.",
    description:
      "Our certified welders handle MIG, TIG, and stick welding for residential, commercial, and industrial projects. From structural connections to custom fabrication, we deliver clean, strong welds on steel, stainless, and aluminum — on-site or in the shop.",
    icon: "⚡",
    features: [
      { title: "MIG Welding", desc: "Fast, strong welds for structural steel, frames, and heavy fabrication projects." },
      { title: "TIG Welding", desc: "Precise, clean welds for stainless steel, aluminum, and detail-oriented work." },
      { title: "Structural Welding", desc: "Field welding for structural repairs, connections, and heavy industrial applications." },
      { title: "On-Site Mobile Welding", desc: "We bring the equipment to your location for repairs and installations." },
      { title: "Custom Fabrication", desc: "One-off brackets, frames, enclosures, and structural components from raw steel." },
      { title: "AWS Certified Welders", desc: "All welders hold current AWS certifications with documented quality standards." },
    ],
    process: [
      "Review project scope and material specs",
      "Select welding process and joint design",
      "Material prep: cutting, grinding, and fit-up",
      "Weld execution with certified techniques",
      "Post-weld inspection and cleanup",
      "Final coating or passivation as needed",
    ],
  },
};
