import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Compass, Sparkles, CheckCircle2, RefreshCw, Heart } from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide10_Roadmap: React.FC<SlideProps> = ({ step }) => {
  // Fire celebratory subtle confetti on the final beat (step 3)
  useEffect(() => {
    if (step === 3) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#C83E2D', '#E59A2F', '#34D399', '#3D7EA6', '#FDFBF7']
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [step]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,62,45,0.15),transparent_75%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#C83E2D]/20 border border-[#C83E2D]/40 text-[#FFA499] text-xs font-mono font-bold tracking-widest uppercase">
            ACT VI • THE ROADMAP
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 10 • 27:00 — 30:00 • RECLAIMING THE WHEEL
          </span>
        </div>
        <div className="text-xs font-mono text-[#E59A2F]">
          STEP {step + 1} OF 4
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Bold Typographic Opening */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 text-[#E59A2F] text-xs uppercase font-mono tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            PRACTICING UN-AUTOMATED DESIGN
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            Reclaiming <br />
            <span className="text-[#C83E2D] italic">the Wheel.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            Three non-negotiable rules for tomorrow morning.
          </p>

          <AnimatePresence mode="wait">
            {step < 3 ? (
              <motion.div
                key={`pillar-${step}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#E59A2F] text-sm text-[#D5C9B8]"
              >
                <div className="font-mono text-xs uppercase text-[#E59A2F] mb-1 font-bold">
                  RULE #{step + 1}
                </div>
                {step === 0 && "Fluency is the weakest predictor of creative success. AI will always produce more screens faster. Compete on curation and human meaning."}
                {step === 1 && "Do not treat AI as a compliant intern. Use Microsoft Research's approach: make AI challenge your premises, attack your fallacies, and argue against you."}
                {step === 2 && "Start validating more before you feel confident. Do not let autopilot take over. Keep your critical thinking active on small daily messy tasks."}
              </motion.div>
            ) : (
              <motion.div
                key="crescendo"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg bg-[#261513] border-l-4 border-[#C83E2D] text-sm text-[#F7DCD9] shadow-xl"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C83E2D]" />
                  THE ULTIMATE KEYNOTE QUESTION
                </div>
                "What would you rather have? A tool that thinks for you, or a tool that makes you think?"
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Three Large Number Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="THE ROADMAP"
            label="Three Pillars for Designers"
            variant="dark"
          >
            <div className="space-y-3">
              {/* Pillar 1 */}
              <motion.div
                animate={{
                  borderColor: step === 0 ? '#E59A2F' : '#38302A',
                  backgroundColor: step === 0 ? '#261E16' : '#181412',
                  scale: step === 0 ? 1.02 : 1,
                  opacity: step >= 0 ? 1 : 0.6,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E59A2F]/20 border border-[#E59A2F]/40 flex items-center justify-center text-2xl font-editorial font-bold text-[#F5B041]">
                  1
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Stop Competing on Speed
                  </h4>
                  <p className="text-xs text-[#D0C5B4] mt-0.5">
                    You will lose. Compete on <span className="text-[#F5B041] font-bold">Meaning</span> and taste.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                animate={{
                  borderColor: step === 1 ? '#3D7EA6' : '#38302A',
                  backgroundColor: step === 1 ? '#182430' : '#181412',
                  scale: step === 1 ? 1.02 : 1,
                  opacity: step >= 1 ? 1 : 0.6,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3D7EA6]/20 border border-[#3D7EA6]/40 flex items-center justify-center text-2xl font-editorial font-bold text-[#6BA8D1]">
                  2
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Practice 'Productive Resistance'
                  </h4>
                  <p className="text-xs text-[#D0C5B4] mt-0.5">
                    Make AI <span className="text-[#6BA8D1] font-bold">challenge your thinking</span>, not replace it.
                  </p>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                animate={{
                  borderColor: step === 2 || step === 3 ? '#C83E2D' : '#38302A',
                  backgroundColor: step === 2 || step === 3 ? '#251513' : '#181412',
                  scale: step === 2 || step === 3 ? 1.02 : 1,
                  opacity: step >= 2 ? 1 : 0.6,
                }}
                className="p-3.5 rounded-lg border-2 flex items-center gap-4 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C83E2D]/20 border border-[#C83E2D]/40 flex items-center justify-center text-2xl font-editorial font-bold text-[#FFA499]">
                  3
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-[#FDFBF7] uppercase tracking-wide">
                    Validate Before Confident
                  </h4>
                  <p className="text-xs text-[#D0C5B4] mt-0.5">
                    Keep your <span className="text-[#FFA499] font-bold">brain active</span>. Never rent out your judgment.
                  </p>
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          CLOSING CALL: <span className="text-[#FDFBF7]">"A tool that thinks for you, or a tool that makes you think?"</span>
        </div>
        <div className="text-[#FFA499] font-bold flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 text-[#C83E2D] fill-current" />
          <span>THANK YOU, UX INDIA 2026</span>
        </div>
      </div>
    </div>
  );
};
