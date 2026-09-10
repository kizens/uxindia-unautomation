import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sun } from 'lucide-react';
import barberDuskImg from '../assets/indian_street_barber_dusk.png';

interface SlideProps {
  step: number;
}

export const Slide08_HumiliatingMirror: React.FC<SlideProps> = ({ step }) => {
  // Allow manual interactive cycling or sync with presentation step
  const [manualStep, setManualStep] = useState<number | null>(null);
  const activeStep = manualStep !== null ? manualStep : Math.min(step, 2);

  // Sync with presentation step changes from HUD or presenter clicker
  useEffect(() => {
    setManualStep(null);
  }, [step]);

  // Click on the mirror visual to cycle to the next reflection
  const handleCycle = () => {
    setManualStep((prev) => {
      const current = prev !== null ? prev : Math.min(step, 2);
      return (current + 1) % 3;
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(229,154,47,0.12),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Keynote Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#E59A2F] mb-3 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              THE PHILOSOPHICAL IRONY
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              The Ultimate <br />
              <span className="text-[#E59A2F] italic">Ironic Mirror.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              AI came to remind us how amazing it is to think.
            </p>

            {/* Stepped Single-Beat Message */}
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="beat0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Humanity spent 50 years and $100B burning gigawatts in desert server farms...
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="beat1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    ...just to look at a chatbot and realize: "Wait, my brain is actually amazing!"
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="beat2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    No machine knows what a spring walk in the park feels like, or what it means to feel empathy.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Mirror Visual (Single clean container) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div 
            onClick={handleCycle}
            className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#38302A] bg-[#0E0C0A] flex flex-col justify-center items-center p-6 sm:p-8 text-center cursor-pointer group select-none transition-all duration-500 hover:border-[#E59A2F]/60 shadow-2xl"
          >
            {/* Subtle Glass Sheen Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.05] pointer-events-none z-20" />

            <AnimatePresence mode="wait">
              
              {/* REFLECTION 0: The $100B Silicon Compute */}
              {activeStep === 0 && (
                <motion.div
                  key="reflection-0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full flex flex-col justify-between py-2"
                >
                  {/* Sub-badge */}
                  <div className="inline-flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#6BA8D1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6BA8D1] animate-ping" />
                    <span>48,000 Desert GPUs • 42 MegaWatts</span>
                  </div>

                  {/* Main Message */}
                  <div className="space-y-2 my-auto">
                    <h3 className="text-xl sm:text-2xl font-editorial font-bold text-[#FDFBF7] leading-snug">
                      Searching 1.8 Trillion Weights <br />
                      <span className="text-[#6BA8D1] italic">for the formula of creativity.</span>
                    </h3>
                    <p className="text-xs font-mono text-[#8E8375] max-w-md mx-auto">
                      Simulated the internet. Reached the statistical middle.
                    </p>
                  </div>

                  {/* Bottom Status */}
                  <div className="text-[10px] font-mono text-[#FFA499] bg-[#C83E2D]/15 border border-[#C83E2D]/30 py-1 px-3 rounded-full mx-auto">
                    Lived Experience: 0.00%
                  </div>
                </motion.div>
              )}

              {/* REFLECTION 1: The Epiphany (Breaking News) */}
              {activeStep === 1 && (
                <motion.div
                  key="reflection-1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-full h-full flex flex-col justify-between py-2"
                >
                  {/* Sub-badge */}
                  <div className="inline-flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#E59A2F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E59A2F] animate-ping" />
                    <span>Official 50-Year Research Finding</span>
                  </div>

                  {/* Hero Epiphany Headline */}
                  <div className="my-auto space-y-1">
                    <div className="text-xs font-mono uppercase font-bold text-[#C83E2D] tracking-widest">
                      BREAKING NEWS:
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#FDFBF7] tracking-tight leading-none">
                      "THINKING IS <br />
                      <span className="text-[#E59A2F] underline decoration-wavy decoration-[#C83E2D]">
                        AWESOME!"
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-[#D0C5B4] pt-1">
                      After $100B, machines confirm: your mind is the miracle.
                    </p>
                  </div>

                  {/* Smug Confirmation */}
                  <div className="text-[10px] font-mono text-[#34D399] bg-[#34D399]/15 border border-[#34D399]/30 py-1 px-3 rounded-full mx-auto font-bold">
                    😏 The Human Superpower Rediscovered
                  </div>
                </motion.div>
              )}

              {/* REFLECTION 2: The Unmappable Soul */}
              {activeStep === 2 && (
                <motion.div
                  key="reflection-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-end p-6 sm:p-8 text-left"
                >
                  {/* The Lived Street Image Canvas */}
                  <img
                    src={barberDuskImg}
                    alt="Indian Street Barber at Dusk"
                    className="absolute inset-0 w-full h-full object-cover filter saturate-110 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/40 to-black/20" />

                  {/* Overlaid Minimal Insight */}
                  <div className="relative z-10 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#E59A2F] uppercase font-bold tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Sun className="w-3.5 h-3.5" />
                        Lived Human Experience
                      </span>
                      <span className="text-[#34D399] bg-black/60 px-2.5 py-0.5 rounded border border-[#34D399]/40">
                        UNMAPPABLE
                      </span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-editorial font-bold text-[#FDFBF7]">
                      Craft, Empathy & Rhythm.
                    </h4>

                    <p className="text-xs sm:text-sm font-mono text-[#D5C9B8] leading-relaxed max-w-lg">
                      30 years of scissor muscle memory, chai conversations, and dusk temple bells. No model can compute lived soul.
                    </p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
