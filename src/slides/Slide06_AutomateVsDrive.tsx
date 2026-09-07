import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { ShieldAlert, Check, X } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide06_AutomateVsDrive: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(200,62,45,0.1),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Automating <br />
              the outcome <br />
              <span className="text-[#C83E2D] italic">is toxic.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Driving the outcome is design un-automated.
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
                    className="text-base md:text-lg text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Automate high-friction drudgery: tokens, 20-year research search, boilerplate.
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
                    Handing AI wireframes to engineering is just hosting a robot's opinion.
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
                    Step out one click: Don't ask how to make a button pretty; ask why the feature exists.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean Comparison List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Should Automate */}
              <div className="p-4 rounded-lg bg-[#161D18] border-2 border-[#2E6F40]/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4ADE80] font-bold border-b border-[#2A3B2E] pb-2">
                  <Check className="w-4 h-4 text-[#4ADE80]" />
                  <span>SHOULD AUTOMATE</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#BAC8BD]">
                  <div className="p-2 rounded bg-[#1C261F]">• Design token cleanups</div>
                  <div className="p-2 rounded bg-[#1C261F]">• Research report excavation</div>
                  <div className="p-2 rounded bg-[#1C261F]">• Repetitive boilerplate code</div>
                  <div className="p-2 rounded bg-[#1C261F]">• Accessibility audit checks</div>
                </div>
              </div>

              {/* Must Drive */}
              <div className="p-4 rounded-lg bg-[#241614] border-2 border-[#C83E2D]/50 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFA499] font-bold border-b border-[#3D2522] pb-2">
                  <X className="w-4 h-4 text-[#C83E2D]" />
                  <span>MUST DRIVE</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#E8D4D2]">
                  <div className="p-2 rounded bg-[#2E1B18]">• The Final Outcome & Soul</div>
                  <div className="p-2 rounded bg-[#2E1B18]">• The Root Human Need</div>
                  <div className="p-2 rounded bg-[#2E1B18]">• Lived Empathy & Care</div>
                  <div className="p-2 rounded bg-[#2E1B18]">• Strategic Point of View</div>
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
