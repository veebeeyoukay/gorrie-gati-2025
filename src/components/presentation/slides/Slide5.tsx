import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, ArrowRight, Brain } from 'lucide-react';

export const Slide5 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">How AI Predicts Words 🔮</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 w-full max-w-6xl">
        
        {/* Human Side */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-blue-100 p-6 rounded-full mb-6">
            <User className="w-20 h-20 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold mb-4">You</h3>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 w-full text-center">
            <p className="text-2xl mb-2">"Mine____"</p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-blue-600 font-bold text-3xl"
            >
              ...craft!
            </motion.div>
          </div>
          <p className="mt-4 text-gray-500 text-center">You use your memory of the game.</p>
        </div>

        <ArrowRight className="w-12 h-12 text-gray-300 hidden md:block" />

        {/* AI Side */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-red-100 p-6 rounded-full mb-6">
            <Cpu className="w-20 h-20 text-red-600" />
          </div>
          <h3 className="text-3xl font-bold mb-4">AI Computer</h3>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-red-200 w-full text-center">
            <p className="text-2xl mb-2">"Mine____"</p>
            <div className="flex justify-center gap-2 mt-2">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 2 }}
                 className="bg-gray-100 px-2 py-1 rounded text-xs"
               >
                 craft (99%)
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 2.2 }}
                 className="bg-gray-100 px-2 py-1 rounded text-xs opacity-50"
               >
                 field (0.1%)
               </motion.div>
            </div>
          </div>
          <p className="mt-4 text-gray-500 text-center">AI uses math to guess the most likely next word.</p>
        </div>

      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3 }}
        className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded max-w-3xl w-full flex items-center gap-4"
      >
        <Brain className="w-12 h-12 text-orange-600 flex-shrink-0" />
        <div className="text-left">
          <h4 className="text-xl font-bold text-orange-800">The Secret:</h4>
          <p className="text-lg text-orange-700">AI doesn't "know" what Minecraft is. It just knows that "craft" usually comes after "Mine"!</p>
        </div>
      </motion.div>
    </div>
  );
};

