import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Gauge, CheckCircle2, AlertCircle, EyeOff } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide07_CalibratedTrust: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(61,126,166,0.12),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Calibrated <br />
              <span className="text-[#3D7EA6] italic">Trust.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Help users apply their own judgment.
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
                    className="text-base md:text-lg text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Under-trust creates frustration. Over-trust creates blind obedience. Calibrated trust keeps the human in charge.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Google Flights: They had the AI to auto-book, but recognized travel involves personal human choices.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Replace confusing 88% math with plain language clarity: "Prices are low. Today is a great day to book."
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Trust Spectrum & Plain Language Comparison */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="space-y-4">
              {/* Trust Spectrum Gauge */}
              <div className="p-3.5 rounded-lg bg-[#151210] border border-[#38302A] space-y-2">
                <div className="flex justify-between text-xs font-mono text-[#A89F91]">
                  <span>UNDER-TRUST</span>
                  <span className="text-[#34D399] font-bold">CALIBRATED</span>
                  <span>OVER-TRUST</span>
                </div>
                <div className="relative h-4 w-full bg-[#241F1B] rounded-full overflow-hidden border border-[#38302A] flex items-center">
                  <div className="w-1/3 h-full bg-[#C83E2D]/20 border-r border-[#38302A]" />
                  <div className="w-1/3 h-full bg-[#34D399]/25 border-r border-[#38302A]" />
                  <div className="w-1/3 h-full bg-[#C83E2D]/20" />

                  {/* Marker */}
                  <motion.div
                    animate={{
                      left: step === 0 ? '16%' : '50%',
                    }}
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                    className="absolute top-0 w-4 h-4 rounded-full bg-[#34D399] border-2 border-white shadow-lg -ml-2"
                  />
                </div>
              </div>

              {/* Real UI Contrast */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Autopilot Approach */}
                <div className="p-3 rounded-lg bg-[#1E1716] border border-[#3D2522] space-y-1">
                  <div className="text-[10px] font-mono text-[#FFA499] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-[#C83E2D]" />
                    <span>CONFUSING MATH</span>
                  </div>
                  <div className="font-mono text-sm text-[#FDFBF7] font-bold">
                    88.4% Confidence
                  </div>
                  <div className="text-[11px] text-[#A89F91]">
                    Raw algorithmic uncertainty
                  </div>
                </div>

                {/* Calibrated Trust UI */}
                <div className="p-3 rounded-lg bg-[#142319] border border-[#2E6F40] space-y-1">
                  <div className="text-[10px] font-mono text-[#4ADE80] flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
                    <span>PLAIN LANGUAGE</span>
                  </div>
                  <div className="font-mono text-sm text-[#34D399] font-bold">
                    "Prices are currently low."
                  </div>
                  <div className="text-[11px] text-[#CBE3CF]">
                    Empowers human judgment
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className="p-2.5 rounded bg-[#1C1815] border border-[#38302A] text-xs font-mono text-[#E59A2F] flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-[#E59A2F] shrink-0" />
                <span>When confidence is low, hide predictions to preserve human autonomy.</span>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
