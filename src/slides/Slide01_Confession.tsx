import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import retroWorkspaceBg from '../assets/retro_workspace_bg.jpg';

interface SlideProps {
  step: number;
}

export const Slide01_Confession: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-12 overflow-hidden bg-[#12100E] text-center">
      {/* 1. Underlying Retro Workspace Image with subtle depth blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={retroWorkspaceBg}
          alt="Retro Design Workspace"
          className="w-full h-full object-cover object-center filter blur-[2px] scale-105 opacity-50"
        />
        {/* 2. Color Theme Overlay (Warm espresso, terracotta & ochre ambient tint on top with soft blur) */}
        <div className="absolute inset-0 bg-[#12100E]/68 backdrop-blur-[3.5px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_45%,rgba(200,62,45,0.20),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,154,47,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/75" />
      </div>

      {/* Main Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto drop-shadow-sm"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.02] mb-6 drop-shadow-md">
          Design <br />
          <span className="text-[#C83E2D] italic">Un-automated.</span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-[#D0C5B4] font-light tracking-wide mb-12 drop-shadow">
          Reclaiming craft. Guided by judgment.
        </p>

        {/* Centered Stepped Beats */}
        <div className="h-20 flex items-center justify-center w-full max-w-2xl px-4">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-[#E59A2F] font-mono"
              >
                Exhausted quarter. Empty brain. Dumped chaotic thoughts into Gemini.
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-[#3D7EA6] font-mono"
              >
                In seconds, it handed me so many titles and content. It felt like a superpower.
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-lg md:text-xl text-[#FFA499] font-mono"
              >
                Then the chill: I had turned myself into an intellectual tourist in my own talk.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
