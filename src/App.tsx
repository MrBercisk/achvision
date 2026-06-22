import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServicesOverview from './components/ServicesOverview';
import RecentWork from './components/RecentWork';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import TeamSection from './components/TeamSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutDetail from './components/AboutDetail';
import ProjectDetailView from './components/ProjectDetailView';
import InfoModal from './components/InfoModal';
import { Project } from './types';
import { ArrowUp } from 'lucide-react';
import { useScrollAnimation, staggerContainer } from './hooks/useScrollAnimation';

// ── Wrapper kecil supaya tiap section bisa pakai scroll animation ──────────
function ScrollSection({
  children,
  preset = 'fadeUp',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  preset?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp';
  delay?: number;
  className?: string;
}) {
  const anim = useScrollAnimation(preset);
  return (
    <motion.div
      ref={anim.ref}
      variants={anim.variants}
      initial={anim.initial}
      animate={anim.animate}
      transition={{ ...anim.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handlePageChange = (pageId: string) => {
    if (pageId === 'contact') {
      setCurrentPage('contact');
    } else if (pageId === 'about-detail') {
      setCurrentPage('about-detail');
    } else if (pageId === 'project-detail') {
      setCurrentPage('project-detail');
    } else {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const elId = pageId === 'team' ? 'our-team' : pageId;
          document.getElementById(elId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      } else {
        const elId = pageId === 'team' ? 'our-team' : pageId;
        document.getElementById(elId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleDirectMailInquiry = (memberName: string, roleName: string) => {
    setPrefilledMessage(`Direct Consultation Inquiry\nAttn: ${memberName} (${roleName})\n\nDear ${memberName.split(' ')[0]},\nI would like to schedule a dedicated design consultation session regarding my upcoming project space.`);
    setCurrentPage('contact');
  };

  const handleSelectServiceSpec = (serviceTitle: string, specDetails: string) => {
    setPrefilledMessage(specDetails);
    setCurrentPage('contact');
  };

  const handleOpenProjectInquiry = (projectTitle: string) => {
    setPrefilledMessage(`Project Case Inquiry: ${projectTitle}\n\nI would like to learn more about the passive energy systems and architectural materials chosen for ${projectTitle}.`);
    setCurrentPage('contact');
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -15 },
  };

  const pageTransition = {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1] as any,
  };

  return (
    <div className="min-h-screen bg-surface-cream text-footer-black flex flex-col justify-between selection:bg-primary-container selection:text-white antialiased">

      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      <main className={`flex-grow overflow-hidden ${currentPage === 'home' ? '' : 'pt-[72px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            {currentPage === 'home' && (
              <div>
                {/* Hero — no scroll anim, langsung visible */}
                <Hero
                  onLearnMore={() => handlePageChange('about')}
                  onViewProjects={() => handlePageChange('projects')}
                />

                {/* About — fade up */}
                <ScrollSection preset="fadeUp">
                  <AboutUs onLearnMore={() => handlePageChange('about-detail')} />
                </ScrollSection>

                {/* Services — fade up, sedikit delay */}
                <ScrollSection preset="fadeUp" delay={0.05}>
                  <ServicesOverview onSelectServiceSpec={handleSelectServiceSpec} />
                </ScrollSection>

                {/* Projects — scale up untuk feel lebih "pop" */}
                <ScrollSection preset="scaleUp">
                  <RecentWork onSelectProject={(project) => {
                    setSelectedProject(project);
                    handlePageChange('project-detail');
                  }} />
                </ScrollSection>

                {/* Testimonials — fade dari kiri */}
                <ScrollSection preset="fadeLeft">
                  <Testimonials />
                </ScrollSection>

                {/* Team — fade up */}
                <ScrollSection preset="fadeUp">
                  <TeamSection onDirectMail={handleDirectMailInquiry} />
                </ScrollSection>

                {/* FAQ — fade dari kanan */}
                <ScrollSection preset="fadeRight">
                  <FaqSection />
                </ScrollSection>
              </div>
            )}

            {currentPage === 'about-detail' && (
              <AboutDetail
                onBackToHome={() => handlePageChange('home')}
                onContactClick={() => handlePageChange('contact')}
              />
            )}

            {currentPage === 'project-detail' && selectedProject && (
              <ProjectDetailView
                project={selectedProject}
                onBackToHome={() => handlePageChange('home')}
                onInquireProject={handleOpenProjectInquiry}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            )}

            {currentPage === 'contact' && (
              <div className="py-8">
                <ContactForm
                  prefilledMessage={prefilledMessage}
                  onClearPrefilledMsg={() => setPrefilledMessage('')}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onPageChange={handlePageChange}
        onOpenPrivacy={() => setInfoModalType('privacy')}
        onOpenTerms={() => setInfoModalType('terms')}
      />

      <InfoModal
        isOpen={infoModalType !== null}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={handleScrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-8 right-8 z-[100] bg-[#DFC08A] hover:bg-[#cdaf75] text-[#111111] p-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all outline-none border border-white/10 flex items-center justify-center cursor-pointer"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}