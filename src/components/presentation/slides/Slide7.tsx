import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const Slide7 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Context: AI's Memory 🧠</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        
        {/* Panel 1 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg flex flex-col h-64 justify-between relative overflow-hidden"
        >
          <span className="absolute top-2 left-2 bg-yellow-300 px-2 font-bold border border-black text-sm">Panel 1</span>
          <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0 border-2 border-black" />
             <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none border-2 border-black text-sm font-bold">
               "My favorite color is BLUE."
             </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 italic">AI remembers this!</p>
        </motion.div>

        {/* Panel 2 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg flex flex-col h-64 justify-between relative overflow-hidden"
        >
          <span className="absolute top-2 left-2 bg-yellow-300 px-2 font-bold border border-black text-sm">Panel 2</span>
          <div className="flex items-start gap-4">
             <div className="w-12 h-12 bg-blue-500 rounded-full flex-shrink-0 border-2 border-black" />
             <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none border-2 border-black text-sm font-bold">
               "What color should I paint my room?"
             </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 italic">Asking a question later...</p>
        </motion.div>

        {/* Panel 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3 }}
          className="bg-yellow-50 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg flex flex-col h-64 justify-between relative overflow-hidden"
        >
          <span className="absolute top-2 left-2 bg-yellow-300 px-2 font-bold border border-black text-sm">Panel 3</span>
          <div className="flex flex-col items-end gap-4 mt-8">
             <div className="bg-red-500 text-white p-4 rounded-2xl rounded-tr-none border-2 border-black text-lg font-bold shadow-lg">
               "You should paint it BLUE!"
             </div>
             <div className="w-12 h-12 bg-red-600 rounded-md border-2 border-black flex items-center justify-center text-white font-bold">AI</div>
          </div>
        </motion.div>

      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="mt-12 text-2xl font-medium text-center max-w-3xl"
      >
        Context is like talking to a friend who listens. <br/>
        <span className="text-red-600 font-bold">If you don't tell AI the context, it won't know!</span>
      </motion.p>
    </div>
  );
};

