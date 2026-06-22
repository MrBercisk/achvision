import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight, Compass } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home' && currentPage !== 'about-detail') {
      if (currentPage === 'project-detail') {
        setActiveSection('projects');
      } else if (currentPage === 'contact') {
        setActiveSection('contact');
      }
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (currentPage === 'about-detail') {
        setActiveSection('about');
        return;
      }

      const sectionMappings = [
        { id: 'home', elId: 'home' },
        { id: 'about', elId: 'about' },
        { id: 'services', elId: 'services' },
        { id: 'projects', elId: 'projects' },
        { id: 'testimonials', elId: 'testimonials' },
        { id: 'team', elId: 'our-team' },
      ];

      for (const section of sectionMappings) {
        const el = document.getElementById(section.elId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Match section when it occupies the 160px scroll line threshold
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'testimonials', label: 'TESTIMONIALS' },
    { id: 'team', label: 'OUR TEAM' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    onPageChange(id);
  };

  // Determine if header should have solid style (either scrolled or not on home or about-detail page)
  const isSolidStyle = isScrolled || (currentPage !== 'home' && currentPage !== 'about-detail');

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolidStyle
          ? 'bg-surface-cream/95 backdrop-blur-md border-b border-border-light py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#DFC08A] ${
            isSolidStyle ? 'border-[#DFC08A]/30 text-primary' : 'border-white/20 text-[#DFC08A]'
          }`}>
            <Compass className="w-4 h-4" />
          </div>
          <span className={`font-display font-bold tracking-tight uppercase transition-colors duration-300 text-lg sm:text-xl ${
            isSolidStyle ? 'text-footer-black' : 'text-white'
          }`}>
            ARCHVISION STUDIO
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`font-sans text-xs font-semibold tracking-wider transition-all duration-200 uppercase relative py-1 cursor-pointer ${
                isSolidStyle
                  ? activeSection === item.id
                    ? 'text-primary'
                    : 'text-footer-black/75 hover:text-primary'
                  : activeSection === item.id
                    ? 'text-white'
                    : 'text-white/75 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                isSolidStyle ? 'bg-primary' : 'bg-primary-container'
              } ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleLinkClick('contact')}
            className={`font-sans text-xs uppercase tracking-widest font-bold px-6 py-3 border transition-all duration-300 cursor-pointer flex items-center gap-1 hover:scale-105 ${
              isSolidStyle
                ? 'border-footer-black bg-footer-black text-white hover:bg-primary hover:border-primary'
                : 'border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-primary-container hover:border-primary-container'
            }`}
          >
            LET'S TALK <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('contact')}
            className={`font-sans text-[11px] uppercase tracking-widest font-bold px-3 py-2 border transition-all cursor-pointer ${
              isSolidStyle
                ? 'border-footer-black bg-footer-black text-white'
                : 'border-white/30 bg-white/10 text-white'
            }`}
          >
            TALK
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-1.5 transition-colors cursor-pointer ${
              isSolidStyle ? 'text-footer-black' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-surface-cream z-50 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <span className="font-display font-semibold tracking-tight text-footer-black uppercase">
              ARCHVISION
            </span>
            <button onClick={() => setIsMenuOpen(false)} className="text-footer-black p-1 cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left font-sans text-sm font-semibold tracking-wider uppercase py-2 border-b border-border-light flex justify-between items-center cursor-pointer ${
                  activeSection === item.id ? 'text-primary pl-2' : 'text-footer-black/80'
                }`}
              >
                {item.label}
                {activeSection === item.id && <ArrowRight className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLinkClick('contact');
            }}
            className="w-full bg-footer-black text-white hover:bg-primary py-4 font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
          >
            LET'S TALK <ArrowUpRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-text-secondary text-center mt-4">
            © 2026 ArchVision Studio
          </p>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    </nav>
  );
}
