import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { slides } from '@/components/presentation/SlidesContent';
import { SlideWrapper } from '@/components/presentation/SlideWrapper';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Home, FileText, MonitorPlay } from 'lucide-react';
import Head from 'next/head';
import { cn } from '@/lib/utils';

export default function PresentationPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Head>
        <title>Gorrie AI Presentation</title>
      </Head>

      {/* Top Bar */}
      <div className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/dashboard')}>
            <Home className="w-5 h-5" />
          </Button>
          <span className="font-bold text-gray-700">Slide {currentSlide + 1} / {slides.length}</span>
          <div className="w-48">
             <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant={showNotes ? "secondary" : "ghost"} 
            onClick={() => setShowNotes(!showNotes)}
            className="gap-2"
          >
            <FileText className="w-4 h-4" /> Notes
          </Button>
          <Button variant="outline" onClick={() => router.push('/demo')} className="text-blue-600 border-blue-200 hover:bg-blue-50">
             <MonitorPlay className="w-4 h-4 mr-2" /> Live Demo
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Slide View */}
        <div className={cn("flex-1 transition-all duration-300", showNotes ? "mr-80" : "")}>
           <SlideWrapper isActive={true} className="h-full">
             <CurrentSlideComponent />
           </SlideWrapper>
        </div>

        {/* Presenter Notes Sidebar */}
        <div className={cn(
          "absolute right-0 top-0 bottom-0 w-80 bg-white border-l border-gray-200 transform transition-transform duration-300 p-6 shadow-xl overflow-y-auto z-40",
          showNotes ? "translate-x-0" : "translate-x-full"
        )}>
          <h3 className="text-lg font-bold mb-4 text-gray-800">Presenter Notes</h3>
          <p className="text-gray-600 whitespace-pre-wrap leading-relaxed text-lg">
            {slides[currentSlide].notes}
          </p>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="font-bold text-sm text-gray-400 uppercase mb-2">Next Slide:</h4>
            <p className="text-sm text-gray-500">
              {currentSlide < slides.length - 1 ? slides[currentSlide + 1].title : "End of Presentation"}
            </p>
          </div>
        </div>

      </div>

      {/* Navigation Controls Overlay (Bottom) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 pointer-events-none z-50">
        <Button 
          variant="secondary" 
          size="icon" 
          className="pointer-events-auto rounded-full w-12 h-12 shadow-lg"
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="default" 
          size="icon" 
          className="pointer-events-auto rounded-full w-12 h-12 shadow-lg bg-red-600 hover:bg-red-700"
          onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          disabled={currentSlide === slides.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

    </div>
  );
}

