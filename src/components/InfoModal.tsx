import React from 'react';
import { X, Shield, Lock, Scale, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InfoModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function InfoModal({ isOpen, type, onClose }: InfoModalProps) {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-footer-black/80 backdrop-blur-xs cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative bg-white text-footer-black w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-border-light overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-surface-cream border-b border-border-light shrink-0">
            <div className="flex items-center gap-2.5">
              {isPrivacy ? (
                <Shield className="w-5 h-5 text-primary shrink-0" />
              ) : (
                <Scale className="w-5 h-5 text-primary shrink-0" />
              )}
              <h3 className="font-display text-lg font-bold tracking-tight uppercase">
                {title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-footer-black/5 text-[#111111]/60 hover:text-footer-black transition-all rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dynamic Scrollable Content */}
          <div className="p-6 md:p-8 overflow-y-auto text-xs sm:text-sm text-text-secondary leading-relaxed space-y-6">
            <p className="italic font-semibold text-[11px] text-primary tracking-widest uppercase">
              LAST UPDATE: JUNE 22, 2026 • ARCHVISION STUDIO CO.
            </p>

            {isPrivacy ? (
              <div className="space-y-4">
                <p>
                  At ArchVision Studio, accessible via our physical headquarters and our digital presence, one of our main priorities is the absolute privacy of our prospective clients and partners. This Privacy Policy document contains types of information that is collected and recorded by ArchVision Studio and how we use it.
                </p>
                
                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  1. Information We Collect
                </h4>
                <p>
                  We only request personal information when we truly need it to provide a desired passive design estimate or direct consultation. We collect it by fair and lawful means, with your knowledge and consent. When you submit a proposal files request, we collect your full name, email address, telephone contact, expected budget range, construction timeframe, and narrative site goals.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  2. Use of Collected Data
                </h4>
                <p>
                  We store and utilize current inquiry parameters strictly to calibrate customized architectural blueprints estimate, schedule appointments, and coordinate municipal zone requirements. We do not sell or lease your identity tags to any third-party marketing services or external developer databases.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  3. Retention & Protection
                </h4>
                <p>
                  We retain collected information as long as necessary to fulfill your requested design session. What data we store, we shield within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, or alteration.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  4. Consent
                </h4>
                <p>
                  By utilizing our digital specification inputs and submitting our briefing forms, you hereby consent to our privacy terms regarding sustainable geological modeling metrics.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p>
                  Welcome to ArchVision Studio. Please review these legal terms thoroughly as they govern your interaction with our physical craftsmen, architectural blueprints services, and regional digital platforms.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  1. Standard Scope of Consultation
                </h4>
                <p>
                  The architectural estimate data and programmatic estimates produced by our digital calculators serve exclusively for preliminary design ideation. All formal project commissions require a comprehensive physical inspection, local survey certificate files, and validated zoning clear signatures from municipal councils.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  2. Intellectual Property & Blueprints
                </h4>
                <p>
                  All schematic illustrations, solar passive path layouts, thermodynamic models, and masonry sketches displayed or downloaded via our platforms remain the strict intellectual property of ArchVision Studio. Any unauthorized duplication or public construction replication is legally prohibited under AIA guidelines.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  3. Client Responsibility
                </h4>
                <p>
                  Clients seeking customized energy loops must provide authentic details regarding soil stability, solar clearances, and legal property boundaries. ArchVision Studio cannot be held liable for delayed builders permits resulting from inaccurate parameters.
                </p>

                <h4 className="font-bold text-footer-black uppercase text-xs tracking-wider border-b border-border-light pb-1">
                  4. Amendments & Termination
                </h4>
                <p>
                  We reserve the complete entitlement to adjust these operational terms at any point without notice. Continued consultation implies direct compliance with all structural rules.
                </p>
              </div>
            )}
          </div>

          {/* Footer of modal */}
          <div className="px-6 py-4 bg-surface-cream border-t border-border-light flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#111111] hover:bg-primary text-white font-sans text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer"
            >
              UNDERSTOOD & DECREE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
