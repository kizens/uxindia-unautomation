import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { CheckCircle2, XCircle, Sparkles, Brain, Flame, AlertTriangle } from 'lucide-react';

interface SlideProps {
  step: number;
}

interface TaskSample {
  id: string;
  title: string;
  category: string;
  isCore: boolean;
  verdict: 'SUBSTITUTE' | 'COMPLEMENT';
  guideline: string;
}

const SAMPLE_TASKS: TaskSample[] = [
  {
    id: 'strategy',
    title: 'Design Strategy & Problem Framing',
    category: 'Core Craft',
    isCore: true,
    verdict: 'COMPLEMENT',
    guideline: 'Hands on the weight. Never let AI lift your conviction.',
  },
  {
    id: 'expenses',
    title: 'Formatting Expense Sheets & Invoices',
    category: 'Operations',
    isCore: false,
    verdict: 'SUBSTITUTE',
    guideline: 'Forklift approved. Outsource completely, zero craft lost.',
  },
  {
    id: 'empathy',
    title: 'User Empathy & Qualitative Synthesis',
    category: 'Core Craft',
    isCore: true,
    verdict: 'COMPLEMENT',
    guideline: 'Direct human contact. Bypassing friction destroys real insight.',
  },
  {
    id: 'layers',
    title: 'Figma Layer Renaming & Spec Tokens',
    category: 'Execution',
    isCore: false,
    verdict: 'SUBSTITUTE',
    guideline: 'Mechanical chore. 100% automate without hesitation.',
  },
];

export const Slide04_ForkliftAtGym: React.FC<SlideProps> = ({ step }) => {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const activeTask = SAMPLE_TASKS[activeTaskIndex];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-12 py-6 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(229,154,47,0.1),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Keynote Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Brain className="w-3.5 h-3.5" />
              COGNITIVE OFFLOADING
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              The Forklift <br />
              <span className="text-[#E59A2F] italic">at the Gym.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
              You don't build creative muscle by watching a machine lift.
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
                    className="text-sm md:text-base text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Dr. Doshi's 300-writer study: AI ideas made stories individually creative, but collectively identical.
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
                    The machine is fast and strong, but your critical thinking muscles begin to atrophy.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Ask: Is this core to my craft? If No: substitute. If Yes: complement, never replace!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Blueprint Contrast & Decision Framework */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3.5">
              {/* Top Row: Visual Contrast (Barbell Gym vs Forklift Atrophy) */}
              <div className="grid grid-cols-2 gap-3">
                {/* 1. Doing the Reps (Active Strain) */}
                <motion.div
                  animate={{
                    borderColor: step === 0 || step === 2 ? '#2E6F40' : '#38302A',
                    backgroundColor: step === 0 || step === 2 ? '#142218' : '#14110F',
                    opacity: step === 1 ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                  className="p-3.5 rounded-xl border flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#4ADE80] font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#4ADE80]" />
                      ACTIVE REPS
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#2E6F40]/30 text-[#4ADE80] border border-[#2E6F40]/50 font-semibold">
                      BUILDS MUSCLE
                    </span>
                  </div>

                  {/* Blueprint Barbell Graphic */}
                  <div className="my-1.5 py-1 flex items-center justify-center">
                    <svg className="w-32 h-10" viewBox="0 0 130 40" fill="none">
                      {/* Central bar */}
                      <rect x="8" y="18" width="114" height="4" rx="2" fill="#4ADE80" opacity="0.9" />
                      {/* Knurled grip centers */}
                      <rect x="50" y="17" width="30" height="6" rx="1" fill="#1B3E26" stroke="#4ADE80" strokeWidth="1" strokeDasharray="2 2" />
                      {/* Left plates */}
                      <rect x="20" y="6" width="6" height="28" rx="1.5" fill="#2E6F40" stroke="#4ADE80" strokeWidth="1.2" />
                      <rect x="28" y="10" width="5" height="20" rx="1" fill="#1B3E26" stroke="#4ADE80" strokeWidth="1" />
                      {/* Right plates */}
                      <rect x="104" y="6" width="6" height="28" rx="1.5" fill="#2E6F40" stroke="#4ADE80" strokeWidth="1.2" />
                      <rect x="97" y="10" width="5" height="20" rx="1" fill="#1B3E26" stroke="#4ADE80" strokeWidth="1" />
                      {/* Weight collar pins */}
                      <circle cx="16" cy="20" r="2.5" fill="#4ADE80" />
                      <circle cx="114" cy="20" r="2.5" fill="#4ADE80" />
                    </svg>
                  </div>

                  {/* Muscle Telemetry Indicator */}
                  <div className="space-y-1 mt-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-[#A89F91]">Cognitive Resistance</span>
                      <span className="text-[#4ADE80] font-bold">100% Peak</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1815] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#2E6F40] to-[#4ADE80]"
                        animate={{ width: step === 1 ? '30%' : '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-[10px] text-[#A89F91] block mt-0.5 font-mono">
                      Active struggle builds taste & instinct
                    </span>
                  </div>
                </motion.div>

                {/* 2. Cognitive Offload (The Forklift) */}
                <motion.div
                  animate={{
                    borderColor: step === 1 ? '#C83E2D' : '#38302A',
                    backgroundColor: step === 1 ? '#241412' : '#14110F',
                    opacity: step === 0 ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                  className="p-3.5 rounded-xl border flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFA499] font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-[#C83E2D]" />
                      THE FORKLIFT
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold border ${
                      step === 1
                        ? 'bg-[#C83E2D] text-white border-[#FF7360]'
                        : 'bg-[#C83E2D]/20 text-[#FFA499] border-[#C83E2D]/40'
                    }`}>
                      ATROPHY
                    </span>
                  </div>

                  {/* Blueprint Forklift Graphic */}
                  <div className="my-1.5 py-1 flex items-center justify-center">
                    <svg className="w-32 h-10" viewBox="0 0 130 40" fill="none">
                      {/* Forklift chassis back */}
                      <rect x="12" y="16" width="34" height="16" rx="2" fill="#2E1815" stroke="#E59A2F" strokeWidth="1.2" />
                      {/* Roll cage / Cab */}
                      <path d="M 20 16 L 24 6 L 42 6 L 42 16" stroke="#E59A2F" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
                      {/* Wheels */}
                      <circle cx="22" cy="32" r="4" fill="#12100E" stroke="#E59A2F" strokeWidth="1.2" />
                      <circle cx="38" cy="32" r="4" fill="#12100E" stroke="#E59A2F" strokeWidth="1.2" />
                      {/* Vertical lift mast */}
                      <line x1="48" y1="4" x2="48" y2="32" stroke="#C83E2D" strokeWidth="2" />
                      {/* Hydraulic lifting prong */}
                      <path d="M 46 22 L 76 22 L 76 16" stroke="#FF6B57" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      {/* Lifted weight (idle bicep bypassed) */}
                      <rect x="74" y="13" width="16" height="3" rx="1" fill="#FF7360" />
                      <rect x="72" y="10" width="3" height="9" rx="0.5" fill="#FF7360" />
                      <rect x="89" y="10" width="3" height="9" rx="0.5" fill="#FF7360" />
                    </svg>
                  </div>

                  {/* Cognitive Atrophy Telemetry */}
                  <div className="space-y-1 mt-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-[#A89F91]">Creative Muscle</span>
                      <span className="text-[#FFA499] font-bold">-70% Atrophy</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1C1815] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#FF7360] to-[#C83E2D]"
                        animate={{ width: step === 1 ? '85%' : '20%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-[10px] text-[#A89F91] block mt-0.5 font-mono">
                      Machine gets stronger; judgment decays
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Research Study Citation Banner (Spotlighted on Step 1) */}
              <div className={`p-2 rounded-lg border transition-all duration-300 flex items-center justify-between text-xs font-mono ${
                step === 1
                  ? 'bg-[#2A1614] border-[#C83E2D]/60 text-[#FFA499]'
                  : 'bg-[#181412] border-[#38302A] text-[#8E8375]'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[10px] px-1.5 py-0.5 rounded bg-current/15 uppercase">
                    Dr. Doshi (2025)
                  </span>
                  <span className="text-[11px]">300 Writers: AI ideas yielded individual polish but collective identicality.</span>
                </div>
                <span className="hidden sm:inline text-[10px] font-bold text-[#E59A2F]">d = 0.70</span>
              </div>

              {/* Bottom Framework Section: The Decisive Question (Reveals in Step 2) */}
              <div className="min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  {step < 2 ? (
                    <motion.div
                      key="teaser"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full p-4 rounded-xl border border-dashed border-[#38302A] text-center space-y-1"
                    >
                      <p className="text-xs font-mono text-[#E59A2F] font-semibold">
                        {step === 0 ? "Stage 1: Notice the Physical Gym Metaphor" : "Stage 2: The Biological Consequence of Offloading"}
                      </p>
                      <p className="text-[11px] font-mono text-[#7E7264]">
                        Advance to reveal Dr. Doshi's decisive decision framework for AI adoption.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="framework"
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full p-4 rounded-xl bg-[#171310] border border-[#E59A2F]/40 space-y-3 shadow-xl"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-[#38302A] pb-2 text-xs font-mono">
                        <span className="text-[#E59A2F] font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#E59A2F]" />
                          THE DECISIVE QUESTION: "IS THIS TASK CORE?"
                        </span>
                        <span className="text-[10px] text-[#34D399] font-bold uppercase tracking-wider">
                          Golden Rule
                        </span>
                      </div>

                      {/* Side-by-Side Dual Rules */}
                      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                        {/* NO: Substitute */}
                        <div className="p-3 rounded-lg bg-[#1D1815] border border-[#3A3229] flex flex-col justify-between space-y-2">
                          <div>
                            <div className="text-[#3D7EA6] font-bold flex items-center gap-1.5 text-xs">
                              <XCircle className="w-4 h-4 text-[#3D7EA6]" />
                              NO (Non-Core)
                            </div>
                            <span className="text-[10px] text-[#A89F91] block mt-0.5">
                              Expenses, file formatting, asset exports
                            </span>
                          </div>
                          <div className="p-1.5 rounded bg-[#151210] border border-[#332A22] text-center">
                            <span className="text-[11px] font-bold text-[#34D399]">
                              → SUBSTITUTE (100% AI)
                            </span>
                            <span className="text-[9px] text-[#7E7264] block mt-0.5">Zero craft at stake</span>
                          </div>
                        </div>

                        {/* YES: Complement */}
                        <div className="p-3 rounded-lg bg-[#271513] border border-[#C83E2D]/50 flex flex-col justify-between space-y-2 shadow-inner">
                          <div>
                            <div className="text-[#FFA499] font-bold flex items-center gap-1.5 text-xs">
                              <CheckCircle2 className="w-4 h-4 text-[#FF7360]" />
                              YES (Core Craft)
                            </div>
                            <span className="text-[10px] text-[#D0C5B4] block mt-0.5">
                              Strategy, empathy, problem framing, taste
                            </span>
                          </div>
                          <div className="p-1.5 rounded bg-[#1C100E] border border-[#C83E2D]/40 text-center">
                            <span className="text-[11px] font-bold text-[#FFA499]">
                              → COMPLEMENT (Never Replace!)
                            </span>
                            <span className="text-[9px] text-[#D0C5B4]/70 block mt-0.5">Keep hands on the bar</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Task Tester Chips */}
                      <div className="pt-1">
                        <div className="text-[10px] font-mono text-[#8E8375] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                          <span>Interactive Task Classifier:</span>
                          <span className="text-[#E59A2F] text-[9px]">Click to test task</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                          {SAMPLE_TASKS.map((t, idx) => {
                            const isSelected = activeTaskIndex === idx;
                            return (
                              <button
                                key={t.id}
                                onClick={() => setActiveTaskIndex(idx)}
                                className={`px-2 py-1.5 rounded text-[10px] font-mono text-left transition-all border truncate ${
                                  isSelected
                                    ? t.isCore
                                      ? 'bg-[#C83E2D]/30 border-[#FF6B57] text-[#FDFBF7] font-bold'
                                      : 'bg-[#3D7EA6]/30 border-[#3D7EA6] text-[#FDFBF7] font-bold'
                                    : 'bg-[#191512] border-[#38302A] text-[#8E8375] hover:text-[#D0C5B4]'
                                }`}
                              >
                                {t.title.split(' ')[0]} {t.title.split(' ')[1]}
                              </button>
                            );
                          })}
                        </div>

                        {/* Selected Task Verdict Bar */}
                        <div className="mt-2 px-2.5 py-1.5 rounded bg-[#14110F] border border-[#332A22] flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[#FDFBF7] truncate">
                            <span className="text-[#8E8375]">Task:</span> {activeTask.title}
                          </span>
                          <span className={`font-bold shrink-0 ml-2 ${
                            activeTask.isCore ? 'text-[#FFA499]' : 'text-[#34D399]'
                          }`}>
                            {activeTask.verdict}: {activeTask.isCore ? 'Hands on the bar' : 'Forklift OK'}
                          </span>
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
