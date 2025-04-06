
import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Code, Brain, Palette, Terminal } from "lucide-react";

interface QuizLandingProps {
  onStart: () => void;
}

const QuizLanding: React.FC<QuizLandingProps> = ({ onStart }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center max-w-3xl mx-auto gap-8 animate-fade-in">
      <div className="space-y-2">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-aura-purple/10 text-aura-purple mb-4">
          <Sparkles size={16} className="mr-2" />
          <span className="text-sm font-medium">Discover Your Coding Identity</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-aura-purple to-aura-pink bg-clip-text text-transparent">
          Waseem's Developer Aura
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mt-4 max-w-2xl">
          Take this quick personality quiz to reveal your unique developer aura. 
          What kind of coder are you at your core?
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        {[
          { icon: <Code size={24} />, label: "Coding Style" },
          { icon: <Terminal size={24} />, label: "Work Habits" },
          { icon: <Palette size={24} />, label: "Creative Approach" },
          { icon: <Brain size={24} />, label: "Problem Solving" },
        ].map((item, index) => (
          <div 
            key={index} 
            className="aura-card p-4 flex flex-col items-center justify-center gap-2 aspect-square"
          >
            <div className="p-2 rounded-full bg-aura-purple/10 text-aura-purple">
              {item.icon}
            </div>
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>

      <Button 
        onClick={onStart}
        size="lg" 
        className="bg-gradient-to-r from-aura-purple to-aura-pink hover:opacity-90 transition-all text-white border-0 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-aura-purple/20 mt-6"
      >
        <Sparkles className="mr-2 h-4 w-4" /> Start Quiz
      </Button>

      <div className="text-sm text-muted-foreground">
        5 quick questions • 2 min • Discover your developer aura
      </div>
    </div>
  );
};

export default QuizLanding;
