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
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(229,154,47,0.12),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#E59A2F]/20 border border-[#E59A2F]/40 text-[#F5B041] text-xs font-mono font-bold tracking-widest uppercase">
            ACT V • THE SUPERPOWER
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            SLIDE 08 • 21:00 — 24:00 • THE HUMILIATING MIRROR
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
          <div className="inline-flex items-center gap-2 mb-2 text-[#E59A2F] text-xs uppercase font-mono tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            THE HILARIOUS, BEAUTIFUL IRONY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial mb-3 leading-tight">
            The Ultimate <br />
            <span className="text-[#E59A2F] italic">Ironic Mirror.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#D0C5B4] font-light mb-6">
            AI came to remind us how amazing it is to think.
          </p>

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#E59A2F] text-sm text-[#D5C9B8]"
              >
                <div className="font-mono text-xs uppercase text-[#E59A2F] mb-1 font-bold">
                  $100 BILLION IN DATACENTERS
                </div>
                Humanity spent fifty years and hundreds of billions burning gigawatts in desert server farms... just so we could look at a chatbot and realize: "Wait, my brain is actually incredible!"
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#271E15] border-l-4 border-[#E59A2F] text-sm text-[#F7E7D0]"
              >
                <div className="font-mono text-xs uppercase text-[#F5B041] mb-1 font-bold flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  THE ROBOT'S REVELATION
                </div>
                It took sterile robotic emails and generic layouts to snap us out of our 20-year obsession with trying to act like unfeeling machines ourselves.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-4 rounded-lg bg-[#261513] border-l-4 border-[#C83E2D] text-sm text-[#F7DCD9]"
              >
                <div className="font-mono text-xs uppercase text-[#FFA499] mb-1 font-bold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#C83E2D]" />
                  THE UNMAPPABLE CREATIVE LEAP
                </div>
                No algorithm knows what it feels like to walk through a city park on the first warm day of spring, or feel real human grief and empathy. That is the soul of design.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Visual Metaphor Frame with Robot Whiteboard and Dusk Indian Street Scene */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="EDITORIAL ILLUSTRATION"
            label="The Humiliating Mirror"
            variant="dark"
          >
            <div className="relative w-full bg-[#151210] rounded-lg border border-[#38302A] p-4 flex flex-col gap-3 overflow-hidden">
              {/* Robot with Whiteboard */}
              <div className="flex items-center justify-between gap-3">
                {/* Sleek Robot */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="w-14 h-14 rounded-xl bg-[#2A221C] border-2 border-[#E59A2F] flex items-center justify-center relative shadow-lg"
                  >
                    <Bot className="w-8 h-8 text-[#E59A2F]" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#34D399] animate-ping" />
                  </motion.div>
                  <span className="text-[9px] font-mono text-[#A89F91] mt-1">AI Neural Net</span>
                </div>

                {/* The Giant Whiteboard Sign */}
                <motion.div
                  animate={{
                    scale: step >= 1 ? [1, 1.02, 1] : 1,
                    borderColor: step >= 1 ? '#E59A2F' : '#38302A',
                  }}
                  transition={{ repeat: step >= 1 ? Infinity : 0, duration: 2 }}
                  className="flex-1 p-3 rounded-lg bg-[#F8F4EC] text-[#1C1815] border-2 shadow-xl"
                >
                  <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#C83E2D] mb-0.5">
                    BREAKING NEWS FROM 50 YEARS OF AI:
                  </div>
                  <div className="text-lg md:text-xl font-editorial font-bold leading-tight">
                    "THINKING IS <br />
                    <span className="text-[#C83E2D] underline decoration-wavy">AWESOME!"</span>
                  </div>
                  <div className="mt-1 text-[9px] font-mono text-[#554A40]">
                    Datacenters burned: 100+ Gigawatts
                  </div>
                </motion.div>

                {/* Bemused Human Designer */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#201B17] border-2 border-[#D0C5B4] flex items-center justify-center text-2xl">
                    😏
                  </div>
                  <span className="text-[9px] font-mono text-[#FDFBF7] mt-1">The Designer</span>
                </div>
              </div>

              {/* Lived Experience Indian Street Vignette */}
              <div className="relative rounded-lg overflow-hidden border border-[#44382E]">
                <img
                  src={barberDuskImg}
                  alt="Dusk Indian Street — Unmappable Human Lived Soul"
                  className="w-full h-28 md:h-32 object-cover filter saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-black/40 to-transparent flex items-end p-2.5">
                  <div className="text-[11px] font-mono text-[#FDFBF7] flex items-center justify-between w-full">
                    <span className="flex items-center gap-1 text-[#E59A2F]">
                      <Sun className="w-3 h-3 text-[#E59A2F]" />
                      <span>The Unmappable Human Magic & Lived Experience</span>
                    </span>
                    <span className="text-[#34D399] font-bold">SOUL</span>
                  </div>
                </div>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          THE CALL: <span className="text-[#FDFBF7]">Now that a robot has reminded us of our power, we must never give the keys back.</span>
        </div>
        <div className="text-[#E59A2F] font-mono font-bold">
          [102, 114, 368]
        </div>
      </div>
    </div>
  );
};
