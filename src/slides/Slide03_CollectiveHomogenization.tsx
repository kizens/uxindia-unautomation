import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { ShieldAlert } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide03_CollectiveHomogenization: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,62,45,0.12),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[#C83E2D] text-xs uppercase font-mono tracking-widest font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-[#C83E2D]" />
              THE CRASH
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Collective <br />
              <span className="text-[#C83E2D] italic">Homogenization.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              When everyone uses the same brain, everyone designs the same thing.
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
                    className="text-base md:text-lg text-[#A89F91] font-mono border-l-2 border-[#8E8375] pl-3"
                  >
                    Every modern app is competent, polite, and completely indistinguishable. A vast sea of beige goo.
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
                    Tilburg University Meta-Analysis: Generative AI causes a 70% collapse (d = 0.70) in design diversity.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Every prompt is pulled toward the statistical middle. Sameness is the new noise.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Tilburg Chart & Homogenized Grid */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* Stepped Interactive Data Chart */}
              <div className="p-4 rounded-lg bg-[#151210] border border-[#38302A] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#A89F91]">
                  <span>TILBURG STUDY (2026)</span>
                  <span>AI IMPACT</span>
                </div>

                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#D5C9B8]">Individual Polish</span>
                    <span className="text-[#34D399] font-bold">+38% Cleanliness</span>
                  </div>
                  <div className="h-3 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#38302A]">
                    <motion.div
                      animate={{ width: step >= 0 ? '78%' : '20%' }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-[#2E6F40] to-[#34D399] rounded-full"
                    />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#FDFBF7] font-bold">Collective Design Diversity</span>
                    <span className="text-[#FF7360] font-bold">-70% Collapse (d = 0.70)</span>
                  </div>
                  <div className="h-4 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#C83E2D]/40">
                    <motion.div
                      animate={{ width: step >= 1 ? '30%' : '100%' }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#C83E2D] to-[#FF543E] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* 12-App Homogenization Grid */}
              <div className="p-3.5 rounded-lg bg-[#181412] border border-[#38302A]">
                <div className="text-[11px] font-mono text-[#E59A2F] mb-2 flex items-center justify-between">
                  <span>12 APPS ON AUTOPILOT</span>
                  <span className="text-[#A89F91]">Indistinguishable</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        borderColor: step === 2 ? '#C83E2D' : '#3D352E',
                        opacity: step === 2 ? 0.9 : 0.6,
                      }}
                      className="h-11 rounded bg-[#201B17] border flex flex-col justify-between p-1.5"
                    >
                      <div className="w-4 h-1 rounded-full bg-[#3D7EA6]/60" />
                      <div className="space-y-0.5">
                        <div className="w-full h-1 rounded bg-[#38302A]" />
                        <div className="w-3/4 h-1 rounded bg-[#2B2520]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
