import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { LegoBlueprintFrame } from '../components/LegoBlueprintFrame';

interface SlideProps {
  step?: number;
}

export const Slide02_SpeakerIntro: React.FC<SlideProps> = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(229,154,47,0.1),transparent_70%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Speaker Identity & Bio */}
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

            {/* Headline: Sujit Pradhan (Single line, no italics) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-tight mb-3">
              Sujit <span className="text-[#E59A2F]">Pradhan.</span>
            </h1>

            {/* Google Line + MSFT, AMZN, ONN Bikes, Incture */}
            <div className="mb-6 space-y-1">
              <p className="text-xl sm:text-2xl text-[#FDFBF7] font-medium">
                UX Designer at Google
              </p>
              <p className="text-base sm:text-lg text-[#A89F91] font-light font-mono">
                Microsoft • Amazon • ONN Bikes • Incture Technologies
              </p>
            </div>

            {/* Single Static Punchline (Single State) */}
            <div className="text-base sm:text-lg text-[#E59A2F] font-mono border-l-2 border-[#E59A2F] pl-3 py-1">
              Designing Agentic enterprise ecosystems at Google.
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
