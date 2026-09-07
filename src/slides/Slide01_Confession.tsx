import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideProps {
  step: number;
}

export const Slide01_Confession: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-12 overflow-hidden bg-[#12100E] text-center">
      {/* Subtle ambient warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(200,62,45,0.12),transparent)] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-[#E59A2F]/5 blur-3xl pointer-events-none" />

      {/* Main Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.02] mb-6">
          Design <br />
          <span className="text-[#C83E2D] italic">Un-automated.</span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl text-[#D0C5B4] font-light tracking-wide mb-12">
          By a human. Powered by an idea.
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
                In 3.2 seconds, it gave me this title. For a second, I felt like a wizard.
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
