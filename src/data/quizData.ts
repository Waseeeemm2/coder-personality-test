
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  auraPoints: AuraPoints;
}

// Different aura types that will determine the final result
export interface AuraPoints {
  nightOwl?: number;
  architect?: number;
  pioneer?: number;
  artisan?: number;
  sage?: number;
}

// Our quiz questions
export const questions: Question[] = [
  {
    id: 1,
    text: "When do you feel most productive coding?",
    options: [
      {
        id: "1a",
        text: "Late at night when everyone's asleep",
        auraPoints: { nightOwl: 5, architect: 1 },
      },
      {
        id: "1b",
        text: "Early morning with a fresh cup of coffee",
        auraPoints: { sage: 3, artisan: 2 },
      },
      {
        id: "1c",
        text: "Whenever inspiration strikes, day or night",
        auraPoints: { pioneer: 4, nightOwl: 1 },
      },
      {
        id: "1d",
        text: "Regular business hours with a structured schedule",
        auraPoints: { architect: 4, sage: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "How do you approach learning a new technology?",
    options: [
      {
        id: "2a",
        text: "Read the documentation carefully from start to finish",
        auraPoints: { sage: 4, architect: 2 },
      },
      {
        id: "2b",
        text: "Jump right in and build something, learning as you go",
        auraPoints: { pioneer: 5, artisan: 1 },
      },
      {
        id: "2c",
        text: "Find the best tutorial and follow along step by step",
        auraPoints: { artisan: 3, sage: 2 },
      },
      {
        id: "2d",
        text: "Explore the architecture to understand how it all fits together",
        auraPoints: { architect: 5, nightOwl: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "What's your preferred development environment?",
    options: [
      {
        id: "3a",
        text: "Dark mode everything, with custom syntax highlighting",
        auraPoints: { nightOwl: 4, artisan: 1 },
      },
      {
        id: "3b",
        text: "Light mode, clean and minimal setup",
        auraPoints: { architect: 3, sage: 2 },
      },
      {
        id: "3c",
        text: "Constantly tweaking and customizing your tools",
        auraPoints: { artisan: 5, pioneer: 1 },
      },
      {
        id: "3d",
        text: "Whatever helps you move the fastest",
        auraPoints: { pioneer: 3, nightOwl: 2 },
      },
    ],
  },
  {
    id: 4,
    text: "When facing a difficult bug, you usually:",
    options: [
      {
        id: "4a",
        text: "Methodically trace through the code with careful debugging",
        auraPoints: { architect: 4, sage: 2 },
      },
      {
        id: "4b",
        text: "Ask for help from colleagues or online communities",
        auraPoints: { sage: 4, artisan: 1 },
      },
      {
        id: "4c",
        text: "Try multiple quick approaches until something works",
        auraPoints: { pioneer: 3, nightOwl: 3 },
      },
      {
        id: "4d",
        text: "Take a break and return with fresh eyes later",
        auraPoints: { nightOwl: 3, artisan: 3 },
      },
    ],
  },
  {
    id: 5,
    text: "What aspect of development excites you most?",
    options: [
      {
        id: "5a",
        text: "Creating elegant, efficient solutions to complex problems",
        auraPoints: { architect: 5, sage: 1 },
      },
      {
        id: "5b",
        text: "Building beautiful, interactive user experiences",
        auraPoints: { artisan: 5, pioneer: 1 },
      },
      {
        id: "5c",
        text: "Working with cutting-edge technologies and approaches",
        auraPoints: { pioneer: 5, nightOwl: 1 },
      },
      {
        id: "5d",
        text: "Mentoring others and sharing knowledge",
        auraPoints: { sage: 5, architect: 1 },
      },
    ],
  },
];

// The possible aura results
export const auraResults = {
  nightOwl: {
    title: "The Night Owl Hacker",
    emoji: "🦉✨",
    color: "from-purple-600 to-indigo-900",
    description: "You thrive in the quiet hours when the world sleeps. Your code flows best after midnight, fueled by creativity and focus that comes in the stillness of night. Your unique perspective leads to unconventional but brilliant solutions."
  },
  architect: {
    title: "The System Architect",
    emoji: "🏛️💭",
    color: "from-blue-600 to-cyan-700",
    description: "You see the big picture where others see only pieces. Your strength lies in designing robust systems with clean architecture. You value efficiency and elegance, building solutions that stand the test of time."
  },
  pioneer: {
    title: "The Tech Pioneer",
    emoji: "🚀🔮",
    color: "from-amber-500 to-orange-600",
    description: "Always on the cutting edge, you're excited by new technologies and approaches. You boldly go where other developers haven't, pushing boundaries and embracing change. Innovation is your driving force."
  },
  artisan: {
    title: "The Code Artisan",
    emoji: "🎨💻",
    color: "from-pink-500 to-rose-600",
    description: "You view code as a craft to be perfected. With meticulous attention to detail, you create beautiful, clean solutions. Your work isn't just functional—it's artful, showing pride in even the smallest details."
  },
  sage: {
    title: "The Developer Sage",
    emoji: "🧠📚",
    color: "from-emerald-500 to-green-700",
    description: "Your wisdom and methodical approach set you apart. With deep knowledge and patient problem-solving, you're the one others turn to for guidance. You value learning and sharing knowledge above all else."
  }
};

// Type for the final aura result
export type AuraType = keyof typeof auraResults;
