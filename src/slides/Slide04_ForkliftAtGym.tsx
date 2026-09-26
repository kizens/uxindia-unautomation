import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Ambient3DBackground } from '../components/Ambient3DBackground';
import { Dumbbell, Truck } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide04_ForkliftAtGym: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#100E0C]">
      <Ambient3DBackground variant={5} />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Narrative */}
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

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6 whitespace-nowrap">
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
                    The machine is fast and strong, but your critical thinking muscles begin to weaken.
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
            <div className="p-2">
              {/* Top Split: Doing the Reps vs Cognitive Offload */}
              <div className="grid grid-cols-2 gap-4">
                {/* Doing the Reps */}
                <motion.div
                  animate={{
                    borderColor: step === 0 ? '#2E6F40' : '#38302A',
                    backgroundColor: step === 0 ? '#16221A' : '#14110F',
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
                    WEAKENS MUSCLE
                  </div>
                </motion.div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
