import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Grid, Clock, ChevronRight } from 'lucide-react';
import { SlideMeta } from '../types/presentation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideMeta[];
  currentSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewModal: React.FC<Props> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-5xl max-h-[90vh] bg-[#181412] border-2 border-[#3D352E] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-[#38302A] flex items-center justify-between bg-[#14100E]">
              <div className="flex items-center gap-3">
                <Grid className="w-5 h-5 text-[#E59A2F]" />
                <div>
                  <h2 className="font-editorial text-xl md:text-2xl font-bold text-[#FDFBF7]">
                    Keynote Slide Navigator
                  </h2>
                  <p className="text-xs font-mono text-[#A89F91]">
                    Design Un-automated • UX India 2026 • {slides.length} Slides
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#251E1A] hover:bg-[#352B24] text-[#A89F91] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Slides Grid */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slides.map((s, index) => {
                const isActive = index === currentSlideIndex;
                return (
                  <motion.div
                    key={s.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onSelectSlide(index);
                      onClose();
                    }}
                    className={`cursor-pointer rounded-xl p-4 border-2 transition-all flex flex-col justify-between h-44 relative ${
                      isActive
                        ? 'border-[#C83E2D] bg-[#261513] shadow-lg shadow-[#C83E2D]/20'
                        : 'border-[#38302A] bg-[#1F1916] hover:border-[#E59A2F]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-2">
                        <span className={`px-2 py-0.5 rounded font-bold ${
                          isActive ? 'bg-[#C83E2D] text-white' : 'bg-[#2E241E] text-[#E59A2F]'
                        }`}>
                          {s.slideNumber}
                        </span>
                        <span className="text-[#A89F91] text-[11px] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#E59A2F]" />
                          {s.timeRange}
                        </span>
                      </div>
                      <h4 className="font-editorial font-bold text-base text-[#FDFBF7] line-clamp-1">
                        {s.title}
                      </h4>
                      <p className="text-xs text-[#D5C9B8] mt-1 line-clamp-2">
                        {s.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-current/10 text-[10px] font-mono text-[#A89F91]">
                      <span className="uppercase">{s.badge}</span>
                      <span className="flex items-center gap-0.5 text-[#E59A2F]">
                        JUMP <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-[#38302A] bg-[#14100E] text-xs font-mono text-[#A89F91] flex items-center justify-between">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#2D241E] text-white">O</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-[#2D241E] text-white">Esc</kbd> to close</span>
              <span className="text-[#E59A2F]">Click any card to jump immediately</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
