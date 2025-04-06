
import React from "react";
import { Question, Option, AuraPoints } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (questionId: number, optionId: string, points: AuraPoints) => void;
  currentIndex: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  currentIndex,
  totalQuestions,
}) => {
  const handleSelect = (option: Option) => {
    onAnswer(question.id, option.id, option.auraPoints);
  };

  // Calculate progress percentage
  const progress = ((currentIndex) / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="aura-card p-6 md:p-8 w-full">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Question {currentIndex + 1} of {totalQuestions}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <h2 className="text-2xl font-bold">{question.text}</h2>
          
          <RadioGroup className="grid gap-4">
            {question.options.map((option) => (
              <div key={option.id}>
                <div
                  className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => handleSelect(option)}
                >
                  <RadioGroupItem value={option.id} id={option.id} className="text-primary" />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer font-normal">
                    {option.text}
                  </Label>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      </Card>
    </motion.div>
  );
};

export default QuizQuestion;
