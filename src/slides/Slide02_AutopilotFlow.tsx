import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Bot, User, FileText, Layers, Sparkles } from 'lucide-react';

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

        {/* Right Column: Clean Metaphor Visual */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="relative w-full h-72 bg-[#151210] rounded-lg border border-[#38302A] p-5 flex flex-col justify-between overflow-hidden">
              {/* Assembly Line Pills */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                {[
                  { label: "Persona", icon: User },
                  { label: "Journey", icon: FileText },
                  { label: "Wireframe", icon: Layers },
                  { label: "Figma Hi-Fi", icon: Sparkles }
                ].map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <div
                      key={st.label}
                      className="p-2 rounded bg-[#1C1815] border border-[#38302A] flex flex-col items-center gap-1"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#E59A2F]" />
                      <span className="text-[10px] text-[#A89F91]">{st.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Graphic Center: Sleeping Designer vs Robotic Arm */}
              <div className="my-auto flex items-center justify-around py-3">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-[#A89F91]/60 flex items-center justify-center bg-[#231E1A]">
                    <span className="text-3xl">😴</span>
                    <motion.div
                      animate={{ y: [-4, -14], opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 2.2 }}
                      className="absolute -top-2 -right-1 font-mono font-bold text-xs text-[#E59A2F]"
                    >
                      z z Z
                    </motion.div>
                  </div>
                  <span className="text-[11px] font-mono text-[#A89F91] mt-2">Designer Asleep</span>
                </div>

                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-xl bg-[#2A231E] border-2 border-[#E59A2F] flex flex-col items-center justify-center p-2 relative shadow-lg">
                    <Bot className="w-8 h-8 text-[#E59A2F] mb-1" />
                    <span className="text-[9px] font-mono text-[#34D399] font-bold">50x SPEED</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#E59A2F] mt-2">Autopilot Machine</span>
                </motion.div>
              </div>

              {/* Summary Pill */}
              <div className="p-2.5 rounded bg-[#201B17] border border-[#3A322A] text-center text-xs font-mono text-[#FFA499]">
                Automating the outcome enters <span className="underline font-bold">The Blur</span>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
