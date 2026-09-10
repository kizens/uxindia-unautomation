import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Sparkles, 
  Radio, 
  Code, 
  CreditCard, 
  SlidersHorizontal,
  Terminal,
  Disc
} from 'lucide-react';

interface SlideProps {
  step: number;
}

export const Slide09_OpinionatedDesign: React.FC<SlideProps> = ({ step }) => {
  // Manual track selection or synced with presentation step
  const [manualTrack, setManualTrack] = useState<number | null>(null);
  const activeTrack = manualTrack !== null ? manualTrack : Math.min(step, 2);

  // Sync with presenter clicker / keyboard steps
  useEffect(() => {
    setManualTrack(null);
  }, [step]);

  // Cycle to next case study on card click
  const handleCycleNext = () => {
    setManualTrack((prev) => {
      const current = prev !== null ? prev : Math.min(step, 2);
      return (current + 1) % 3;
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-8 md:px-16 py-8 overflow-hidden bg-[#12100E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(46,111,64,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(229,154,47,0.08),transparent_60%)] pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Keynote Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-[#4ADE80] mb-3 flex items-center gap-1.5 font-semibold">
              <Palette className="w-3.5 h-3.5" />
              REAL-WORLD OUTLIERS
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Opinionated <br />
              <span className="text-[#4ADE80] italic">Design.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light mb-6">
              Taste is your only true moat.
            </p>

            {/* Stepped Single-Beat Message */}
            <div className="h-24 flex items-center">
              <AnimatePresence mode="wait">
                {activeTrack === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#6BA8D1] font-mono border-l-2 border-[#3D7EA6] pl-3"
                  >
                    Standard UX dogma said: safe flat plastic, sterile forms, zero risk.
                  </motion.div>
                )}

                {activeTrack === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#4ADE80] font-mono border-l-2 border-[#2E6F40] pl-3"
                  >
                    Claude Artifacts: Michael trusted raw instinct over standard PM roadmaps.
                  </motion.div>
                )}

                {activeTrack === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-base md:text-lg text-[#F5B041] font-mono border-l-2 border-[#E59A2F] pl-3"
                  >
                    "You are being paid for the confidence you have in your taste." (Rick Rubin)
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Outlier Dossier (Elevated Interactive Showcase, No Images) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div 
            onClick={handleCycleNext}
            className="relative w-full bg-[#161311] rounded-2xl border border-[#332922] p-6 sm:p-8 flex flex-col justify-center overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#E59A2F]/30 cursor-pointer"
            title="Click to cycle next outlier"
          >
            {/* Central Stage: 2-column layout (Micro-artifact UI + Narrative Details) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Left Column (sm:col-span-5): Code-Crafted UI Micro-Artifact (NO IMAGES) */}
              <div 
                onClick={handleCycleNext}
                className="sm:col-span-5 cursor-pointer select-none transition-transform duration-300 hover:scale-[1.01]"
                title="Click to cycle next outlier"
              >
                <AnimatePresence mode="wait">
                  {/* CASE 00: The Sterile Dogma (Generic Template Satire) */}
                  {activeTrack === 0 && (
                    <motion.div
                      key="visual-0"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl border border-[#26313F] bg-[#0E1318] p-4 h-[270px] flex flex-col justify-between overflow-hidden shadow-lg"
                    >
                      {/* Top mockup header */}
                      <div className="flex items-center justify-between border-b border-[#1E293B] pb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
                          <span className="w-2 h-2 rounded-full bg-[#F59E0B]/60" />
                          <span className="w-2 h-2 rounded-full bg-[#10B981]/60" />
                          <span className="text-[10px] font-mono text-[#64748B] ml-1.5 truncate">
                            sterile-saas-v4.figma
                          </span>
                        </div>
                        <span className="text-[9px] font-mono text-[#6BA8D1] bg-[#6BA8D1]/10 px-1.5 py-0.5 rounded border border-[#6BA8D1]/20">
                          PROMPT AI
                        </span>
                      </div>

                      {/* Cookie-cutter UI skeleton preview */}
                      <div className="space-y-2.5 my-auto">
                        <div className="h-3.5 bg-[#1E293B]/80 rounded w-3/4 animate-pulse" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-[#1E293B]/40 rounded border border-[#334155]/30 p-2 flex flex-col justify-between">
                            <div className="w-6 h-1.5 bg-[#475569]/60 rounded" />
                            <div className="w-10 h-2.5 bg-[#64748B]/40 rounded" />
                          </div>
                          <div className="h-12 bg-[#1E293B]/40 rounded border border-[#334155]/30 p-2 flex flex-col justify-between">
                            <div className="w-8 h-1.5 bg-[#475569]/60 rounded" />
                            <div className="w-7 h-2.5 bg-[#64748B]/40 rounded" />
                          </div>
                          <div className="h-12 bg-[#1E293B]/40 rounded border border-[#334155]/30 p-2 flex flex-col justify-between">
                            <div className="w-5 h-1.5 bg-[#475569]/60 rounded" />
                            <div className="w-9 h-2.5 bg-[#64748B]/40 rounded" />
                          </div>
                        </div>
                        <div className="h-7 w-full bg-[#1E293B]/80 rounded border border-[#475569]/40 flex items-center justify-center text-[10px] font-mono text-[#94A3B8]">
                          [ Standard Flat CTA ]
                        </div>
                      </div>

                      {/* Bottom Status Stamp */}
                      <div className="flex items-center justify-between text-[10px] font-mono bg-[#141C24] p-2 rounded border border-[#2A3749] text-[#94A3B8]">
                        <span className="text-[#6BA8D1] font-semibold flex items-center gap-1">
                          <SlidersHorizontal className="w-3 h-3" />
                          Novelty: 0%
                        </span>
                        <span className="text-[#64748B]">Indistinguishable</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CASE 01: Claude Artifacts (Anthropic Split Workspace Simulation) */}
                  {activeTrack === 1 && (
                    <motion.div
                      key="visual-1"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl border border-[#1E3A2B] bg-[#0A140F] p-4 h-[270px] flex flex-col justify-between overflow-hidden shadow-lg"
                    >
                      {/* Top mockup header */}
                      <div className="flex items-center justify-between border-b border-[#1A3325] pb-2.5">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
                          <span className="text-[10px] font-mono text-[#4ADE80] font-bold">
                            claude-3.5 / artifacts
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-[#13281D] p-0.5 rounded text-[9px] font-mono">
                          <span className="px-1.5 py-0.5 bg-[#4ADE80] text-[#0A140F] font-bold rounded">Preview</span>
                          <span className="px-1.5 py-0.5 text-[#6EE7B7]">Code</span>
                        </div>
                      </div>

                      {/* Live canvas simulation */}
                      <div className="relative my-auto bg-[#070D0A] rounded-lg border border-[#1E3A2B] p-3 flex flex-col items-center justify-center h-28 overflow-hidden">
                        <div className="relative flex items-center justify-center">
                          {[1, 2, 3].map((ring) => (
                            <motion.div
                              key={ring}
                              animate={{ scale: [0.75, 1.45, 0.75], opacity: [0.25, 0.7, 0.25] }}
                              transition={{ repeat: Infinity, duration: 2.6, delay: ring * 0.4 }}
                              className="absolute w-14 h-14 rounded-full border border-[#4ADE80]/40"
                            />
                          ))}
                          <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 border border-[#4ADE80] flex items-center justify-center text-[#4ADE80] relative z-10 shadow-[0_0_12px_rgba(74,222,128,0.4)]">
                            <Code className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="mt-3 text-[10px] font-mono text-[#4ADE80] font-semibold tracking-wide">
                          Live Interactive Canvas
                        </div>
                      </div>

                      {/* Bottom Stamp */}
                      <div className="flex items-center justify-between text-[10px] font-mono bg-[#0D1E15] p-2 rounded border border-[#1E3A2B] text-[#6EE7B7]">
                        <span className="font-semibold text-[#4ADE80] flex items-center gap-1">
                          <Terminal className="w-3 h-3" />
                          Scrappy Conviction
                        </span>
                        <span className="text-[#34D399]">Prototype to Prod</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CASE 02: Cash App & Rick Rubin (Tactile Tortoise-Shell Debit Card) */}
                  {activeTrack === 2 && (
                    <motion.div
                      key="visual-2"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-xl border border-[#3E2818] bg-[#120D08] p-4 h-[270px] flex flex-col justify-between overflow-hidden shadow-lg"
                    >
                      {/* Tactile Tortoise-shell Card Mockup */}
                      <div className="relative w-full rounded-xl bg-gradient-to-br from-[#4A2411] via-[#78350F] to-[#2E1408] border border-[#F59E0B]/40 p-3.5 shadow-2xl overflow-hidden my-auto">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(245,158,11,0.25),transparent_60%)] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(251,191,36,0.18),transparent_70%)] pointer-events-none" />

                        <div className="flex items-start justify-between relative z-10">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FDFBF7]/90 uppercase">
                              CASH APP
                            </span>
                            <div className="w-6 h-4.5 rounded bg-gradient-to-br from-[#F59E0B] to-[#B45309] border border-[#FEF3C7]/40 flex items-center justify-center shadow-inner">
                              <div className="w-3.5 h-2.5 border border-[#78350F]/50 grid grid-cols-2 gap-0.5 p-0.5">
                                <span className="bg-[#78350F]/40 rounded-xs" />
                                <span className="bg-[#78350F]/40 rounded-xs" />
                              </div>
                            </div>
                          </div>
                          <CreditCard className="w-4 h-4 text-[#F5B041]/80" />
                        </div>

                        <div className="mt-3 flex items-end justify-between relative z-10">
                          <div>
                            <div className="text-[10px] font-mono font-bold text-[#FDFBF7] tracking-wider uppercase drop-shadow">
                              CAM WORBOYS
                            </div>
                            <div className="text-[8px] font-mono text-[#FDE68A]/80 tracking-widest">
                              TORTOISE EDITION
                            </div>
                          </div>
                          <div className="text-[9px] font-mono text-[#F59E0B] font-bold border border-[#F59E0B]/30 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-xs">
                            EXTRA CLICKS
                          </div>
                        </div>
                      </div>

                      {/* Bottom Rick Rubin Quote Plaque */}
                      <div className="flex items-center justify-between text-[10px] font-mono bg-[#1D140D] p-2 rounded border border-[#3E2818] text-[#E59A2F]">
                        <span className="font-semibold flex items-center gap-1 truncate">
                          <Disc className="w-3 h-3 text-[#E59A2F] shrink-0" />
                          "Confidence in taste"
                        </span>
                        <span className="text-[#A89F91] shrink-0">— Rick Rubin</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column (sm:col-span-7): Editorial Narrative Details */}
              <div className="sm:col-span-7 flex flex-col justify-center min-h-[270px]">
                <AnimatePresence mode="wait">
                  
                  {/* TRACK 00: The Sterile Dogma */}
                  {activeTrack === 0 && (
                    <motion.div
                      key="track-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6BA8D1] uppercase tracking-wider">
                        <Radio className="w-3.5 h-3.5" />
                        00 • The Sterile Dogma
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#FDFBF7] leading-tight">
                        "Safe flat plastic. <br />
                        Zero risk. Zero moat."
                      </h3>

                      <p className="text-sm font-mono text-[#D0C5B4] leading-relaxed">
                        Standard UX eliminated risk and sanitized every edge. But when everyone prompts the same models, sterile templates become invisible.
                      </p>

                      <div className="pt-1">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#6BA8D1] bg-[#6BA8D1]/10 border border-[#6BA8D1]/25 px-3 py-1.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6BA8D1] animate-ping" />
                          <span>Sameness yields zero differentiation</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TRACK 01: Claude Artifacts */}
                  {activeTrack === 1 && (
                    <motion.div
                      key="track-1"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4ADE80] uppercase tracking-wider">
                        <Code className="w-3.5 h-3.5" />
                        01 • Claude Artifacts
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#FDFBF7] leading-tight">
                        "Raw instinct over <br />
                        roadmap consensus."
                      </h3>

                      <p className="text-sm font-mono text-[#D0C5B4] leading-relaxed">
                        Michael bypassed 5-step PM checklists. He trusted personal conviction on a scrappy prototype that redefined how humanity works with AI.
                      </p>

                      <div className="pt-1">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#4ADE80] bg-[#4ADE80]/10 border border-[#4ADE80]/25 px-3 py-1.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-ping" />
                          <span>Taste outlier: intuition beats safe checklists</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TRACK 02: Cash App & Rick Rubin */}
                  {activeTrack === 2 && (
                    <motion.div
                      key="track-2"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E59A2F] uppercase tracking-wider">
                        <CreditCard className="w-3.5 h-3.5" />
                        02 • Cash App & Rick Rubin
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-[#FDFBF7] leading-tight">
                        "You're paid for the confidence <br />
                        in your taste."
                      </h3>

                      <p className="text-sm font-mono text-[#D0C5B4] leading-relaxed">
                        Tactile tortoise-shell debit cards and unapologetic character. Cam Worboys turned routine fintech into a cultural obsession.
                      </p>

                      <div className="pt-1">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E59A2F] bg-[#E59A2F]/10 border border-[#E59A2F]/25 px-3 py-1.5 rounded-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E59A2F] animate-ping" />
                          <span>Personal craft and soul cannot be copied</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

