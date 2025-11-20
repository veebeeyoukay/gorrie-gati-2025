import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Users, HelpCircle, Heart, Smartphone } from 'lucide-react';

const rules = [
  { icon: ShieldAlert, text: "Never share personal info (Name, Address, School)", color: "text-red-600", bg: "bg-red-100" },
  { icon: Users, text: "Always use AI with a grown-up", color: "text-blue-600", bg: "bg-blue-100" },
  { icon: HelpCircle, text: "AI makes mistakes - Don't believe everything!", color: "text-orange-600", bg: "bg-orange-100" },
  { icon: Heart, text: "Be kind! (Even to robots)", color: "text-pink-600", bg: "bg-pink-100" },
  { icon: Smartphone, text: "Tell an adult if something feels weird", color: "text-purple-600", bg: "bg-purple-100" },
];

export const Slide10 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-5xl font-bold text-center mb-12 font-heading text-red-700">AI Safety Rules 🛑</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-gray-200"
          >
            <div className={`${rule.bg} p-6 rounded-full mb-4`}>
              <rule.icon className={`w-12 h-12 ${rule.color}`} />
            </div>
            <p className="text-xl font-bold text-gray-800">{rule.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12 text-gray-500 text-lg"
      >
        Remember: AI is a tool, like a hammer or a pencil. <span className="font-bold text-black">YOU are the boss!</span>
      </motion.div>
    </div>
  );
};

