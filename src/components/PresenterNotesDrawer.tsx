import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, BookOpen, CheckSquare, Eye, Play, Pause, RotateCcw } from 'lucide-react';
import { SlideMeta } from '../types/presentation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideMeta;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export const PresenterNotesDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  slide,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 380 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 380 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-full max-w-md bg-[#181412] text-[#FDFBF7] border-l-2 border-[#3D352E] shadow-2xl z-50 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-4 border-b border-[#38302A] flex items-center justify-between bg-[#14100E]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#E59A2F]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FDFBF7]">
                SPEAKER PLAYBOOK • NOTES
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-[#251E1A] text-[#A89F91] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conference Live Pacing Timer Banner */}
          <div className="p-3 bg-[#201A16] border-b border-[#38302A] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E59A2F]" />
              <div>
                <div className="text-[10px] text-[#A89F91]">KEYNOTE TIMER</div>
                <div className="text-base font-bold text-[#FDFBF7] tracking-wider">
                  {formatTime(timerSeconds)} <span className="text-[11px] text-[#A89F91]">/ 30:00</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleTimer}
                className="px-2.5 py-1 rounded bg-[#2D241E] hover:bg-[#3D3128] border border-[#524439] flex items-center gap-1 text-[#E59A2F]"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isTimerRunning ? "Pause" : "Start"}</span>
              </button>
              <button
                onClick={onResetTimer}
                className="p-1.5 rounded bg-[#2D241E] hover:bg-[#3D3128] text-[#A89F91] hover:text-white"
                title="Reset timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Content Scroll Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Slide Title & Time allocation */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E59A2F] mb-1">
                <span>SLIDE {slide.slideNumber}</span>
                <span>•</span>
                <span>TARGET: {slide.timeRange}</span>
              </div>
              <h3 className="text-2xl font-editorial font-bold text-[#FDFBF7]">
                {slide.title}
              </h3>
              <p className="text-xs text-[#A89F91] italic font-mono mt-0.5">
                "{slide.subtitle}"
              </p>
            </div>

            {/* Key Takeaway */}
            <div className="p-3.5 rounded-lg bg-[#241B17] border-l-4 border-[#C83E2D] space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-[#FFA499]">
                CORE KEYNOTE TAKEAWAY
              </span>
              <p className="text-xs text-[#FDFBF7] font-medium leading-relaxed">
                {slide.keyTakeaway}
              </p>
            </div>

            {/* Visual Direction Notes */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#3D7EA6] font-bold">
                <Eye className="w-3.5 h-3.5" />
                <span>VISUAL DIRECTION & STAGING</span>
              </div>
              <p className="text-xs text-[#C8BFB3] bg-[#1F1916] p-3 rounded border border-[#38302A] leading-relaxed">
                {slide.visualDirection}
              </p>
            </div>

            {/* Talking Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#E59A2F] font-bold">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>KEY TALKING POINTS</span>
              </div>
              <ul className="space-y-2 text-xs text-[#E0D7CC]">
                {slide.talkingPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 bg-[#1C1714] p-2 rounded border border-[#352D27]">
                    <span className="text-[#E59A2F] font-mono text-[10px] font-bold mt-0.5">0{i + 1}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Speaker Script */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#FDFBF7] font-bold uppercase tracking-wider">
                SPEAKER SCRIPT (VERBATIM TELEPROMPTER)
              </div>
              <div className="p-4 rounded-lg bg-[#14110F] border border-[#38302A] text-xs text-[#D5C9B8] leading-relaxed whitespace-pre-line font-sans">
                {slide.speakerScript}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-[#38302A] bg-[#14100E] text-[11px] font-mono text-[#A89F91] flex items-center justify-between">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#2D241E] text-white">N</kbd> to toggle</span>
            <span className="text-[#E59A2F]">UX INDIA 2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
