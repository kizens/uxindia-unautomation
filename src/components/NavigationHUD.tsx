import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Grid, 
  Maximize, 
  Minimize, 
  Clock, 
  Compass,
  Play,
  Pause
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
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
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
  isFullscreen,
  onToggleFullscreen,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
}) => {
  // Format MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Progress percentage (including steps)
  const totalBeats = totalSlides * 3;
  const currentBeatIndex = currentSlideIndex * 3 + Math.min(currentStep, 2);
  const progressPercent = ((currentSlideIndex) / (totalSlides - 1)) * 100;

  // Timer color warning (green -> amber -> red)
  const timerBadgeColor = 
    timerSeconds > 27 * 60 
      ? 'text-[#FF6B57] bg-[#C83E2D]/20 border-[#C83E2D]/40' 
      : timerSeconds > 20 * 60 
      ? 'text-[#F5B041] bg-[#E59A2F]/20 border-[#E59A2F]/40' 
      : 'text-[#4ADE80] bg-[#2E6F40]/20 border-[#2E6F40]/40';

  return (
    <>
      {/* Top Edge Slim Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-[#201B18] z-40">
        <div 
          className="h-full bg-gradient-to-r from-[#C83E2D] via-[#E59A2F] to-[#4ADE80] transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        />
      </div>

      {/* Floating Bottom HUD Controls */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 md:gap-3 bg-[#181412]/90 backdrop-blur-md px-3 py-2 rounded-full border border-[#3D352E] shadow-2xl text-xs font-mono text-[#D5C9B8]">
        {/* Prev Slide / Beat */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0 && currentStep === 0}
          className="p-1.5 rounded-full hover:bg-[#2A221C] disabled:opacity-30 disabled:hover:bg-transparent text-[#FDFBF7] transition-all flex items-center gap-1"
          title="Previous (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px]">Prev</span>
        </button>

        {/* Slide Counter & Beat Dots */}
        <div className="flex items-center gap-2 px-2 border-x border-[#38302A]">
          <span className="text-[#FDFBF7] font-bold">
            {currentSlide.slideNumber} <span className="text-[#A89F91]">/ {totalSlides.toString().padStart(2, '0')}</span>
          </span>

          {/* Stepped Dots */}
          <div className="flex items-center gap-1">
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
          className="p-1.5 rounded-full bg-[#C83E2D] hover:bg-[#D84C3B] disabled:opacity-30 text-white transition-all flex items-center gap-1 px-3 font-bold shadow-md"
          title="Next (Right Arrow or Space)"
        >
          <span className="text-[11px]">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Presenter Notes Button */}
        <button
          onClick={onToggleNotes}
          className={`p-1.5 rounded-full transition-colors flex items-center gap-1 px-2 ${
            isNotesOpen ? 'bg-[#E59A2F] text-[#14100E] font-bold' : 'hover:bg-[#2A221C] text-[#A89F91] hover:text-white'
          }`}
          title="Speaker Notes (N)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px]">Notes [N]</span>
        </button>

        {/* Slide Overview Grid Button */}
        <button
          onClick={onToggleOverview}
          className={`p-1.5 rounded-full transition-colors flex items-center gap-1 px-2 ${
            isOverviewOpen ? 'bg-[#E59A2F] text-[#14100E] font-bold' : 'hover:bg-[#2A221C] text-[#A89F91] hover:text-white'
          }`}
          title="Overview Grid (O)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden md:inline text-[10px]">Grid [O]</span>
        </button>

        {/* Conference Timer */}
        <button
          onClick={onToggleTimer}
          className={`px-2 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1 transition-all ${timerBadgeColor}`}
          title="Click to Pause/Start Timer"
        >
          <Clock className="w-3 h-3" />
          <span>{formatTime(timerSeconds)}</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-full hover:bg-[#2A221C] text-[#A89F91] hover:text-white transition-colors"
          title="Fullscreen (F)"
        >
          {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
        </button>
      </div>
    </>
  );
};
