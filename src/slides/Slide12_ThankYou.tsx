import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import { RetroIllustrationFrame } from "../components/RetroIllustrationFrame";
import { 
  Sparkles, 
  Bot, 
  UserCheck, 
  Copy, 
  Check, 
  Flame, 
  QrCode,
  Compass
} from "lucide-react";
import retroWorkspaceBg from "../assets/retro_workspace_bg.jpg";
import qrcodeImg from "../assets/qrcode.png";

interface SlideProps {
  step: number;
}

export const Slide12_ThankYou: React.FC<SlideProps> = ({ step }) => {
  const [decoderMode, setDecoderMode] = useState<"human" | "ai">("human");
  const [copied, setCopied] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);

  const triggerConfetti = () => {
    setConfettiCount(prev => prev + 1);
    try {
      confetti({
        particleCount: 80,
        spread: 90,
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

  const handleCopy = () => {
    navigator.clipboard?.writeText?.("https://linktr.ee/sujitpradhan");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-12 py-6 overflow-hidden bg-[#12100E]">
      {/* 1. Underlying Retro Workspace Image with subtle depth blur (Matching Slide 01 Opening) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={retroWorkspaceBg}
          alt="Retro Design Workspace"
          className="w-full h-full object-cover object-center filter blur-[2.5px] scale-105 opacity-35"
        />
        <div className="absolute inset-0 bg-[#12100E]/75 backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_45%,rgba(200,62,45,0.20),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(229,154,47,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-[#12100E]/80" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left Column: Thank You Headline & Provocative Decoder */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E59A2F]/15 border border-[#E59A2F]/30 text-xs font-mono text-[#F5B041] mb-2 font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#E59A2F]" />
              <span>UX INDIA 2026 • KEYNOTE FINALE</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.04] mb-1">
              Thank <span className="text-[#E59A2F]">You.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#34D399] font-editorial italic font-normal mb-3">
              Prompt the Human, not just the machine.
            </p>

            {/* Speaker Bio Card */}
            <div className="p-3 rounded-xl bg-[#181412]/85 border border-[#38302A] backdrop-blur-md mb-3 flex items-center justify-between">
              <div>
                <div className="text-base font-bold text-[#FDFBF7] font-editorial flex items-center gap-2">
                  <span>Sujit Pradhan</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3D7EA6]/20 text-[#6BA8D1] border border-[#3D7EA6]/40 uppercase font-semibold">
                    UX Designer @ Google
                  </span>
                </div>
                <p className="text-xs font-mono text-[#A89F91] mt-0.5">
                  Designing Agentic Enterprise Ecosystems • Ex-Microsoft • Amazon • ONN Bikes • Incture
                </p>
              </div>
            </div>

            {/* Provocative & Funny Interactive Turing Test Widget */}
            <div className="p-3.5 rounded-xl bg-[#14100D]/90 border border-[#3D352E] backdrop-blur-md space-y-2.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2E251E] pb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A89F91] font-bold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#E59A2F]" />
                  Interactive Keynote Decoder
                </span>
                <span className="text-[10px] font-mono text-[#8E8375]">
                  Click to inspect the difference
                </span>
              </div>

              {/* Mode Toggle Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDecoderMode("human")}
                  className={"py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer " + (
                    decoderMode === "human"
                      ? "bg-[#1F3E28] border-2 border-[#4ADE80] text-[#4ADE80] shadow-[0_0_12px_rgba(74,222,128,0.25)]"
                      : "bg-[#1A1613] border border-[#352B22] text-[#8E8375] hover:text-[#D0C5B4]"
                  )}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Human Designer Reality</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDecoderMode("ai")}
                  className={"py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer " + (
                    decoderMode === "ai"
                      ? "bg-[#3A1815] border-2 border-[#C83E2D] text-[#FFA499] shadow-[0_0_12px_rgba(200,62,45,0.25)]"
                      : "bg-[#1A1613] border border-[#352B22] text-[#8E8375] hover:text-[#D0C5B4]"
                  )}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Corporate LLM Summary</span>
                </button>
              </div>

              {/* Dynamic Decoder Message */}
              <AnimatePresence mode="wait">
                {decoderMode === "human" ? (
                  <motion.div
                    key="decoder-human"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3 rounded-lg bg-[#0F2216] border border-[#245032] space-y-1.5"
                  >
                    <p className="text-xs font-mono text-[#D2E4D5] leading-relaxed">
                      "Never bring a forklift to the gym. Protect your taste. Don’t book the 2:00 AM layover in Delhi just because an algorithm told you to save ₹2,800. Stay in the driver’s seat."
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[#4ADE80] font-bold">
                      <span>✅ 100% ORGANIC HUMAN DISCERNMENT</span>
                      <span>Zero AI Hallucination</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="decoder-ai"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3 rounded-lg bg-[#241311] border border-[#4D231E] space-y-1.5"
                  >
                    <p className="text-xs font-mono text-[#FFA499] leading-relaxed italic">
                      "We leveraged agile paradigm synergies to friction-lessly empower cross-functional stakeholder touchpoints across the holistic omnichannel agentic ecosystem."
                    </p>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[#C83E2D] font-bold">
                      <span>🚨 100% HOLLOW AI SLOP</span>
                      <span>(Why we need human designers!)</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Interactive Celebration Bar */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={triggerConfetti}
                  className="px-3.5 py-1.5 rounded-lg bg-[#E59A2F]/20 hover:bg-[#E59A2F]/30 border border-[#E59A2F]/40 text-xs font-mono text-[#F5B041] font-bold flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Flame className="w-3.5 h-3.5 text-[#E59A2F]" />
                  <span>Celebrate Human Craft</span>
                  {confettiCount > 0 && <span className="text-[10px] text-[#FDFBF7]">({confettiCount})</span>}
                </button>

                <div className="text-[11px] font-mono text-[#A89F91] italic">
                  "Tools that think for you vs. tools that make you think."
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative QR Code & Personal Connect Branding */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          <RetroIllustrationFrame variant="dark" className="w-full max-w-sm">
            <div className="flex flex-col items-center p-2 space-y-3 text-center">
              
              {/* Header Badge */}
              <div className="w-full flex items-center justify-between px-2 py-1 border-b border-[#352B22] text-[10px] font-mono">
                <span className="text-[#34D399] font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  AUTHENTIC HUMAN VERIFIED
                </span>
                <span className="text-[#8E8375]">MODEL: SUJIT-v2026</span>
              </div>

              {/* The Creative QR Code Holographic Housing */}
              <div className="relative group">
                {/* Ambient Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#C83E2D]/20 via-[#E59A2F]/25 to-[#34D399]/20 rounded-2xl blur-lg group-hover:opacity-100 transition-opacity duration-500 opacity-60" />

                {/* QR Container Card */}
                <div className="relative p-3.5 rounded-2xl bg-white shadow-2xl border-2 border-[#E59A2F]/40 overflow-hidden group-hover:border-[#34D399] transition-all duration-300">
                  {/* Camera / HUD Viewfinder Brackets */}
                  <span className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#12100E] z-20 pointer-events-none" />
                  <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#12100E] z-20 pointer-events-none" />
                  <span className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#12100E] z-20 pointer-events-none" />
                  <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#12100E] z-20 pointer-events-none" />

                  {/* QR Image with Linktree center icon */}
                  <img
                    src={qrcodeImg}
                    alt="Sujit Pradhan Personal Connect QR Code"
                    className="w-44 h-44 sm:w-48 sm:h-48 object-contain select-none"
                  />

                  {/* Creative Animated Laser Scan Line */}
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-0.5 bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.9)] pointer-events-none z-10"
                  />
                </div>
              </div>

              {/* Call-to-Action & Connect Branding */}
              <div className="space-y-1.5 w-full">
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#FDFBF7] flex items-center justify-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Scan to Connect</span>
                </div>
                
                <p className="text-[11px] font-mono text-[#A89F91]">
                  Linktree • Portfolio • LinkedIn • Thought Pieces
                </p>

                {/* Interactive Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-1.5 px-3 rounded-lg bg-[#251E1A] hover:bg-[#352B24] border border-[#3E3228] text-xs font-mono text-[#D0C5B4] hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#34D399]" />
                      <span className="text-[#34D399] font-bold">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#E59A2F]" />
                      <span>Copy linktr.ee/sujitpradhan</span>
                    </>
                  )}
                </button>

                {/* Provocative Personality Tags */}
                <div className="pt-1 flex flex-wrap gap-1.5 justify-center">
                  <span className="px-2 py-0.5 rounded-full bg-[#1A1613] border border-[#332A22] text-[9px] font-mono text-[#D0C5B4]">
                    🧱 Lego Builder
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1A1613] border border-[#332A22] text-[9px] font-mono text-[#D0C5B4]">
                    👟 Sneakerhead
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1A1613] border border-[#332A22] text-[9px] font-mono text-[#D0C5B4]">
                    ☕ Open for Chai & Debates
                  </span>
                </div>

                {/* Provocative Human Guarantee */}
                <div className="text-[9px] font-mono text-[#8E8375] italic pt-0.5">
                  Guaranteed 0% chance of auto-replying with an AI bot.
                </div>
              </div>

            </div>
          </RetroIllustrationFrame>
        </div>
      </div>
    </div>
  );
};
