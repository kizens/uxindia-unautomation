import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen } from 'lucide-react';
import { SlideMeta } from '../types/presentation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideMeta;
}

export const PresenterNotesDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  slide,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 420 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 420 }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#181412] text-[#FDFBF7] border-l-2 border-[#3D352E] shadow-2xl z-50 flex flex-col justify-between"
        >
          {/* Minimal Clean Header */}
          <div className="p-4 md:p-5 border-b border-[#38302A] flex items-center justify-between bg-[#14100E]">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#E59A2F]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FDFBF7]">
                Slide {slide.slideNumber} • Speaker Notes
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#251E1A] text-[#A89F91] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Speaker Notes Body (Only the Speaker's Notes, Clean & Easy to Read) */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4">
            <div className="text-sm md:text-base text-[#E2D8CC] leading-relaxed whitespace-pre-line font-sans selection:bg-[#C83E2D] selection:text-white">
              {slide.speakerScript}
            </div>
          </div>

          {/* Minimal Footer */}
          <div className="p-3.5 border-t border-[#38302A] bg-[#14100E] text-xs font-mono text-[#A89F91] flex items-center justify-between">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#2D241E] text-white">N</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-[#2D241E] text-white">Esc</kbd> to close</span>
            <span className="text-[#E59A2F]">Speaker Teleprompter</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
