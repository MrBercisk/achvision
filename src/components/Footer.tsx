import React, { useState } from 'react';
import { Mail, Globe, Share2, ArrowRight, CheckCircle, Compass } from 'lucide-react';

interface FooterProps {
  onPageChange: (pageId: string) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onPageChange, onOpenPrivacy, onOpenTerms }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [notification, setNotification] = useState('');

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg('Please specify a valid email address.');
      return;
    }

    setErrorMsg('');
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <footer className="bg-footer-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Interactive Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#DFC08A] text-[#111111] font-sans text-xs font-bold py-3 px-5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10 animate-slide-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
          {notification}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand block */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onPageChange('home')}>
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#DFC08A] group-hover:border-[#DFC08A] text-[#DFC08A] group-hover:text-[#111111]">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight uppercase">ArchVision</span>
            </div>
            
            <p className="text-xs text-text-muted-dark leading-relaxed max-w-[240px]">
              Combining structural precision, bespoke textures, and thermal passive loops to fabricate architecture with vision and purpose.
            </p>

            {/* Social shares */}
            <div className="flex gap-3">
              <button
                onClick={() => showNotification("Redirecting to ArchVision Global Map visual portal...")}
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary-container hover:text-primary-container transition-colors cursor-pointer"
                aria-label="Public location portal"
              >
                <Globe className="w-4 h-4" />
              </button>
              <button
                onClick={() => showNotification("Opening mail gateway (contact@archvision.studio)...")}
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary-container hover:text-primary-container transition-colors cursor-pointer"
                aria-label="Email studio"
              >
                <Mail className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  showNotification("Copied design catalog link to clipboard!");
                }}
                className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary-container hover:text-primary-container transition-colors cursor-pointer"
                aria-label="Share studio profile"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick links block */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-[11px] font-bold text-primary-container uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-semibold text-xs text-text-muted-dark">
              <li>
                <button onClick={() => onPageChange('about-detail')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  About Studio
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('projects')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('team')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Our Visionaries
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('contact')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Consultation Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services block */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-[11px] font-bold text-primary-container uppercase tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-3 font-semibold text-xs text-text-muted-dark">
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Residential Design
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Commercial Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Hospitality Planning
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('services')} className="hover:text-white transition-colors text-left uppercase cursor-pointer">
                  Landscape Design
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter block */}
          <div className="flex flex-col gap-6">
            <h4 className="font-sans text-[11px] font-bold text-primary-container uppercase tracking-widest">
              Newsletter
            </h4>
            <p className="text-xs text-text-muted-dark leading-relaxed">
              Stay updated with our latest sustainable projects and ecological insights.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 text-primary-container text-xs font-semibold animate-fade-in">
                <CheckCircle className="w-4 h-4" />
                <span>Subscription active! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex border border-white/20">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="bg-transparent text-white px-4 py-3 w-full focus:ring-0 outline-none text-xs placeholder:text-white/30"
                    aria-label="Email subscription parameter"
                  />
                  <button
                    type="submit"
                    className="bg-primary-container hover:bg-white text-footer-black px-4 py-3 transition-colors shrink-0 cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {errorMsg && <p className="text-red-400 text-[10px] font-semibold">{errorMsg}</p>}
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-text-muted-dark">
          <p>© 2026 ArchVision Studio. AIA Professional Member Entity. All Rights Reserved.</p>
          <div className="flex gap-6 font-semibold">
            <button onClick={onOpenPrivacy} className="hover:text-white transition-all uppercase cursor-pointer">Privacy Policy</button>
            <button onClick={onOpenTerms} className="hover:text-white transition-all uppercase cursor-pointer">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
