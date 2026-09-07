import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SLIDES_DATA } from '../data/slidesData';
import { NavigationHUD } from './NavigationHUD';
import { PresenterNotesDrawer } from './PresenterNotesDrawer';
import { SlideOverviewModal } from './SlideOverviewModal';

// Slide Components
import { Slide01_Confession } from '../slides/Slide01_Confession';
import { Slide02_SpeakerIntro } from '../slides/Slide02_SpeakerIntro';
import { Slide02_AutopilotFlow } from '../slides/Slide02_AutopilotFlow';
import { Slide03_CollectiveHomogenization } from '../slides/Slide03_CollectiveHomogenization';
import { Slide04_ForkliftAtGym } from '../slides/Slide04_ForkliftAtGym';
import { Slide05_EDFrontier } from '../slides/Slide05_EDFrontier';
import { Slide06_AutomateVsDrive } from '../slides/Slide06_AutomateVsDrive';
import { Slide07_CalibratedTrust } from '../slides/Slide07_CalibratedTrust';
import { Slide08_HumiliatingMirror } from '../slides/Slide08_HumiliatingMirror';
import { Slide09_OpinionatedDesign } from '../slides/Slide09_OpinionatedDesign';
import { Slide10_Roadmap } from '../slides/Slide10_Roadmap';

const SLIDE_COMPONENTS = [
  Slide01_Confession,
  Slide02_SpeakerIntro,
  Slide02_AutopilotFlow,
  Slide03_CollectiveHomogenization,
  Slide04_ForkliftAtGym,
  Slide05_EDFrontier,
  Slide06_AutomateVsDrive,
  Slide07_CalibratedTrust,
  Slide08_HumiliatingMirror,
  Slide09_OpinionatedDesign,
  Slide10_Roadmap,
];

export const Presentation: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('slide');
    if (s !== null) {
      const idx = parseInt(s, 10);
      if (!isNaN(idx) && idx >= 0 && idx < SLIDE_COMPONENTS.length) return idx;
    }
    return 0;
  });
  const [currentStep, setCurrentStep] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const st = params.get('step');
    if (st !== null) {
      const sidx = parseInt(st, 10);
      if (!isNaN(sidx) && sidx >= 0) return sidx;
    }
    return 0;
  });
  const [direction, setDirection] = useState(1);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  // Sync state to URL for bookmarking and refresh preservation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('slide', currentSlideIndex.toString());
    params.set('step', currentStep.toString());
    window.history.replaceState(null, '', `?${params.toString()}`);
  }, [currentSlideIndex, currentStep]);

  const currentSlide = SLIDES_DATA[currentSlideIndex];
  const totalSteps = currentSlide.stepsCount;

  // Advance Next (Beat or Slide)
  const next = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
      setCurrentStep(0);
    }
  }, [currentStep, totalSteps, currentSlideIndex]);

  // Advance Prev (Beat or Slide)
  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else if (currentSlideIndex > 0) {
      setDirection(-1);
      const prevSlide = SLIDES_DATA[currentSlideIndex - 1];
      setCurrentSlideIndex(prev => prev - 1);
      setCurrentStep(prevSlide.stepsCount - 1);
    }
  }, [currentStep, currentSlideIndex]);

  // Jump directly to a slide
  const goToSlide = useCallback((index: number, step = 0) => {
    if (index >= 0 && index < SLIDES_DATA.length) {
      setDirection(index >= currentSlideIndex ? 1 : -1);
      setCurrentSlideIndex(index);
      setCurrentStep(step);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          prev();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen(prev => !prev);
          break;
        case 'o':
        case 'O':
          e.preventDefault();
          setIsOverviewOpen(prev => !prev);
          break;
        case 'Escape':
          if (isOverviewOpen) setIsOverviewOpen(false);
          if (isNotesOpen) setIsNotesOpen(false);
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0, 0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES_DATA.length - 1, 0);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, isOverviewOpen, isNotesOpen, goToSlide]);

  const CurrentSlideComponent = SLIDE_COMPONENTS[currentSlideIndex];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#12100E] text-[#FDFBF7] flex flex-col justify-center items-center">
      {/* Slide Presentation Canvas (Standard 16:9 cinematic presentation viewport) */}
      <div className="w-full h-full max-w-[1920px] max-h-[1080px] relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`slide-${currentSlideIndex}`}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex flex-col"
          >
            <CurrentSlideComponent step={currentStep} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation HUD Controls */}
      <NavigationHUD
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDES_DATA.length}
        currentStep={currentStep}
        totalSteps={totalSteps}
        currentSlide={currentSlide}
        onNext={next}
        onPrev={prev}
        onToggleNotes={() => setIsNotesOpen(prev => !prev)}
        isNotesOpen={isNotesOpen}
        onToggleOverview={() => setIsOverviewOpen(prev => !prev)}
        isOverviewOpen={isOverviewOpen}
      />

      {/* Slide-out Presenter Notes Drawer (Only Speaker Notes) */}
      <PresenterNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={SLIDES_DATA}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={goToSlide}
      />
    </div>
  );
};
