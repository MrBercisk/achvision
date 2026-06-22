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

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'privacy' | 'terms' | null>(null);

  // Scroll to top instantly when page changes to give "new page load" feel
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' as any,
    });
  }, [currentPage]);

  // Monitor layout scroll for floating 'Back to Top' visibility (>500px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Switch custom router pages / navigate sections
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
        // Wait minor tick to allow domestic elements to mount
        setTimeout(() => {
          const elId = pageId === 'team' ? 'our-team' : pageId;
          const el = document.getElementById(elId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else {
        const elId = pageId === 'team' ? 'our-team' : pageId;
        const el = document.getElementById(elId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Callback to change page and prefill details
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

  // Animation values for smooth, custom page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  const pageTransition = {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1], // Custom elegant cubic bezier
  };

  return (
    <div className="min-h-screen bg-surface-cream text-footer-black flex flex-col justify-between selection:bg-primary-container selection:text-white antialiased">
      
      {/* 1. Header Navigation */}
      <Header
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Main Page Routing Wrapper with AnimatePresence */}
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
                {/* Hero section */}
                <Hero
                  onLearnMore={() => handlePageChange('about')}
                  onViewProjects={() => handlePageChange('projects')}
                />
                
                {/* Visual Highlights Board for Home */}
                {/* About Section with Learn More standalone detailed link */}
                <AboutUs onLearnMore={() => handlePageChange('about-detail')} />

                {/* Services Section */}
                <ServicesOverview onSelectServiceSpec={handleSelectServiceSpec} />

                {/* Projects Section */}
                <RecentWork onSelectProject={(project) => {
                  setSelectedProject(project);
                  handlePageChange('project-detail');
                }} />

                {/* Testimonials */}
                <Testimonials />

                {/* Directors / Team Section */}
                <TeamSection onDirectMail={handleDirectMailInquiry} />

                {/* Frequently Asked Questions */}
                <FaqSection />
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

      {/* 2. Footer Section */}
      <Footer 
        onPageChange={handlePageChange} 
        onOpenPrivacy={() => setInfoModalType('privacy')}
        onOpenTerms={() => setInfoModalType('terms')}
      />

      {/* 3. Interactive Information Modals */}
      <InfoModal
        isOpen={infoModalType !== null}
        type={infoModalType}
        onClose={() => setInfoModalType(null)}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
