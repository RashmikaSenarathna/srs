import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Timer, 
  HelpCircle,
  Award,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { MOCK_QUESTIONS } from '../constants';

export const QuizView: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / MOCK_QUESTIONS.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < MOCK_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-16 rounded-[4rem] shadow-2xl shadow-gray-200 max-w-2xl w-full text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-saffron/10 text-saffron rounded-[2rem] flex items-center justify-center mx-auto mb-10">
            <Award className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-manrope font-extrabold mb-4 tracking-tight">Quiz Completed!</h1>
          <p className="text-gray-500 mb-12 text-lg">You've successfully completed the <span className="text-gray-900 font-bold">Noble Truths Assessment</span>.</p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-surface p-8 rounded-[2.5rem] border border-gray-100">
              <div className="text-4xl font-extrabold text-saffron mb-1">{score}/{MOCK_QUESTIONS.length}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Score</div>
            </div>
            <div className="bg-surface p-8 rounded-[2.5rem] border border-gray-100">
              <div className="text-4xl font-extrabold text-blue-monk mb-1">{Math.round((score / MOCK_QUESTIONS.length) * 100)}%</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Accuracy</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => navigate('/student')}
              className="w-full py-5 bg-saffron text-white rounded-3xl font-bold text-lg hover:shadow-xl hover:shadow-saffron/20 transition-all active:scale-95"
            >
              Back to Dashboard
            </button>
            <button 
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedOption(null);
                setIsAnswered(false);
                setScore(0);
                setShowResults(false);
              }}
              className="w-full py-5 bg-white border border-gray-200 text-gray-900 rounded-3xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95"
            >
              Retake Quiz
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <button 
            onClick={() => navigate('/student')}
            className="flex items-center gap-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-50 transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            Exit Quiz
          </button>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
              <Timer className="w-5 h-5" />
              <span>12:45 Remaining</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-gray-900">
              <HelpCircle className="w-5 h-5 text-saffron" />
              <span>Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}</span>
            </div>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-white border border-gray-100 rounded-full mb-16 overflow-hidden p-0.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-saffron rounded-full shadow-[0_0_10px_rgba(239,108,0,0.3)]"
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-16 rounded-[4rem] shadow-2xl shadow-gray-200 border border-gray-100"
          >
            <h2 className="text-3xl font-manrope font-extrabold mb-12 leading-tight tracking-tight">
              {currentQuestion.text}
            </h2>

            <div className="space-y-4 mb-12">
              {currentQuestion.options.map((option, i) => {
                const isSelected = selectedOption === i;
                const isCorrect = isAnswered && i === currentQuestion.correctAnswer;
                const isWrong = isAnswered && isSelected && i !== currentQuestion.correctAnswer;

                return (
                  <button 
                    key={i}
                    onClick={() => handleOptionSelect(i)}
                    disabled={isAnswered}
                    className={cn(
                      "w-full flex items-center justify-between p-6 rounded-3xl text-left font-bold transition-all border-2",
                      isSelected && !isAnswered && "border-saffron bg-saffron/5 text-saffron",
                      !isSelected && !isAnswered && "border-gray-50 bg-surface hover:border-gray-200 hover:bg-gray-100",
                      isCorrect && "border-green-500 bg-green-50 text-green-700",
                      isWrong && "border-red-500 bg-red-50 text-red-700",
                      isAnswered && !isSelected && !isCorrect && "border-gray-50 bg-surface opacity-50"
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <span className={cn(
                        "w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-extrabold",
                        isSelected && !isAnswered && "bg-saffron text-white",
                        !isSelected && !isAnswered && "bg-white text-gray-400",
                        isCorrect && "bg-green-500 text-white",
                        isWrong && "bg-red-500 text-white"
                      )}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </span>
                    {isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                    {isWrong && <XCircle className="w-6 h-6 text-red-500" />}
                  </button>
                );
              })}
            </div>

            {/* Feedback Section */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "p-8 rounded-[2.5rem] mb-12 border",
                    selectedOption === currentQuestion.correctAnswer 
                      ? "bg-green-50/50 border-green-100 text-green-800" 
                      : "bg-red-50/50 border-red-100 text-red-800"
                  )}
                >
                  <div className="flex items-center gap-3 mb-3 font-bold text-sm uppercase tracking-widest">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <><CheckCircle2 className="w-5 h-5" /> Correct Answer!</>
                    ) : (
                      <><XCircle className="w-5 h-5" /> Incorrect Answer</>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed font-medium opacity-80">
                    {currentQuestion.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              {!isAnswered ? (
                <button 
                  onClick={handleCheckAnswer}
                  disabled={selectedOption === null}
                  className="px-10 py-4 bg-blue-monk text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-monk/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check Answer
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="px-10 py-4 bg-saffron text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-saffron/20 transition-all active:scale-95 flex items-center gap-2"
                >
                  {currentQuestionIndex < MOCK_QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
