export interface SlideMeta {
  id: number;
  slideNumber: string;
  slug: string;
  title: string;
  themePhrase: string;
  subtitle: string;
  timeRange: string;
  targetMinutes: number;
  badge: string;
  citations: string[];
  visualDirection: string;
  mainQuote: string;
  subQuote: string;
  talkingPoints: string[];
  speakerScript: string;
  keyTakeaway: string;
  stepsCount: number; // Number of stepped micro-beats on click/right-arrow
}

export interface NavigationControls {
  currentSlide: number;
  currentStep: number;
  totalSlides: number;
  currentSlideSteps: number;
  next: () => void;
  prev: () => void;
  goToSlide: (index: number, step?: number) => void;
  toggleNotes: () => void;
  isNotesOpen: boolean;
  toggleOverview: () => void;
  isOverviewOpen: boolean;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}
