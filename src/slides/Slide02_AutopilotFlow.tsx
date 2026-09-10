import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Bot, User, FileText, Layers, Sparkles, ArrowRight, Quote, Zap } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide02_AutopilotFlow: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(61,126,166,0.12),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#3D7EA6] mb-3 flex items-center gap-1.5 font-semibold">
              <Bot className="w-3.5 h-3.5" />
              ACT I • THE ARTIFACT TRAP
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              The 'Autopilot' <br />
              <span className="text-[#E59A2F] italic">Flow.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Frictionless, fast, and completely empty.
            </p>

            {/* Stepped Single-Beat Message */}
            <div className="h-28 flex items-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3 space-y-1"
                  >
                    <div className="font-bold text-[#FDFBF7]">The 80% Process Trap</div>
                    <div className="text-xs text-[#A89F91]">
                      Designers spend 80% of energy on process artifacts: fake personas, journey maps, and rigid checklists.
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3 space-y-1"
                  >
                    <div className="font-bold text-[#FDFBF7]">"The user does not care about your process artifacts."</div>
                    <div className="text-xs text-[#E59A2F]">
                      They only care about the end experience they see and feel.
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3 space-y-1"
                  >
                    <div className="font-bold text-[#FDFBF7]">The AI Shift: Anyone Can Vibe-Code</div>
                    <div className="text-xs text-[#D0C5B4]">
                      Anyone can vibe-code a working prototype faster than a designer writes a checklist. Process is no longer a defense.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean, Open Editorial Diagram (No Box Inside Box) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark" className="p-6 md:p-8">
            <div className="flex flex-col justify-center space-y-6">
              
              {/* Minimal Flow Nodes (No Box-in-Box) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Fake Persona", sub: "Stock photo & bio", icon: User },
                  { label: "Journey Map", sub: "Linear curves", icon: FileText },
                  { label: "How Might We", sub: "Sticky notes", icon: Layers },
                  { label: "50 Wireframes", sub: "Instant AI layouts", icon: Sparkles }
                ].map((stage, idx) => {
                  const Icon = stage.icon;
                  const isDimmed = step === 1;
                  return (
                    <div
                      key={stage.label}
                      className={`relative flex flex-col items-center text-center transition-opacity duration-300 ${
                        isDimmed ? "opacity-30" : "opacity-100"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#241F1A] flex items-center justify-center mb-2 text-[#E59A2F]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-medium text-[#FDFBF7]">{stage.label}</span>
                      <span className="text-[10px] font-mono text-[#8E8375] mt-0.5">{stage.sub}</span>

                      {idx < 3 && (
                        <div className="hidden sm:block absolute -right-3 top-5 text-[#54483D]">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Center Beat (No nested bordered boxes) */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  
                  {/* Step 0: The Autopilot Loop */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between pt-4 border-t border-[#29201A] text-xs font-mono"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#241F1A] flex items-center justify-center text-[#8E8375]">
                          <User className="w-4 h-4 opacity-50" />
                        </div>
                        <div>
                          <div className="text-[#D0C5B4] font-semibold">Human Judgment</div>
                          <div className="text-[10px] text-[#8E8375]">Bypassed (zero friction)</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#E59A2F]">
                        <span className="text-[10px] uppercase tracking-wider">3.2s Latency</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>

                      <div className="flex items-center gap-3 text-right">
                        <div>
                          <div className="text-[#E59A2F] font-semibold">Autopilot Engine</div>
                          <div className="text-[10px] text-[#34D399]">50x Velocity</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#2A2119] flex items-center justify-center text-[#E59A2F]">
                          <Bot className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: The Reality Check (Clean Typography, No Redundancy) */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-[#C83E2D]/40"
                    >
                      <p className="text-sm sm:text-base font-mono text-[#D0C5B4] leading-relaxed">
                        Portfolios are 80% filled with journey maps and sticky notes, but users only experience the single screen they see and feel.
                      </p>
                    </motion.div>
                  )}

                  {/* Step 2: The AI Shift (Anyone Can Vibe-Code) */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-[#E59A2F]/40 space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <div className="text-[#34D399] font-bold flex items-center gap-1.5 mb-1">
                            <Zap className="w-3.5 h-3.5" /> ANYONE + AI VIBE-CODING
                          </div>
                          <p className="text-[#D0C5B4] text-[11px] leading-relaxed">
                            Functional interactive prototype in 60 seconds flat.
                          </p>
                        </div>
                        <div>
                          <div className="text-[#FFA499] font-bold mb-1">
                            CHECKLIST UX
                          </div>
                          <p className="text-[#8E8375] text-[11px] leading-relaxed">
                            Weeks of process theater rendered obsolete.
                          </p>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-[#FDFBF7] pt-2 border-t border-[#261E18] font-bold flex items-center gap-1.5">
                        <span className="text-[#E59A2F]">→</span>
                        <span>If our only value is following a checklist, we are automated away.</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};

