
import React, { useState } from "react";
import QuizLanding from "@/components/quiz/QuizLanding";
import QuizContainer from "@/components/quiz/QuizContainer";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-aura-lightPurple to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-aura-purple/5 to-transparent opacity-70" />
      
      <div className="container relative z-10 mx-auto px-4 py-8 flex flex-col min-h-screen">
        {!quizStarted ? (
          <QuizLanding onStart={() => setQuizStarted(true)} />
        ) : (
          <QuizContainer />
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-aura-blue/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-aura-pink/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-aura-purple/5 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default Index;
