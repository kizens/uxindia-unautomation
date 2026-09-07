import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Plane, Search, TrendingDown, UserCheck, CheckCircle2, AlertCircle, EyeOff, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide07_CalibratedTrust: React.FC<SlideProps> = ({ step }) => {
  // Allow interactive tab clicking or synchronize with clicker step
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Active journey stage is controlled by presentation step or manual click
  const activeStage = selectedStep !== null ? selectedStep : Math.min(step, 2);

  const journeyStages = [
    { id: 0, label: '01. SEARCH & INTENT', icon: Search, title: 'Route Discovery' },
    { id: 1, label: '02. PRICE INSIGHT', icon: TrendingDown, title: 'Price Prediction' },
    { id: 2, label: '03. HUMAN DECISION', icon: UserCheck, title: 'Trade-Off Choice' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-12 py-6 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(61,126,166,0.12),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Title & Keynote Script */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#3D7EA6] mb-3 flex items-center gap-1.5 font-semibold">
              <Plane className="w-3.5 h-3.5" />
              CASE STUDY • GOOGLE FLIGHTS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.08] mb-4">
              Calibrated <br />
              <span className="text-[#3D7EA6] italic">Trust.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
              Help users apply their own judgment.
            </p>

            {/* Stepped Single-Beat Message (Formal, Respectful Copy) */}
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                {activeStage === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Stage 1: Intent. The machine aggregates millions of fares in seconds, but only the traveler knows their personal constraints.
                  </motion.div>
                )}

                {activeStage === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Stage 2: Prediction. Replace confusing 88% probability math with plain language clarity: "Prices are currently low. Today is a great day to book."
                  </motion.div>
                )}

                {activeStage === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Stage 3: Choice. AI could auto-book the cheapest ticket, but never understands the human toll of a 3 AM layover. The traveler decides.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Flight Map & Details Frame */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-3">
              {/* 1. Interactive Flight Route Map */}
              <div className="relative w-full h-[175px] rounded-xl bg-[#14100D] border border-[#352B22] overflow-hidden flex flex-col justify-between p-2">
                {/* Understated World Map Silhouette Background */}
                <img
                  src="/assets/world_map.svg"
                  alt="World Map Silhouette"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
                />

                {/* Top Overlay Header with Route & Live Flight Indicator */}
                <div className="relative z-10 flex items-center justify-between px-2 pt-1 text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3D7EA6] animate-pulse" />
                    <span className="text-[#FDFBF7] font-bold tracking-wide">
                      FLIGHT ROUTE • SFO ➔ DEL
                    </span>
                    <span className="text-[#8E8375] hidden sm:inline">
                      (Google Flights Case Study)
                    </span>
                  </div>

                  <div className="text-[10px] text-[#A89F91] flex items-center gap-1.5 bg-[#1C1815]/80 px-2 py-0.5 rounded border border-[#352B22]">
                    <span>Stop {activeStage + 1} of 3</span>
                    <span className="text-[#E59A2F]">●</span>
                    <span className="text-[#E59A2F] font-semibold">
                      {activeStage === 0 ? 'Search Intent' : activeStage === 1 ? 'Price Insight' : 'Human Decision'}
                    </span>
                  </div>
                </div>

                {/* SVG Flight Path & Waypoints Layer */}
                <div className="relative z-10 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 680 140" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="flightPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3D7EA6" stopOpacity="0.7" />
                        <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#F5B041" stopOpacity="0.8" />
                      </linearGradient>

                      {/* Drop shadow for pins */}
                      <filter id="glowPin" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Flight Trajectory Curved Bezier Path */}
                    {/* SFO (115, 80) -> Loop arc -> Insights (345, 55) -> Arc -> DEL (535, 85) */}
                    <path
                      d="M 115 80 C 180 30, 240 25, 345 55 C 410 75, 470 120, 535 85"
                      fill="none"
                      stroke="#2E241C"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 115 80 C 180 30, 240 25, 345 55 C 410 75, 470 120, 535 85"
                      fill="none"
                      stroke="url(#flightPathGrad)"
                      strokeWidth="2"
                      strokeDasharray="5 4"
                    />

                    {/* STOP 1 PIN: SFO / Search & Intent (115, 80) */}
                    <g
                      onClick={() => setSelectedStep(0)}
                      className="cursor-pointer group"
                      transform="translate(115, 80)"
                    >
                      {activeStage === 0 && (
                        <circle r="14" fill="none" stroke="#6BA8D1" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="8"
                        fill={activeStage === 0 ? '#3D7EA6' : '#1F1A16'}
                        stroke={activeStage === 0 ? '#6BA8D1' : '#45382B'}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3" fill={activeStage === 0 ? '#FFFFFF' : '#8E8375'} />
                      <text
                        x="0"
                        y="22"
                        textAnchor="middle"
                        className={`text-[9px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 0 ? 'fill-[#6BA8D1]' : 'fill-[#8E8375]'
                        }`}
                      >
                        01 • SFO Intent
                      </text>
                    </g>

                    {/* STOP 2 PIN: Flight Insights / Price Prediction (345, 55) */}
                    <g
                      onClick={() => setSelectedStep(1)}
                      className="cursor-pointer group"
                      transform="translate(345, 55)"
                    >
                      {activeStage === 1 && (
                        <circle r="14" fill="none" stroke="#4ADE80" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="8"
                        fill={activeStage === 1 ? '#2E6F40' : '#1F1A16'}
                        stroke={activeStage === 1 ? '#4ADE80' : '#45382B'}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3" fill={activeStage === 1 ? '#FFFFFF' : '#8E8375'} />
                      <text
                        x="0"
                        y="22"
                        textAnchor="middle"
                        className={`text-[9px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 1 ? 'fill-[#4ADE80]' : 'fill-[#8E8375]'
                        }`}
                      >
                        02 • Price Insight
                      </text>
                    </g>

                    {/* STOP 3 PIN: DEL / The Human Decision (535, 85) */}
                    <g
                      onClick={() => setSelectedStep(2)}
                      className="cursor-pointer group"
                      transform="translate(535, 85)"
                    >
                      {activeStage === 2 && (
                        <circle r="14" fill="none" stroke="#F5B041" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="8"
                        fill={activeStage === 2 ? '#E59A2F' : '#1F1A16'}
                        stroke={activeStage === 2 ? '#F5B041' : '#45382B'}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3" fill={activeStage === 2 ? '#FFFFFF' : '#8E8375'} />
                      <text
                        x="0"
                        y="22"
                        textAnchor="middle"
                        className={`text-[9px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 2 ? 'fill-[#F5B041]' : 'fill-[#8E8375]'
                        }`}
                      >
                        03 • DEL Decision
                      </text>
                    </g>

                    {/* Smoothly Flying Airplane along Waypoints */}
                    <motion.g
                      animate={{
                        x: activeStage === 0 ? 115 : activeStage === 1 ? 345 : 535,
                        y: activeStage === 0 ? 80 : activeStage === 1 ? 55 : 85,
                        rotate: activeStage === 0 ? -22 : activeStage === 1 ? 8 : -14,
                      }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                    >
                      <g transform="translate(-10, -22)">
                        {/* Aircraft Silhouette */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                            fill="#FDFBF7"
                            stroke="#12100E"
                            strokeWidth="0.8"
                          />
                        </svg>
                      </g>
                    </motion.g>
                  </svg>
                </div>
              </div>

              {/* 2. Revealed Details Card for the Active Stop */}
              <div className="min-h-[285px] flex items-center">
                <AnimatePresence mode="wait">
                  {/* STAGE 0: SEARCH & INTENT */}
                  {activeStage === 0 && (
                    <motion.div
                      key="journey-stage-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Search Query Header */}
                      <div className="p-3 rounded-xl bg-[#14181E] border border-[#2B3B4C] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 flex items-center justify-center text-[#6BA8D1]">
                            <Plane className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-[#FDFBF7] flex items-center gap-1.5">
                              <span>San Francisco (SFO)</span>
                              <ArrowRight className="w-3 h-3 text-[#6BA8D1]" />
                              <span>New Delhi (DEL)</span>
                            </div>
                            <div className="text-[10px] font-mono text-[#8E8375]">
                              Round Trip • Oct 14 - 28 • 1 Traveler
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3D7EA6]/20 text-[#6BA8D1] border border-[#3D7EA6]/40">
                          12,400+ fares scanned
                        </span>
                      </div>

                      {/* Calibrated Trust Alignment Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {/* Machine Domain */}
                        <div className="p-3 rounded-xl bg-[#101720] border border-[#243547] space-y-1.5">
                          <div className="text-[10px] font-mono text-[#6BA8D1] font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>🤖 Machine Capability</span>
                          </div>
                          <p className="text-xs font-mono text-[#A8BED0]">
                            Analyzes historical pricing, schedule matrixes, and seat availability in milliseconds.
                          </p>
                        </div>

                        {/* Human Reality */}
                        <div className="p-3 rounded-xl bg-[#1D1711] border border-[#3D2D1F] space-y-1.5">
                          <div className="text-[10px] font-mono text-[#F5B041] font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>👤 Human Context</span>
                          </div>
                          <p className="text-xs font-mono text-[#E0CFBD]">
                            Traveling with family or prep work for a conference. Personal nuances AI can never guess.
                          </p>
                        </div>
                      </div>

                      {/* Calibrated Takeaway */}
                      <div className="p-2.5 rounded-lg bg-[#141210] border border-[#38302A] text-[11px] font-mono text-[#D0C5B4] text-center">
                        <span className="text-[#3D7EA6] font-bold">Why not auto-book?</span> The machine has the data, but only the traveler understands the purpose.
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 1: PRICE INSIGHT & PREDICTION */}
                  {activeStage === 1 && (
                    <motion.div
                      key="journey-stage-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Google Flights Price Insights UI */}
                      <div className="p-3.5 rounded-xl bg-[#131E18] border border-[#234A31] space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse" />
                            <span className="text-xs font-mono font-bold text-[#FDFBF7]">
                              Prices are currently low for your dates
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#4ADE80] font-bold">
                            $640 typical
                          </span>
                        </div>

                        {/* Visual Spectrum Bar */}
                        <div className="space-y-1">
                          <div className="relative h-3 w-full bg-[#202E24] rounded-full overflow-hidden flex border border-[#2D5039]">
                            <div className="w-1/3 h-full bg-[#4ADE80]/40 border-r border-[#2D5039] flex items-center justify-center">
                              <span className="text-[8px] font-mono text-[#4ADE80] font-bold">LOW</span>
                            </div>
                            <div className="w-1/3 h-full bg-[#E59A2F]/30 border-r border-[#2D5039] flex items-center justify-center">
                              <span className="text-[8px] font-mono text-[#F5B041]">TYPICAL</span>
                            </div>
                            <div className="w-1/3 h-full bg-[#C83E2D]/30 flex items-center justify-center">
                              <span className="text-[8px] font-mono text-[#FFA499]">HIGH</span>
                            </div>
                          </div>
                          <div className="flex justify-between text-[9px] font-mono text-[#8E8375]">
                            <span>$580</span>
                            <span className="text-[#4ADE80] font-bold">● $640 (Today)</span>
                            <span>$850</span>
                            <span>$1,120+</span>
                          </div>
                        </div>
                      </div>

                      {/* Design Contrast: Confusing Math vs. Plain Language */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {/* Over-trust Anti-pattern */}
                        <div className="p-2.5 rounded-xl bg-[#1E1514] border border-[#3D2320] space-y-1">
                          <div className="text-[10px] font-mono text-[#FFA499] flex items-center gap-1 font-bold">
                            <AlertCircle className="w-3 h-3 text-[#C83E2D]" />
                            <span>CONFUSING MATH (ANTI-PATTERN)</span>
                          </div>
                          <div className="font-mono text-sm text-[#FDFBF7] font-bold">
                            88.4% Confidence Score
                          </div>
                          <p className="text-[10px] font-mono text-[#A89F91]">
                            Causes traveler anxiety and analysis paralysis.
                          </p>
                        </div>

                        {/* Calibrated Trust UI */}
                        <div className="p-2.5 rounded-xl bg-[#112318] border border-[#2E6F40] space-y-1">
                          <div className="text-[10px] font-mono text-[#4ADE80] flex items-center gap-1 font-bold">
                            <CheckCircle2 className="w-3 h-3 text-[#4ADE80]" />
                            <span>PLAIN LANGUAGE (CALIBRATED)</span>
                          </div>
                          <div className="font-mono text-sm text-[#4ADE80] font-bold">
                            "Today is a great day to book."
                          </div>
                          <p className="text-[10px] font-mono text-[#BAC8BD]">
                            Directly empowers the human decision.
                          </p>
                        </div>
                      </div>

                      {/* Uncertainty Fallback */}
                      <div className="p-2 rounded-lg bg-[#181410] border border-[#382E24] text-[10px] font-mono text-[#E59A2F] flex items-center justify-center gap-1.5">
                        <EyeOff className="w-3.5 h-3.5 text-[#E59A2F] shrink-0" />
                        <span>Core Rule: When machine confidence is low, hide predictions entirely. Never guess.</span>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 2: THE HUMAN DECISION */}
                  {activeStage === 2 && (
                    <motion.div
                      key="journey-stage-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Trade-off Comparison: Machine Winner vs Human Judgment Winner */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {/* Option A: Pure Algorithmic Optima */}
                        <div className="p-3 rounded-xl bg-[#1C1715] border border-[#3D2B24] space-y-2">
                          <div className="flex items-center justify-between border-b border-[#2E221C] pb-1.5">
                            <span className="text-[10px] font-mono text-[#FFA499] uppercase font-bold">
                              Cheapest Fare
                            </span>
                            <span className="text-xs font-mono font-bold text-[#FDFBF7]">$620</span>
                          </div>
                          <div className="text-xs font-mono text-[#C0B4A5] space-y-1">
                            <div className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-[#8E8375]" />
                              <span>22h travel • 3:30 AM Layover (4h)</span>
                            </div>
                            <div className="text-[10px] text-[#8E8375] italic">
                              AI: "Saves $120."
                            </div>
                          </div>
                          <div className="p-1.5 rounded bg-[#15110E] border border-[#2B1F17] text-[9px] font-mono text-[#A89F91]">
                            Human reaction: "A 3 AM layover before my keynote will ruin my talk."
                          </div>
                        </div>

                        {/* Option B: Human Calibrated Choice */}
                        <div className="p-3 rounded-xl bg-[#142319] border-2 border-[#4ADE80] space-y-2 shadow-[0_0_16px_rgba(74,222,128,0.12)]">
                          <div className="flex items-center justify-between border-b border-[#24452C] pb-1.5">
                            <span className="text-[10px] font-mono text-[#4ADE80] uppercase font-bold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                              Calibrated Choice
                            </span>
                            <span className="text-xs font-mono font-bold text-[#4ADE80]">$740</span>
                          </div>
                          <div className="text-xs font-mono text-[#D2E4D5] space-y-1">
                            <div className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-[#4ADE80]" />
                              <span>15h 30m • Direct non-stop flight</span>
                            </div>
                            <div className="text-[10px] text-[#A2C7A8] italic">
                              Traveler: "Worth $120 for energy and sanity."
                            </div>
                          </div>
                          <div className="p-1.5 rounded bg-[#0D1B13] border border-[#1F3E28] text-[9px] font-mono text-[#4ADE80]">
                            Outcome: Human judgment makes the trade-off. AI assists.
                          </div>
                        </div>
                      </div>

                      {/* Final Calibrated Trust Maxim */}
                      <div className="p-3 rounded-xl bg-[#141210] border border-[#3D3328] flex items-center justify-between">
                        <div>
                          <span className="text-xs font-mono font-bold text-[#FDFBF7] block">
                            Augmentation Over Automation
                          </span>
                          <span className="text-[10px] font-mono text-[#A89F91]">
                            The algorithm calculates the fare; the traveler weighs the consequence.
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E59A2F]/20 text-[#F5B041] border border-[#E59A2F]/40 font-bold shrink-0">
                          HUMAN IN COMMAND
                        </span>
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
