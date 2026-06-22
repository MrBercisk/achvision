import { TEAM_MEMBERS } from '../constants/data';
import { Mail, Linkedin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamSectionProps {
  onDirectMail: (memberName: string, roleName: string) => void;
}

export default function TeamSection({ onDirectMail }: TeamSectionProps) {
  return (
    <section id="our-team" className="py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block centered */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              STUDIO DIRECTORS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight">
            Meet Our Visionaries
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mt-4" />
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            We coordinate structural precision, material textures, and building thermal passive loops, translating ideas into physical masterworks.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group border border-border-light bg-surface-cream/40 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame with hover transition */}
              <div className="aspect-[4/5] overflow-hidden relative bg-surface-container-low border-b border-border-light/55">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104 grayscale group-hover:grayscale-0"
                />
                
                {/* Absolute overlay links */}
                <div className="absolute bottom-4 left-4 right-4 bg-footer-black/90 backdrop-blur-md p-3.5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">
                    CONNECT DIRECT
                  </span>
                  
                  <div className="flex gap-2.5">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1 hover:text-primary-container transition-colors"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://${member.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 hover:text-primary-container transition-colors"
                      title={`LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio description card */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sans text-base font-bold text-footer-black">{member.name}</h3>
                  <p className="font-sans text-[11px] font-bold text-primary uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  
                  <p className="text-xs text-text-secondary leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-light/60">
                  <button
                    onClick={() => onDirectMail(member.name, member.role)}
                    className="text-[11px] font-bold uppercase tracking-widest text-footer-black hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    INQUIRE WITH {member.name.split(' ')[0].toUpperCase()} <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
