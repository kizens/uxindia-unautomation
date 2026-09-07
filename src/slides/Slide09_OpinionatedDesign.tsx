import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { CreditCard, Code, Palette, Quote } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide09_OpinionatedDesign: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(46,111,64,0.15),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[#4ADE80] text-xs uppercase font-mono tracking-widest font-semibold">
              <Palette className="w-3.5 h-3.5" />
              THE DIFFERENTIATOR
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Opinionated <br />
              <span className="text-[#4ADE80] italic">Design.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Taste is your only true moat.
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
                    Standard UX dogma said: safe flat plastic, sterile forms, zero risk.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Cash App's Tortoise card & Claude Artifacts: Bold human taste defying standard rules.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    "You are being paid for the confidence you have in your taste." — Rick Rubin
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Two Iconic Outliers */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Claude Artifacts */}
              <div className="p-4 rounded-lg bg-[#161B22] border-2 border-[#3D7EA6]/50 space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#293545] pb-2 text-xs font-mono">
                  <span className="text-[#6BA8D1] font-bold flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" /> CLAUDE ARTIFACTS
                  </span>
                  <span className="text-[#A89F91]">ANTHROPIC</span>
                </div>
                <p className="text-xs text-[#FDFBF7] font-mono leading-relaxed">
                  Bypassed standard 5-step PM checklist. Designer Michael trusted intuition on a raw prototype.
                </p>
                <div className="text-[11px] font-mono text-[#6BA8D1] font-bold">
                  → Intuition beats rigid checklists
                </div>
              </div>

              {/* Cash App Tortoise Card */}
              <div className="p-4 rounded-lg bg-[#152219] border-2 border-[#2E6F40]/50 space-y-2.5">
                <div className="flex items-center justify-between border-b border-[#253D2C] pb-2 text-xs font-mono">
                  <span className="text-[#4ADE80] font-bold flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" /> CASH APP "TORTOISE"
                  </span>
                  <span className="text-[#A89F91]">CAM WORBOYS</span>
                </div>
                <div className="h-12 rounded bg-gradient-to-r from-[#1E3A2B] via-[#2E6F40] to-[#E59A2F]/30 p-2 flex items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white">
                    Tactile Shell Expression
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#4ADE80] font-bold">
                  → Personal craft & character
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
