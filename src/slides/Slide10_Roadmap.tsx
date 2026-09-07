import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Compass, Sparkles } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide10_Roadmap: React.FC<SlideProps> = ({ step }) => {
  useEffect(() => {
    if (step === 3) {
      try {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#C83E2D', '#E59A2F', '#34D399', '#3D7EA6', '#FDFBF7']
        });
      } catch (e) {}
    }
  }, [step]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,62,45,0.15),transparent_75%)] pointer-events-none" />

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
              <Compass className="w-3.5 h-3.5" />
              RECLAIMING THE WHEEL
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Three Rules <br />
              <span className="text-[#C83E2D] italic">for Tomorrow.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Practicing design un-automated.
            </p>

            {/* Stepped Single-Beat Message */}
            <div className="h-28 flex items-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Rule 1: Stop competing on speed. You will lose. Compete on curation and meaning.
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
                    Rule 2: Practice Productive Resistance. Make AI challenge your assumptions, not replace them.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    Rule 3: Validate before you are confident. Keep your thinking muscles active.
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-lg md:text-xl font-editorial font-bold text-[#FDFBF7] border-l-2 border-[#C83E2D] pl-3 leading-relaxed"
                  >
                    "What would you rather have? <br />
                    <span className="text-[#C83E2D]">A tool that thinks for you,</span> or <span className="text-[#E59A2F]">a tool that makes you think?</span>"
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Three Minimal Action Pillars */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3.5">
              {/* Pillar 1 */}
              <motion.div
                animate={{
                  borderColor: step === 0 ? '#E59A2F' : '#38302A',
                  backgroundColor: step === 0 ? '#261E16' : '#181412',
                  scale: step === 0 ? 1.02 : 1,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E59A2F]/20 flex items-center justify-center text-2xl font-editorial font-bold text-[#F5B041]">
                  1
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Compete on Meaning
                  </h4>
                  <p className="text-xs text-[#A89F91] mt-0.5">
                    Never compete on volume or cursor speed.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                animate={{
                  borderColor: step === 1 ? '#3D7EA6' : '#38302A',
                  backgroundColor: step === 1 ? '#182430' : '#181412',
                  scale: step === 1 ? 1.02 : 1,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3D7EA6]/20 flex items-center justify-center text-2xl font-editorial font-bold text-[#6BA8D1]">
                  2
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Productive Resistance
                  </h4>
                  <p className="text-xs text-[#A89F91] mt-0.5">
                    Treat AI as a provocative sparring partner.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                animate={{
                  borderColor: step === 2 || step === 3 ? '#C83E2D' : '#38302A',
                  backgroundColor: step === 2 || step === 3 ? '#261513' : '#181412',
                  scale: step === 2 || step === 3 ? 1.02 : 1,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C83E2D]/20 flex items-center justify-center text-2xl font-editorial font-bold text-[#FFA499]">
                  3
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Keep the Brain Active
                  </h4>
                  <p className="text-xs text-[#A89F91] mt-0.5">
                    Never rent out your human judgment.
                  </p>
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
