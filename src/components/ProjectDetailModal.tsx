import { Project } from '../types';
import { X, Calendar, MapPin, Minimize2, CheckSquare, Award, ArrowUpRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export default function ProjectDetailModal({ project, onClose, onInquireProject }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dynamic blurred background backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal core card */}
      <div className="relative bg-white text-footer-black w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-fade-in border border-border-light z-10">
        
        {/* Close Button top right (absolute) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-footer-black text-white p-2 hover:bg-primary transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Photo panel */}
        <div className="w-full md:w-1/2 relative bg-surface-container-low flex flex-col justify-between">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover min-h-[300px] md:absolute md:inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none md:block hidden" />
          
          {/* Static details label absolute overlay bottom-left */}
          <div className="absolute bottom-6 left-6 right-6 text-white hidden md:block">
            <span className="text-[10px] font-mono tracking-widest text-primary-container font-semibold block uppercase">
              STUDIO PORTFOLIO SERIAL
            </span>
            <h3 className="font-display text-2xl font-bold mt-1">{project.title}</h3>
            <p className="text-xs text-text-muted-dark mt-1">
              {project.architecturalStyle}
            </p>
          </div>
        </div>

        {/* Right Side: Specification grid */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="text-[9px] uppercase tracking-widest font-bold bg-primary/10 text-primary px-2.5 py-1">
              {project.category} SECTOR
            </span>
            <h2 className="font-display text-2xl font-bold text-footer-black mt-3">{project.title} Spec Sheet</h2>
          </div>

          {/* Quick Specifications Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 border-y border-border-light py-4 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-text-secondary text-[9px] uppercase font-semibold">LOCATION</p>
                <p className="font-bold text-footer-black mt-0.5">{project.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-text-secondary text-[9px] uppercase font-semibold">COMPLETION YEAR</p>
                <p className="font-bold text-footer-black mt-0.5">{project.year}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Minimize2 className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-text-secondary text-[9px] uppercase font-semibold">TOTAL SPATIAL FOOTPRINT</p>
                <p className="font-bold text-footer-black mt-0.5">{project.size}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-text-secondary text-[9px] uppercase font-semibold">BUILD STATUS</p>
                <p className="font-bold text-footer-black mt-0.5">{project.status}</p>
              </div>
            </div>
          </div>

          {/* Detailed challenge & solutions */}
          <div className="space-y-4 text-xs md:text-sm">
            <div>
              <p className="font-sans text-[11px] font-bold text-primary tracking-widest uppercase">
                THE SITE CHALLENGE
              </p>
              <p className="text-text-secondary mt-1.5 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <p className="font-sans text-[11px] font-bold text-primary tracking-widest uppercase">
                ARCHITECTURAL SOLUTION
              </p>
              <p className="text-text-secondary mt-1.5 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Design elements checklist badges */}
          <div className="pt-4 border-t border-border-light space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-footer-black">
              <Award className="w-4 h-4 text-primary" />
              <span>Key Features: {project.architecturalStyle}</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5 text-[10px] font-semibold">
              <span className="bg-surface-cream border border-border-light px-2.5 py-1 text-text-secondary">Double Glazing</span>
              <span className="bg-surface-cream border border-border-light px-2.5 py-1 text-text-secondary">Passive Passive HVAC</span>
              <span className="bg-surface-cream border border-border-light px-2.5 py-1 text-text-secondary">Low Carbon Concrete</span>
              <span className="bg-surface-cream border border-border-light px-2.5 py-1 text-text-secondary">Bespoke Millwork</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => onInquireProject(project.title)}
              className="bg-footer-black hover:bg-primary text-white font-bold uppercase tracking-widest text-[11px] px-6 py-3 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              INQUIRE ABOUT THIS SPEC <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-footer-black text-xs font-bold uppercase tracking-wider underline cursor-pointer"
            >
              CLOSE SPEC SHEET
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
