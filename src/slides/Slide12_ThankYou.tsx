import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  Copy, 
  Check, 
  Flame, 
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
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E59A2F]/15 border border-[#E59A2F]/30 text-xs font-mono text-[#F5B041] mb-5 font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E59A2F]" />
              <span>UX INDIA 2026 • KEYNOTE FINALE</span>
            </div>

            {/* Giant Iconic Headline (Matching Slide 01 scale) */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[0.95] mb-5 drop-shadow-md">
              Thank <br />
              <span className="text-[#E59A2F] italic">You.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl text-[#34D399] font-editorial italic font-normal mb-8 drop-shadow">
              Prompt the Human, not just the machine.
            </p>

            {/* Closing Keynote Question Callout */}
            <div className="border-l-2 border-[#E59A2F] pl-4 py-2 space-y-2 bg-[#181412]/50 backdrop-blur-sm rounded-r-xl pr-4">
              <p className="text-lg sm:text-xl text-[#FDFBF7] font-editorial font-bold leading-relaxed">
                "What would you rather have? <br />
                <span className="text-[#C83E2D]">A tool that thinks for you,</span> or{" "}
                <span className="text-[#E59A2F]">a tool that makes you think?</span>"
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs font-mono text-[#A89F91]">
                <span className="font-bold text-[#FDFBF7]">Sujit Pradhan</span>
                <span>•</span>
                <span>UX Designer at Google</span>
              </div>
            </div>

            {/* Interactive Confetti Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={triggerConfetti}
                className="px-4 py-2 rounded-xl bg-[#E59A2F]/20 hover:bg-[#E59A2F]/30 border border-[#E59A2F]/40 text-xs font-mono text-[#F5B041] font-bold flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
              >
                <Flame className="w-4 h-4 text-[#E59A2F]" />
                <span>Celebrate Human Craft</span>
                {confettiCount > 0 && <span className="text-[11px] text-[#FDFBF7]">({confettiCount})</span>}
              </button>
            </div>
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
            {/* Ambient Glow */}
            <div className="relative group cursor-pointer" onClick={triggerConfetti}>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C83E2D]/25 via-[#E59A2F]/35 to-[#34D399]/30 rounded-3xl blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-75" />

              {/* Big Crisp White QR Card for instant phone scanning */}
              <div className="relative p-5 sm:p-6 rounded-3xl bg-white shadow-[0_0_60px_rgba(229,154,47,0.25)] border-2 border-[#E59A2F]/50 overflow-hidden group-hover:border-[#34D399] transition-all duration-300 group-hover:scale-[1.02]">
                {/* Viewfinder Corner Brackets */}
                <span className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#12100E] z-20 pointer-events-none" />
                <span className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#12100E] z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#12100E] z-20 pointer-events-none" />
                <span className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#12100E] z-20 pointer-events-none" />

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

            {/* Clean Minimalist Connect Bar */}
            <div className="mt-5 space-y-2.5 w-full max-w-xs">
              <div className="text-sm font-mono font-bold tracking-widest uppercase text-[#FDFBF7] flex items-center justify-center gap-2">
                <QrCode className="w-4 h-4 text-[#34D399]" />
                <span>Scan to Connect</span>
              </div>

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
