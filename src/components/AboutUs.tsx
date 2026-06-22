import React from 'react';
import { ArrowRight, Leaf, Shield, Award } from 'lucide-react';

interface AboutUsProps {
  onLearnMore?: () => void;
}

export default function AboutUs({ onLearnMore }: AboutUsProps) {
  const philosophies = [
    {
      icon: <Leaf className="w-5 h-5 text-primary" />,
      title: "Sustainable Architecture",
      description: "Passive solar alignments, smart rainwater harvesting, carbon-negative timbers, and thermal envelope calculations."
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Immutable Durability",
      description: "Sourcing localized, raw materials like basalt masonry and seasoned cedar to withstand coastal and extreme conditions."
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "AIA Awarded Quality",
      description: "Award-winning layouts, precise architectural scales, and seamless integration with natural terrains."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-border-light relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              ABOUT OUR STUDIO
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight">
            Crafting Spaces with Intent & Deep Vision
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mt-4" />
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-4">
            At ArchVision, we design custom homes that transcend seasonal trends. Through extensive solar pathway analysis, climate modeling, and regional materials studies, we ensure each layout operates with modern efficiency while honoring the landscape.
          </p>
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              className="mt-6 font-sans text-xs uppercase tracking-widest font-bold px-6 py-3 bg-footer-black hover:bg-primary text-white transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 cursor-pointer"
            >
              Learn More About Our Journey <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Storytelling Masonry Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] bg-surface-cream overflow-hidden border border-border-light relative z-10 shadow-sm max-w-[480px] mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                alt="Modern studio concrete house minimal aesthetic"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 hover:scale-102"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-footer-black/90 backdrop-blur-md text-white p-5 border border-white/10">
                <p className="text-[10px] font-mono tracking-widest text-[#DFC08A] font-bold uppercase">
                  ESTABLISHED 2016
                </p>
                <p className="font-display text-sm font-semibold mt-1">
                  "Architecture is a durable canvas where geometry meets human experience."
                </p>
              </div>
            </div>
            
            {/* Structural background shadow grid block */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-dashed border-primary/20 pointer-events-none hidden lg:block max-w-[480px]" />
          </div>

          {/* Right Column: Narrative Block & Philosophies */}
          <div className="lg:col-span-6 space-y-8">
            {/* List of Philosophy items */}
            <div className="space-y-6">
              {philosophies.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-6 border-b border-border-light last:border-b-0">
                  <div className="w-10 h-10 bg-surface-cream border border-border-light shrink-0 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-footer-black">{item.title}</h3>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
