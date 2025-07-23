"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";

const quizQuestions = [
  {
    question: "Globally, what percentage of parliamentarians are women?",
    options: ["12%", "26%", "38%", "51%"],
    answer: "26%",
  },
  {
    question: "Which field has the largest gender gap in AI?",
    options: ["Data & AI", "Engineering", "Cloud Computing", "Product Development"],
    answer: "Data & AI",
  },
  {
    question: "Increasing women's participation in the economy could boost global GDP by how much?",
    options: ["$5 trillion", "$12 trillion", "$28 trillion", "$40 trillion"],
    answer: "$28 trillion",
  }
];

export default function InteractiveQuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowResult(false);
    setSelectedAnswer(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      setShowResult(true); // show final score
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };
  
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  }

  const isQuizFinished = showResult && currentQuestion === quizQuestions.length - 1;

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Test Your Knowledge</h2>
          <p className="max-w-3xl mx-auto text-foreground/70">
            Take our quick quiz to learn more about the challenges and opportunities in women's empowerment today.
          </p>
        </div>
        <Card className="max-w-2xl mx-auto bg-background shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              {isQuizFinished ? `Quiz Completed!` : `Question ${currentQuestion + 1}/${quizQuestions.length}`}
            </CardTitle>
            <CardDescription>
                {isQuizFinished ? `You scored ${score} out of ${quizQuestions.length}!` : quizQuestions[currentQuestion].question}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isQuizFinished ? (
                 <div className="text-center p-8 space-y-4">
                    <p className="text-lg">Thank you for participating! Knowledge is the first step towards action.</p>
                    <Button onClick={handleRestart}>Try Again</Button>
                </div>
            ) : (
                <div className="space-y-6">
                    <RadioGroup
                        onValueChange={setSelectedAnswer}
                        value={selectedAnswer ?? ""}
                        className="space-y-4"
                        disabled={showResult}
                    >
                        {quizQuestions[currentQuestion].options.map((option) => {
                            const isCorrect = option === quizQuestions[currentQuestion].answer;
                            const isSelected = selectedAnswer === option;
                            
                            let indicatorColor = "";
                            if (showResult && isSelected) {
                                indicatorColor = isCorrect ? "text-primary" : "text-destructive";
                            } else if (showResult && isCorrect) {
                                indicatorColor = "text-primary";
                            }

                            return (
                                <Label key={option} htmlFor={option} className={`flex items-center justify-between p-4 rounded-md border-2 cursor-pointer transition-all ${isSelected ? 'border-primary' : 'border-border'} ${indicatorColor}`}>
                                    <span className="font-semibold">{option}</span>
                                    <div className="flex items-center">
                                      {showResult && (isSelected || isCorrect) && (
                                        isCorrect ? <CheckCircle className="mr-2 text-primary" /> : <XCircle className="mr-2 text-destructive" />
                                      )}
                                      <RadioGroupItem value={option} id={option} />
                                    </div>
                                </Label>
                            )
                        })}
                    </RadioGroup>
                    <div className="flex justify-end">
                        {showResult ? (
                            <Button onClick={handleNext}>Next Question</Button>
                        ) : (
                            <Button onClick={handleSubmit} disabled={!selectedAnswer}>Submit</Button>
                        )}
                    </div>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
