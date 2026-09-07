import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Wrench, Compass, Sparkles } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide05_EDFrontier: React.FC<SlideProps> = ({ step }) => {

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-12 py-6 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,154,47,0.1),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Two-line Title & Keynote Script */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Compass className="w-3.5 h-3.5" />
              THE CORE FRAMEWORK
            </div>

            {/* Title on Two Lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.08] mb-4">
              Execution (E) <br />
              <span className="text-[#E59A2F] italic">vs. Discernment (D).</span>
            </h1>

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
              Let the machine execute. Protect the judgment.
            </p>

            {/* Stepped Single-Beat Message (Formal, Respectful Copy) */}
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Execution is the mechanical making. Discernment is the human choosing.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    AI outputs 50 screens in seconds. Competing on cursor speed is a losing game.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    AI has no body and never felt joy or grief. Discernment is our irreplaceable moat.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Radar Chart & One-by-One Progressive Cards */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3.5">
              {/* 1. Radar Chart Container */}
              <div className="p-4 rounded-xl bg-[#14100D] border border-[#352B22] relative overflow-hidden flex flex-col items-center justify-center">
                {/* SVG Radar Chart (Enlarged) */}
                <div className="relative w-full max-w-[440px] h-[290px] flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 360 270">
                    {/* Concentric Grid Hexagons */}
                    <polygon points="180,40 262,87.5 262,182.5 180,230 98,182.5 98,87.5" fill="none" stroke="#2D241C" strokeWidth="1" />
                    <polygon points="180,64 242,99 242,171 180,206 118,171 118,99" fill="none" stroke="#2D241C" strokeWidth="1" strokeDasharray="2 2" />
                    <polygon points="180,88 221,111 221,159 180,183 139,159 139,111" fill="none" stroke="#2D241C" strokeWidth="1" />
                    <polygon points="180,111 201,123 201,147 180,159 159,147 159,123" fill="none" stroke="#2D241C" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Radiating Axis Spoke Lines */}
                    <line x1="180" y1="135" x2="180" y2="40" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="180" y1="135" x2="262" y2="87.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="180" y1="135" x2="262" y2="182.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="180" y1="135" x2="180" y2="230" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="180" y1="135" x2="98" y2="182.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="180" y1="135" x2="98" y2="87.5" stroke="#3A2F25" strokeWidth="1" />

                    {/* 6 Dimension Labels around Perimeter */}
                    <text x="180" y="26" textAnchor="middle" className="text-[10px] font-mono fill-[#A89F91]">
                      VELOCITY (50x)
                    </text>
                    <text x="272" y="90" textAnchor="start" className="text-[10px] font-mono fill-[#A89F91]">
                      SPECS & TOKENS
                    </text>
                    <text x="272" y="186" textAnchor="start" className="text-[10px] font-mono fill-[#A89F91]">
                      PERMUTATIONS
                    </text>
                    <text x="180" y="250" textAnchor="middle" className="text-[10px] font-mono fill-[#A89F91]">
                      TASTE & CONVICTION
                    </text>
                    <text x="88" y="186" textAnchor="end" className="text-[10px] font-mono fill-[#A89F91]">
                      HUMAN EMPATHY
                    </text>
                    <text x="88" y="90" textAnchor="end" className="text-[10px] font-mono fill-[#A89F91]">
                      CULTURAL CONTEXT
                    </text>

                    {/* Layer 1: AI Execution Polygon (Shown on Step >= 1) */}
                    {step >= 1 && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <polygon
                          points="180,42 255,91 255,179 180,149 172,140 168,128"
                          fill="rgba(61, 126, 166, 0.28)"
                          stroke="#6BA8D1"
                          strokeWidth="2"
                        />
                        {/* Data vertices */}
                        {[[180, 42], [255, 91], [255, 179], [180, 149], [172, 140], [168, 128]].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="3.5" fill="#6BA8D1" stroke="#12100E" strokeWidth="1" />
                        ))}
                      </motion.g>
                    )}

                    {/* Layer 2: Human Discernment Polygon (Shown on Step >= 2) */}
                    {step >= 2 && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <polygon
                          points="180,111 206,120 203,148 180,228 102,180 105,91"
                          fill="rgba(229, 154, 47, 0.30)"
                          stroke="#F5B041"
                          strokeWidth="2"
                        />
                        {/* Data vertices */}
                        {[[180, 111], [206, 120], [203, 148], [180, 228], [102, 180], [105, 91]].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="3.5" fill="#F5B041" stroke="#12100E" strokeWidth="1" />
                        ))}
                      </motion.g>
                    )}
                  </svg>
                </div>
              </div>

              {/* 2. One-by-One Progressive Cards (First Execution, Then Discernment) */}
              <div className="min-h-[110px] flex items-center">
                <AnimatePresence mode="wait">
                  {/* Step 0: Overview State */}
                  {step === 0 && (
                    <motion.div
                      key="step0-card"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full p-4 rounded-xl border border-dashed border-[#352B22] text-center"
                    >
                      <p className="text-xs font-mono text-[#E59A2F] font-bold">
                        THE 6 CAPABILITY DIMENSIONS OF DESIGN
                      </p>
                      <p className="text-[11px] font-mono text-[#8E8375] mt-1">
                        Advance to inspect the Machine Domain (Execution) first, followed by the Human Domain (Discernment).
                      </p>
                    </motion.div>
                  )}

                  {/* Step 1: EXECUTION (E) Shown First */}
                  {step === 1 && (
                    <motion.div
                      key="execution-card"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="w-full p-4 rounded-xl bg-[#111C26] border-2 border-[#3D7EA6] space-y-2.5 shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#3D7EA6]/25 border border-[#3D7EA6]/50 flex items-center justify-center text-[#6BA8D1]">
                            <Wrench className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-[#FDFBF7] uppercase tracking-wider block">
                              EXECUTION (E) • THE MECHANICAL MAKING
                            </span>
                            <span className="text-[10px] font-mono text-[#6BA8D1]">
                              Dominated by AI • 50x Cursor Velocity
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3D7EA6]/20 text-[#6BA8D1] border border-[#3D7EA6]/40 font-bold">
                          AUTOMATE AGGRESSIVELY
                        </span>
                      </div>

                      {/* 3 Key Tasks */}
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono text-[#A8BED0]">
                        <div className="p-2 rounded bg-[#0A121A] border border-[#203345] text-center">
                          Figma layer naming
                        </div>
                        <div className="p-2 rounded bg-[#0A121A] border border-[#203345] text-center">
                          Layout permutations
                        </div>
                        <div className="p-2 rounded bg-[#0A121A] border border-[#203345] text-center">
                          Translation & tokens
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: DISCERNMENT (D) Shown Next */}
                  {step === 2 && (
                    <motion.div
                      key="discernment-card"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="w-full p-4 rounded-xl bg-[#21170E] border-2 border-[#E59A2F] space-y-2.5 shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#E59A2F]/25 border border-[#E59A2F]/50 flex items-center justify-center text-[#F5B041]">
                            <Compass className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-mono font-bold text-[#FDFBF7] uppercase tracking-wider block">
                              DISCERNMENT (D) • THE HUMAN CHOOSING
                            </span>
                            <span className="text-[10px] font-mono text-[#F5B041]">
                              Human Only • Taste, Empathy & Strategic Meaning
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E59A2F]/20 text-[#F5B041] border border-[#E59A2F]/40 font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F5B041]" />
                          FIERCELY PROTECT
                        </span>
                      </div>

                      {/* 3 Key Convictions */}
                      <div className="grid grid-cols-3 gap-2 text-xs font-mono text-[#E0CFBD]">
                        <div className="p-2 rounded bg-[#140E08] border border-[#3A2B1D] text-center">
                          Taste & conviction
                        </div>
                        <div className="p-2 rounded bg-[#140E08] border border-[#3A2B1D] text-center">
                          Empathy & lived context
                        </div>
                        <div className="p-2 rounded bg-[#140E08] border border-[#3A2B1D] text-center">
                          The "Why" of design
                        </div>
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
