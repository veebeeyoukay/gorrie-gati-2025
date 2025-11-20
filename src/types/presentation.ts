export interface SlideData {
  id: number;
  title: string;
  component: React.ComponentType<any>;
  notes: string;
  duration?: number; // recommended duration in minutes
}

export interface PresentationContextProps {
  currentSlideIndex: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
  isPlaying: boolean;
  togglePlay: () => void;
  showNotes: boolean;
  toggleNotes: () => void;
}

