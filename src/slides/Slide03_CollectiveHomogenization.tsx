import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';

interface SlideProps {
  step: number;
}

// 52 Deterministic Scatter Points for Collective Variance vs Individual Quality
const SCATTER_POINTS = [
  { id: 1, baseX: 70, baseY: 110 },
  { id: 2, baseX: 95, baseY: 155 },
  { id: 3, baseX: 120, baseY: 75 },
  { id: 4, baseX: 140, baseY: 190 },
  { id: 5, baseX: 160, baseY: 90 },
  { id: 6, baseX: 180, baseY: 160 },
  { id: 7, baseX: 195, baseY: 65 },
  { id: 8, baseX: 215, baseY: 125 },
  { id: 9, baseX: 230, baseY: 195 },
  { id: 10, baseX: 245, baseY: 85 },
  { id: 11, baseX: 260, baseY: 140 },
  { id: 12, baseX: 275, baseY: 50 },
  { id: 13, baseX: 285, baseY: 100 },
  { id: 14, baseX: 295, baseY: 175 },
  { id: 15, baseX: 305, baseY: 70 },
  { id: 16, baseX: 320, baseY: 150 },
  { id: 17, baseX: 340, baseY: 90 },
  { id: 18, baseX: 360, baseY: 190 },
  { id: 19, baseX: 380, baseY: 65 },
  { id: 20, baseX: 400, baseY: 120 },
  { id: 21, baseX: 420, baseY: 165 },
  { id: 22, baseX: 440, baseY: 80 },
  { id: 23, baseX: 465, baseY: 135 },
  { id: 24, baseX: 490, baseY: 100 },
  { id: 25, baseX: 110, baseY: 165 },
  { id: 26, baseX: 150, baseY: 120 },
  { id: 27, baseX: 185, baseY: 180 },
  { id: 28, baseX: 220, baseY: 75 },
  { id: 29, baseX: 255, baseY: 160 },
  { id: 30, baseX: 280, baseY: 40 },
  { id: 31, baseX: 310, baseY: 125 },
  { id: 32, baseX: 350, baseY: 170 },
  { id: 33, baseX: 390, baseY: 105 },
  { id: 34, baseX: 430, baseY: 140 },
  { id: 35, baseX: 470, baseY: 180 },
  { id: 36, baseX: 235, baseY: 110 },
  { id: 37, baseX: 265, baseY: 190 },
  { id: 38, baseX: 278, baseY: 70 },
  { id: 39, baseX: 298, baseY: 145 },
  { id: 40, baseX: 325, baseY: 60 },
  { id: 41, baseX: 165, baseY: 140 },
  { id: 42, baseX: 205, baseY: 100 },
  { id: 43, baseX: 365, baseY: 140 },
  { id: 44, baseX: 405, baseY: 85 },
  { id: 45, baseX: 278, baseY: 35 },
  { id: 46, baseX: 282, baseY: 115 },
  { id: 47, baseX: 276, baseY: 150 },
  { id: 48, baseX: 284, baseY: 185 },
  { id: 49, baseX: 279, baseY: 60 },
  { id: 50, baseX: 281, baseY: 90 },
  { id: 51, baseX: 277, baseY: 130 },
  { id: 52, baseX: 283, baseY: 170 },
];

export const Slide03_CollectiveHomogenization: React.FC<SlideProps> = ({ step }) => {
  // Pre-AI: Broad Gaussian bell curve across wide variance
  const preAiPath = "M 40,230 C 140,230 190,95 280,95 C 370,95 420,230 520,230";
  // Post-AI: Sharp, narrow needle spike centered on statistical mean
  const postAiPath = "M 40,230 L 248,230 C 265,230 274,22 280,22 C 286,22 295,230 312,230 L 520,230";

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-12 py-6 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(200,62,45,0.12),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-3">
              Collective <br />
              <span className="text-[#C83E2D] italic">Homogenization.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-5">
              When everyone uses the same model, everyone designs the same thing.
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
                    className="text-sm md:text-base text-[#A89F91] font-mono border-l-2 border-[#8E8375] pl-3"
                  >
                    Every modern app is competent, polite, and completely indistinguishable. A vast sea of generic uniformity.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    Tilburg University Meta-Analysis: Generative AI causes a 70% collapse (d = 0.70) in collective design diversity.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Every prompt is pulled toward the statistical middle. Sameness is the new noise.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Expansive Interactive Distribution Graph + Tilburg Data */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* 1. Large Expansive Distribution Graph (Pre-AI vs Post-AI Morph) */}
              <div className="p-4 rounded-xl bg-[#151210] border border-[#38302A] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#A89F91] uppercase tracking-wider">
                    DISTRIBUTION OF CREATIVE IDEAS
                  </span>
                  <span className={step >= 1 ? "text-[#FF7360] font-bold" : "text-[#E59A2F]"}>
                    {step === 0 ? "PRE-AI: BROAD VARIANCE" : "POST-AI: STATISTICAL MEAN COLLAPSE"}
                  </span>
                </div>

                <div className="relative w-full h-60 sm:h-64 lg:h-72">
                  <svg className="w-full h-full" viewBox="0 0 560 260" fill="none">
                    {/* Horizontal Guide Lines */}
                    <line x1="40" y1="50" x2="520" y2="50" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="4 4" />
                    <line x1="40" y1="100" x2="520" y2="100" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="4 4" />
                    <line x1="40" y1="150" x2="520" y2="150" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="4 4" />
                    <line x1="40" y1="190" x2="520" y2="190" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="4 4" />
                    <line x1="40" y1="230" x2="520" y2="230" stroke="#38302A" strokeWidth="1.2" />
                    
                    {/* Y-Axis Label: Individual Quality */}
                    <text x="14" y="32" fill="#7E7264" fontSize="9" fontFamily="monospace" textAnchor="start">High</text>
                    <text x="14" y="230" fill="#7E7264" fontSize="9" fontFamily="monospace" textAnchor="start">Low</text>
                    <text x="12" y="130" fill="#A89F91" fontSize="10" fontFamily="monospace" transform="rotate(-90 12 130)" textAnchor="middle">
                      Individual Quality
                    </text>

                    {/* Statistical Mean Center Axis Line */}
                    <line x1="280" y1="20" x2="280" y2="230" stroke="#E59A2F" strokeWidth="1" strokeDasharray="5 5" opacity="0.4" />
                    <text x="280" y="14" fill="#E59A2F" fontSize="8.5" fontFamily="monospace" textAnchor="middle" opacity="0.8">
                      STATISTICAL MEAN
                    </text>

                    {/* Morphing Distribution Curve Area */}
                    <motion.path
                      d={step >= 1 ? postAiPath : preAiPath}
                      fill={step >= 1 ? "rgba(200, 62, 45, 0.2)" : "rgba(229, 154, 47, 0.12)"}
                      stroke={step >= 1 ? "#FF7360" : "#E59A2F"}
                      strokeWidth={step >= 1 ? "2.5" : "2"}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Dynamic Scatter Points (Condensing from wide diversity into narrow column) */}
                    {SCATTER_POINTS.map((pt) => {
                      const targetX = step >= 1 ? 280 + (pt.baseX - 280) * 0.11 : pt.baseX;
                      const dotColor = step >= 1 ? "#FFA499" : "#C7BAA7";
                      return (
                        <motion.circle
                          key={pt.id}
                          animate={{
                            cx: targetX,
                            cy: pt.baseY,
                            opacity: step >= 1 ? 0.95 : 0.65,
                          }}
                          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: pt.id * 0.003 }}
                          r={step >= 1 ? "2.4" : "2.2"}
                          fill={dotColor}
                        />
                      );
                    })}

                    {/* X-Axis Label: Collective Variance */}
                    <text x="280" y="250" fill="#A89F91" fontSize="10" fontFamily="monospace" textAnchor="middle">
                      Collective Variance (Diversity of Meaning)
                    </text>
                    <text x="50" y="246" fill="#7E7264" fontSize="8" fontFamily="monospace">← Broad Diversity</text>
                    <text x="510" y="246" fill="#7E7264" fontSize="8" fontFamily="monospace" textAnchor="end">Broad Diversity →</text>
                  </svg>

                  {/* Post-AI Callout Annotation (Inspired by reference image) */}
                  <AnimatePresence>
                    {step >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="absolute right-4 top-4 bg-[#261311] border border-[#C83E2D] rounded-md px-3 py-1.5 text-xs font-mono text-[#FF7360] flex items-center gap-2 shadow-xl"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#FF7360] animate-ping" />
                        <span>Most severe in Ideation & Design</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* 2. Tilburg Study (2026) Card with Deactivated vs Active States */}
              <div 
                className={`p-4 rounded-xl transition-all duration-500 ${
                  step >= 1 
                    ? 'bg-[#181311] border border-[#C83E2D]/50 shadow-md' 
                    : 'bg-[#151210] border border-[#2D241E] opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                  <span className={step >= 1 ? "text-[#FDFBF7] font-bold" : "text-[#7E7264]"}>
                    TILBURG STUDY (2026) META-ANALYSIS
                  </span>
                  <span className={step >= 1 ? "text-[#34D399] font-bold" : "text-[#7E7264]"}>
                    {step >= 1 ? "EMPIRICAL FINDINGS ACTIVE" : "BASELINE (INACTIVE)"}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Metric 1: Individual Polish */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className={step >= 1 ? "text-[#D5C9B8]" : "text-[#7E7264]"}>
                        Individual Polish (Grammar, Formatting, Execution)
                      </span>
                      <span className={step >= 1 ? "text-[#34D399] font-bold" : "text-[#7E7264]"}>
                        {step >= 1 ? "+38% Cleanliness" : "0% (Baseline)"}
                      </span>
                    </div>
                    <div className="h-3 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#38302A]">
                      <motion.div
                        animate={{ width: step >= 1 ? '78%' : '0%' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#2E6F40] to-[#34D399] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Metric 2: Collective Design Diversity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className={step >= 1 ? "text-[#FDFBF7] font-bold" : "text-[#7E7264]"}>
                        Collective Design Diversity (Idea Variance)
                      </span>
                      <span className={step >= 1 ? "text-[#FF7360] font-bold" : "text-[#7E7264]"}>
                        {step >= 1 ? "-70% Collapse (d = 0.70)" : "100% (Normal Variance)"}
                      </span>
                    </div>
                    <div className="h-3 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#C83E2D]/40">
                      <motion.div
                        animate={{ width: step >= 1 ? '70%' : '0%' }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#C83E2D] to-[#FF543E] rounded-full"
                      />
                    </div>
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
