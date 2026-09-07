import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Wrench, Compass, Bot, User } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide05_EDFrontier: React.FC<SlideProps> = ({ step }) => {
  const [activeDomain, setActiveDomain] = useState<'E' | 'D' | null>(null);

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
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Compass className="w-3.5 h-3.5" />
              THE CORE FRAMEWORK
            </div>

            {/* Title Guaranteed on a Single Line */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.6rem] font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.1] mb-4 whitespace-nowrap">
              Execution (E) <span className="text-[#E59A2F] italic">vs. Discernment (D).</span>
            </h1>

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
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

        {/* Right Column: Clean, Interactive Frontier Visual */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3.5 p-1">
              {/* Frontier Divide Status Bar */}
              <div className="p-2.5 rounded-lg bg-[#161210] border border-[#352C24] flex items-center justify-between text-[11px] font-mono">
                <span className={`flex items-center gap-1.5 transition-colors duration-300 ${
                  activeDomain === 'E' || step === 1 ? 'text-[#6BA8D1] font-bold' : 'text-[#7A8B99]'
                }`}>
                  <Bot className="w-3.5 h-3.5" />
                  Machine Execution
                </span>

                <div className="text-[10px] text-[#A89F91]">
                  ← The Frontier →
                </div>

                <span className={`flex items-center gap-1.5 transition-colors duration-300 ${
                  activeDomain === 'D' || step === 2 ? 'text-[#F5B041] font-bold' : 'text-[#A89481]'
                }`}>
                  <User className="w-3.5 h-3.5" />
                  Human Discernment
                </span>
              </div>

              {/* The Dual Frontier Blocks */}
              <div className="grid grid-cols-2 gap-3.5">
                {/* Execution (E) */}
                <motion.div
                  onClick={() => setActiveDomain(activeDomain === 'E' ? null : 'E')}
                  animate={{
                    borderColor: (step === 1 || activeDomain === 'E') ? '#3D7EA6' : '#2A3644',
                    backgroundColor: (step === 1 || activeDomain === 'E') ? '#132230' : '#101922',
                    scale: (step === 1 || activeDomain === 'E') ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 flex items-center justify-center text-[#6BA8D1]">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#3D7EA6]/20 text-[#6BA8D1] border border-[#3D7EA6]/40 font-bold">
                        50x SPEED
                      </span>
                    </div>

                    <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                      EXECUTION (E)
                    </h3>
                    <div className="text-xs text-[#6BA8D1] font-mono mt-0.5 font-semibold">
                      THE MECHANICAL MAKING
                    </div>

                    <div className="mt-3.5 space-y-1.5 text-xs text-[#A8BED0] font-mono">
                      <div className="p-1.5 rounded bg-[#0D151E] border border-[#21303E]">
                        Figma layer naming
                      </div>
                      <div className="p-1.5 rounded bg-[#0D151E] border border-[#21303E]">
                        Layout variations
                      </div>
                      <div className="p-1.5 rounded bg-[#0D151E] border border-[#21303E]">
                        Translation & tokens
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-2 rounded bg-[#0A121A] text-[10px] font-mono text-[#6BA8D1] text-center font-bold border border-[#3D7EA6]/30">
                    AUTOMATE AGGRESSIVELY
                  </div>
                </motion.div>

                {/* Discernment (D) */}
                <motion.div
                  onClick={() => setActiveDomain(activeDomain === 'D' ? null : 'D')}
                  animate={{
                    borderColor: (step === 2 || activeDomain === 'D') ? '#E59A2F' : '#3D3126',
                    backgroundColor: (step === 2 || activeDomain === 'D') ? '#261C12' : '#1C140D',
                    scale: (step === 2 || activeDomain === 'D') ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl border-2 flex flex-col justify-between cursor-pointer transition-all relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E59A2F]/20 border border-[#E59A2F]/40 flex items-center justify-center text-[#F5B041]">
                        <Compass className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#E59A2F]/20 text-[#F5B041] border border-[#E59A2F]/40 font-bold">
                        HUMAN ONLY
                      </span>
                    </div>

                    <h3 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wider">
                      DISCERNMENT (D)
                    </h3>
                    <div className="text-xs text-[#F5B041] font-mono mt-0.5 font-semibold">
                      THE HUMAN CHOOSING
                    </div>

                    <div className="mt-3.5 space-y-1.5 text-xs text-[#E0CFBD] font-mono">
                      <div className="p-1.5 rounded bg-[#181108] border border-[#382B1E]">
                        Taste & conviction
                      </div>
                      <div className="p-1.5 rounded bg-[#181108] border border-[#382B1E]">
                        Empathy & real context
                      </div>
                      <div className="p-1.5 rounded bg-[#181108] border border-[#382B1E]">
                        The "Why" of design
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-2 rounded bg-[#150F08] text-[10px] font-mono text-[#F5B041] text-center font-bold border border-[#E59A2F]/30">
                    PROTECT FIERCELY
                  </div>
                </motion.div>
              </div>

              {/* Dynamic Bottom Insight Bar */}
              <div className="p-2.5 rounded-lg bg-[#14100D] border border-[#33281E] text-center text-xs font-mono">
                {step === 0 && (
                  <span className="text-[#A89F91]">
                    The dividing line: <span className="text-[#6BA8D1]">Automate the mechanical</span> so you can <span className="text-[#F5B041]">protect the soul</span>
                  </span>
                )}
                {step === 1 && (
                  <span className="text-[#6BA8D1]">
                    Cursor speed is a losing game. AI generates 50 screens before you open a tab.
                  </span>
                )}
                {step === 2 && (
                  <span className="text-[#F5B041]">
                    The machine has no body and never felt joy or grief. Discernment is your moat.
                  </span>
                )}
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
