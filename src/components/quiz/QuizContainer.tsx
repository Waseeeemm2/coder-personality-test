
import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { questions, AuraPoints, AuraType } from "@/data/quizData";

const QuizContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [auraPoints, setAuraPoints] = useState<AuraPoints>({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [dominantAura, setDominantAura] = useState<AuraType | null>(null);

  const handleAnswer = (questionId: number, optionId: string, points: AuraPoints) => {
    // Save the answer
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));

    // Add the points
    setAuraPoints((prev) => {
      const newPoints = { ...prev };
      
      // Add points for each aura type
      Object.entries(points).forEach(([auraType, points]) => {
        const typedAuraType = auraType as keyof AuraPoints;
        newPoints[typedAuraType] = (newPoints[typedAuraType] || 0) + points;
      });
      
      return newPoints;
    });

    // Move to the next question or finish the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate the dominant aura and finish the quiz
      calculateResult();
    }
  };

  const calculateResult = () => {
    // Find the aura type with the most points
    let maxPoints = 0;
    let dominantType: AuraType | null = null;

    Object.entries(auraPoints).forEach(([auraType, points]) => {
      if (points && points > maxPoints) {
        maxPoints = points;
        dominantType = auraType as AuraType;
      }
    });

    setDominantAura(dominantType);
    setQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setAuraPoints({});
    setQuizComplete(false);
    setDominantAura(null);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      {!quizComplete ? (
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
        />
      ) : (
        <QuizResult auraType={dominantAura as AuraType} onReset={resetQuiz} />
      )}
    </div>
  );
};

export default QuizContainer;
