import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { 
  Copy, 
  Check, 
  QrCode
} from "lucide-react";
import retroWorkspaceBg from "../assets/retro_workspace_bg.jpg";
import qrcodeImg from "../assets/qrcode.png";

interface SlideProps {
  step?: number;
}

export const Slide12_ThankYou: React.FC<SlideProps> = ({ step = 0 }) => {
  const [copied, setCopied] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);

  const triggerConfetti = () => {
    setConfettiCount(prev => prev + 1);
    try {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#C83E2D", "#E59A2F", "#34D399", "#3D7EA6", "#FDFBF7", "#EC4899"]
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (step === 1) {
      triggerConfetti();
    }
  }, [step]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.("https://linktr.ee/sujitpradhan");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      {/* 1. Underlying Retro Workspace Image with subtle depth blur (Matching Slide 01 Opening) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={retroWorkspaceBg}
          alt="Retro Design Workspace"
          className="w-full h-full object-cover object-center filter blur-[2px] scale-105 opacity-40"
        />
        {/* Warm espresso, terracotta & ochre ambient tint */}
        <div className="absolute inset-0 bg-[#12100E]/70 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_45%,rgba(200,62,45,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,154,47,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: Majestic Typographic "Thank You" & Core Mantra */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Giant Iconic Headline in a Single Line */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-none mb-6 drop-shadow-md whitespace-nowrap">
              Thank <span className="text-[#E59A2F] italic">You.</span>
            </h1>

            {/* Subtitle - One Line */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#34D399] font-editorial italic font-normal drop-shadow whitespace-nowrap">
              Prompt the Human, not just the machine.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Hero Big QR Code in the Space */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            {/* Scan To Connect - Moved to Top of QR */}
            <div className="text-sm font-mono font-bold tracking-widest uppercase text-[#FDFBF7] flex items-center justify-center gap-2 mb-4">
              <QrCode className="w-4 h-4 text-[#34D399]" />
              <span>Scan to Connect</span>
            </div>

            {/* Ambient Glow & QR Container */}
            <div className="relative group cursor-pointer" onClick={triggerConfetti}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C83E2D]/25 via-[#E59A2F]/35 to-[#34D399]/30 rounded-3xl blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-75" />

              {/* Big Crisp White QR Card for instant phone scanning */}
              <div className="relative p-5 sm:p-6 rounded-3xl bg-white shadow-[0_0_60px_rgba(229,154,47,0.25)] border-2 border-[#E59A2F]/50 overflow-hidden group-hover:border-[#34D399] transition-all duration-300 group-hover:scale-[1.02]">
                {/* Big QR Code Image */}
                <img
                  src={qrcodeImg}
                  alt="Sujit Pradhan Personal Connect QR Code"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain select-none"
                />

                {/* Animated Neon Laser Scan Line */}
                <motion.div
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-1 bg-emerald-400 opacity-80 shadow-[0_0_16px_rgba(16,185,129,0.95)] pointer-events-none z-10"
                />
              </div>
            </div>

            {/* Clean Minimalist Connect Bar - Below QR */}
            <div className="mt-4 w-full max-w-xs">
              {/* Copy Link Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-2 px-3 rounded-xl bg-[#1E1815]/90 hover:bg-[#2C231E] border border-[#3E3228] text-xs font-mono text-[#D0C5B4] hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-md"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    <span className="text-[#34D399] font-bold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#E59A2F]" />
                    <span>linktr.ee/sujitpradhan</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
