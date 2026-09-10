import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Check, Sparkles } from 'lucide-react';

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
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Check className="w-3.5 h-3.5" />
              THE TACTICAL BOUNDARY
            </div>

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

        {/* Right Column: Clean Stepped Comparison */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Should Automate - Revealed First (Step >= 0) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  step === 0
                    ? 'bg-[#161D18] border-2 border-[#4ADE80] shadow-[0_0_24px_rgba(74,222,128,0.12)]'
                    : 'bg-[#161D18]/90 border border-[#2E6F40]/60'
                } space-y-3 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#2A3B2E] pb-2.5 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#4ADE80] font-bold">
                      <Check className="w-4 h-4 text-[#4ADE80]" />
                      <span>SHOULD AUTOMATE</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#4ADE80]/15 text-[#4ADE80] border border-[#4ADE80]/30 font-semibold">
                      AI LEVERAGE
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-[#BAC8BD]">
                    <div className="p-2.5 rounded-lg bg-[#1C261F] border border-[#27382B]">
                      • Design token cleanups
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1C261F] border border-[#27382B]">
                      • Research report excavation
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1C261F] border border-[#27382B]">
                      • Repetitive boilerplate code
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#1C261F] border border-[#27382B]">
                      • Accessibility audit checks
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#6BA8D1] flex items-center gap-1.5">
                  <span>Dominated by cursor velocity</span>
                </div>
              </motion.div>

              {/* Must Drive - Revealed Next (Step >= 1) with Human Touch */}
              <div className="relative min-h-[260px] flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 0 ? (
                    <motion.div
                      key="must-drive-waiting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full p-4 rounded-xl border border-dashed border-[#3D2522] flex flex-col items-center justify-center text-center space-y-2"
                    >
                      <Sparkles className="w-5 h-5 text-[#8E8375] opacity-60" />
                      <div className="text-[11px] font-mono text-[#A89F91] font-semibold uppercase tracking-wider">
                        Next Beat
                      </div>
                      <div className="text-sm font-editorial italic text-[#D0C5B4]">
                        The Human Touch
                      </div>
                      <div className="text-[10px] font-mono text-[#6E6457]">
                        Advance to reveal what humans must drive
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="must-drive-revealed"
                      initial={{ opacity: 0, y: 16, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className={`w-full h-full p-4 rounded-xl transition-all duration-300 ${
                        step >= 1
                          ? 'bg-[#241614] border-2 border-[#E59A2F] shadow-[0_0_24px_rgba(229,154,47,0.15)]'
                          : 'bg-[#241614]/90 border border-[#C83E2D]/60'
                      } space-y-3 flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-[#3D2522] pb-2.5 mb-3">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#FFA499] font-bold">
                            <Sparkles className="w-4 h-4 text-[#E59A2F]" />
                            <span>MUST DRIVE</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E59A2F]/20 text-[#F5B041] border border-[#E59A2F]/40 font-bold tracking-wide">
                            HUMAN TOUCH
                          </span>
                        </div>

                        <div className="space-y-2 text-xs font-mono text-[#E8D4D2]">
                          <div className="p-2.5 rounded-lg bg-[#2E1B18] border border-[#44231E] font-medium text-[#FDFBF7]">
                            • The Final Outcome & Soul
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#2E1B18] border border-[#44231E]">
                            • The Root Human Need
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#2E1B18] border border-[#44231E]">
                            • Lived Empathy & Care
                          </div>
                          <div className="p-2.5 rounded-lg bg-[#2E1B18] border border-[#44231E]">
                            • Strategic Point of View
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 text-[10px] font-mono text-[#F5B041] flex items-center gap-1.5">
                        <span>Protected by discernment and lived experience</span>
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
