import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { CreditCard, Code, Sparkles, Quote, ShieldCheck, Palette } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide09_OpinionatedDesign: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(46,111,64,0.15),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#2E6F40]/20 border border-[#2E6F40]/40 text-[#4ADE80] text-xs font-mono font-bold tracking-widest uppercase">
            ACT V • THE PROOF
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 09 • 24:00 — 27:00 • OPINIONATED OUTLIERS
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 3
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#4ADE80] text-xs uppercase font-mono tracking-widest">
            <Palette className="w-3.5 h-3.5" />
            UN-AUTOMATED EXCELLENCE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            Opinionated <br />
            <span className="text-[#4ADE80] italic">Design.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Taste is your only true differentiator.
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
                  THE CONVENTIONAL TRAP
                </div>
                Standard UX dogma says maximize clicks-to-speed, use anonymous flat plastic, and keep every financial screen sterile and safe.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#16231A] border-l-4 border-[#2E6F40] text-sm text-[#D3E8D7]"
              >
                <div className="font-mono text-xs uppercase text-[#4ADE80] mb-1 font-bold flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  THE REAL OUTLIERS
                </div>
                Cash App crafted the tactile 'Tortoise' card and bold green voice. Anthropic's designer Michael bypassed standard checklists to ship Claude Artifacts.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#271E15] border-l-4 border-[#E59A2F] text-sm text-[#F7E7D0]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5" />
                  RICK RUBIN'S LAW OF TASTE
                </div>
                "You are being paid for the confidence you have in your taste." When anyone can prompt a polished screen in 10s, taste is your only strategic moat.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Case Studies Showcase */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="CASE STUDIES"
            label="Real-World Un-automated Differentiators"
            variant="dark"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Outlier 1: Claude Artifacts */}
              <motion.div
                animate={{
                  borderColor: step >= 1 ? '#3D7EA6' : '#38302A',
                  scale: step === 1 ? 1.02 : 1,
                }}
                className="p-4 rounded-lg bg-[#161B22] border-2 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#293545] pb-2">
                  <span className="font-mono text-xs text-[#6BA8D1] font-bold flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    CLAUDE ARTIFACTS
                  </span>
                  <span className="text-[10px] font-mono text-[#A89F91]">ANTHROPIC</span>
                </div>
                <div className="p-3 rounded bg-[#0D1117] border border-[#21262D] font-mono text-xs space-y-2">
                  <div className="text-[#A89F91] text-[10px]">
                    // Bypassed standard 5-step PM checklist
                  </div>
                  <div className="text-[#FDFBF7]">
                    Raw prototype + Designer Michael's taste = transformed AI interaction.
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#6BA8D1]">
                  • Defied rigid rules <br />
                  • Trusted designer intuition
                </div>
              </motion.div>

              {/* Outlier 2: Cash App 'Tortoise' Card */}
              <motion.div
                animate={{
                  borderColor: step >= 1 ? '#2E6F40' : '#38302A',
                  scale: step === 1 ? 1.02 : 1,
                }}
                className="p-4 rounded-lg bg-[#152219] border-2 space-y-3"
              >
                <div className="flex items-center justify-between border-b border-[#253D2C] pb-2">
                  <span className="font-mono text-xs text-[#4ADE80] font-bold flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" />
                    CASH APP "TORTOISE"
                  </span>
                  <span className="text-[10px] font-mono text-[#A89F91]">CAM WORBOYS</span>
                </div>
                <div className="p-3 rounded bg-[#101A13] border border-[#1E3324] space-y-2">
                  <div className="h-14 rounded-lg bg-gradient-to-r from-[#1E3A2B] via-[#2E6F40] to-[#E59A2F]/40 border border-[#34D399]/40 p-2 flex flex-col justify-between">
                    <div className="w-4 h-3 rounded bg-[#FDFBF7]/40" />
                    <span className="font-mono text-[9px] text-[#FDFBF7] tracking-widest uppercase">
                      Tactile Tortoise Shell
                    </span>
                  </div>
                  <div className="text-[11px] text-[#C0DAC5]">
                    Intentional extra clicks for emotional resonance and delight.
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#4ADE80]">
                  • Personal self-expression <br />
                  • Unmistakable cultural identity
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE MAXIM: <span className="text-[#FDFBF7]">"You are being paid for the confidence you have in your taste." — Rick Rubin</span>
        </div>
        <div className="text-[#4ADE80] font-mono font-bold">
          [149, 153, 155]
        </div>
      </div>
    </div>
  );
};
