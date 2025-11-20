import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  isActive: boolean;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className, isActive }) => {
  return (
    <div className={cn("w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden relative", className)}>
       <AnimatePresence mode='wait'>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full max-w-6xl mx-auto flex flex-col"
            >
              {children}
            </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
};

