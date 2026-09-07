import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Grid 
} from 'lucide-react';
import { SlideMeta } from '../types/presentation';

interface Props {
  currentSlideIndex: number;
  totalSlides: number;
  currentStep: number;
  totalSteps: number;
  currentSlide: SlideMeta;
  onNext: () => void;
  onPrev: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleOverview: () => void;
  isOverviewOpen: boolean;
}

export const NavigationHUD: React.FC<Props> = ({
  currentSlideIndex,
  totalSlides,
  currentStep,
  totalSteps,
  currentSlide,
  onNext,
  onPrev,
  onToggleNotes,
  isNotesOpen,
  onToggleOverview,
  isOverviewOpen,
}) => {
  const progressPercent = (currentSlideIndex / (totalSlides - 1)) * 100;

  return (
    <>
      {/* Top Edge Slim Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#201B18] z-40">
        <div 
          className="h-full bg-gradient-to-r from-[#C83E2D] via-[#E59A2F] to-[#4ADE80] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        />
      </div>

      {/* Floating Bottom HUD Controls */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 md:gap-3 bg-[#181412]/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#3D352E] shadow-2xl text-xs font-mono text-[#D5C9B8]">
        {/* Prev Slide / Beat */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0 && currentStep === 0}
          className="p-1.5 rounded-full hover:bg-[#2A221C] disabled:opacity-30 disabled:hover:bg-transparent text-[#FDFBF7] transition-all flex items-center gap-1 cursor-pointer"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px]">Prev</span>
        </button>

        {/* Slide Counter & Beat Dots */}
        <div className="flex items-center gap-2 px-3 border-x border-[#38302A]">
          <span className="text-[#FDFBF7] font-bold">
            {currentSlide.slideNumber} <span className="text-[#A89F91]">/ {totalSlides.toString().padStart(2, '0')}</span>
          </span>

          {/* Stepped Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentStep
                    ? 'bg-[#E59A2F] scale-125'
                    : i < currentStep
                    ? 'bg-[#C83E2D]'
                    : 'bg-[#38302A]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Slide / Beat */}
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1 && currentStep === totalSteps - 1}
          className="p-1.5 rounded-full bg-[#C83E2D] hover:bg-[#D84C3B] disabled:opacity-30 text-white transition-all flex items-center gap-1 px-3.5 font-bold shadow-md cursor-pointer"
          title="Next (Right Arrow or Space)"
        >
          <span className="text-[11px]">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Presenter Notes Button */}
        <button
          onClick={onToggleNotes}
          className={`p-1.5 rounded-full transition-colors flex items-center gap-1.5 px-2.5 cursor-pointer ${
            isNotesOpen ? 'bg-[#E59A2F] text-[#14100E] font-bold' : 'hover:bg-[#2A221C] text-[#A89F91] hover:text-white'
          }`}
          title="Speaker Notes (N)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[11px]">Notes [N]</span>
        </button>

        {/* Slide Overview Grid Button */}
        <button
          onClick={onToggleOverview}
          className={`p-1.5 rounded-full transition-colors flex items-center gap-1.5 px-2.5 cursor-pointer ${
            isOverviewOpen ? 'bg-[#E59A2F] text-[#14100E] font-bold' : 'hover:bg-[#2A221C] text-[#A89F91] hover:text-white'
          }`}
          title="Overview Grid (O)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[11px]">Grid [O]</span>
        </button>
      </div>
    </>
  );
};
