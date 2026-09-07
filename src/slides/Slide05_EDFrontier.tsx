import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Wrench, Compass, Bot, User, Sparkles } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide05_EDFrontier: React.FC<SlideProps> = ({ step }) => {
  // Allow manual toggle or synchronize with clicker step
  const [selectedDomain, setSelectedDomain] = useState<'E' | 'D' | null>(null);

  // Active domain is determined by user selection or current step
  // Step 1: E, Step 2: D, Step 0: Neutral overview
  const currentDomain = selectedDomain || (step === 1 ? 'E' : step === 2 ? 'D' : null);

  // Radar chart dimensions
  const aiPolygonPoints = "150,42 220,84 220,165 150,146 142,129 139,119";
  const humanPolygonPoints = "150,104 180,111 172,138 150,206 76,168 80,84";

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
              <div className="p-3 rounded-xl bg-[#14100D] border border-[#352B22] relative overflow-hidden flex flex-col items-center">
                {/* Header Strip with Interactive Domain Toggles */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono mb-2 px-1">
                  <button
                    onClick={() => setSelectedDomain(currentDomain === 'E' ? null : 'E')}
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded border transition-all ${
                      currentDomain === 'E' || step === 1
                        ? 'bg-[#3D7EA6]/25 border-[#6BA8D1] text-[#6BA8D1] font-bold'
                        : 'border-[#332A22] text-[#8E8375] hover:text-[#D0C5B4]'
                    }`}
                  >
                    <Bot className="w-3 h-3" />
                    <span>Execution (E)</span>
                    <span className="text-[9px] px-1 rounded bg-[#6BA8D1]/20">AI</span>
                  </button>

                  <span className="text-[10px] text-[#8E8375] uppercase tracking-wider font-mono">
                    Capability Radar
                  </span>

                  <button
                    onClick={() => setSelectedDomain(currentDomain === 'D' ? null : 'D')}
                    className={`flex items-center gap-1.5 px-2 py-0.5 rounded border transition-all ${
                      currentDomain === 'D' || step === 2
                        ? 'bg-[#E59A2F]/25 border-[#F5B041] text-[#F5B041] font-bold'
                        : 'border-[#332A22] text-[#8E8375] hover:text-[#D0C5B4]'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>Discernment (D)</span>
                    <span className="text-[9px] px-1 rounded bg-[#F5B041]/20">Human</span>
                  </button>
                </div>

                {/* SVG Radar Chart */}
                <div className="relative w-full max-w-[340px] h-[240px] flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 250">
                    {/* Concentric Grid Hexagons */}
                    <polygon points="150,40 224,82.5 224,167.5 150,210 76,167.5 76,82.5" fill="none" stroke="#2D241C" strokeWidth="1" />
                    <polygon points="150,61 205,93 205,157 150,189 95,157 95,93" fill="none" stroke="#2D241C" strokeWidth="1" strokeDasharray="2 2" />
                    <polygon points="150,82.5 187,104 187,146 150,167.5 113,146 113,104" fill="none" stroke="#2D241C" strokeWidth="1" />
                    <polygon points="150,104 168,114 168,136 150,146 132,136 132,114" fill="none" stroke="#2D241C" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Radiating Axis Spoke Lines */}
                    <line x1="150" y1="125" x2="150" y2="40" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="150" y1="125" x2="224" y2="82.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="150" y1="125" x2="224" y2="167.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="150" y1="125" x2="150" y2="210" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="150" y1="125" x2="76" y2="167.5" stroke="#3A2F25" strokeWidth="1" />
                    <line x1="150" y1="125" x2="76" y2="82.5" stroke="#3A2F25" strokeWidth="1" />

                    {/* 6 Dimension Labels around Perimeter */}
                    <text x="150" y="28" textAnchor="middle" className="text-[9px] font-mono fill-[#A89F91]">
                      VELOCITY (50x)
                    </text>
                    <text x="232" y="80" textAnchor="start" className="text-[9px] font-mono fill-[#A89F91]">
                      SPECS & TOKENS
                    </text>
                    <text x="232" y="174" textAnchor="start" className="text-[9px] font-mono fill-[#A89F91]">
                      PERMUTATIONS
                    </text>
                    <text x="150" y="228" textAnchor="middle" className="text-[9px] font-mono fill-[#A89F91]">
                      TASTE & CONVICTION
                    </text>
                    <text x="68" y="174" textAnchor="end" className="text-[9px] font-mono fill-[#A89F91]">
                      HUMAN EMPATHY
                    </text>
                    <text x="68" y="80" textAnchor="end" className="text-[9px] font-mono fill-[#A89F91]">
                      CULTURAL CONTEXT
                    </text>

                    {/* Layer 1: AI Execution Polygon (Shown on Step 1 or Step 2 or manual toggle) */}
                    {(step >= 1 || currentDomain === 'E') && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <polygon
                          points={aiPolygonPoints}
                          fill="rgba(61, 126, 166, 0.28)"
                          stroke="#6BA8D1"
                          strokeWidth="2"
                        />
                        {/* Data vertices */}
                        {[[150, 42], [220, 84], [220, 165], [150, 146], [142, 129], [139, 119]].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="3" fill="#6BA8D1" stroke="#12100E" strokeWidth="1" />
                        ))}
                      </motion.g>
                    )}

                    {/* Layer 2: Human Discernment Polygon (Shown on Step 2 or manual toggle) */}
                    {(step >= 2 || currentDomain === 'D') && (
                      <motion.g
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <polygon
                          points={humanPolygonPoints}
                          fill="rgba(229, 154, 47, 0.30)"
                          stroke="#F5B041"
                          strokeWidth="2"
                        />
                        {/* Data vertices */}
                        {[[150, 104], [180, 111], [172, 138], [150, 206], [76, 168], [80, 84]].map(([x, y], i) => (
                          <circle key={i} cx={x} cy={y} r="3" fill="#F5B041" stroke="#12100E" strokeWidth="1" />
                        ))}
                      </motion.g>
                    )}
                  </svg>
                </div>
              </div>

              {/* 2. One-by-One Progressive Cards (First Execution, Then Discernment) */}
              <div className="min-h-[145px] flex items-center">
                <AnimatePresence mode="wait">
                  {/* Step 0: Overview State */}
                  {step === 0 && !currentDomain && (
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

                  {/* Step 1 or E domain: EXECUTION (E) Shown First */}
                  {((step === 1 && currentDomain !== 'D') || currentDomain === 'E') && (
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

                      <div className="p-2 rounded bg-[#091017] border border-[#1D2F40] text-center text-[11px] font-mono text-[#6BA8D1]">
                        Guideline: Competing on cursor speed is a losing game. Let the machine execute.
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2 or D domain: DISCERNMENT (D) Shown Next */}
                  {((step === 2 && currentDomain !== 'E') || currentDomain === 'D') && (
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

                      <div className="p-2 rounded bg-[#120B06] border border-[#352618] text-center text-[11px] font-mono text-[#F5B041]">
                        Guideline: The machine has no body and never felt joy or grief. Protect your discernment.
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
