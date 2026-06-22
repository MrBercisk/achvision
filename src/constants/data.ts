import { Project, Testimonial, TeamMember, Service, ApproachStep, FaqItem } from '../types';

export const HERO_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_pZCTl1nc_OrZsOPtY7GOS2Uz-_3HA-uPOJY_ASkamA4-fKvxTX6ZrvoMNSxFm9f-koLv6sDBscSAzAuSW0oNF4OjUoUoTQL0OAb96-cBhT6U9EAkmDVLpQBBThHgAguaEZ5p44dh59t-3kg_bXghCZx_YeWcHuBAv5PVnMws1EtqZ4UMgVjQs2hvAiGK3E_ePb1DYO1YYnQpMztMA414pfF3DZxZ4ygvKo0ewx50hgVvKazQMx52VYUxadvh-LDuluT1leUtNQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbfC40QxQQbrGJ-gvWtuHsrrzAX3VViQ-LAgqAlLMirMC61KfxYCfPspjVAwTuADThLC718Iyr-YMp4hMF9ms2qDaPlRD6dwSfrElpgfq3yqquBuNmWXZDhlgTaZVCit5EKSf5y_uJOWULQJrO9cfVPTNk-gtzuy13j0Lq7cCKQWx1-t8OGSXFqKfsJq4rHiNBu5C0_BzrhtOpLoEuBs0R_XxliaYq1pmXyrD-k9E-UQYYnjNhAXcJfbJxKoJlHIdb9qgU2UL5-k0"
];

export const PROJECTS: Project[] = [
  {
    id: "hillside-residence",
    title: "Hillside Residence",
    category: "Residential",
    description: "A gorgeous modern villa integrated harmoniously into a steep verdant slope.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAK1Cp2D8ZlXokA8ymvxReXWWEsR3krvtJRhfQK55Vj5p8H9LHphUnjZcwwfCFD_TuIw7dP3Iz0gMap1MMJvJ18FLFk8mLK-zybcCCLHy7YSLJfYt01FksEG2ykVg-khTJeUd7tVQe0kSuz-ygrWQndPprc5XBmj4uqu_SF8p3b-hKDPTeL_7SHa8b9TuUaExuYHNrKeH39L632O8J28tzb9COCiyLEBZBiIgg9rBPptMJlUkdpSYSM_znVpp88t4ehImZHv3IBs",
    year: "2024",
    location: "Malibu, California",
    size: "450 sqm",
    status: "Completed",
    challenge: "Integrating a multi-tiered concrete and cedar residence into a fragile hillside with active slide potential while preserving majestic mountain views.",
    solution: "Utilized deep-drilled cast-in-place concrete piers coupled with cantilevered main decks to minimize site disturbance and create floating viewing galleries.",
    architecturalStyle: "Modern Organic Brutalism"
  },
  {
    id: "contemporary-office",
    title: "Contemporary Office",
    category: "Commercial",
    description: "A striking high-performance commercial headquarters defining modern workplace design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0LjehT2kvB8M4s7sS8nL4lxXjkuDjzQCWEmXya065BtwErzR80eDklLzekEFqY1UaUuMKNso8thbfyJCFsQrcZRUOWPDXZzHe0fGbFXfj6hggiLrVezUWYO21dcf57QeFChdjM9a8-vf6O1MafyQ-3D3yAPF7DB8I3MT8JQulvYmRoHWQ2BjSB5D_gygBfU_-1-2HD925cZpoMC1Ca5vxmL2Lkj9uAkMmWedhKbM7GU03TrFWQ0PIWstWT8zWpU2UCufQC2BJBOc",
    year: "2023",
    location: "Austin, Texas",
    size: "3,200 sqm",
    status: "Completed",
    challenge: "Creating an open, highly collaborative workplace that meets rigorous Net-Zero carbon standards in extreme humid-subtropical climates.",
    solution: "Designed a high-tech smart vertical-finned facade that responds dynamically to solar load, paired with custom geothermal loop cooling and timber-concrete hybrids.",
    architecturalStyle: "Sustainable High-Tech Modernist"
  },
  {
    id: "ocean-view-villa",
    title: "Ocean View Villa",
    category: "Residential",
    description: "A luxury holiday retreat floating over high marine cliffs with pristine waterfronts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs_pZCTl1nc_OrZsOPtY7GOS2Uz-_3HA-uPOJY_ASkamA4-fKvxTX6ZrvoMNSxFm9f-koLv6sDBscSAzAuSW0oNF4OjUoUoTQL0OAb96-cBhT6U9EAkmDVLpQBBThHgAguaEZ5p44dh59t-3kg_bXghCZx_YeWcHuBAv5PVnMws1EtqZ4UMgVjQs2hvAiGK3E_ePb1DYO1YYnQpMztMA414pfF3DZxZ4ygvKo0ewx50hgVvKazQMx52VYUxadvh-LDuluT1leUtNQ",
    year: "2025",
    location: "Uluwatu, Bali",
    size: "620 sqm",
    status: "Completed",
    challenge: "Developing a highly exposed seaside structure resilient to high salt mist, wind load, and corrosive atmosphere without losing panoramic visual transparency.",
    solution: "Sourced marine-grade duplex stainless steel skeletons, carbonized structural teak wood surfaces, and ultra-clear double glazing with low-e protection.",
    architecturalStyle: "Minimalist Coastal Luxury"
  },
  {
    id: "archipel-resort",
    title: "Archipelago Eco-Resort",
    category: "Hospitality",
    description: "Multi-pavilion luxury nature cabins celebrating local vernacular craft and flora.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    year: "2024",
    location: "Raja Ampat, Indonesia",
    size: "1,800 sqm",
    status: "Completed",
    challenge: "Constructing remote hospitality spaces on sensitive marine habitats without relying on heavy machinery or carbon-intensive transportation loops.",
    solution: "Used component-based prefabricated modules composed of sustainable bamboo composite and lightweight local structural timber, transported manually and mounted on stilted anchors.",
    architecturalStyle: "Tropical Vernacular Bio-Architecture"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "David Anderson",
    role: "Homeowner",
    content: "ArchVision transformed our vision into a stunning reality. Their attention to detail and innovative use of natural light created a home that feels both expansive and intimate. The process was truly collaborative, respect was given to our inputs, and they pushed technical boundaries elegantly.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGpO5Dg6cmdd2VWbagXQXthE2BtR4dp-gioQsR1vKMsg-Mox8-CGiSGlQ3IQ3EduBMPBEIzz-M5JYDa0mw3OKfZidLOs0YuGlAvRWJ1Mp_BNVMxMFpbIQZ4PKaylyvCvH-wdgTSZvVTqMNjpuNsG0os4YumMwjDxMeP2R_e8Xxrlu2FfUdCqJF8KJ5pZOYgoEHAJgEDynhvTwTNPbOQSkuR4s1fGdHUF1Rb5Ed4d2MtN4qK5qnGYdeySBUe4tMDTXGPMBjyG--eJI",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Sophia Martinez",
    role: "CEO",
    company: "Innovate Corp",
    content: "Their innovative approach and ability to understand our needs resulted in a workspace that perfectly reflects our brand and values. Working space productivity skyrocketed, natural ventilation and passive cooling systems work flawlessly in practice.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgHYgV7ERfc4EjZYDxg7tByRLj6Br70EMVUD0tK4fRILb9rpeNHdNrhZ1Eiczeu4xQjSyEDth4JiD-Cq4222FRo2pRyCpb9nZQUC54EKvnn9Ilq3-vQ5AOIKOlMJfr17PPUT8UK5xg1j3lF6CSz3VXCI0SsU6jUgSJ9uepWrzHqTanLkzXKvPz5kAKsvEWtUGwxDtXY9wqqN3G0XP8VCb_xw2Az_zuEUZ7qQg3sd8Sys5GAoOgG8zTn3mYptsRL8XFeFHQkvZenGE",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Michael Lee",
    role: "Property Developer",
    company: "Westland Real Estate",
    content: "As a developer, I value architectural partners who respect timelines without compromising on design quality. ArchVision consistently delivers world-class concepts with solid documentation that passes city permissions directly on first submissions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmkbxSItURSDYHsk0WzhIVYTh5ub6p4pnuhMjxWblIubenCErZAgSUio_p0luSz4RX4IKW-OJ4u_fzbuYjC5C3HRWfFZKNOy0kWLDNph-YkNNocux4lJUMhApCvBR77Zw0gTlWZ_oWOCQSweIYeZjmrP_UbZ2Dun_6mzbMz6fKJ-18GmXf56ExcZRaQFcuCRxOcEimii38qWyKhv-KZarSNABsgTdNQIwkpIpK7gQNdBoq9kBWLM5Wy5QrdsOMIa98g4tcFocgg-M",
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: "residential-design",
    title: "Residential Design",
    description: "Designing bespoke custom estates, high-concept villas, and sustainable family homes tailored to modern lifestyles.",
    iconName: "Home",
    longDescription: "Our residential services address the deepest aspects of living. We start by analyzing the client's internal rhythm, family structure, and personal design leanings. We shape light, airflow, and pathways to cultivate quietude, warmth, and intuitive comfort, creating masterpieces that harmonize perfectly with their surrounding environments.",
    benefits: [
      "Custom solar position & light orientation mapping",
      "Spatially efficient floor plans tailored to lifestyle flow",
      "High-end acoustic protection and passive thermal envelope design",
      "Biophilic architectural integration"
    ]
  },
  {
    id: "commercial-architecture",
    title: "Commercial Architecture",
    description: "Creating high-performance high-rises, headquarters, retail flagship stores, and multi-use corporate campuses.",
    iconName: "Building",
    longDescription: "We design corporate spaces that act as productivity accelerators and brand statements. Guided by fluid collaborative spatial modeling, smart materials, and industry-standard green certifications, our designs decrease operation costs, raise human focus, and provide flexible floor matrices that adapt effortlessly to organizational changes.",
    benefits: [
      "LEED & WELL-building compliance pathways",
      "High-efficiency smart building HVAC and dynamic facades",
      "Highly flexible structural grids for spatial adaptation",
      "Ergonomic workflow planning and light-reflective surfaces"
    ]
  },
  {
    id: "hospitality-planning",
    title: "Hospitality Planning",
    description: "Developing world-class luxury eco-resorts, experiential hotel complexes, and high-style dining environments.",
    iconName: "Hotel",
    longDescription: "In hospitality, architectural spaces are the product. We design deep immersion experiences where spatial flow, exquisite lighting fixtures, sound absorption, and organic textures collaborate to tell a distinct story, encouraging high guest retention rates and stunning cinematic social visibility.",
    benefits: [
      "Sensory zoning, optimizing atmospheric acoustics & lighting",
      "Guest service pathways decoupled from guest viewing sightlines",
      "Site-responsive landscape integration",
      "High-performance regional texture sourcing and local craftsman loops"
    ]
  },
  {
    id: "landscape-design",
    title: "Landscape Design",
    description: "Crafting beautiful gardens, water features, hardscapes, and urban greenspaces that speak the same language as the architecture.",
    iconName: "Leaf",
    longDescription: "Architecture doesn't stop at the exterior wall. Our landscape designers formulate exterior hardscapes, pools, terraces, and layered botanical ecosystems that weave seamlessly with interior living sections, producing micro-climate ventilation loops and natural shading blocks.",
    benefits: [
      "Xeriscaping with native drought-tolerant planting palettes",
      "Integrated graywater recycling and biological stormwater management",
      "Sensory masterplanning including paths, sound, and thermal microclimates",
      "Bespoke fire pits, pavilions, and custom visual water assets"
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    stepNumber: "01",
    title: "Discover",
    iconName: "Search",
    description: "In-depth analysis of client vision, site constraints, and feasibility.",
    longDescription: "We begin with deep immersive listening. We mapping the terrain, evaluate soil mechanics, analyze microclimate wind and sun patterns, and detail legal guidelines to build a robust structural framework of project possibilities."
  },
  {
    stepNumber: "02",
    title: "Design",
    iconName: "FileText",
    description: "Translating ideas into conceptual sketches and 3D models.",
    longDescription: "Our creative team translates findings into hand sketches, elevation options, and high-fidelity 3D models. We study spatial volumes, mock light penetrations, and refine material finishes interactively alongside the client."
  },
  {
    stepNumber: "03",
    title: "Develop",
    iconName: "DraftingCompass",
    description: "Technical refinement and structural coordination.",
    longDescription: "This is where beauty meets engineering precision. We produce comprehensive construction blueprints, coordinate with MEP and structural engineers, select structural hardware, and secure local municipal building approvals."
  },
  {
    stepNumber: "04",
    title: "Deliver",
    iconName: "Key",
    description: "Overseeing construction to ensure precision and quality.",
    longDescription: "We guide site contractors directly. Through consistent physical site visits and digital project administration, we verify material standards, evaluate geometric tolerances, and deliver the keys of a pristine, built masterwork."
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is your typical project timeline from initial meeting to building permit?",
    answer: "A standard custom residential design requires 4 to 8 months depending on scale. This includes research, spatial layouts, exterior designs, consulting with engineering partners, and drafting the final structural documents ready for city submission.",
    category: "Process"
  },
  {
    id: "faq-2",
    question: "Do you supervise the physical building phase or only provide drawings?",
    answer: "We strongly offer Construction Administration (CA) as a core part of our packages. We visit the site multiple times a week, review shop submittals, answer contractor clarifying queries, and ensure execution strictly adheres to architectural standards.",
    category: "Service"
  },
  {
    id: "faq-3",
    question: "How do you calculate architectural design fees?",
    answer: "Our fees are typically calculated as a percentage of construction costs (ranging between 8-15%), or a fixed block structure structured around design phases. This ensures full budget tracking without hidden retainers.",
    category: "Pricing"
  },
  {
    id: "faq-4",
    question: "Can your designs achieve certified eco-friendly or passive house status?",
    answer: "Absolutely. Sustainability is baked directly into our core process. We employ certified Passive House planners and LEED professionals who utilize state-of-the-art thermo-hygrometric modeling software to design near-zero energy consumption sites.",
    category: "General"
  }
];

export const RECENT_NEWS = [
  {
    id: "news-1",
    title: "The Future of Concrete in Sustainable Homes",
    summary: "Exploring carbon-storing clinker replacements, geometric concrete structures, and high thermal mass living.",
    category: "Aesthetics",
    date: "June 14, 2026",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaAK1Cp2D8ZlXokA8ymvxReXWWEsR3krvtJRhfQK55Vj5p8H9LHphUnjZcwwfCFD_TuIw7dP3Iz0gMap1MMJvJ18FLFk8mLK-zybcCCLHy7YSLJfYt01FksEG2ykVg-khTJeUd7tVQe0kSuz-ygrWQndPprc5XBmj4uqu_SF8p3b-hKDPTeL_7SHa8b9TuUaExuYHNrKeH39L632O8J28tzb9COCiyLEBZBiIgg9rBPptMJlUkdpSYSM_znVpp88t4ehImZHv3IBs"
  },
  {
    id: "news-2",
    title: "Award Won: Best Sustainable Commercial Design 2025",
    summary: "ArchVision Studio has been awarded the prestigious Emerald Arch for the Austin Contemporary Office system.",
    category: "Award",
    date: "May 28, 2025",
    readTime: "3 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0LjehT2kvB8M4s7sS8nL4lxXjkuDjzQCWEmXya065BtwErzR80eDklLzekEFqY1UaUuMKNso8thbfyJCFsQrcZRUOWPDXZzHe0fGbFXfj6hggiLrVezUWYO21dcf57QeFChdjM9a8-vf6O1MafyQ-3D3yAPF7DB8I3MT8JQulvYmRoHWQ2BjSB5D_gygBfU_-1-2HD925cZpoMC1Ca5vxmL2Lkj9uAkMmWedhKbM7GU03TrFWQ0PIWstWT8zWpU2UCufQC2BJBOc"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Aidan Sterling",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "With over 18 years in premium residential and brutalist design, Aidan steers the spatial vocabulary and philosophy of ArchVision Studio. He believes the highest virtue of architecture is to listen to the wind and land before picking up a pencil.",
    email: "aidan@archvision.studio",
    linkedin: "linkedin.com/in/aidan-sterling-arch"
  },
  {
    id: "member-2",
    name: "Elena Rostova",
    role: "Director of Sustainability & Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Elena holds a PhD in high-performance materials and passive energy loops. She coordinates the structural optimization models and ensures every blueprint targets premium Net-Zero levels.",
    email: "elena@archvision.studio",
    linkedin: "linkedin.com/in/elena-rostova-green"
  },
  {
    id: "member-3",
    name: "Marcus Vane",
    role: "Lead Interior Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Marcus treats interiors as highly detailed living sculptures. He designs custom cabinetry, lighting pathways, and hand-selects raw tactile stones and finishes that communicate architectural balance.",
    email: "marcus@archvision.studio",
    linkedin: "linkedin.com/in/marcus-vane-interiors"
  }
];
