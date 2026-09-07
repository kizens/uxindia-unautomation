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
            <div className="inline-flex items-center gap-2 mb-3 text-[#E59A2F] text-xs uppercase font-mono tracking-widest font-semibold">
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
                    The machine is fast and strong—but your thinking muscles are rotting.
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

        {/* Right Column: Visual Contrast & Decision Matrix */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* Visual Split */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Reps */}
                <motion.div
                  animate={{
                    borderColor: step === 0 || step === 2 ? '#2E6F40' : '#38302A',
                    backgroundColor: '#18221B',
                  }}
                  className="p-4 rounded-lg border-2 flex flex-col items-center text-center space-y-2"
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

                {/* Forklift */}
                <motion.div
                  animate={{
                    borderColor: step === 1 ? '#C83E2D' : '#38302A',
                    backgroundColor: '#241614',
                  }}
                  className="p-4 rounded-lg border-2 flex flex-col items-center text-center space-y-2"
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
                  <div className="px-2 py-0.5 rounded bg-[#C83E2D]/30 text-[#FFA499] text-[10px] font-mono font-bold">
                    ATROPHY
                  </div>
                </motion.div>
              </div>

              {/* The Core Question Filter */}
              <div className="p-3.5 rounded-lg bg-[#181412] border border-[#38302A] space-y-2.5">
                <div className="text-xs font-mono text-[#E59A2F] font-bold">
                  THE CRITICAL QUESTION: "IS THIS TASK CORE?"
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
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
