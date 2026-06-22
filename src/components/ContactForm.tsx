import React, { useState, useEffect } from 'react';
import { ContactFormInput } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Award, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  prefilledMessage: string;
  onClearPrefilledMsg: () => void;
}

export default function ContactForm({ prefilledMessage, onClearPrefilledMsg }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: '',
    budget: '$500k - $1M',
    timeframe: '6 - 12 Months',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Auto-dismiss alert toast after 7 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Trigger prefill injection if parent notifies us
  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: `I have generated a specification using your Architectural Cost Estimator:\n\n${prefilledMessage}\n\nI would love to set up an initial consultation with your directors.`
      }));
      onClearPrefilledMsg();
    }
  }, [prefilledMessage, onClearPrefilledMsg]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please offer your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email structure.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please specify your basic project needs.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowAlert(true);
      // reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        message: '',
        budget: '$500k - $1M',
        timeframe: '6 - 12 Months',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surface-cream text-footer-black relatize z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              LET'S WORK TOGETHER
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight">
            Let's Build Something Extraordinary
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mt-4" />
          <p className="text-xs sm:text-sm text-text-secondary mt-4 leading-relaxed">
            Whether you have a specific coastal plot secured or seeking general guidance on municipal zoning feasibility, our directors are available to schedule our deep listening session.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white border border-border-light flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">GENERAL INQUIRY PHONE</p>
                  <p className="text-sm font-semibold text-footer-black mt-0.5">+1 (310) 555-8822</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white border border-border-light flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">EMAIL ADDRESS</p>
                  <p className="text-sm font-semibold text-footer-black mt-0.5">contact@archvision.studio</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white border border-border-light flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">STUDIO HEADQUARTERS</p>
                  <p className="text-sm font-semibold text-footer-black mt-0.5">380 Ocean Front Walk, Venice, California</p>
                </div>
              </div>
            </div>

            {/* Certifications footer badges */}
            <div className="pt-8 border-t border-border-light/60 flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-text-secondary font-semibold">
                <Award className="w-4 h-4 text-primary" />
                <span>AIA Member Studio</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary font-semibold">
                <Clock className="w-4 h-4 text-primary" />
                <span>Response &lt; 24 Hrs</span>
              </div>
            </div>
          </div>

          {/* Right form template */}
          <div className="lg:col-span-7 bg-white border border-border-light p-6 md:p-10 shadow-sm">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-footer-black">Specification Received</h3>
                <p className="text-sm text-text-secondary max-w-md mx-auto">
                  Thank you! Your architectural proposal portfolio data was compiled securely. Our Principal Architect Aidan Sterling will contact you within one business day via phone and email.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-footer-black hover:bg-footer-black hover:text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full bg-white border px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary outline-none transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border-light focus:border-primary'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@yourdomain.com"
                      className={`w-full bg-white border px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary outline-none transition-all ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border-light focus:border-primary'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-border-light px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>

                  {/* Project Sector */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Project Industry Sector
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-white border border-border-light px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Hospitality</option>
                      <option>Institutional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Estimated budget brackets */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white border border-border-light px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option>$100k - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M - $5M</option>
                      <option>$5M+</option>
                    </select>
                  </div>

                  {/* Timeframe selector */}
                  <div>
                    <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                      Target Project Construction Start
                    </label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-white border border-border-light px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option>Immediate (&lt; 3 Months)</option>
                      <option>3 - 6 Months</option>
                      <option>6 - 12 Months</option>
                      <option>1 Year + / Scouting</option>
                    </select>
                  </div>
                </div>

                {/* Message block */}
                <div>
                  <label className="block text-[10px] font-sans font-bold tracking-widest uppercase text-footer-black mb-2">
                    Scope & Functional Goals *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site location, programmatic rooms needed, desired finishes, or spatial vibes..."
                    className={`w-full bg-white border px-4 py-3 text-xs md:text-sm focus:ring-1 focus:ring-primary outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border-light focus:border-primary'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-footer-black hover:bg-primary text-white font-bold uppercase tracking-widest text-[11px] py-4 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'TRANSMITTING INQUIRY DATABASE...' : (
                    <>
                      TRANSMIT PROPOSAL FILES <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* Premium Floating Alert Toast */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[120] w-[90%] max-w-md bg-[#111111] text-white border border-[#DFC08A] shadow-[0_24px_60px_rgba(0,0,0,0.6)] p-5 flex items-start gap-4"
          >
            <div className="w-9 h-9 rounded-full bg-[#DFC08A]/10 border border-[#DFC08A] flex items-center justify-center text-[#DFC08A] shrink-0 mt-0.5 animate-pulse">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-grow">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#DFC08A]">
                SUBMISSION TRANSMITTED!
              </h4>
              <p className="text-[11px] text-text-muted-dark leading-relaxed mt-1">
                Your proposal files & custom estimating metrics have successfully traversed the network database. Our Principal Architect Aidan Sterling will contact you within one business day.
              </p>
            </div>
            <button
              onClick={() => setShowAlert(false)}
              className="text-white/40 hover:text-white transition-colors shrink-0 cursor-pointer p-1"
              aria-label="Dismiss alert"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
