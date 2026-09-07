import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Mail, Sparkles, ArrowRight, Terminal, HeartHandshake } from 'lucide-react';
import barberDayImg from '../assets/indian_street_barber_day.png';

interface SlideProps {
  step: number;
}

export const Slide01_Confession: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      {/* Subtle ambient warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,62,45,0.14),transparent)] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E59A2F]/5 blur-3xl pointer-events-none" />

      {/* Main Content Grid (Full Height, Generous Negative Space) */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bold Headline & Minimal Stepped Beat */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[#E59A2F] text-xs uppercase font-mono tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E59A2F] animate-ping" />
              AN EMBARRASSING CONFESSION
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.02] mb-4">
              Design <br />
              <span className="text-[#C83E2D] italic">Un-automated.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light tracking-wide mb-6">
              By a human. Powered by an idea.
            </p>

            {/* Stepped Single-Sentence Beats (Ultra Minimal, Uncrowded) */}
            <div className="h-20 flex items-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Exhausted quarter. Empty brain. Dumped chaotic thoughts into ChatGPT.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    In 3.2 seconds, it gave me this title. For a second, I felt like a wizard.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    Then the chill: I had turned myself into an intellectual tourist in my own talk.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Narrative Frame */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark" className="w-full">
            <div className="space-y-3.5">
              {/* Artifact 1: Invitation */}
              <motion.div
                animate={{
                  borderColor: step === 0 ? '#E59A2F' : '#38302A',
                  backgroundColor: step === 0 ? '#261E18' : '#1E1916',
                }}
                className="p-3.5 rounded-lg border flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E59A2F]" />
                  <div>
                    <div className="text-xs font-mono text-[#E59A2F]">UX INDIA INVITATION</div>
                    <div className="font-editorial text-sm font-semibold text-[#FDFBF7]">
                      "Deliver the 2026 Keynote on Future of Design..."
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Stepped Vector Arrow */}
              <div className="flex justify-center items-center py-0.5">
                <motion.div
                  animate={{
                    color: step >= 1 ? '#C83E2D' : '#554A40',
                  }}
                  className="flex items-center gap-1 text-xs font-mono font-bold tracking-widest uppercase"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Artifact 2: The 3.2s Prompt */}
              <motion.div
                animate={{
                  borderColor: step >= 1 ? '#3D7EA6' : '#38302A',
                  backgroundColor: step >= 1 ? '#18202A' : '#14110F',
                }}
                className="p-3.5 rounded-lg border font-mono text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-[#8E8375]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#3D7EA6]" />
                    <span>autopilot-prompt</span>
                  </span>
                  <span className="text-[#34D399] font-bold">3.2s</span>
                </div>
                <div className="text-[#FDFBF7]">
                  <span className="text-[#3D7EA6]">$</span> "Help! Make a fancy keynote for me."
                </div>
                <div className="text-[#E59A2F] flex items-center gap-1 pt-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>"Design Un-automated: Reclaiming the Soul"</span>
                </div>
              </motion.div>

              {/* Artifact 3: Indian Street Barber Illustration */}
              <div className="relative rounded-lg overflow-hidden border border-[#483B32]">
                <img
                  src={barberDayImg}
                  alt="Indian Street Barber — Soul and Human Craft"
                  className="w-full h-32 md:h-36 object-cover filter saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-black/30 to-transparent flex items-end p-2.5">
                  <div className="text-xs font-mono text-[#FDFBF7] flex items-center justify-between w-full">
                    <span className="flex items-center gap-1.5 text-[#FFA499]">
                      <HeartHandshake className="w-3.5 h-3.5 text-[#C83E2D]" />
                      <span>Lived Human Craft vs. Algorithmic Autopilot</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
