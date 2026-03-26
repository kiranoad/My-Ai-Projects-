import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Zap, Brain, ArrowRight, CheckCircle2, XCircle, RefreshCcw, Award, Flame, Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of React's useEffect hook?",
    options: [
      "To manage state in functional components",
      "To handle side effects in functional components",
      "To optimize rendering performance",
      "To create reusable UI components",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Which CSS property is used to create a glassmorphism effect?",
    options: [
      "filter: blur()",
      "backdrop-filter: blur()",
      "opacity",
      "background-color: transparent",
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "What does the 'L' in SOLID principles stand for?",
    options: [
      "Liskov Substitution Principle",
      "Logical Separation Principle",
      "Layered System Principle",
      "Linear Dependency Principle",
    ],
    correct: 0,
  },
];

const badges = [
  { name: "Fast Learner", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30", desc: "Completed 5 lessons in one day" },
  { name: "Quiz Master", icon: Brain, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30", desc: "Scored 100% in 3 consecutive quizzes" },
  { name: "Top Contributor", icon: Star, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30", desc: "Helped 10 students in the community" },
  { name: "Daily Streak", icon: Flame, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30", desc: "Maintained a 15-day learning streak" },
];

export function Interactive() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShowFeedback(true);
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setShowFeedback(false);
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Quiz Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100 dark:bg-slate-800">
              <motion.div
                className="h-full bg-indigo-600"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isFinished ? (
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 pt-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                      <Clock size={16} />
                      <span>15s left</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold dark:text-white leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </h2>

                  <div className="grid grid-cols-1 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionSelect(i)}
                        disabled={selectedOption !== null}
                        className={cn(
                          "p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between group",
                          selectedOption === null
                            ? "border-slate-100 dark:border-slate-800 hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 dark:text-white"
                            : i === quizQuestions[currentQuestion].correct
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                            : selectedOption === i
                            ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                            : "border-slate-100 dark:border-slate-800 opacity-50 dark:text-white"
                        )}
                      >
                        <span className="font-medium">{option}</span>
                        {selectedOption !== null && i === quizQuestions[currentQuestion].correct && (
                          <CheckCircle2 size={20} className="text-green-500" />
                        )}
                        {selectedOption === i && i !== quizQuestions[currentQuestion].correct && (
                          <XCircle size={20} className="text-red-500" />
                        )}
                      </button>
                    ))}
                  </div>

                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-end"
                    >
                      <button
                        onClick={nextQuestion}
                        className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30"
                      >
                        {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                        <ArrowRight size={20} />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-8"
                >
                  <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto text-indigo-600">
                    <Award size={48} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold dark:text-white">Quiz Completed!</h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      You scored <span className="text-indigo-600 font-bold">{score}</span> out of {quizQuestions.length}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={resetQuiz}
                      className="px-8 py-3 border-2 border-slate-200 dark:border-slate-800 dark:text-white rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                      <RefreshCcw size={20} />
                      Try Again
                    </button>
                    <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                      Claim Rewards
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Leaderboard UI */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
                <Trophy size={20} className="text-yellow-500" />
                Global Leaderboard
              </h3>
              <button className="text-sm text-indigo-600 font-bold hover:underline">View All</button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Alex Johnson", points: "12,450", rank: 1, avatar: "https://picsum.photos/seed/alex/100/100" },
                { name: "Sarah Williams", points: "11,200", rank: 2, avatar: "https://picsum.photos/seed/sarah/100/100" },
                { name: "Michael Chen", points: "10,800", rank: 3, avatar: "https://picsum.photos/seed/michael/100/100" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "w-8 text-center font-bold",
                      user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-slate-400" : "text-orange-500"
                    )}>
                      #{user.rank}
                    </span>
                    <img src={user.avatar} className="w-10 h-10 rounded-full" alt={user.name} referrerPolicy="no-referrer" />
                    <span className="font-bold dark:text-white">{user.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-indigo-600">{user.points}</span>
                    <span className="text-xs text-slate-400 uppercase font-bold">pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Badges & Progress */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Award size={20} className="text-indigo-600" />
              Your Badges
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border dark:border-slate-800 hover:border-indigo-600 transition-all cursor-pointer group"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", badge.bg, badge.color)}>
                    <badge.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold dark:text-white text-sm">{badge.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl text-white space-y-6 shadow-xl shadow-indigo-500/20">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Weekly Goal</h3>
              <Zap size={24} className="text-yellow-400 fill-yellow-400" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>12 of 20 hours completed</span>
                <span className="font-bold">60%</span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  className="h-full bg-white"
                />
              </div>
              <p className="text-sm text-indigo-100 leading-relaxed">
                You're doing great! Complete 8 more hours to unlock the "Weekend Warrior" badge.
              </p>
            </div>
            <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all">
              View All Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
