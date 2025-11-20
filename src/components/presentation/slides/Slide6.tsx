import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, MessageSquare } from 'lucide-react';

export const Slide6 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-heading">Asking Good Questions (Prompting) 💬</h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Bad Prompt */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-red-50 border-4 border-red-200 rounded-3xl p-8 flex flex-col h-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <XCircle className="w-12 h-12 text-red-500" />
            <h3 className="text-3xl font-bold text-red-700">Lazy Prompt</h3>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-red-100 mb-4 shadow-sm">
            <span className="text-gray-400 text-sm font-mono">You:</span>
            <p className="text-xl font-bold">"Write a story"</p>
          </div>

          <div className="bg-red-100 p-4 rounded-xl flex-grow">
            <span className="text-red-500 text-sm font-mono">AI:</span>
            <p className="italic text-gray-600">"Once upon a time there was a cat. The end."</p>
            <p className="mt-4 text-sm font-bold text-red-600">❌ Boring!</p>
          </div>
        </motion.div>

        {/* Good Prompt */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-green-50 border-4 border-green-200 rounded-3xl p-8 flex flex-col h-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <h3 className="text-3xl font-bold text-green-700">Super Prompt!</h3>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-green-100 mb-4 shadow-sm">
             <span className="text-gray-400 text-sm font-mono">You:</span>
            <p className="text-lg font-bold">"Write a funny story about a brave dragon who is afraid of heights."</p>
          </div>

          <div className="bg-green-100 p-4 rounded-xl flex-grow">
             <span className="text-green-600 text-sm font-mono">AI:</span>
            <p className="italic text-gray-800">"Sparky the dragon stood at the edge of the cliff. His knees knocked together. 'I'll just take the stairs,' he squeaked..."</p>
            <p className="mt-4 text-sm font-bold text-green-600">✅ Amazing!</p>
          </div>
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl flex items-center gap-3"
      >
        <MessageSquare className="w-6 h-6" />
        The better you ask, the better the answer!
      </motion.div>
    </div>
  );
};

