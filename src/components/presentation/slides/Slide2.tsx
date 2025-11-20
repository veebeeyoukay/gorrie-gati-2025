import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const sentences = [
  { start: "6", end: "7!", color: "bg-blue-500" },
  { start: "Wake", end: "Up!", color: "bg-yellow-500" },
  { start: "Get", end: "Ready!", color: "bg-green-500" },
  { start: "Brush your", end: "teeth!", color: "bg-cyan-500" },
  { start: "Pay", end: "Attention!", color: "bg-red-500" },
  { start: "Time for", end: "Recess", color: "bg-orange-500" }, // Adjusted prompt slightly
  { start: "Wash your", end: "hands!", color: "bg-purple-500" },
  { start: "Do your", end: "homework!", color: "bg-blue-500" },
  { start: "Its time for", end: "bed! zzzzz", color: "bg-pink-500" },

];

export const Slide2 = () => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [showSpecialSeven, setShowSpecialSeven] = useState(false);

  const toggleReveal = (index: number) => {
    if (!revealed.includes(index)) {
      setRevealed([...revealed, index]);
      if (sentences[index].end === "7!") {
        setShowSpecialSeven(true);
      }
    }
  };

  const allRevealed = revealed.length === sentences.length;

  return (
    <div className="flex flex-col h-full items-center relative">
      <AnimatePresence>
        {showSpecialSeven && (
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ 
              opacity: 1,
              scale: [0.1, 3.5, 0.1], // Zoom out (big) then in (small/gone)
            }}
            transition={{ 
              duration: 3,
              times: [0, 0.5, 1],
              ease: "easeInOut"
            }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            onAnimationComplete={() => setShowSpecialSeven(false)}
          >
             <motion.div
               animate={{ opacity: [1, 0.2, 1, 0.2, 1] }} // Flashing
               transition={{ duration: 0.5, repeat: Infinity }}
               className="bg-blue-500 text-white font-extrabold text-9xl p-12 rounded-3xl shadow-[0_0_100px_rgba(59,130,246,0.8)] border-8 border-white flex items-center justify-center aspect-square"
             >
               7!
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-5xl font-bold text-center mb-8 font-heading text-gray-800">
        Finish the Sentence! 🗣️
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {sentences.map((item, index) => (
          <Card 
            key={index}
            className={`cursor-pointer transform transition-all duration-300 hover:scale-105 border-4 ${revealed.includes(index) ? 'border-green-400' : 'border-gray-200'}`}
            onClick={() => toggleReveal(index)}
          >
            <div className="h-40 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
              <span className="text-3xl font-bold mb-2">{item.start}...</span>
              <AnimatePresence>
                {revealed.includes(index) ? (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className={`absolute inset-0 flex items-center justify-center ${item.color} text-white z-10`}
                  >
                    <span className="text-4xl font-extrabold">{item.end}</span>
                  </motion.div>
                ) : (
                  <div className="absolute bottom-2 text-gray-400 text-sm animate-pulse">Click to reveal</div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        ))}
      </div>

      <AnimatePresence>
        {allRevealed && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-12 bg-black text-white p-8 rounded-3xl shadow-2xl text-center border-4 border-red-500"
          >
            <div className="flex items-center justify-center gap-4 mb-2">
               <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
               <h3 className="text-4xl font-bold text-yellow-400">YOU just did what AI does!</h3>
               <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
            </div>
            <p className="text-xl text-gray-300">You guessed the next word based on patterns.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

