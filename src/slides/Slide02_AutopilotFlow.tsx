import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Bot, User, FileText, Layers, Sparkles, ArrowRight } from 'lucide-react';

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
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#3D7EA6] mb-3 flex items-center gap-1.5 font-semibold">
              <Bot className="w-3.5 h-3.5" />
              THE ILLUSION
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              The 'Autopilot' <br />
              <span className="text-[#E59A2F] italic">Flow.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Frictionless, fast, and completely empty.
            </p>

            {/* Stepped Single-Beat Message */}
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Generate user persona. Map emotional journey. 50 layouts in 3 seconds.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-xl font-bold text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    "The user does not care about your process artifacts."
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    If our only job is predictable layouts, we aren't designing: we are copy-pasting the expected.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean Architectural Pipeline Schematic */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="relative w-full min-h-[330px] bg-[#151210] rounded-lg border border-[#38302A] p-5 flex flex-col justify-between overflow-hidden">
              {/* Top: The 4-Stage Automated Pipeline */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8E8375] uppercase tracking-wider mb-2.5">
                  <span>Automated Pipeline</span>
                  <span className="text-[#E59A2F]">Instant Synthesis</span>
                </div>

                <div className="grid grid-cols-4 gap-2 relative">
                  {[
                    { label: "Persona", sub: "Synthetic", icon: User },
                    { label: "Journey", sub: "Interpolated", icon: FileText },
                    { label: "Wireframe", sub: "50 Layouts", icon: Layers },
                    { label: "Hi-Fi", sub: "Auto-styled", icon: Sparkles }
                  ].map((stage, idx) => {
                    const Icon = stage.icon;
                    const isDimmed = step === 1;
                    return (
                      <div
                        key={stage.label}
                        className={`relative p-2.5 rounded-lg bg-[#1C1814] border transition-all duration-300 flex flex-col items-center text-center ${
                          isDimmed
                            ? "border-[#332B24] opacity-40"
                            : "border-[#38302A] opacity-100"
                        }`}
                      >
                        <div className="w-7 h-7 rounded-md bg-[#241F1A] border border-[#3E352C] flex items-center justify-center mb-1.5 text-[#E59A2F]">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-medium text-[#FDFBF7]">{stage.label}</span>
                        <span className="text-[10px] font-mono text-[#8E8375] mt-0.5">{stage.sub}</span>

                        {/* Chevron connector between items */}
                        {idx < 3 && (
                          <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#54483D]">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Center: The Human Bypass Metaphor (Clean & Editorial) */}
              <div className="relative z-10 my-auto py-3 flex items-center justify-between gap-3">
                {/* Human Node (Bypassed) */}
                <div className="flex-1 p-3.5 rounded-xl bg-[#191512] border border-[#332B24] flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full border border-dashed border-[#8E8375]/50 bg-[#211B17] flex items-center justify-center text-[#A89F91] mb-2">
                    <User className="w-5 h-5 opacity-60" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#D0C5B4]">Human Judgment</span>
                  <span className="text-[10px] font-mono text-[#8E8375] mt-0.5">Bypassed (0 friction)</span>
                </div>

                {/* Flow / Telemetry Connector */}
                <div className="flex flex-col items-center px-1">
                  <span className="text-[9px] font-mono text-[#E59A2F] uppercase tracking-wider mb-1">
                    Bypass Loop
                  </span>
                  <div className="w-14 sm:w-20 h-0.5 bg-gradient-to-r from-[#8E8375]/30 via-[#E59A2F] to-[#E59A2F]/40 relative flex items-center justify-end">
                    <ArrowRight className="w-3 h-3 text-[#E59A2F] -mr-1" />
                  </div>
                  <span className="text-[9px] font-mono text-[#8E8375] mt-1">3.2s Latency</span>
                </div>

                {/* Autopilot Machine Node */}
                <div className="flex-1 p-3.5 rounded-xl bg-[#1F1914] border border-[#E59A2F]/40 flex flex-col items-center text-center shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-[#2A2119] border border-[#E59A2F]/60 flex items-center justify-center text-[#E59A2F] mb-2">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#E59A2F]">Autopilot Engine</span>
                  <span className="text-[10px] font-mono text-[#34D399] font-bold mt-0.5">50x Velocity</span>
                </div>
              </div>

              {/* Bottom: Context-Aware Dynamic Takeaway Bar */}
              <div className="relative z-10">
                <div className="p-2.5 rounded-lg bg-[#1C1613] border border-[#382D24] text-center text-xs font-mono transition-colors duration-300">
                  {step === 0 && (
                    <span className="text-[#A89F91]">
                      Instant generation removes the <span className="text-[#E59A2F] font-semibold">creative friction</span>
                    </span>
                  )}
                  {step === 1 && (
                    <span className="text-[#FFA499]">
                      Reality check: <span className="font-bold underline">The user never sees process artifacts</span>
                    </span>
                  )}
                  {step === 2 && (
                    <span className="text-[#FF7360]">
                      Automating the outcome enters <span className="font-bold underline">The Blur</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
