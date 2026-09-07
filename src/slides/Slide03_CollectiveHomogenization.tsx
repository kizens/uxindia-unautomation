import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { TrendingDown, Sparkles, BarChart2, ShieldAlert, Compass } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide03_CollectiveHomogenization: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,62,45,0.12),transparent_60%)] pointer-events-none" />

      {/* Slide Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#C83E2D]/20 border border-[#C83E2D]/40 text-[#FFA499] text-xs font-mono font-bold tracking-widest uppercase">
            ACT II • THE CRASH
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 03 • 6:00 — 9:00 • PROVEN METRIC
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 3
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Keynote Claim & Tilburg Study Details */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#C83E2D] text-xs uppercase font-mono tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C83E2D]" />
            THE DANGER OF 'THE BLUR'
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            Collective <br />
            <span className="text-[#C83E2D] italic">Homogenization.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            When everyone uses the same brain, everyone designs the same thing.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#8E8375] text-sm text-[#D5C9B8]"
              >
                <div className="font-mono text-xs uppercase text-[#A89F91] mb-1 font-bold">
                  THE SEA OF "BEIGE GOO"
                </div>
                Every SaaS landing page, mobile app, and portal is competent, polite, and completely indistinguishable. Corporate blues, safe grays, rounded pill buttons.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#241715] border-l-4 border-[#C83E2D] text-sm text-[#F9D8D4]"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  TILBURG UNIVERSITY META-ANALYSIS (APRIL 2026)
                </div>
                Global meta-analysis on human-AI co-creation: AI improves individual polish, but collapses collective idea diversity by <span className="font-bold underline">d = 0.70</span> in ideation & design!
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1F1916] border-l-4 border-[#E59A2F] text-sm text-[#EADECB]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                  STATISTICAL GRAVITATIONAL PULL
                </div>
                LLMs operate on probability. Every prompt is pulled toward the statistical center. We aren't failing because designs are bad; we fail because they are indistinguishable.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive Stepped Tilburg Data Graph & 12-App Homogenization Grid */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="DOCUMENTED RESEARCH • APRIL 2026"
            label="Tilburg University Meta-Analysis"
            variant="dark"
          >
            <div className="space-y-4">
              {/* Stepped Interactive Data Chart */}
              <div className="p-4 rounded-lg bg-[#151210] border border-[#38302A] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#A89F91]">
                  <span>METRIC (EFFECT SIZE)</span>
                  <span>AI IMPACT</span>
                </div>

                {/* Metric 1: Individual Polish (+38%) */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#D5C9B8]">Individual Output Polish</span>
                    <span className="text-[#34D399] font-bold">+38% Perceived Polish</span>
                  </div>
                  <div className="h-3 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#38302A]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: step >= 0 ? '78%' : '20%' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#2E6F40] to-[#34D399] rounded-full"
                    />
                  </div>
                </div>

                {/* Metric 2: Collective Diversity Collapse (-70%) */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[#FDFBF7] font-bold">Collective Semantic Diversity (Design)</span>
                    <span className="text-[#FF7360] font-bold">-70% Drop (d = 0.70)</span>
                  </div>
                  <div className="h-4 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#C83E2D]/40 relative">
                    <motion.div
                      initial={{ width: '100%' }}
                      animate={{ width: step >= 1 ? '30%' : '100%' }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      className="h-full bg-gradient-to-r from-[#C83E2D] to-[#FF543E] rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* The "12 Apps Looking Identical" Grid */}
              <div className="p-3 rounded-lg bg-[#181412] border border-[#38302A]">
                <div className="text-[11px] font-mono text-[#E59A2F] mb-2 flex items-center justify-between">
                  <span>THE 12-APP "BEIGE GOO" EFFECT</span>
                  <span className="text-xs text-[#A89F91]">Statistically Identical</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        borderColor: step === 2 ? '#C83E2D' : '#3D352E',
                        opacity: step === 2 ? 0.9 : 0.6,
                        scale: step === 2 ? [0.98, 1.02, 0.98] : 1,
                      }}
                      transition={{ duration: 2, repeat: step === 2 ? Infinity : 0, delay: i * 0.1 }}
                      className="h-12 rounded bg-[#201B17] border flex flex-col justify-between p-1.5"
                    >
                      <div className="w-5 h-1.5 rounded-full bg-[#3D7EA6]/60" />
                      <div className="space-y-1">
                        <div className="w-full h-1 rounded bg-[#38302A]" />
                        <div className="w-3/4 h-1 rounded bg-[#2B2520]" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-2 text-[10px] font-mono text-center text-[#A89F91]">
                  Same navbar, same hero, same 3-column feature grid, same rounded pill.
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          TAKEAWAY: <span className="text-[#FDFBF7]">Sameness is the new noise. If you look like everyone else, you are irrelevant.</span>
        </div>
        <div className="text-[#C83E2D] font-mono font-bold">
          [226, 228, 504]
        </div>
      </div>
    </div>
  );
};
