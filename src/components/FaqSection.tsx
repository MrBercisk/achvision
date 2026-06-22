import { useState } from 'react';
import { FAQS } from '../constants/data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Service' | 'Process' | 'Pricing' | 'General'>('All');
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>("faq-1");

  const categories = ['All', 'Service', 'Process', 'Pricing', 'General'] as const;

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setExpandedFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-surface-cream border-b border-border-light">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              COMMON QUESTIONS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mt-4" />
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            Get clear, honest information about project fees, deliverables, municipal clearances, and active construction timelines.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-2 border transition-all ${
                activeCategory === cat
                  ? 'border-footer-black bg-footer-black text-white shadow-sm'
                  : 'border-border-light hover:border-primary text-text-secondary bg-white hover:text-footer-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list with accordion flow */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-border-light transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 transition-colors hover:bg-surface-cream/50 cursor-pointer"
                >
                  <div className="flex gap-3 items-start">
                    <HelpCircle className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
                    <span className="font-sans text-sm sm:text-base font-semibold text-footer-black">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-6 h-6 border border-border-light flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-185 bg-footer-black text-white' : 'text-text-secondary'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated expand explanation drawer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-60 border-t border-border-light' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface-cream/40">
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-primary/10 text-primary px-2.5 py-1">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 text-text-secondary text-sm">
              No questions found under this specific filter.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
