import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Check, X, ShieldAlert, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide06_AutomateVsDrive: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(200,62,45,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#C83E2D]/20 border border-[#C83E2D]/40 text-[#FFA499] text-xs font-mono font-bold tracking-widest uppercase">
            ACT III • THE FRONTIER
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 06 • 15:00 — 18:00 • PRACTICAL PLAYBOOK
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
          <div className="inline-flex items-center gap-2 mb-2 text-[#C83E2D] text-xs uppercase font-mono tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5 text-[#C83E2D]" />
            THE RED LINE OF DESIGN
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            Automating the outcome <br />
            <span className="text-[#C83E2D] italic">is toxic.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Driving the outcome is design un-automated.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#18241C] border-l-4 border-[#2E6F40] text-sm text-[#D8EADB]"
              >
                <div className="font-mono text-xs uppercase text-[#4ADE80] mb-1 font-bold">
                  WHAT SHOULD BE AUTOMATED
                </div>
                Low-leverage friction: design token cleanups, searching 20 years of dusty research PDFs, boilerplate components, accessibility color-contrast audits.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#271513] border-l-4 border-[#C83E2D] text-sm text-[#F7DCD9]"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold">
                  THE FATAL ERROR
                </div>
                If you let an LLM generate wireframes and hand them to engineering, you are no longer designing—you are merely hosting a robot's opinion.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#211A15] border-l-4 border-[#E59A2F] text-sm text-[#ECE0CF]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold">
                  STEPPING OUT "ONE CLICK"
                </div>
                Instead of asking: "How do we make this button pretty?" ask: "Why does this business feature exist in the first place? What is the human need?"
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Comparison Matrix */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="TACTICAL MATRIX"
            label="What to Automate vs What to Drive"
            variant="dark"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Column 1: Should Automate */}
              <motion.div
                animate={{
                  borderColor: step === 0 ? '#2E6F40' : '#38302A',
                  opacity: step === 1 ? 0.65 : 1,
                }}
                className="p-4 rounded-lg bg-[#161D18] border-2 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#4ADE80] font-bold border-b border-[#2A3B2E] pb-2">
                  <Check className="w-4 h-4 text-[#4ADE80]" />
                  <span>SHOULD AUTOMATE (Execution)</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#BAC8BD]">
                  <div className="p-2 rounded bg-[#1C261F] flex items-center gap-2">
                    <span className="text-[#4ADE80]">✓</span>
                    <span>Tidying design systems & tokens</span>
                  </div>
                  <div className="p-2 rounded bg-[#1C261F] flex items-center gap-2">
                    <span className="text-[#4ADE80]">✓</span>
                    <span>Excavating 20-yr dusty research data</span>
                  </div>
                  <div className="p-2 rounded bg-[#1C261F] flex items-center gap-2">
                    <span className="text-[#4ADE80]">✓</span>
                    <span>Boilerplate code & mock data sets</span>
                  </div>
                  <div className="p-2 rounded bg-[#1C261F] flex items-center gap-2">
                    <span className="text-[#4ADE80]">✓</span>
                    <span>Accessibility & linting compliance</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#7D9E84] pt-1 italic">
                  → High-friction, zero-empathy labor
                </div>
              </motion.div>

              {/* Column 2: Must Drive */}
              <motion.div
                animate={{
                  borderColor: step >= 1 ? '#C83E2D' : '#38302A',
                  backgroundColor: step >= 1 ? '#261614' : '#1C1815',
                }}
                className="p-4 rounded-lg border-2 space-y-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFA499] font-bold border-b border-[#3D2522] pb-2">
                  <X className="w-4 h-4 text-[#C83E2D]" />
                  <span>MUST DRIVE (Discernment)</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#E8D4D2]">
                  <div className="p-2 rounded bg-[#2F1C19] flex items-center gap-2">
                    <span className="text-[#C83E2D]">✕</span>
                    <span>The Final Outcome & Product Soul</span>
                  </div>
                  <div className="p-2 rounded bg-[#2F1C19] flex items-center gap-2">
                    <span className="text-[#C83E2D]">✕</span>
                    <span>Root Problem & Human Framing</span>
                  </div>
                  <div className="p-2 rounded bg-[#2F1C19] flex items-center gap-2">
                    <span className="text-[#C83E2D]">✕</span>
                    <span>Deep Empathy for Lived Experience</span>
                  </div>
                  <div className="p-2 rounded bg-[#2F1C19] flex items-center gap-2">
                    <span className="text-[#C83E2D]">✕</span>
                    <span>Opinionated Taste & Strategic Stance</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#D48980] pt-1 italic">
                  → The un-automatable human advantage
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE PROVOCATIVE PARTNER: <span className="text-[#FDFBF7]">Treat AI as an intellectual sparring partner, not an executor.</span>
        </div>
        <div className="text-[#C83E2D] font-mono">
          [16, 98, 157]
        </div>
      </div>
    </div>
  );
};
