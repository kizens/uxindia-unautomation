import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Sparkles, Bot, Heart, Sun } from 'lucide-react';
import barberDuskImg from '../assets/indian_street_barber_dusk.png';

interface SlideProps {
  step: number;
}

export const Slide08_HumiliatingMirror: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(229,154,47,0.12),transparent_70%)] pointer-events-none" />

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
              The Ultimate <br />
              <span className="text-[#E59A2F] italic">Ironic Mirror.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              AI came to remind us how amazing it is to think.
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
                    className="text-base md:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Humanity spent 50 years and $100B burning gigawatts in desert server farms...
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    ...just to look at a chatbot and realize: "Wait, my brain is actually amazing!"
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
                    No machine knows what a spring walk in the park feels like, or what it means to feel empathy.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Whimsical Metaphor Frame */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <RetroIllustrationFrame variant="dark">
            <div className="relative w-full bg-[#151210] rounded-lg border border-[#38302A] p-4 flex flex-col gap-3.5 overflow-hidden">
              {/* Robot with Whiteboard */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#2A221C] border-2 border-[#E59A2F] flex items-center justify-center relative shadow-lg">
                    <Bot className="w-8 h-8 text-[#E59A2F]" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#34D399] animate-ping" />
                  </div>
                  <span className="text-[9px] font-mono text-[#A89F91] mt-1">AI Machine</span>
                </div>

                <div className="flex-1 p-3 rounded-lg bg-[#F8F4EC] text-[#1C1815] border-2 border-[#E59A2F] shadow-xl">
                  <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#C83E2D] mb-0.5">
                    BREAKING NEWS FROM 50 YEARS OF AI:
                  </div>
                  <div className="text-lg md:text-xl font-editorial font-bold leading-tight">
                    "THINKING IS <br />
                    <span className="text-[#C83E2D] underline decoration-wavy">AWESOME!"</span>
                  </div>
                </div>

                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#201B17] border-2 border-[#D0C5B4] flex items-center justify-center text-2xl">
                    😏
                  </div>
                  <span className="text-[9px] font-mono text-[#FDFBF7] mt-1">The Human</span>
                </div>
              </div>

              {/* Lived Experience Indian Street Vignette */}
              <div className="relative rounded-lg overflow-hidden border border-[#44382E]">
                <img
                  src={barberDuskImg}
                  alt="Dusk Indian Street: Unmappable Human Lived Soul"
                  className="w-full h-28 md:h-32 object-cover filter saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-black/40 to-transparent flex items-end p-2.5">
                  <div className="text-[11px] font-mono text-[#FDFBF7] flex items-center justify-between w-full">
                    <span className="flex items-center gap-1 text-[#E59A2F]">
                      <Sun className="w-3 h-3 text-[#E59A2F]" />
                      <span>Unmappable Human Magic & Lived Experience</span>
                    </span>
                    <span className="text-[#34D399] font-bold">SOUL</span>
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
