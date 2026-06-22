import { useState } from 'react';
import { TESTIMONIALS } from '../constants/data';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-surface-cream text-footer-black border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block centered */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              CLIENTS TESTIMONIAL
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mb-4" />

          {/* Slider actions centered layout */}
          <div className="flex items-center gap-2 justify-center mt-2">
            <span className="text-xs text-text-secondary mr-2 font-mono">
              {activeIdx + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-border-light flex items-center justify-center rounded-full hover:bg-footer-black hover:text-white transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-border-light flex items-center justify-center rounded-full hover:bg-footer-black hover:text-white transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Block: Grid on Desktop, Slider Highlight on Mobile & Tablet */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`bg-white border border-border-light p-8 flex flex-col justify-between transition-all duration-300 relative group hover:shadow-md ${
                idx === activeIdx ? 'border-primary ring-1 ring-primary/30 scale-102' : ''
              }`}
            >
              <div>
                {/* Large visual quote symbol */}
                <span className="font-display text-primary-container opacity-20 italic text-[70px] leading-none absolute top-4 left-6 select-none pointer-events-none group-hover:opacity-30 transition-opacity">
                  "
                </span>

                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-container text-primary-container" />
                  ))}
                </div>

                <blockquote className="font-sans text-xs sm:text-xs md:text-sm text-footer-black/80 italic leading-relaxed mb-6 block relative z-10">
                  "{testimonial.content}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-border-light/60 pt-4">
                <div className="w-11 h-11 bg-surface-container-low overflow-hidden border border-border-light shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-footer-black">{testimonial.name}</p>
                  <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest mt-0.5">
                    {testimonial.role} {testimonial.company ? `• ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Frame */}
        <div className="lg:hidden bg-white border border-border-light p-8 relative flex flex-col justify-between min-h-[300px] shadow-sm">
          <div>
            <span className="font-display text-primary-container opacity-20 italic text-[70px] leading-none absolute top-4 left-6 select-none pointer-events-none">
              "
            </span>

            <div className="flex gap-0.5 mb-4 relative z-10">
              {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary-container text-primary-container" />
              ))}
            </div>

            <blockquote className="font-sans text-xs sm:text-sm text-footer-black/80 italic leading-relaxed mb-6 block relative z-10">
              "{TESTIMONIALS[activeIdx].content}"
            </blockquote>
          </div>

          <div className="flex items-center gap-4 mt-auto border-t border-border-light/60 pt-4">
            <div className="w-12 h-12 bg-surface-container-low overflow-hidden border border-border-light shrink-0">
              <img
                className="w-full h-full object-cover"
                src={TESTIMONIALS[activeIdx].image}
                alt={TESTIMONIALS[activeIdx].name}
              />
            </div>
            <div>
              <p className="font-sans text-xs font-bold text-footer-black">{TESTIMONIALS[activeIdx].name}</p>
              <p className="font-sans text-[10px] text-text-secondary uppercase tracking-widest mt-0.5">
                {TESTIMONIALS[activeIdx].role} {TESTIMONIALS[activeIdx].company ? `• ${TESTIMONIALS[activeIdx].company}` : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
