import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Wrench, Compass, Cpu, Heart, Sparkles, Sliders } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide05_EDFrontier: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,154,47,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#E59A2F]/20 border border-[#E59A2F]/40 text-[#F5B041] text-xs font-mono font-bold tracking-widest uppercase">
            ACT III • THE FRONTIER
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 05 • 12:00 — 15:00 • CORE FRAMEWORK
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 3
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#E59A2F] text-xs uppercase font-mono tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            THE CORE FRAMEWORK
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            The E vs. D <br />
            <span className="text-[#E59A2F] italic">Frontier.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Let the machine execute. Fiercely protect the judgment.
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
                  THE FUNDAMENTAL DICHOTOMY
                </div>
                Execution (E) is the Making—mechanical, repetitive layout permutations. Discernment (D) is the Choosing—taste, intuition, empathy, and cultural context.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#17212B] border-l-4 border-[#3D7EA6] text-sm text-[#CFE2F3]"
              >
                <div className="font-mono text-xs uppercase text-[#3D7EA6] mb-1 font-bold flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  EXECUTION IS AUTOMATABLE
                </div>
                AI can output 50 screens in 3.2 seconds. If your value is the speed of your cursor, you are competing against a machine. You will lose.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#271E15] border-l-4 border-[#E59A2F] text-sm text-[#F7E7D0]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  DISCERNMENT IS UN-AUTOMATABLE
                </div>
                AI has no body, no feelings, and has never felt joy, shame, or grief. It can generate 1,000 screens, but has zero idea if that screen means anything to a human being.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Graphic Contrast (Execution vs Discernment) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="THE COMPILATION PARALLEL"
            label="1950s Compilers Freed Software Architecture"
            variant="dark"
          >
            <div className="grid grid-cols-2 gap-4 h-72">
              {/* Execution (E) Block - Deep Slate Blue */}
              <motion.div
                animate={{
                  borderColor: step === 1 ? '#3D7EA6' : '#2A3644',
                  backgroundColor: step === 1 ? '#1A2938' : '#141E28',
                  scale: step === 1 ? 1.02 : 0.98,
                }}
                className="p-4 rounded-lg border-2 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5 text-[#6BA8D1]" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                    EXECUTION (E)
                  </h3>
                  <div className="text-xs text-[#3D7EA6] font-mono mt-0.5">THE MAKING</div>
                  <ul className="mt-3 space-y-1 text-[11px] text-[#A8BED0] font-mono">
                    <li>• Naming Figma layers</li>
                    <li>• Vector conversions</li>
                    <li>• 30-language localization</li>
                    <li>• Code layout variations</li>
                  </ul>
                </div>

                <div className="p-2 rounded bg-[#0E1720] border border-[#233547] text-[10px] font-mono text-[#6BA8D1] text-center font-bold">
                  AI DOMINATES • OUTSOURCE IT
                </div>
              </motion.div>

              {/* Discernment (D) Block - Warm Glowing Terracotta Gold */}
              <motion.div
                animate={{
                  borderColor: step === 2 ? '#E59A2F' : '#3D3126',
                  backgroundColor: step === 2 ? '#2E2215' : '#221910',
                  scale: step === 2 ? 1.02 : 0.98,
                }}
                className="p-4 rounded-lg border-2 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#E59A2F]/20 border border-[#E59A2F]/40 flex items-center justify-center mb-3">
                    <Compass className="w-5 h-5 text-[#F5B041]" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                    DISCERNMENT (D)
                  </h3>
                  <div className="text-xs text-[#E59A2F] font-mono mt-0.5">THE CHOOSING</div>
                  <ul className="mt-3 space-y-1 text-[11px] text-[#E0CFBD] font-mono">
                    <li>• Taste & Empathy</li>
                    <li>• Cultural nuance</li>
                    <li>• Systems architecture</li>
                    <li>• The "Why" of human care</li>
                  </ul>
                </div>

                <div className="p-2 rounded bg-[#181108] border border-[#44321F] text-[10px] font-mono text-[#F5B041] text-center font-bold">
                  AI IS BLIND • FIERCELY PROTECT
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE COMPILER MOMENT: <span className="text-[#FDFBF7]">Let the machine handle machine code; we architect human experience.</span>
        </div>
        <div className="text-[#E59A2F] font-mono font-bold">
          [77, 104, 158]
        </div>
      </div>
    </div>
  );
};
