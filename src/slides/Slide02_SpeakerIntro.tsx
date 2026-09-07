import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Code2, Heart } from 'lucide-react';
import { LegoBlueprintFrame } from '../components/LegoBlueprintFrame';

interface SlideProps {
  step: number;
}

export const Slide02_SpeakerIntro: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(229,154,47,0.1),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Speaker Identity & Humorous / Relatable Bio */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 mb-3 text-[#A89F91] text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
              <span>HYDERABAD, INDIA</span>
            </div>

            {/* Headline: Sujit Pradhan (Single line) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-tight mb-3">
              Sujit <span className="text-[#E59A2F] italic">Pradhan.</span>
            </h1>

            {/* Google Line + MSFT & AMZN Below */}
            <div className="mb-6 space-y-1">
              <p className="text-xl sm:text-2xl text-[#FDFBF7] font-medium">
                UX Designer at Google
              </p>
              <p className="text-base sm:text-lg text-[#A89F91] font-light font-mono">
                Microsoft • Amazon
              </p>
            </div>

            {/* Stepped Single-Beat Punchline */}
            <div className="h-20 flex items-center mb-4">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="intro0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    Designing enterprise ecosystems at Google. Survived the Big Tech trifecta: Amazon → Microsoft → Google.
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="intro1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#3D7EA6] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    CS Engineering grad from KIIT—proof that even developers can defect to design once they discover Figma.
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="intro2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm md:text-base text-[#FFA499] font-mono border-l-2 border-[#C83E2D] pl-3"
                  >
                    Lego hoarder & sneakerhead. Spends off-screen hours snapping plastic bricks together by hand.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Fun Facts Mini Badges */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#D5C9B8]">
              <span className="px-2.5 py-1 rounded-full bg-[#1C1815] border border-[#38302A] flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#3D7EA6]" />
                <span>Code-to-Design Defector</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1C1815] border border-[#38302A] flex items-center gap-1.5">
                <span>🧱</span>
                <span>Lego Architect</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1C1815] border border-[#38302A] flex items-center gap-1.5">
                <span>👟</span>
                <span>Sneaker Hoarder</span>
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#1C1815] border border-[#38302A] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#C83E2D]" />
                <span>Human Soul in Software</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Stylized Lego Blueprint Card */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          <LegoBlueprintFrame />
        </div>
      </div>
    </div>
  );
};
