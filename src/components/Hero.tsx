import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HERO_BACKGROUNDS } from '../constants/data';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onLearnMore: () => void;
  onViewProjects: () => void;
}

export default function Hero({ onLearnMore, onViewProjects }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Hook into the body scrolling for sleek parallax depth
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_BACKGROUNDS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HERO_BACKGROUNDS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_BACKGROUNDS.length);
  };

  return (
    <section ref={heroRef} id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Slideshow background with parallax motion */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full z-0">
        {HERO_BACKGROUNDS.map((bg, idx) => (
          <div
            key={bg}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1s ease-in-out, transform 8s ease-out' }}
          >
            <img
              src={bg}
              alt="Beautiful architectural work"
              className="w-full h-full object-cover"
            />
            {/* Elegant Dark Vignette Overlay for rich contrast & content legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}
      </motion.div>

      {/* Hero Content Overlay */}
      <motion.div style={{ opacity: opacityFade }} className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start justify-end h-full pb-24 sm:pb-32 md:pb-40 pt-24">
        <div className="max-w-4xl text-left select-none">
          <h1 className="font-sans font-bold text-[30px] sm:text-[44px] md:text-[56px] lg:text-[64px] text-white leading-[1.2] tracking-tight mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="shrink-0">Professional</span>
            <span className="bg-[#DFC08A] text-[#111111] font-display italic font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded-full text-[18px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-none inline-block shadow-xl select-all border border-white/10 hover:brightness-105 transition-all">
              Architect Consultants
            </span>
            <span className="w-full block font-sans font-extrabold text-white tracking-tight mt-1 text-[32px] sm:text-[48px] md:text-[60px] lg:text-[68px]">
              For Premium Homes
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-white/95 leading-relaxed tracking-wide max-w-lg font-light drop-shadow-sm">
            Creating meaningful residences aligned perfectly with your values
          </p>
        </div>
      </motion.div>

      {/* Slider Navigation Overlay */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-4">
        <div className="flex gap-1.5 mr-4">
          {HERO_BACKGROUNDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentIndex ? 'w-8 bg-primary-container' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${i+1}`}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="w-11 h-11 border border-white/30 text-white flex items-center justify-center rounded-full hover:bg-white hover:text-footer-black hover:border-white transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="w-11 h-11 border border-white/30 text-white flex items-center justify-center rounded-full hover:bg-white hover:text-footer-black hover:border-white transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
