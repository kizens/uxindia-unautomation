import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RetroIllustrationFrame } from '../components/RetroIllustrationFrame';
import { Mail, Sparkles, ArrowRight, Terminal, HeartHandshake, Compass } from 'lucide-react';
import barberDayImg from '../assets/indian_street_barber_day.png';

interface SlideProps {
  step: number;
}

export const Slide01_Confession: React.FC<SlideProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 overflow-hidden bg-[#12100E]">
      {/* Subtle retro background grid & ambient warm glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,62,45,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E59A2F]/5 blur-3xl pointer-events-none" />

      {/* Slide Top Metadata */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#38302A] pb-4">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-[#C83E2D]/20 border border-[#C83E2D]/40 text-[#E85D4E] text-xs font-mono font-bold tracking-widest uppercase">
            UX INDIA 2026 • KEYNOTE
          </span>
          <span className="text-[#A89F91] text-xs font-mono tracking-wider hidden sm:inline">
            ACT I: THE CONFESSION • 0:00 — 3:00
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#E59A2F]">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
          <span>STEP {step + 1} OF 3</span>
        </div>
      </div>

      {/* Main Slide Body */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Bold Typographic Headline */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 text-[#E59A2F] text-xs uppercase font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#E59A2F] animate-ping" />
              AN EMBARRASSING, COMPLETELY TRUE CONFESSION
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FDFBF7] font-editorial leading-[1.05] mb-4">
              Design <br />
              <span className="text-[#C83E2D] italic">Un-automated.</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#D0C5B4] font-light tracking-wide max-w-lg mb-6">
              By a human. Powered by an idea.
            </p>

            {/* Micro-stepped callout based on current slide step */}
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#E59A2F] text-sm text-[#D5C9B8]"
                >
                  <strong className="text-[#FDFBF7] block font-mono text-xs uppercase mb-1">
                    BEAT 1 • THE INVITATION & THE CHAOS
                  </strong>
                  Invited to keynote UX India in the middle of a brutal, exhausting quarter. Inbox overflowing, Slack screaming, brain felt like mush.
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg bg-[#1C1815] border-l-4 border-[#3D7EA6] text-sm text-[#D5C9B8]"
                >
                  <strong className="text-[#FDFBF7] block font-mono text-xs uppercase mb-1">
                    BEAT 2 • THE 3.2-SECOND PROMPT
                  </strong>
                  Fed raw messy thoughts into ChatGPT. In 3.2 seconds it spit out a high-concept keynote. For a second, I felt like a wizard.
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="p-4 rounded-lg bg-[#261311] border-l-4 border-[#C83E2D] text-sm text-[#F7D8D5]"
                >
                  <strong className="text-[#FFA499] block font-mono text-xs uppercase mb-1">
                    BEAT 3 • THE COLD CHILL
                  </strong>
                  Realized I had outsourced my own reason. An intellectual tourist in my own keynote—visiting these slides instead of inhabiting them.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Visual Narrative Frame */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RetroIllustrationFrame
            badge="EXHIBIT A • THE ARTIFACTS"
            label="From Official Invitation to Autopilot Prompt"
            variant="dark"
            className="w-full"
          >
            <div className="space-y-4">
              {/* Artifact 1: Formal Invitation Card */}
              <motion.div
                animate={{
                  scale: step === 0 ? 1.02 : 0.98,
                  borderColor: step === 0 ? '#E59A2F' : '#38302A',
                  opacity: step >= 0 ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
                className="p-4 rounded-lg bg-[#241F1C] border transition-colors relative"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-[#E59A2F] mb-1.5">
                  <Mail className="w-4 h-4 text-[#E59A2F]" />
                  <span>INBOX • FORMAL INVITATION</span>
                </div>
                <p className="font-editorial text-lg text-[#FDFBF7] font-semibold">
                  "Dear Speaker, UX India invites you to deliver the 2026 Opening Keynote..."
                </p>
                <div className="mt-2 text-xs text-[#A89F91]">
                  Status: Exhausted quarter • Inbox overflowing • Brain mush
                </div>
              </motion.div>

              {/* Connecting Stepped Vector Arrow */}
              <div className="flex justify-center items-center py-0.5">
                <motion.div
                  animate={{
                    color: step >= 1 ? '#C83E2D' : '#554A40',
                    y: [0, 4, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase"
                >
                  <span>TEMPTATION TO OUTSOURCE</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Artifact 2: The Terminal Prompt */}
              <motion.div
                animate={{
                  scale: step >= 1 ? 1.02 : 0.98,
                  borderColor: step === 1 ? '#3D7EA6' : step === 2 ? '#C83E2D' : '#38302A',
                  opacity: step >= 1 ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className="p-4 rounded-lg bg-[#14110F] border font-mono text-xs text-[#D5C9B8] space-y-2 relative"
              >
                <div className="flex items-center justify-between text-[#8E8375] border-b border-[#2A241F] pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#3D7EA6]" />
                    <span>autopilot-session.txt</span>
                  </span>
                  <span className="text-[#34D399] font-bold">3.2s LATENCY</span>
                </div>
                <div className="text-[#FDFBF7]">
                  <span className="text-[#3D7EA6]">$</span> Help! Make a fancy keynote for me. Translate this raw mess into a high-concept paper.
                </div>
                <div className="p-2.5 rounded bg-[#1F1916] border border-[#3A2F28] text-[#E59A2F]">
                  <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#E59A2F]" />
                  <span>Output: "Design Un-automated: Reclaiming the Soul of Design"</span>
                </div>
              </motion.div>

              {/* Artifact 3: The Human Touch (Retro Street Barber Preview) */}
              <motion.div
                animate={{
                  opacity: step === 2 ? 1 : 0.85,
                  scale: step === 2 ? 1.01 : 0.99,
                }}
                className="relative rounded-lg overflow-hidden border border-[#524439] group"
              >
                <img
                  src={barberDayImg}
                  alt="Indian Street Barber — Soul and Human Craft"
                  className="w-full h-32 md:h-36 object-cover filter saturate-110 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-black/40 to-transparent flex items-end p-3">
                  <div className="text-xs font-mono text-[#FDFBF7] flex items-center justify-between w-full">
                    <span className="flex items-center gap-1.5">
                      <HeartHandshake className="w-3.5 h-3.5 text-[#C83E2D]" />
                      <span>THE MIRROR: Lived Human Soul vs. Algorithmic Autocomplete</span>
                    </span>
                    <span className="text-[#E59A2F] font-bold">[346, 360]</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </RetroIllustrationFrame>
        </div>
      </div>

      {/* Bottom Keynote Punchline */}
      <div className="relative z-10 flex flex-wrap items-center justify-between pt-4 border-t border-[#38302A] text-xs font-mono text-[#A89F91]">
        <div>
          PRESENTER KEYNOTE NOTE: <span className="text-[#FDFBF7]">Press → / Space to step forward through beats</span>
        </div>
        <div className="text-[#E59A2F] italic">
          "I had turned myself into an intellectual tourist in my own talk."
        </div>
      </div>
    </div>
  );
};
