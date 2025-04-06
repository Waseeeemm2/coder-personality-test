
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AuraType, auraResults } from "@/data/quizData";
import { motion } from "framer-motion";
import { Download, RefreshCw } from "lucide-react";
import html2canvas from "html2canvas";

interface QuizResultProps {
  auraType: AuraType;
  onReset: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ auraType, onReset }) => {
  const result = auraResults[auraType];

  const handleDownload = async () => {
    const resultCard = document.getElementById("aura-result-card");
    if (resultCard) {
      try {
        const canvas = await html2canvas(resultCard, { 
          backgroundColor: null,
          scale: 2, // Higher quality
        });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `waseem-developer-aura-${auraType}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Your Developer Aura</h1>
      
      <Card 
        id="aura-result-card"
        className="aura-card p-8 w-full max-w-md mx-auto overflow-hidden relative"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-20`} />
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center space-y-6">
            <span className="text-5xl sm:text-6xl">{result.emoji}</span>
            
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                {result.title}
              </h2>
              <p className="mt-4 text-gray-700">{result.description}</p>
            </div>
            
            <div className="border-t border-gray-200 w-full pt-6 mt-6">
              <p className="text-sm text-muted-foreground">
                Waseem's Developer Aura Quiz • Discover your coding personality
              </p>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
        <Button
          onClick={onReset}
          variant="outline"
          className="flex-1"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Retake Quiz
        </Button>
        
        <Button
          onClick={handleDownload}
          className="flex-1 bg-gradient-to-r from-aura-purple to-aura-pink hover:opacity-90"
        >
          <Download className="mr-2 h-4 w-4" /> Save Result
        </Button>
      </div>
    </motion.div>
  );
};

export default QuizResult;
