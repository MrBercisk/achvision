import { useState, useRef } from 'react';
import { PROJECTS } from '../constants/data';
import { Project } from '../types';
import { ArrowUpRight, ArrowRight, Filter } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// ── BROCHURE CONFIG — ganti di sini kalau ada file PDF baru ───────────────
const BROCHURE_FILE     = '/brochure/ArchVision_Studio_Brochure_2026.pdf';
const BROCHURE_FILENAME = 'ArchVision_Studio_Brochure_2026.pdf';
// ─────────────────────────────────────────────────────────────────────────

interface RecentWorkProps {
  onSelectProject: (project: Project) => void;
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <article
      ref={cardRef}
      onClick={onClick}
      className="group cursor-pointer flex flex-col justify-between h-full"
    >
      <div className="overflow-hidden aspect-[4/3] bg-surface-container-low border border-border-light/30 relative">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ y: yImage, height: "120%", top: "-10%" }}
          className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 absolute inset-x-0"
        />
        <div className="absolute top-3 left-3 bg-footer-black/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10">
          {project.category}
        </div>
        <div className="absolute inset-0 bg-footer-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="bg-white/95 text-footer-black px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            VIEW SPECS <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start z-10 bg-transparent">
        <div>
          <h3 className="font-sans text-base font-semibold text-footer-black group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-text-secondary mt-1">
            {project.location} • {project.year}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-footer-black group-hover:bg-footer-black group-hover:text-white transition-all shrink-0">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </article>
  );
}

export default function RecentWork({ onSelectProject }: RecentWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [downloadActive, setDownloadActive] = useState<boolean>(false);

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  const handleDownload = () => {
    setDownloadActive(true);
    const a = document.createElement('a');
    a.href = BROCHURE_FILE;
    a.download = BROCHURE_FILENAME;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => setDownloadActive(false), 3000);
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
        <div className="mb-2">
          <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
            FEATURED PROJECTS
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight mb-4">
          Our Recent Work
        </h2>
        <div className="w-20 h-1 bg-[#DFC08A] mb-6" />

        <div className="flex flex-wrap gap-2 items-center justify-center">
          <span className="text-xs text-text-secondary font-semibold mr-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-primary-container" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold tracking-wider uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'border-footer-black bg-footer-black text-white shadow-sm'
                  : 'border-border-light hover:border-primary-container hover:bg-surface-cream text-text-secondary hover:text-footer-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onSelectProject(project)}
          />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full py-16 text-center bg-surface-cream border border-dashed border-border-light">
            <p className="text-text-secondary text-sm">No projects currently showcase in the {activeCategory} sector.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-primary hover:underline text-xs font-bold uppercase tracking-widest mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs text-text-secondary italic mb-4">
          Want a deeper catalog of our historical masterplans? Download our compiled studio brochure.
        </p>
        {downloadActive ? (
          <div className="inline-block bg-[#DFC08A] text-[#111111] px-8 py-3.5 font-sans font-bold text-xs uppercase tracking-widest border border-white/10 shadow-xs">
            ✓ BROCHURE DOWNLOAD STARTED!
          </div>
        ) : (
          <button
            onClick={handleDownload}
            className="border border-footer-black hover:bg-footer-black hover:text-white text-footer-black px-8 py-3.5 font-sans font-bold text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            DOWNLOAD DIGITAL BROCHURE <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </section>
  );
}