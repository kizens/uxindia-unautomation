import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Wrench, Compass, Sliders } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide05_EDFrontier: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,154,47,0.1),transparent_70%)] pointer-events-none" />

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
              <Sliders className="w-3.5 h-3.5" />
              THE CORE FRAMEWORK
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Execution (E) <br />
              <span className="text-[#E59A2F] italic">vs. Discernment (D).</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Let the machine execute. Protect the judgment.
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
                    Execution is the making. Discernment is the choosing.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    AI outputs 50 screens in seconds. Competing on cursor speed is suicide.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    AI has no body and never felt grief or joy. It has no idea if a screen means anything.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Execution vs Discernment Dual Blocks */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="grid grid-cols-2 gap-4 h-72">
              {/* Execution (E) */}
              <motion.div
                animate={{
                  borderColor: step === 1 ? '#3D7EA6' : '#2A3644',
                  backgroundColor: step === 1 ? '#1A2938' : '#141E28',
                }}
                className="p-4 rounded-lg border-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#3D7EA6]/20 flex items-center justify-center mb-3">
                    <Wrench className="w-5 h-5 text-[#6BA8D1]" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                    EXECUTION (E)
                  </h3>
                  <div className="text-xs text-[#3D7EA6] font-mono mt-0.5">THE MAKING</div>
                  <ul className="mt-3 space-y-1.5 text-[11px] text-[#A8BED0] font-mono">
                    <li>• Figma layer naming</li>
                    <li>• Layout permutations</li>
                    <li>• Translation & tokens</li>
                  </ul>
                </div>

                <div className="p-2 rounded bg-[#0E1720] text-[10px] font-mono text-[#6BA8D1] text-center font-bold">
                  AI DOMINATES
                </div>
              </motion.div>

              {/* Discernment (D) */}
              <motion.div
                animate={{
                  borderColor: step === 2 ? '#E59A2F' : '#3D3126',
                  backgroundColor: step === 2 ? '#2E2215' : '#221910',
                }}
                className="p-4 rounded-lg border-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#E59A2F]/20 flex items-center justify-center mb-3">
                    <Compass className="w-5 h-5 text-[#F5B041]" />
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                    DISCERNMENT (D)
                  </h3>
                  <div className="text-xs text-[#E59A2F] font-mono mt-0.5">THE CHOOSING</div>
                  <ul className="mt-3 space-y-1.5 text-[11px] text-[#E0CFBD] font-mono">
                    <li>• Taste & Empathy</li>
                    <li>• Cultural intuition</li>
                    <li>• The "Why" of design</li>
                  </ul>
                </div>

                <div className="p-2 rounded bg-[#181108] text-[10px] font-mono text-[#F5B041] text-center font-bold">
                  FIERCELY PROTECT
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
