import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Dumbbell, Truck, CheckCircle, XCircle, Brain, ArrowRight } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide04_ForkliftAtGym: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(229,154,47,0.1),transparent_60%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#E59A2F]/20 border border-[#E59A2F]/40 text-[#F5B041] text-xs font-mono font-bold tracking-widest uppercase">
            ACT II • THE CRASH
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 04 • 9:00 — 12:00 • COGNITIVE OFFLOADING
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
            <Brain className="w-3.5 h-3.5" />
            THE CORE VS. NON-CORE TRAP
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            The Forklift <br />
            <span className="text-[#E59A2F] italic">at the Gym.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            You don't build muscle by watching a machine lift.
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
                  DR. ANIL DOSHI'S EXPERIMENT (300 WRITERS)
                </div>
                Writers given AI ideas scored higher individually, but collectively looked eerily alike. They traded their own unique voice for algorithmic convenience.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#251513] border-l-4 border-[#C83E2D] text-sm text-[#F7D8D5]"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold">
                  THE FORKLIFT METAPHOR
                </div>
                If you bring a forklift to the gym, the machine lifts 500 lbs effortlessly—while your human thinking muscles atrophy into cognitive rot.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1F1A15] border-l-4 border-[#2E6F40] text-sm text-[#D8E6DA]"
              >
                <div className="font-mono text-xs uppercase text-[#4ADE80] mb-1 font-bold">
                  THE CRITICAL QUESTION
                </div>
                Is this task core to who I am, who I want to be, or the value I bring? If No: substitute. If Yes: complement, NEVER replace!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Split Illustration & Stepped Decision Framework */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="FRAMEWORK"
            label="Doshi's Law of Creative Reps"
            variant="dark"
          >
            <div className="space-y-4">
              {/* Visual Metaphor Split */}
              <div className="grid grid-cols-2 gap-3">
                {/* Reps Side */}
                <motion.div
                  animate={{
                    borderColor: step === 0 || step === 2 ? '#2E6F40' : '#38302A',
                    backgroundColor: '#1A221C',
                  }}
                  className="p-4 rounded-lg border flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2E6F40]/20 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider">
                    Doing the Reps
                  </span>
                  <span className="text-[11px] text-[#A89F91]">
                    Active judgment, messy struggle, organic taste muscle.
                  </span>
                  <div className="px-2 py-0.5 rounded bg-[#2E6F40]/30 text-[#4ADE80] text-[10px] font-mono font-bold">
                    BUILD MUSCLE
                  </div>
                </motion.div>

                {/* Forklift Side */}
                <motion.div
                  animate={{
                    borderColor: step === 1 ? '#C83E2D' : '#38302A',
                    backgroundColor: '#241715',
                  }}
                  className="p-4 rounded-lg border flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C83E2D]/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#FF6B57]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider">
                    Cognitive Offload
                  </span>
                  <span className="text-[11px] text-[#A89F91]">
                    Watching the machine lift 500lbs. Effortless, zero muscle gained.
                  </span>
                  <div className="px-2 py-0.5 rounded bg-[#C83E2D]/30 text-[#FFA499] text-[10px] font-mono font-bold">
                    ATROPHY
                  </div>
                </motion.div>
              </div>

              {/* The Decision Framework Matrix */}
              <motion.div
                animate={{
                  opacity: step === 2 ? 1 : 0.75,
                  scale: step === 2 ? 1.01 : 1,
                }}
                className="p-4 rounded-lg bg-[#171412] border border-[#38302A] space-y-3"
              >
                <div className="text-xs font-mono text-[#E59A2F] font-bold">
                  THE DOSHI FILTER: "IS THIS TASK CORE TO YOUR CRAFT?"
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  {/* NO Branch */}
                  <div className="p-2.5 rounded bg-[#1F1916] border border-[#38302A] space-y-1">
                    <div className="flex items-center gap-1 text-[#3D7EA6] font-bold">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>NO (Non-Core)</span>
                    </div>
                    <div className="text-[#D5C9B8] text-[11px]">
                      Expenses, layer renaming, translations.
                    </div>
                    <div className="text-[10px] text-[#34D399] font-bold">
                      → SUBSTITUTE EFFORT
                    </div>
                  </div>

                  {/* YES Branch */}
                  <div className="p-2.5 rounded bg-[#2B1715] border border-[#C83E2D]/50 space-y-1">
                    <div className="flex items-center gap-1 text-[#FFA499] font-bold">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C83E2D]" />
                      <span>YES (Core Craft)</span>
                    </div>
                    <div className="text-[#FDFBF7] text-[11px]">
                      Strategy, human insight, product soul.
                    </div>
                    <div className="text-[10px] text-[#FFA499] font-bold">
                      → COMPLEMENT, NEVER REPLACE
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE WARNING: <span className="text-[#FDFBF7]">Renting out your brain is the true threat to design relevance.</span>
        </div>
        <div className="text-[#E59A2F] font-mono">
          [373, 441, 657]
        </div>
      </div>
    </div>
  );
};
