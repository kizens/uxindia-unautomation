import React from "react";
import { motion } from "motion/react";
import { QrCode } from "lucide-react";
import retroWorkspaceBg from "../assets/retro_workspace_bg.jpg";
import feedbackQrImg from "../assets/feedback_qr.png";

interface SlideProps {
  step?: number;
}

export const Slide13_Feedback: React.FC<SlideProps> = ({ step = 0 }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      {/* Underlying Retro Workspace Image with subtle depth blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={retroWorkspaceBg}
          alt="Retro Design Workspace"
          className="w-full h-full object-cover object-center filter blur-[2px] scale-105 opacity-35"
        />
        <div className="absolute inset-0 bg-[#12100E]/75 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_45%,rgba(52,211,153,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(229,154,47,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/80" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Typography & Call to Action */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-5 drop-shadow-md">
              Questions &amp; <br />
              <span className="text-[#E59A2F] italic">Feedback.</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#D0C5B4] font-normal leading-relaxed max-w-xl">
              Scan the QR code to ask a question live, share your thoughts on{" "}
              <span className="text-[#FDFBF7] font-medium italic">Design Un-automated</span>, or drop candid feedback about today&apos;s talk.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Large Scannable Feedback QR Card */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            {/* Scan Label */}
            <div className="text-sm font-mono font-bold tracking-widest uppercase text-[#FDFBF7] flex items-center justify-center gap-2 mb-4">
              <QrCode className="w-4 h-4 text-[#34D399]" />
              <span>Scan for Q&amp;A and Feedback</span>
            </div>

            {/* Glow & Crisp White QR Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#34D399]/30 via-[#E59A2F]/35 to-[#C83E2D]/25 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 sm:p-7 rounded-3xl bg-white shadow-[0_0_60px_rgba(52,211,153,0.22)] border-2 border-[#34D399]/60 overflow-hidden transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src={feedbackQrImg}
                  alt="Scan QR Code to Ask Questions or Share Feedback"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain select-none"
                />

                {/* Animated Laser Scan Line */}
                <motion.div
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-1 bg-amber-500 opacity-80 shadow-[0_0_16px_rgba(245,158,11,0.95)] pointer-events-none z-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
