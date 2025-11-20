import { Slide1 } from './slides/Slide1';
import { Slide2 } from './slides/Slide2';
import { Slide3 } from './slides/Slide3';
import { Slide4 } from './slides/Slide4';
import { Slide5 } from './slides/Slide5';
import { Slide6 } from './slides/Slide6';
import { Slide7 } from './slides/Slide7';
import { Slide8 } from './slides/Slide8';
import { Slide9 } from './slides/Slide9';
import { Slide10 } from './slides/Slide10';
import { SlideData } from '@/types/presentation';

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Intro",
    component: Slide1,
    notes: "Introduce yourself. Ask for show of hands. Explain we are going to learn how the 'magic' works.",
    duration: 2
  },
  {
    id: 2,
    title: "Finish the Sentence",
    component: Slide2,
    notes: "Play the game! Get them shouting out answers. This proves they already have 'predictive' brains.",
    duration: 3
  },
  {
    id: 3,
    title: "History",
    component: Slide3,
    notes: "Briefly touch on history. Computers used to be just calculators. Now they are creators.",
    duration: 2
  },
  {
    id: 4,
    title: "Library Metaphor",
    component: Slide4,
    notes: "Explain training data. Imagine reading every book in the library. That's what AI did.",
    duration: 2
  },
  {
    id: 5,
    title: "Prediction",
    component: Slide5,
    notes: "Show the math. AI assigns percentages to the next word. It's a guessing machine.",
    duration: 2
  },
  {
    id: 6,
    title: "Prompting",
    component: Slide6,
    notes: "Garbage in, garbage out. Show how details change the result. Encourage them to be specific.",
    duration: 3
  },
  {
    id: 7,
    title: "Context",
    component: Slide7,
    notes: "Memory is key. If you don't say it, AI doesn't know it.",
    duration: 2
  },
  {
    id: 8,
    title: "Tokens",
    component: Slide8,
    notes: "Break down the word. It's like syllables but for computers. Show the counter.",
    duration: 2
  },
  {
    id: 9,
    title: "Demo Prep",
    component: Slide9,
    notes: "Set ground rules before switching to the live demo. Manage expectations.",
    duration: 1
  },
  {
    id: 10,
    title: "Safety",
    component: Slide10,
    notes: "Critical slide. Personal info is private. Always ask parents.",
    duration: 1
  }
];

