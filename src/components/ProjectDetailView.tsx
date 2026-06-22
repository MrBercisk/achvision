import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants/data';
import { ArrowLeft, MapPin, Calendar, Minimize2, CheckSquare, Sparkles, Send, MoveRight, ArrowRight } from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  onBackToHome: () => void;
  onInquireProject: (projectTitle: string) => void;
  onSelectProject: (proj: Project) => void;
}

export default function ProjectDetailView({ project, onBackToHome, onInquireProject, onSelectProject }: ProjectDetailViewProps) {
  // Find neighboring projects for recommendations
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[currentIndex === 0 ? PROJECTS.length - 1 : currentIndex - 1];

  return (
    <div className="bg-surface-cream min-h-screen text-footer-black selection:bg-primary-container selection:text-white">
      {/* Upper Navigation Rail */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#DFC08A] uppercase hover:text-footer-black transition-colors group cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          BACK TO PORTFOLIO
        </button>
      </div>

      {/* Main Structural Column */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24">
        
        {/* Left Column: Premium visual highlight panel */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[4/3] w-full bg-white border border-border-light overflow-hidden shadow-xs relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-[1.01] transition-all duration-700"
            />
            {/* Sector indicator label */}
            <span className="absolute top-4 left-4 bg-footer-black text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 font-bold border border-white/10">
              {project.category} SECTOR
            </span>
          </div>

          {/* Expanded image layout mockup / extra visual story boards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-white border border-border-light overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400" 
                alt="Detail concrete"
                className="w-full h-full object-cover grayscale select-none"
              />
            </div>
            <div className="aspect-square bg-white border border-border-light overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400" 
                alt="Timber framework joint"
                className="w-full h-full object-cover grayscale select-none"
              />
            </div>
            <div className="aspect-square bg-white border border-border-light overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=400" 
                alt="Solar passive alignment windows"
                className="w-full h-full object-cover grayscale select-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Case study specs, challenges, answers, and inquiry CTA */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-footer-black leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm text-[#DFC08A] font-mono tracking-wider mt-1">{project.architecturalStyle}</p>
          </div>

          {/* Spec details grid block */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-y border-border-light py-6 text-xs bg-white p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-cream flex items-center justify-center text-[#DFC08A]">
                <MapPin className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-[9px] text-text-secondary uppercase font-semibold">LOCATION</p>
                <p className="font-bold text-footer-black mt-0.5">{project.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-cream flex items-center justify-center text-[#DFC08A]">
                <Calendar className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-[9px] text-text-secondary uppercase font-semibold">YEAR COMPLETED</p>
                <p className="font-bold text-footer-black mt-0.5">{project.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-cream flex items-center justify-center text-[#DFC08A]">
                <Minimize2 className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-[9px] text-text-secondary uppercase font-semibold">SPATIAL FOOTPRINT</p>
                <p className="font-bold text-footer-black mt-0.5">{project.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-cream flex items-center justify-center text-[#DFC08A]">
                <CheckSquare className="w-4 h-4 shrink-0" />
              </div>
              <div>
                <p className="text-[9px] text-text-secondary uppercase font-semibold">CONSTRUCTION STATUS</p>
                <p className="font-bold text-footer-black mt-0.5">{project.status}</p>
              </div>
            </div>
          </div>

          {/* Deep Case Studies narration */}
          <div className="space-y-6">
            <div className="bg-[#111111] text-white p-6 border border-primary/20">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#DFC08A] font-bold block mb-2">
                01 / THE ECOLOGICAL CHALLENGE
              </span>
              <p className="text-xs text-text-muted-dark leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="border border-border-light bg-white p-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#DFC08A] font-bold block mb-2">
                02 / ARCHITECTURAL RESPONSE & IMPLEMENTATION
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Inquire Box */}
          <div className="border border-border-light bg-white p-8 space-y-4">
            <h3 className="font-sans text-sm font-bold text-footer-black flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DFC08A]" /> Direct Design Specification Inquiry
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Interested in integrating the unique thermo-dynamics and spatial layout of {project.title} style into your custom plots? Our studio directors are available for blueprints custom briefings.
            </p>
            
            <button
              onClick={() => onInquireProject(project.title)}
              className="w-full bg-footer-black hover:bg-primary text-white font-bold uppercase tracking-widest text-xs py-4 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              SEND BRIEF INQUIRY <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Neighboring recommendations bar at the bottom */}
      <div className="bg-white border-t border-border-light py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 border-b border-border-light pb-4">
            <h3 className="font-display text-lg font-bold">Explore More Studio Works</h3>
            <button 
              onClick={onBackToHome}
              className="text-xs text-[#DFC08A] hover:text-footer-black font-semibold uppercase tracking-widest flex items-center gap-1 cursor-pointer"
            >
              See All works <MoveRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prev recommendation */}
            <div 
              onClick={() => {
                onSelectProject(prevProject);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-border-light p-6 hover:border-[#DFC08A] transition-colors cursor-pointer group flex items-center gap-6 bg-surface-cream/30"
            >
              <div className="w-24 h-16 bg-surface-cream overflow-hidden border border-border-light shrink-0">
                <img src={prevProject.image} alt={prevProject.title} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-widest">PREVIOUS ARCHIVE</p>
                <h4 className="font-serif text-sm font-bold text-footer-black mt-1 group-hover:text-primary transition-colors flex items-center gap-1.5 justify-between">
                  {prevProject.title} <ArrowLeft className="w-4 h-4 text-[#DFC08A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </div>
            </div>

            {/* Next recommendation */}
            <div 
              onClick={() => {
                onSelectProject(nextProject);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-border-light p-6 hover:border-[#DFC08A] transition-colors cursor-pointer group flex items-center gap-6 bg-surface-cream/30"
            >
              <div className="w-24 h-16 bg-surface-cream overflow-hidden border border-border-light shrink-0">
                <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex-grow">
                <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-widest font-mono">NEXT COMPLETED</p>
                <h4 className="font-serif text-sm font-bold text-footer-black mt-1 group-hover:text-primary transition-colors flex items-center gap-1.5 justify-between">
                  {nextProject.title} <ArrowRight className="w-4 h-4 text-[#DFC08A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
