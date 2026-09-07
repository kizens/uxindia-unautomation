import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Bot, User, FileText, Layers, AlertTriangle, Zap, Coffee, Sparkles } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide02_AutopilotFlow: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(61,126,166,0.12),transparent_70%)] pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#E59A2F]/20 border border-[#E59A2F]/40 text-[#F5B041] text-xs font-mono font-bold tracking-widest uppercase">
            ACT I • THE MIRAGE
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 02 • 3:00 — 6:00
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 3
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Side: Editorial Typography & Progressive Beats */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="text-xs font-mono uppercase tracking-widest text-[#3D7EA6] mb-2 flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5" />
            THE AUTOMATED PROMISE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            The 'Autopilot' <br />
            <span className="text-[#E59A2F] italic">Flow.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Frictionless, lightning fast, and completely empty.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#3D7EA6] text-sm text-[#D5C9B8]"
              >
                <div className="font-mono text-xs uppercase text-[#3D7EA6] mb-1 font-bold">
                  THE AUTOMATED CHECKLIST
                </div>
                Drop a prompt into an LLM: generate persona 'John, 34, latte lover' with fake photo. Instant emotion journey map, 50 wireframes, Figma high-fi in seconds.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#2A1715] border-l-4 border-[#C83E2D] text-sm text-[#F9D8D4]"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#C83E2D]" />
                  THE UNCOMFORTABLE TRUTH
                </div>
                The user does not give a single shit about your process artifacts. 80% of portfolios are journey maps & stickies. Users only care about the raw feeling of the product.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1F1916] border-l-4 border-[#E59A2F] text-sm text-[#EADECB]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#E59A2F]" />
                  ENTERING 'THE BLUR'
                </div>
                A Product Manager can vibe-code a working prototype faster than you can write a digital sticky note. When you automate the outcome, design loses its soul.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Retro Illustration of Asleep Designer & Robotic Pen */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="VISUAL METAPHOR"
            label="Autopilot Assembly Line"
            variant={step === 1 ? 'crimson' : 'dark'}
          >
            {/* Visual SVG Cartoon / Schematic */}
            <div className="relative w-full h-64 md:h-72 bg-[#151210] rounded-lg border border-[#38302A] p-4 flex flex-col justify-between overflow-hidden">
              {/* Retro Assembly Line Stages */}
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                {[
                  { label: "1. Persona", icon: User, done: true },
                  { label: "2. Journey", icon: FileText, done: true },
                  { label: "3. Wireframe", icon: Layers, done: true },
                  { label: "4. Figma HiFi", icon: Sparkles, done: step >= 1 }
                ].map((st, i) => {
                  const Icon = st.icon;
                  return (
                    <motion.div
                      key={st.label}
                      animate={{
                        borderColor: step >= 1 && i === 3 ? '#C83E2D' : '#38302A',
                        backgroundColor: '#1C1815'
                      }}
                      className="p-2 rounded border flex flex-col items-center gap-1"
                    >
                      <Icon className="w-4 h-4 text-[#E59A2F]" />
                      <span className="text-[10px] text-[#A89F91]">{st.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Graphic Center: Sleeping Designer vs Mechanical Robotic Arm */}
              <div className="relative my-auto flex items-center justify-around py-4">
                {/* Designer ZZZ */}
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full border-2 border-dashed border-[#A89F91] flex items-center justify-center bg-[#231E1A]">
                    <span className="text-2xl">😴</span>
                    <motion.div
                      animate={{ y: [-4, -16], x: [0, 8], opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 2.2 }}
                      className="absolute -top-3 -right-2 font-mono font-bold text-xs text-[#E59A2F]"
                    >
                      z z Z
                    </motion.div>
                  </div>
                  <span className="text-[11px] font-mono text-[#A89F91] mt-2">Designer Asleep</span>
                </div>

                {/* Robotic Arm with Fast Pencil */}
                <motion.div
                  animate={{ rotate: [-4, 6, -4], x: [-2, 4, -2] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 rounded-lg bg-[#2A231E] border-2 border-[#E59A2F] flex flex-col items-center justify-center p-2 relative shadow-lg">
                    <Bot className="w-8 h-8 text-[#E59A2F] mb-1 animate-pulse" />
                    <span className="text-[10px] font-mono text-[#FDFBF7]">SPEED: 50x</span>
                    <div className="absolute -bottom-2 px-2 py-0.5 rounded bg-[#C83E2D] text-[9px] font-mono text-white font-bold">
                      AUTOPILOT
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#E59A2F] mt-2">Robotic Executor</span>
                </motion.div>
              </div>

              {/* Status Banner */}
              <div className="p-2 rounded bg-[#201B17] border border-[#3A322A] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A89F91]">Portfolio Process Density:</span>
                <span className="text-[#FFA499] font-bold">80% ARTIFACTS • 0% PROVEN SOUL</span>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Quote */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          CORE INSIGHT: <span className="text-[#FDFBF7]">Automating the outcome leads straight into The Blur</span>
        </div>
        <div className="text-[#FFA499] font-semibold">
          [143, 437, 453]
        </div>
      </div>
    </div>
  );
};
