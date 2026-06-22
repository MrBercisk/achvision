import { useState } from 'react';
import { SERVICES } from '../constants/data';
import { Service } from '../types';
import { Home, Building, Hotel, Leaf, ArrowRight, CheckCircle2, FileSliders, ShieldCheck, HelpCircle, HardHat, Compass } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectServiceSpec: (serviceTitle: string, description: string) => void;
}

const TECHNICAL_SPECS: Record<string, {
  materiality: string[];
  climateTarget: string[];
  zoningStandard: string[];
  passiveDesign: string[];
}> = {
  "residential-design": {
    materiality: ["Carbon-cured raw basalt concrete foundations", "Class 1 charred Yakisugi cedar wrap claddings", "Triple-pane low-E krypton filled glazing", "Sourced local river stone floor aggregates"],
    climateTarget: ["U-Value Target: ≤ 0.18 W/m²K (Excellent Comfort Index)", "Acoustic Attenuation: STC 52 (Quiet Sanctuary Level)", "Air Leakage Limit: < 0.6 ACH @ 50 Pa"],
    zoningStandard: ["IBC Residential / Association of Architects custom standards", "Seismic Class D drift anchorage load frameworks", "Optimal thermal microclimatic boundary buffers"],
    passiveDesign: ["Bioclimatic path alignment for passive solar storage", "High-wall automated convection stack draft vents", "Deciduous screens for optimized seasonal light curves"]
  },
  "commercial-architecture": {
    materiality: ["Reinforced slag hybrid structural steel structures", "Dynamic double-skin continuous glass facades", "Self-cleaning photocatalytic surface sealants", "FSC Engineered multi-ply cross-laminated timbers"],
    climateTarget: ["LEED Gold premium target coefficient indexing", "Advanced VRF chiller loops (COP exceeding 4.8)", "Continuous spatial ambient Daylight autonomy: > 75%"],
    zoningStandard: ["ADA Commercial universal accessibility compliancy", "Pressurized fire egress double-corridor tunnels", "Low Albedo roofing to defend Urban Heat Island limits"],
    passiveDesign: ["External mechanical solar louvres with wind safeties", "Underfloor displacement air distribution vents", "Central thermal sun-atrium ventilation drafts"]
  },
  "hospitality-planning": {
    materiality: ["Volcanic structural basalt and local limestone pillars", "Premium sustainable bamboo engineered structural composites", "Marine-grade duplex stainless steel anchors", "Aqueous clay breathable interior wall plasters"],
    climateTarget: ["Acoustic guest sound barriers matching STC 58 target", "Passive moisture regulators (buffered range 45% - 55%)", "Geothermal constant-temp ground source cycle loops"],
    zoningStandard: ["Ecolabel luxury regional regulations compliance", "Low-footprint pilotis concrete piles safeguarding topsoil", "Central water purifier treatment reservoir cycles"],
    passiveDesign: ["Volcanic mass delay thermal buffers (8-hour release delay)", "Natural cross-draft path mapping capturing coastal winds", "Water terracing structures providing active evaporative cooling"]
  },
  "landscape-design": {
    materiality: ["Permeable mortarless dry-stack stone slate blockages", "Unbound local porous gravel trail layers", "Reclaimed zero-treatment timber walkway platforms", "Raw heavy-grain structural granite monolith blockings"],
    climateTarget: ["Zero permanent grid-water irrigation after establishment", "Deep bioswale retention (managing 95% of peak storms)", "Dense multi-canopy microclimate ambient windbreaks"],
    zoningStandard: ["Regional environmental stormwater run-off bylaws", "Serrated physical root barrier membrane shielding sheets", "Eco-safe ultra-low voltage focused light fixtures"],
    passiveDesign: ["Deciduous wind protection blocks cold northerly gusts", "Aesthetic shade tree placing to block low summer afternoon glare", "Passive dew-pond evaporative loops to temper land breeze directions"]
  }
};

export default function ServicesOverview({ onSelectServiceSpec }: ServicesOverviewProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("residential-design");

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'Building':
        return <Building className="w-5 h-5" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];
  const activeSpecs = TECHNICAL_SPECS[selectedService.id] || TECHNICAL_SPECS["residential-design"];

  return (
    <section id="services" className="py-24 bg-surface-cream border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-widest">
              OUR DESIGN SERVICES
            </span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-[40px] font-semibold text-footer-black leading-tight mb-4">
            Bespoke Architecture Solutions
          </h2>
          <div className="w-20 h-1 bg-[#DFC08A] mb-4" />
          
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            We formulate clean geometries, choose high-grade local masonry, and prioritize passive ventilation architectures to raise comfort limits.
          </p>
        </div>

        {/* Dynamic Split Screen Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Service buttons list selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between gap-4 outline-none ${
                  selectedServiceId === service.id
                    ? 'border-footer-black bg-white shadow-md pl-8'
                    : 'border-border-light hover:border-primary/50 hover:bg-white bg-white/40'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 border flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    selectedServiceId === service.id
                      ? 'bg-primary border-primary text-white'
                      : 'border-border-light text-text-secondary bg-white'
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-bold text-footer-black">
                      {service.title}
                    </h3>
                    <p className="text-[11px] text-text-secondary mt-1 line-clamp-1 max-w-xs">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                  selectedServiceId === service.id ? 'translate-x-1.5 text-primary' : 'text-text-secondary/50'
                }`} />
              </button>
            ))}
          </div>

          {/* Right panel: Active Service Spec Details card */}
          {selectedService && (
            <div className="lg:col-span-7 bg-white border border-border-light p-6 md:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 text-primary border-b border-border-light pb-4 mb-6">
                  <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    {getServiceIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-footer-black leading-tight">
                      {selectedService.title} Spec Sheet
                    </h3>
                    <p className="text-[9px] font-mono text-primary uppercase tracking-widest mt-0.5">
                      Professional Architectural Manifesto
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {selectedService.longDescription}
                </p>

                {/* Benefits listed list */}
                <div className="space-y-3 mb-8">
                  <h4 className="font-sans text-[11px] font-bold tracking-widest text-footer-black uppercase">
                    PRACTICAL OUTCOMES & BENEFITS:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highly Informative Technical Specifications Grid (Read-only) */}
                <div className="border-t border-border-light pt-6 mt-6 space-y-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-3 bg-[#DFC08A]" />
                    <h4 className="font-sans text-[11px] font-bold tracking-widest text-footer-black uppercase">
                      TECHNICAL BUILDING SPECIFICATIONS
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Materiality Card */}
                    <div className="bg-surface-cream/50 p-4 border border-border-light space-y-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <HardHat className="w-3.5 h-3.5 text-primary" />
                        <h5 className="font-sans text-[10px] font-bold text-footer-black uppercase tracking-wider">
                          Materiality & Sourcing
                        </h5>
                      </div>
                      <ul className="space-y-1.5">
                        {activeSpecs.materiality.map((mat, i) => (
                          <li key={i} className="text-[11px] text-text-secondary flex items-start gap-1.5 line-clamp-2 leading-relaxed">
                            <span className="text-[#DFC08A] font-bold select-none">•</span>
                            <span>{mat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Passive Design Card */}
                    <div className="bg-surface-cream/50 p-4 border border-border-light space-y-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Compass className="w-3.5 h-3.5 text-primary" />
                        <h5 className="font-sans text-[10px] font-bold text-footer-black uppercase tracking-wider">
                          Passive Aero-Thermal Design
                        </h5>
                      </div>
                      <ul className="space-y-1.5">
                        {activeSpecs.passiveDesign.map((psv, i) => (
                          <li key={i} className="text-[11px] text-text-secondary flex items-start gap-1.5 line-clamp-2 leading-relaxed">
                            <span className="text-[#DFC08A] font-bold select-none">•</span>
                            <span>{psv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Climate / Targets Card */}
                    <div className="bg-surface-cream/50 p-4 border border-border-light space-y-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        <h5 className="font-sans text-[10px] font-bold text-footer-black uppercase tracking-wider">
                          Targeted Performance Metrics
                        </h5>
                      </div>
                      <ul className="space-y-1.5">
                        {activeSpecs.climateTarget.map((clm, i) => (
                          <li key={i} className="text-[11px] text-text-secondary flex items-start gap-1.5 line-clamp-2 leading-relaxed">
                            <span className="text-[#DFC08A] font-bold select-none">•</span>
                            <span>{clm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Zoning / Structural Card */}
                    <div className="bg-surface-cream/50 p-4 border border-border-light space-y-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-primary" />
                        <h5 className="font-sans text-[10px] font-bold text-footer-black uppercase tracking-wider">
                          Zoning & Building Codes
                        </h5>
                      </div>
                      <ul className="space-y-1.5">
                        {activeSpecs.zoningStandard.map((zon, i) => (
                          <li key={i} className="text-[11px] text-text-secondary flex items-start gap-1.5 line-clamp-2 leading-relaxed">
                            <span className="text-[#DFC08A] font-bold select-none">•</span>
                            <span>{zon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row gap-4 justify-between items-center bg-white mt-10 shrink-0">
                <span className="text-[11px] text-text-secondary italic text-center sm:text-left">
                  Ready to calculate your real estimate for {selectedService.title}?
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const specDetails = `Inquiry sector: ${selectedService.title}\nDescription: ${selectedService.description}\n\nTechnical Blueprint Specguide Attributes:\n- Materiality core: ${activeSpecs.materiality.join(", ")}\n- Passive systems: ${activeSpecs.passiveDesign.join(", ")}\n- Code requirements: ${activeSpecs.zoningStandard.join(", ")}`;
                      onSelectServiceSpec(selectedService.title, specDetails);
                    }}
                    className="bg-footer-black hover:bg-primary text-white font-bold uppercase tracking-widest text-[10px] px-5 py-3.5 transition-colors shrink-0 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center hover:scale-101 active:scale-99"
                  >
                    SELECT SERVICE SPEC <FileSliders className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
