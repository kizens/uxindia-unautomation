import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Gauge, Plane, AlertCircle, CheckCircle2, EyeOff, ShieldCheck } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide07_CalibratedTrust: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(61,126,166,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 text-[#6BA8D1] text-xs font-mono font-bold tracking-widest uppercase">
            ACT IV • THE PROOF
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 07 • 18:00 — 21:00 • GOOGLE FLIGHTS
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 3
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#3D7EA6] text-xs uppercase font-mono tracking-widest">
            <Gauge className="w-3.5 h-3.5" />
            HUMAN-CENTERED AI DESIGN
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            Calibrated <br />
            <span className="text-[#3D7EA6] italic">Trust.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Help users apply their own judgment, not surrender it.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#3D7EA6] text-sm text-[#D5C9B8]"
              >
                <div className="font-mono text-xs uppercase text-[#3D7EA6] mb-1 font-bold">
                  THE THREE TRUST REGIMES
                </div>
                Under-trust leads to user frustration and abandonment. Over-trust leads to users blindly walking off a cliff. Calibrated trust keeps the human in total, dignified control.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#16232D] border-l-4 border-[#3D7EA6] text-sm text-[#D2E4F2]"
              >
                <div className="font-mono text-xs uppercase text-[#6BA8D1] mb-1 font-bold flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5" />
                  GOOGLE FLIGHTS "FLIGHT INSIGHTS"
                </div>
                They had the AI and pricing data to auto-book flights for the user. But travel involves messy personal preferences (red-eyes, seat pitch). They chose augmentation over autopilot.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1A251E] border-l-4 border-[#2E6F40] text-sm text-[#D8EADB]"
              >
                <div className="font-mono text-xs uppercase text-[#4ADE80] mb-1 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  PLAIN LANGUAGE &gt; SCARY MATH
                </div>
                Instead of showing "88% statistical confidence", the UI translates math into human clarity: "Prices are currently low. Today is a great day to book." And if uncertain, hides predictions!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Trust Spectrum & Google Flights Comparison */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="PEOPLE + AI GUIDEBOOK CASE STUDY"
            label="Google Flights Architecture"
            variant="dark"
          >
            <div className="space-y-4">
              {/* Trust Spectrum Gauge */}
              <div className="p-3.5 rounded-lg bg-[#151210] border border-[#38302A] space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#A89F91]">
                  <span>UNDER-TRUST (IGNORING)</span>
                  <span className="text-[#34D399] font-bold">CALIBRATED TRUST</span>
                  <span>OVER-TRUST (BLIND FAITH)</span>
                </div>
                {/* Visual Slider Meter */}
                <div className="relative h-5 w-full bg-[#241F1B] rounded-full overflow-hidden border border-[#38302A] flex items-center">
                  <div className="w-1/3 h-full bg-[#C83E2D]/20 border-r border-[#38302A]" />
                  <div className="w-1/3 h-full bg-[#34D399]/25 border-r border-[#38302A]" />
                  <div className="w-1/3 h-full bg-[#C83E2D]/20" />

                  {/* Indicator Marker */}
                  <motion.div
                    animate={{
                      left: step === 0 ? '16%' : step === 1 ? '50%' : '50%',
                    }}
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                    className="absolute top-0.5 w-4 h-4 rounded-full bg-[#34D399] border-2 border-white shadow-lg -ml-2"
                  />
                </div>
              </div>

              {/* Real UI Contrast: Raw Confusing Score vs Plain Language Clarity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Bad / Autopilot Design */}
                <motion.div
                  animate={{ opacity: step === 2 ? 0.5 : 0.8 }}
                  className="p-3 rounded-lg bg-[#1F1716] border border-[#3D2522] space-y-1.5"
                >
                  <div className="text-[10px] font-mono text-[#FFA499] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#C83E2D]" />
                    <span>THE ROBOT'S APPROACH</span>
                  </div>
                  <div className="font-mono text-sm text-[#FDFBF7] font-bold">
                    88.4% Probable Rise
                  </div>
                  <div className="text-[11px] text-[#A89F91]">
                    Confusing probability math that triggers anxiety and doubt.
                  </div>
                </motion.div>

                {/* Calibrated Trust Design */}
                <motion.div
                  animate={{
                    borderColor: step === 2 ? '#34D399' : '#38302A',
                    backgroundColor: step === 2 ? '#15241B' : '#1C1815',
                    scale: step === 2 ? 1.02 : 1,
                  }}
                  className="p-3 rounded-lg border-2 space-y-1.5 transition-all"
                >
                  <div className="text-[10px] font-mono text-[#4ADE80] flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
                    <span>CALIBRATED TRUST UI</span>
                  </div>
                  <div className="font-mono text-sm text-[#34D399] font-bold">
                    "Prices are currently low."
                  </div>
                  <div className="text-[11px] text-[#D0C5B4]">
                    "Today is a great day to book. Prediction hidden if uncertain."
                  </div>
                </motion.div>
              </div>

              {/* Bottom Quote Box */}
              <div className="p-2.5 rounded bg-[#1C1815] border border-[#38302A] text-xs font-mono text-[#E59A2F] flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-[#E59A2F] shrink-0" />
                <span>When confidence is medium, hide the prediction to protect user autonomy.</span>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE PRINCIPLE: <span className="text-[#FDFBF7]">Translate complex engineering into human clarity. Keep the human in control.</span>
        </div>
        <div className="text-[#3D7EA6] font-mono">
          [171, 187, 207, 216]
        </div>
      </div>
    </div>
  );
};
