import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { MapPin, Code2, Sparkles, Heart } from 'lucide-react';
import sujitAvatarImg from '../assets/sujit_avatar.jpg';

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
            <div className="inline-flex items-center gap-2 mb-3 text-[#E59A2F] text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
              <span>HYDERABAD, INDIA</span>
              <span className="text-[#554A40]">•</span>
              <span className="text-[#34D399] font-bold">GOOGLE UX</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-3">
              Sujit Kumar <br />
              <span className="text-[#E59A2F] italic">Pradhan.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#D0C5B4] font-light mb-6">
              UX Designer at Google • Ex-Microsoft • Ex-Amazon
            </p>

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

        {/* Right Column: Stylized Avatar in Retro Frame */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          <RetroIllustrationFrame variant="dark" className="w-full max-w-sm">
            <div className="relative rounded-xl overflow-hidden border border-[#3D352E] shadow-2xl aspect-square group">
              <img
                src={sujitAvatarImg}
                alt="Sujit Kumar Pradhan"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent opacity-80" />
              
              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#FDFBF7]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E59A2F]" />
                  <span className="font-bold">Sujit Pradhan</span>
                </div>
                <span className="text-[#34D399] text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10">
                  SPEAKER
                </span>
              </div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
