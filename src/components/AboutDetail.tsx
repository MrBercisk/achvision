import React from 'react';
import { ArrowLeft, Award, Flame, Users, Sparkles, Building, Compass } from 'lucide-react';

interface AboutDetailProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export default function AboutDetail({ onBackToHome, onContactClick }: AboutDetailProps) {
  const milestones = [
    {
      year: "2016",
      title: "The Groundbreaking",
      description: "Founded in coastal Bali with a pure focus on solar orientation and basalt rock integration."
    },
    {
      year: "2019",
      title: "AIA Excellence Gold",
      description: "Honored with the Architectural Pioneers award for the Net-Zero Coastal Pavilion."
    },
    {
      year: "2022",
      title: "Commercial Landmark Expansion",
      description: "Broke ground on carbon-neutral workspaces combining community gardens with thermal concrete."
    },
    {
      year: "2025",
      title: "Autonomous Habitats",
      description: "Pioneering self-sufficient off-grid residential complexes with independent wastewater loop filtration."
    }
  ];

  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-[#DFC08A]" />,
      title: "Thermodynamic Synergy",
      desc: "Every wall thickness is modeled using dynamic solar coordinates, keeping internal zones naturally temperate."
    },
    {
      icon: <Flame className="w-6 h-6 text-[#DFC08A]" />,
      desc: "Raw, unmasked basalt masonry, carbon-sink cedar cladding, and earth tones that weather beautifully over generations.",
      title: "Material Honesty"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#DFC08A]" />,
      desc: "Placing high value on deep silence, light shadows, and curated acoustic absorption built directly into the timber frame roofs.",
      title: "Curated Atmosphere"
    }
  ];

  return (
    <div className="bg-surface-cream min-h-screen text-footer-black selection:bg-primary-container selection:text-white">
      {/* Premium Hero Frame */}
      <div className="relative bg-[#111111] text-white py-32 px-6 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200" 
            alt="Minimalist design interior ceiling concrete wood"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#DFC08A] uppercase hover:text-white transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            BACK TO LANDING
          </button>

          <span className="text-[10px] font-mono tracking-[0.25em] text-[#DFC08A] font-bold uppercase block mb-3">
            THE ARCHVISION MANIFESTO
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-none text-white max-w-3xl">
            Where Raw Geology Meets Human Consciousness.
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-muted-dark max-w-lg mt-6 leading-relaxed">
            We don't build monuments; we sculpt responsive envelopes that align with wind streams, celebrate raw structural weights, and breathe naturally.
          </p>
        </div>
      </div>

      {/* Philosophy Pillars */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-border-light p-10 hover:border-[#DFC08A] transition-all duration-300">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-sans text-base font-bold text-footer-black mb-3">{pillar.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Story Grid and Concrete Vision */}
      <section className="py-20 bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
              OUR JOURNEY & CORE MISSION
            </span>
            <h2 className="font-display text-3xl sm:text-[42px] font-semibold text-footer-black leading-tight mt-3 mb-6">
              Cultivating Architecture of Silence and Weight.
            </h2>
            <div className="w-16 h-1 bg-[#DFC08A] mb-6" />
            
            <div className="space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                In 2016, our founders realized that modern sustainable architecture had become obsessed with digital gadgets and greenwashed materials. We embarked on a different path: passive structural engineering.
              </p>
              <p>
                By strictly optimizing thermal envelope depths, placing load-bearing volcanic basalt where it naturally collects summer heat, and forming air-vent ducts that flow from prevailing seas, our residences perform cleanly without absolute reliance on automated machinery.
              </p>
              <p>
                Today, our studio brings together twelve award-winning passive energy specialists, physical interior draftsmen, and structural stone craftsmen to bring bespoke custom retreats to life around the globe.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-surface-cream overflow-hidden border border-border-light">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" 
                alt="Contemporary luxury concrete home design"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Timeline Milestones */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono font-bold text-[#DFC08A] uppercase tracking-wider">CHRONOLOGY</span>
          <h2 className="font-display text-3xl font-semibold text-footer-black mt-1">Our Historic Design Milestones</h2>
        </div>

        <div className="relative border-l border-border-light ml-4 md:ml-32 pl-8 space-y-12">
          {milestones.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Outer circle pointer */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-surface-cream border-2 border-[#DFC08A] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-footer-black rounded-full" />
              </div>
              
              {/* Big Year label for desktop */}
              <div className="hidden md:block absolute -left-[180px] top-1 text-right w-36 font-display text-2xl font-bold text-[#DFC08A]">
                {step.year}
              </div>

              <div>
                <span className="md:hidden font-display text-lg font-bold text-[#DFC08A] block mb-1">{step.year}</span>
                <h3 className="font-sans text-base font-bold text-footer-black mb-1">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Bottom CTA banner */}
      <section className="bg-footer-black text-white py-20 border-t border-white/5 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <Award className="w-10 h-10 text-[#DFC08A] mx-auto animate-pulse" />
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-white">Let's craft your permanent design standard.</h2>
          <p className="text-xs text-text-muted-dark max-w-md mx-auto leading-relaxed">
            Contact our principals directly to discuss your secured location parameters and municipal clears.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={onContactClick}
              className="font-sans text-xs uppercase tracking-widest font-bold px-8 py-4 bg-[#DFC08A] text-[#111111] hover:bg-white hover:text-footer-black transition-all cursor-pointer"
            >
              SCHEDULE CONSULTATION
            </button>
            <button
              onClick={onBackToHome}
              className="font-sans text-xs uppercase tracking-widest font-bold px-8 py-4 border border-white/20 hover:border-white transition-all cursor-pointer"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
