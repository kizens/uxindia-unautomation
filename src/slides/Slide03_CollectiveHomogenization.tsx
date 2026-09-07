import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';

interface SlideProps {
  step: number;
}

// 48 Deterministic Scatter Points for Collective Variance vs Individual Quality
const SCATTER_POINTS = [
  { id: 1, baseX: 75, baseY: 65 },
  { id: 2, baseX: 90, baseY: 85 },
  { id: 3, baseX: 110, baseY: 45 },
  { id: 4, baseX: 125, baseY: 110 },
  { id: 5, baseX: 140, baseY: 55 },
  { id: 6, baseX: 155, baseY: 95 },
  { id: 7, baseX: 170, baseY: 40 },
  { id: 8, baseX: 185, baseY: 75 },
  { id: 9, baseX: 200, baseY: 120 },
  { id: 10, baseX: 215, baseY: 50 },
  { id: 11, baseX: 225, baseY: 80 },
  { id: 12, baseX: 235, baseY: 35 },
  { id: 13, baseX: 245, baseY: 60 },
  { id: 14, baseX: 255, baseY: 105 },
  { id: 15, baseX: 265, baseY: 45 },
  { id: 16, baseX: 280, baseY: 90 },
  { id: 17, baseX: 295, baseY: 55 },
  { id: 18, baseX: 310, baseY: 115 },
  { id: 19, baseX: 325, baseY: 40 },
  { id: 20, baseX: 340, baseY: 70 },
  { id: 21, baseX: 355, baseY: 100 },
  { id: 22, baseX: 370, baseY: 50 },
  { id: 23, baseX: 390, baseY: 80 },
  { id: 24, baseX: 405, baseY: 60 },
  { id: 25, baseX: 100, baseY: 95 },
  { id: 26, baseX: 130, baseY: 70 },
  { id: 27, baseX: 160, baseY: 110 },
  { id: 28, baseX: 190, baseY: 45 },
  { id: 29, baseX: 220, baseY: 95 },
  { id: 30, baseX: 250, baseY: 30 },
  { id: 31, baseX: 270, baseY: 75 },
  { id: 32, baseX: 300, baseY: 105 },
  { id: 33, baseX: 330, baseY: 60 },
  { id: 34, baseX: 360, baseY: 85 },
  { id: 35, baseX: 380, baseY: 110 },
  { id: 36, baseX: 210, baseY: 65 },
  { id: 37, baseX: 230, baseY: 115 },
  { id: 38, baseX: 240, baseY: 45 },
  { id: 39, baseX: 260, baseY: 85 },
  { id: 40, baseX: 285, baseY: 35 },
  { id: 41, baseX: 145, baseY: 80 },
  { id: 42, baseX: 175, baseY: 60 },
  { id: 43, baseX: 315, baseY: 85 },
  { id: 44, baseX: 345, baseY: 50 },
  { id: 45, baseX: 238, baseY: 25 },
  { id: 46, baseX: 242, baseY: 70 },
  { id: 47, baseX: 236, baseY: 90 },
  { id: 48, baseX: 244, baseY: 110 },
];

export const Slide03_CollectiveHomogenization: React.FC<SlideProps> = ({ step }) => {
  // Pre-AI: Broad Gaussian bell curve across wide variance
  const preAiPath = "M 50,145 C 130,145 170,60 240,60 C 310,60 350,145 430,145";
  // Post-AI: Sharp, narrow needle spike centered on statistical mean
  const postAiPath = "M 50,145 L 212,145 C 228,145 235,18 240,18 C 245,18 252,145 268,145 L 430,145";

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

        {/* Right Column: Interactive Scatter / Distribution Graph + Tilburg Data + 12 Apps */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3.5">
              {/* 1. Interactive Distribution Graph (Pre-AI vs Post-AI Morph) */}
              <div className="p-3.5 rounded-lg bg-[#151210] border border-[#38302A] relative overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-[#A89F91]">
                    DISTRIBUTION OF CREATIVE IDEAS
                  </span>
                  <span className={step >= 1 ? "text-[#FF7360] font-bold" : "text-[#E59A2F]"}>
                    {step === 0 ? "STATE: PRE-AI BASELINE" : "STATE: POST-AI STATISTICAL COLLAPSE"}
                  </span>
                </div>

                <div className="relative w-full h-36">
                  <svg className="w-full h-full" viewBox="0 0 480 160" fill="none">
                    {/* Grid Background Lines */}
                    <line x1="40" y1="30" x2="440" y2="30" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="40" y1="65" x2="440" y2="65" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="40" y1="105" x2="440" y2="105" stroke="#251E1A" strokeWidth="0.8" strokeDasharray="3 3" />
                    <line x1="40" y1="145" x2="440" y2="145" stroke="#38302A" strokeWidth="1" />
                    
                    {/* Y-Axis Label: Individual Quality */}
                    <text x="14" y="24" fill="#7E7264" fontSize="8" fontFamily="monospace" textAnchor="start">High</text>
                    <text x="14" y="145" fill="#7E7264" fontSize="8" fontFamily="monospace" textAnchor="start">Low</text>
                    <text x="12" y="85" fill="#A89F91" fontSize="9" fontFamily="monospace" transform="rotate(-90 12 85)" textAnchor="middle">
                      Individual Quality
                    </text>

                    {/* Statistical Mean Center Axis Line */}
                    <line x1="240" y1="15" x2="240" y2="145" stroke="#E59A2F" strokeWidth="0.9" strokeDasharray="4 4" opacity="0.4" />

                    {/* Morphing Distribution Curve Area */}
                    <motion.path
                      d={step >= 1 ? postAiPath : preAiPath}
                      fill={step >= 1 ? "rgba(200, 62, 45, 0.18)" : "rgba(229, 154, 47, 0.12)"}
                      stroke={step >= 1 ? "#FF7360" : "#E59A2F"}
                      strokeWidth={step >= 1 ? "2.2" : "1.8"}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Dynamic Scatter Points (Condensing from wide diversity into narrow column) */}
                    {SCATTER_POINTS.map((pt) => {
                      const targetX = step >= 1 ? 240 + (pt.baseX - 240) * 0.13 : pt.baseX;
                      const dotColor = step >= 1 ? "#FFA499" : "#C7BAA7";
                      return (
                        <motion.circle
                          key={pt.id}
                          animate={{
                            cx: targetX,
                            cy: pt.baseY,
                            opacity: step >= 1 ? 0.95 : 0.65,
                          }}
                          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: pt.id * 0.004 }}
                          r={step >= 1 ? "2.2" : "2"}
                          fill={dotColor}
                        />
                      );
                    })}

                    {/* X-Axis Label: Collective Variance (Diversity of Meaning) */}
                    <text x="240" y="157" fill="#A89F91" fontSize="9" fontFamily="monospace" textAnchor="middle">
                      Collective Variance (Diversity of Meaning)
                    </text>
                  </svg>

                  {/* Post-AI Callout Annotation (Inspired by reference image) */}
                  <AnimatePresence>
                    {step >= 1 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute right-4 top-2 bg-[#261311] border border-[#C83E2D] rounded px-2 py-1 text-[10px] font-mono text-[#FF7360] flex items-center gap-1.5 shadow-lg"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7360] animate-ping" />
                        <span>Collapse: Ideation & Design</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* 2. Tilburg Study (2026) Card with Deactivated vs Active States */}
              <div 
                className={`p-3 rounded-lg transition-colors duration-500 ${
                  step >= 1 
                    ? 'bg-[#181311] border border-[#C83E2D]/50 shadow-md' 
                    : 'bg-[#151210] border border-[#2D241E] opacity-75'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={step >= 1 ? "text-[#FDFBF7] font-bold" : "text-[#7E7264]"}>
                    TILBURG STUDY (2026)
                  </span>
                  <span className={step >= 1 ? "text-[#34D399] font-bold" : "text-[#7E7264]"}>
                    {step >= 1 ? "ACTIVE FINDINGS" : "BASELINE (INACTIVE)"}
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Metric 1: Individual Polish */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className={step >= 1 ? "text-[#D5C9B8]" : "text-[#7E7264]"}>
                        Individual Polish
                      </span>
                      <span className={step >= 1 ? "text-[#34D399] font-bold" : "text-[#7E7264]"}>
                        {step >= 1 ? "+38% Cleanliness" : "0% (Baseline)"}
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#38302A]">
                      <motion.div
                        animate={{ width: step >= 1 ? '78%' : '0%' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#2E6F40] to-[#34D399] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Metric 2: Collective Design Diversity */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className={step >= 1 ? "text-[#FDFBF7] font-bold" : "text-[#7E7264]"}>
                        Collective Design Diversity
                      </span>
                      <span className={step >= 1 ? "text-[#FF7360] font-bold" : "text-[#7E7264]"}>
                        {step >= 1 ? "-70% Collapse (d = 0.70)" : "100% (Normal Variance)"}
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-[#201B17] rounded-full overflow-hidden border border-[#C83E2D]/40">
                      <motion.div
                        animate={{ width: step >= 1 ? '70%' : '0%' }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-[#C83E2D] to-[#FF543E] rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. 12-App Homogenization Grid */}
              <div className="p-2.5 rounded-lg bg-[#181412] border border-[#38302A]">
                <div className="text-[11px] font-mono text-[#E59A2F] mb-1.5 flex items-center justify-between">
                  <span>12 APPS ON AUTOPILOT</span>
                  <span className={step === 2 ? "text-[#FF7360] font-bold" : "text-[#7E7264]"}>
                    {step === 2 ? "Indistinguishable Clones" : "Statistical Convergence"}
                  </span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        borderColor: step === 2 ? '#C83E2D' : '#38302A',
                        backgroundColor: step === 2 ? '#221513' : '#1C1714',
                        scale: step === 2 ? [1, 1.03, 1] : 1,
                      }}
                      transition={{ duration: 0.4, delay: i * 0.02 }}
                      className="h-10 rounded border flex flex-col justify-between p-1"
                    >
                      <div className="w-3.5 h-1 rounded-full bg-[#3D7EA6]/70" />
                      <div className="space-y-0.5">
                        <div className="w-full h-1 rounded bg-[#38302A]" />
                        <div className="w-2/3 h-0.5 rounded bg-[#2B2520]" />
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
