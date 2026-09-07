import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Dumbbell, Truck, Brain, CheckCircle2, XCircle } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide04_ForkliftAtGym: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(229,154,47,0.1),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Brain className="w-3.5 h-3.5" />
              COGNITIVE OFFLOADING
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              The Forklift <br />
              <span className="text-[#E59A2F] italic">at the Gym.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              You don't build muscle by watching a machine lift.
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
                    Dr. Doshi's 300-writer study: AI ideas made stories individually creative, but collectively identical.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    The machine is fast and strong, but your critical thinking muscles begin to atrophy.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Ask: Is this core to my craft? If No: substitute. If Yes: complement, never replace!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean & Minimal Visual Contrast */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4 p-2">
              {/* Top Split: Doing the Reps vs Cognitive Offload */}
              <div className="grid grid-cols-2 gap-4">
                {/* Doing the Reps */}
                <motion.div
                  animate={{
                    borderColor: step === 0 || step === 2 ? '#2E6F40' : '#38302A',
                    backgroundColor: step === 0 || step === 2 ? '#16221A' : '#14110F',
                    opacity: step === 1 ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                  className="p-5 rounded-xl border flex flex-col items-center text-center space-y-3 relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-full bg-[#2E6F40]/20 border border-[#2E6F40]/40 flex items-center justify-center">
                    <Dumbbell className="w-7 h-7 text-[#4ADE80]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider block">
                      Doing the Reps
                    </span>
                    <span className="text-[11px] text-[#A89F91] block mt-1">
                      Active struggle & judgment
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#2E6F40]/30 text-[#4ADE80] text-[10px] font-mono font-bold border border-[#2E6F40]/50">
                    BUILDS MUSCLE
                  </div>
                </motion.div>

                {/* Cognitive Offload */}
                <motion.div
                  animate={{
                    borderColor: step === 1 ? '#C83E2D' : '#38302A',
                    backgroundColor: step === 1 ? '#261412' : '#14110F',
                    opacity: step === 0 ? 0.5 : 1,
                    scale: step === 1 ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 0.35 }}
                  className="p-5 rounded-xl border flex flex-col items-center text-center space-y-3 relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C83E2D]/20 border border-[#C83E2D]/40 flex items-center justify-center">
                    <Truck className="w-7 h-7 text-[#FF6B57]" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider block">
                      Cognitive Offload
                    </span>
                    <span className="text-[11px] text-[#A89F91] block mt-1">
                      Watching machine lift
                    </span>
                  </div>
                  <div className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold border ${
                    step === 1
                      ? 'bg-[#C83E2D] text-white border-[#FF7360]'
                      : 'bg-[#C83E2D]/20 text-[#FFA499] border-[#C83E2D]/40'
                  }`}>
                    ATROPHY
                  </div>
                </motion.div>
              </div>

              {/* Bottom: Progressive Framework (Spacious & Clean) */}
              <div className="min-h-[108px] flex items-center">
                <AnimatePresence mode="wait">
                  {step < 2 ? (
                    <motion.div
                      key="teaser"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full p-4 rounded-xl border border-dashed border-[#38302A] text-center"
                    >
                      <p className="text-xs font-mono text-[#8E8375]">
                        {step === 0 
                          ? "Focus: The physical resistance of craft creates intuition" 
                          : "Warning: Unmonitored cognitive offload erodes creative judgment"}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="framework"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4 }}
                      className="w-full p-4 rounded-xl bg-[#181412] border border-[#E59A2F]/40 space-y-3"
                    >
                      <div className="text-xs font-mono text-[#E59A2F] font-bold flex items-center justify-between">
                        <span>THE DECISIVE QUESTION: "IS THIS TASK CORE?"</span>
                        <span className="text-[10px] text-[#34D399]">FRAMEWORK</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-3 rounded-lg bg-[#1E1815] border border-[#38302A]">
                          <div className="text-[#3D7EA6] font-bold flex items-center gap-1.5">
                            <XCircle className="w-4 h-4 text-[#3D7EA6]" /> NO (Expenses)
                          </div>
                          <div className="text-[11px] text-[#34D399] font-bold mt-1.5">
                            → SUBSTITUTE (100% AI)
                          </div>
                        </div>
                        <div className="p-3 rounded-lg bg-[#2A1614] border border-[#C83E2D]/40">
                          <div className="text-[#FFA499] font-bold flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FF7360]" /> YES (Strategy)
                          </div>
                          <div className="text-[11px] text-[#FFA499] font-bold mt-1.5">
                            → COMPLEMENT (Never Replace)
                          </div>
                        </div>
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
