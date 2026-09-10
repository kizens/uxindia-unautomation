import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RetroIllustrationFrame } from "../components/RetroIllustrationFrame";
import { Plane, CheckCircle2, AlertCircle, Sparkles, Clock, ArrowRight } from "lucide-react";

interface SlideProps {
  step: number;
}

// Cubic Bezier evaluation helper for exact motion along the flight path
// Path: M 110 150 C 180 65, 260 55, 340 85 C 410 115, 490 125, 570 75
const getFlightState = (p: number) => {
  const clamped = Math.max(0, Math.min(1, p));
  if (clamped <= 0.5) {
    // Segment 1: HYD (110, 150) -> DEL (340, 85)
    const t = clamped / 0.5;
    const x = (1 - t) ** 3 * 110 + 3 * (1 - t) ** 2 * t * 180 + 3 * (1 - t) * t ** 2 * 260 + t ** 3 * 340;
    const y = (1 - t) ** 3 * 150 + 3 * (1 - t) ** 2 * t * 65 + 3 * (1 - t) * t ** 2 * 55 + t ** 3 * 85;
    const dx = 3 * (1 - t) ** 2 * (180 - 110) + 6 * (1 - t) * t * (260 - 180) + 3 * t ** 2 * (340 - 260);
    const dy = 3 * (1 - t) ** 2 * (65 - 150) + 6 * (1 - t) * t * (55 - 65) + 3 * t ** 2 * (85 - 55);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return { x, y, angle };
  } else {
    // Segment 2: DEL (340, 85) -> LEH (570, 75)
    const t = (clamped - 0.5) / 0.5;
    const x = (1 - t) ** 3 * 340 + 3 * (1 - t) ** 2 * t * 410 + 3 * (1 - t) * t ** 2 * 490 + t ** 3 * 570;
    const y = (1 - t) ** 3 * 85 + 3 * (1 - t) ** 2 * t * 115 + 3 * (1 - t) * t ** 2 * 125 + t ** 3 * 75;
    const dx = 3 * (1 - t) ** 2 * (410 - 340) + 6 * (1 - t) * t * (490 - 410) + 3 * t ** 2 * (570 - 490);
    const dy = 3 * (1 - t) ** 2 * (115 - 85) + 6 * (1 - t) * t * (125 - 115) + 3 * t ** 2 * (75 - 125);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return { x, y, angle };
  }
};

export const Slide07_CalibratedTrust: React.FC<SlideProps> = ({ step }) => {
  // Allow interactive pin clicking or synchronize with clicker step
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Active journey stage is controlled by presentation step or manual click
  const activeStage = selectedStep !== null ? selectedStep : Math.min(step, 2);

  // Animated flight progress along the exact dotted curve
  const [flightProgress, setFlightProgress] = useState(() => {
    return activeStage === 0 ? 0 : activeStage === 1 ? 0.5 : 1.0;
  });

  useEffect(() => {
    const target = activeStage === 0 ? 0 : activeStage === 1 ? 0.5 : 1.0;
    const startVal = flightProgress;
    const startTime = performance.now();
    const duration = 850;

    let animFrame: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progressRatio = Math.min(1, elapsed / duration);
      // Smooth easeInOutCubic
      const ease =
        progressRatio < 0.5
          ? 4 * progressRatio * progressRatio * progressRatio
          : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2;

      setFlightProgress(startVal + (target - startVal) * ease);

      if (progressRatio < 1) {
        animFrame = requestAnimationFrame(tick);
      }
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [activeStage]);

  const currentPlane = getFlightState(flightProgress);

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

            {/* Stepped Single-Beat Message (Indian Domestic Travel Context) */}
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
                    Intent. Hyderabad to Leh. The machine aggregates fare matrices in milliseconds, but cannot understand human stamina or altitude prep.
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
                    Prediction. Delhi Layover. Replace confusing 88% math with plain language clarity: "Prices are currently low. Today is a great day to book."
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
                    Choice. AI recommends a 2 AM Delhi connection to save ₹2,800, but hotel check-in is impossible. The human weighs the true cost.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Enlarged Interactive Flight Map & Details Frame */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* 1. Enlarged Interactive Flight Route Map (Reclaiming freed vertical space) */}
              <div className="relative w-full h-[250px] rounded-xl bg-[#14100D] border border-[#352B22] overflow-hidden flex flex-col justify-center p-2">
                {/* Understated Map Silhouette Background */}
                <img
                  src="/assets/world_map.svg"
                  alt="Map Silhouette"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none select-none"
                />

                {/* SVG Flight Path & Waypoints Layer */}
                <div className="relative z-10 w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 680 220" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="flightPathGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3D7EA6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#F5B041" stopOpacity="0.9" />
                      </linearGradient>

                      <filter id="glowPin" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Dotted Flight Bezier Path (HYD -> DEL Layover -> LEH) */}
                    <path
                      d="M 110 150 C 180 65, 260 55, 340 85 C 410 115, 490 125, 570 75"
                      fill="none"
                      stroke="#2E241C"
                      strokeWidth="3"
                    />
                    <path
                      d="M 110 150 C 180 65, 260 55, 340 85 C 410 115, 490 125, 570 75"
                      fill="none"
                      stroke="url(#flightPathGrad)"
                      strokeWidth="2.5"
                      strokeDasharray="6 5"
                    />

                    {/* STOP 1 PIN: HYD / Search & Intent (110, 150) */}
                    <g
                      onClick={() => setSelectedStep(0)}
                      className="cursor-pointer group"
                      transform="translate(110, 150)"
                    >
                      {activeStage === 0 && (
                        <circle r="16" fill="none" stroke="#6BA8D1" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="9"
                        fill={activeStage === 0 ? "#3D7EA6" : "#1F1A16"}
                        stroke={activeStage === 0 ? "#6BA8D1" : "#45382B"}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3.5" fill={activeStage === 0 ? "#FFFFFF" : "#8E8375"} />
                      <text
                        x="0"
                        y="24"
                        textAnchor="middle"
                        className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 0 ? "fill-[#6BA8D1]" : "fill-[#8E8375]"
                        }`}
                      >
                        HYD Intent
                      </text>
                    </g>

                    {/* STOP 2 PIN: DEL / Layover & Price Prediction (340, 85) */}
                    <g
                      onClick={() => setSelectedStep(1)}
                      className="cursor-pointer group"
                      transform="translate(340, 85)"
                    >
                      {activeStage === 1 && (
                        <circle r="16" fill="none" stroke="#4ADE80" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="9"
                        fill={activeStage === 1 ? "#2E6F40" : "#1F1A16"}
                        stroke={activeStage === 1 ? "#4ADE80" : "#45382B"}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3.5" fill={activeStage === 1 ? "#FFFFFF" : "#8E8375"} />
                      <text
                        x="0"
                        y="24"
                        textAnchor="middle"
                        className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 1 ? "fill-[#4ADE80]" : "fill-[#8E8375]"
                        }`}
                      >
                        DEL Layover
                      </text>
                    </g>

                    {/* STOP 3 PIN: LEH / Destination & Human Decision (570, 75) */}
                    <g
                      onClick={() => setSelectedStep(2)}
                      className="cursor-pointer group"
                      transform="translate(570, 75)"
                    >
                      {activeStage === 2 && (
                        <circle r="16" fill="none" stroke="#F5B041" strokeWidth="1.5" className="animate-ping opacity-75" />
                      )}
                      <circle
                        r="9"
                        fill={activeStage === 2 ? "#E59A2F" : "#1F1A16"}
                        stroke={activeStage === 2 ? "#F5B041" : "#45382B"}
                        strokeWidth="2"
                        filter="url(#glowPin)"
                      />
                      <circle r="3.5" fill={activeStage === 2 ? "#FFFFFF" : "#8E8375"} />
                      <text
                        x="0"
                        y="24"
                        textAnchor="middle"
                        className={`text-[10px] font-mono uppercase font-bold tracking-wider ${
                          activeStage === 2 ? "fill-[#F5B041]" : "fill-[#8E8375]"
                        }`}
                      >
                        LEH Decision
                      </text>
                    </g>

                    {/* Airplane Gliding Exactly along Dotted Path & Banking with Tangent Curve */}
                    <g transform={`translate(${currentPlane.x}, ${currentPlane.y}) rotate(${currentPlane.angle + 90})`}>
                      <g transform="translate(-11, -11)">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                            fill="#FDFBF7"
                            stroke="#12100E"
                            strokeWidth="0.8"
                          />
                        </svg>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

              {/* 2. Revealed Details Card for the Active Stop (Clean, uncluttered, no footer boxes) */}
              <div className="min-h-[195px] flex items-center">
                <AnimatePresence mode="wait">
                  {/* STAGE 0: SEARCH & INTENT (HYD -> LEH) */}
                  {activeStage === 0 && (
                    <motion.div
                      key="journey-stage-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Search Query Header (Subtitle removed) */}
                      <div className="p-3 rounded-xl bg-[#14181E] border border-[#2B3B4C] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 flex items-center justify-center text-[#6BA8D1]">
                            <Plane className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-mono font-bold text-[#FDFBF7] flex items-center gap-1.5">
                              <span>Hyderabad (HYD)</span>
                              <ArrowRight className="w-3 h-3 text-[#6BA8D1]" />
                              <span>Leh Ladakh (IXL)</span>
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
                            Analyzes historical fare trends and connecting flights across airlines in milliseconds.
                          </p>
                        </div>

                        {/* Human Reality */}
                        <div className="p-3 rounded-xl bg-[#1D1711] border border-[#3D2D1F] space-y-1.5">
                          <div className="text-[10px] font-mono text-[#F5B041] font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>👤 Human Context</span>
                          </div>
                          <p className="text-xs font-mono text-[#E0CFBD]">
                            High-altitude mountain trip. Acclimatization and a dependable schedule are non-negotiable.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STAGE 1: PRICE INSIGHT & PREDICTION (DEL LAYOVER in Rupees) */}
                  {activeStage === 1 && (
                    <motion.div
                      key="journey-stage-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Google Flights Price Insights UI in Rupees */}
                      <div className="p-3 rounded-xl bg-[#131E18] border border-[#234A31] space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] animate-pulse" />
                            <span className="text-xs font-mono font-bold text-[#FDFBF7]">
                              Prices are currently low for your dates
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#4ADE80] font-bold">
                            ₹8,400 typical
                          </span>
                        </div>

                        {/* Visual Spectrum Bar in Rupees */}
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
                            <span>₹7,200</span>
                            <span className="text-[#4ADE80] font-bold">● ₹8,400 (Today)</span>
                            <span>₹11,500</span>
                            <span>₹16,000+</span>
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
                    </motion.div>
                  )}

                  {/* STAGE 2: THE HUMAN DECISION (DELHI HOTEL CHECK-IN CRISIS in Rupees) */}
                  {activeStage === 2 && (
                    <motion.div
                      key="journey-stage-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full space-y-3"
                    >
                      {/* Trade-off Comparison in Rupees */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {/* Option A: Pure Algorithmic Optima */}
                        <div className="p-3 rounded-xl bg-[#1C1715] border border-[#3D2B24] space-y-2">
                          <div className="flex items-center justify-between border-b border-[#2E221C] pb-1.5">
                            <span className="text-[10px] font-mono text-[#FFA499] uppercase font-bold">
                              Cheapest Fare
                            </span>
                            <span className="text-xs font-mono font-bold text-[#FDFBF7]">₹6,800</span>
                          </div>
                          <div className="text-xs font-mono text-[#C0B4A5] space-y-1">
                            <div className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-[#8E8375]" />
                              <span>14h total • 2:00 AM Layover in Delhi</span>
                            </div>
                            <div className="text-[10px] text-[#8E8375] italic">
                              AI: "Lowest fare. Saves ₹2,800."
                            </div>
                          </div>
                          <div className="p-1.5 rounded bg-[#15110E] border border-[#2B1F17] text-[9px] font-mono text-[#A89F91]">
                            Human reality: "A 2:00 AM Delhi layover makes hotel check-in impossible and ruins day 1 in Leh."
                          </div>
                        </div>

                        {/* Option B: Human Calibrated Choice */}
                        <div className="p-3 rounded-xl bg-[#142319] border-2 border-[#4ADE80] space-y-2 shadow-[0_0_16px_rgba(74,222,128,0.12)]">
                          <div className="flex items-center justify-between border-b border-[#24452C] pb-1.5">
                            <span className="text-[10px] font-mono text-[#4ADE80] uppercase font-bold flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#4ADE80]" />
                              Calibrated Choice
                            </span>
                            <span className="text-xs font-mono font-bold text-[#4ADE80]">₹9,600</span>
                          </div>
                          <div className="text-xs font-mono text-[#D2E4D5] space-y-1">
                            <div className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-[#4ADE80]" />
                              <span>Morning departure • Smooth 1h 45m connection</span>
                            </div>
                            <div className="text-[10px] text-[#A2C7A8] italic">
                              Traveler: "Worth ₹2,800 to avoid the midnight Delhi hotel crisis."
                            </div>
                          </div>
                          <div className="p-1.5 rounded bg-[#0D1B13] border border-[#1F3E28] text-[9px] font-mono text-[#4ADE80]">
                            Outcome: Human judgment makes the trade-off. AI assists.
                          </div>
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
