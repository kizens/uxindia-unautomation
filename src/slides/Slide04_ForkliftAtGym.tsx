import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Dumbbell, Truck, Brain, CheckCircle, XCircle } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide04_ForkliftAtGym: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(229,154,47,0.1),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            

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

        {/* Right Column: Visual Contrast & Progressive Decision Matrix */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* Visual Split */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Doing the Reps */}
                <motion.div
                  animate={{
                    borderColor: step === 0 || step === 2 ? '#2E6F40' : '#38302A',
                    backgroundColor: step === 0 || step === 2 ? '#16221A' : '#14110F',
                    opacity: step === 1 ? 0.6 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg border-2 flex flex-col items-center text-center space-y-2 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-full bg-[#2E6F40]/20 flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-[#4ADE80]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider">
                    Doing the Reps
                  </span>
                  <span className="text-[11px] text-[#A89F91]">
                    Active struggle & judgment
                  </span>
                  <div className="px-2 py-0.5 rounded bg-[#2E6F40]/30 text-[#4ADE80] text-[10px] font-mono font-bold">
                    BUILDS MUSCLE
                  </div>
                </motion.div>

                {/* Cognitive Offload / The Forklift */}
                <motion.div
                  animate={{
                    borderColor: step === 1 ? '#C83E2D' : '#38302A',
                    backgroundColor: step === 1 ? '#261412' : '#14110F',
                    opacity: step === 0 ? 0.6 : 1,
                    scale: step === 1 ? [1, 1.02, 1] : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg border-2 flex flex-col items-center text-center space-y-2 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C83E2D]/20 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#FF6B57]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#FDFBF7] uppercase tracking-wider">
                    Cognitive Offload
                  </span>
                  <span className="text-[11px] text-[#A89F91]">
                    Watching machine lift
                  </span>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    step === 1 ? 'bg-[#C83E2D] text-white animate-pulse' : 'bg-[#C83E2D]/25 text-[#FFA499]'
                  }`}>
                    ATROPHY
                  </div>
                </motion.div>
              </div>

              {/* Progressive Disclosure: The Core Question Filter (Revealed only in Step 2) */}
              <div className="min-h-[92px] flex items-center">
                <AnimatePresence mode="wait">
                  {step < 2 ? (
                    <motion.div
                      key="teaser"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full p-3 rounded-lg border border-dashed border-[#38302A] text-center"
                    >
                      <p className="text-xs font-mono text-[#7E7264]">
                        {step === 0 
                          ? "Focus: The Physical Gym Metaphor" 
                          : "Warning: Unmonitored cognitive offload erodes creative intuition"}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="framework"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full p-3.5 rounded-lg bg-[#181412] border border-[#E59A2F]/40 space-y-2.5 shadow-lg"
                    >
                      <div className="text-xs font-mono text-[#E59A2F] font-bold flex items-center justify-between">
                        <span>THE DECISIVE QUESTION: "IS THIS TASK CORE?"</span>
                        <span className="text-[10px] text-[#34D399] font-mono">FRAMEWORK REVEALED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-2 rounded bg-[#1E1815] border border-[#38302A]">
                          <div className="text-[#3D7EA6] font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> NO (Expenses)
                          </div>
                          <div className="text-[10px] text-[#34D399] font-bold mt-1">→ SUBSTITUTE</div>
                        </div>
                        <div className="p-2 rounded bg-[#2A1614] border border-[#C83E2D]/40">
                          <div className="text-[#FFA499] font-bold flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C83E2D]" /> YES (Strategy)
                          </div>
                          <div className="text-[10px] text-[#FFA499] font-bold mt-1">→ COMPLEMENT</div>
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
