import React, { useState, useEffect } from 'react'
import { QuizQuestion, QuizResult, UserAnswer } from '../types/quiz'
import { saveCybercrimeQuizResult } from '../utils/cybercrimeUtils'
import QuizResults from './QuizResults'

interface CybercrimesQuizProps {
  questions: QuizQuestion[]
  onBack: () => void
  mode: 'full' | 'exam' | 'chapter' | 'additional'
  instantFeedback: boolean
  chapterInfo?: { id: number; name: string }
}

const CybercrimesQuiz: React.FC<CybercrimesQuizProps> = ({
  questions,
  onBack,
  mode,
  instantFeedback,
  chapterInfo
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answers, setAnswers] = useState<UserAnswer[]>([])
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null)
  const [startTime] = useState(Date.now())

  // Reset state when questions change
  useEffect(() => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setQuizCompleted(false)
    setAnswers([])
    setQuizResult(null)
  }, [questions])

  // If no questions, show error state
  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            No Questions Available
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            There are no questions available for this topic.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors duration-200"
          >
            Back to Setup
          </button>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (mode === 'exam') {
      setTimeLeft(25 * 60) // 25 minutes for exam mode
    }
  }, [mode])

  useEffect(() => {
    if (timeLeft === null) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(timer)
          handleQuizComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback || quizCompleted) return

    setSelectedAnswer(answerIndex)
    if (instantFeedback) {
      setShowFeedback(true)
      if (answerIndex === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1)
      }
    }
  }

  const handleNext = () => {
    // Save answer
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption: selectedAnswer
    }
    setAnswers(prev => [...prev, newAnswer])

    if (!instantFeedback && selectedAnswer !== null) {
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1)
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      handleQuizComplete()
    }
  }

  const handleQuizComplete = () => {
    const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer && !instantFeedback ? 1 : 0)
    const finalAnswers = [...answers]
    
    // Add last answer if not already added
    if (!answers.find(a => a.questionId === currentQuestion.id)) {
      finalAnswers.push({
        questionId: currentQuestion.id,
        selectedOption: selectedAnswer
      })
    }

    const duration = Math.round((Date.now() - startTime) / 60000) // Duration in minutes

    // Save to history
    saveCybercrimeQuizResult(
      finalScore,
      questions.length,
      mode,
      instantFeedback,
      duration,
      chapterInfo
    )

    // Create quiz result
    const result: QuizResult = {
      score: finalScore,
      totalQuestions: questions.length,
      answers: finalAnswers,
      questions
    }

    setQuizResult(result)
    setQuizCompleted(true)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (quizCompleted && quizResult) {
    return (
      <QuizResults
        result={quizResult}
        onTryAgain={onBack}
        mode={mode}
      />
    )
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
            {mode === 'chapter' && chapterInfo
              ? chapterInfo.name
              : mode === 'exam'
              ? 'Exam Simulation'
              : mode === 'additional'
              ? 'Additional Practice'
              : 'Full Practice'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        {timeLeft !== null && (
          <div className="text-lg font-medium text-slate-800 dark:text-slate-200">
            Time: {formatTime(timeLeft)}
          </div>
        )}
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-lg text-slate-800 dark:text-slate-200 mb-4">
          {currentQuestion.question}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback || quizCompleted}
              className={`w-full p-4 text-left rounded-xl border transition-colors duration-200 ${
                selectedAnswer === index
                  ? showFeedback
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                      : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null || (instantFeedback && !showFeedback)}
          className={`px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
            selectedAnswer === null || (instantFeedback && !showFeedback)
              ? 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    </div>
  )
}

export default CybercrimesQuiz 