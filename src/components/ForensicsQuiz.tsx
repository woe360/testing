import React, { useState, useEffect, useMemo } from 'react'
import { QuizQuestion, QuizResult, UserAnswer } from '../types/quiz'
import { saveForensicsQuizResult } from '../utils/forensicsUtils'
import QuizResults from './QuizResults'

interface ForensicsQuizProps {
  questions: QuizQuestion[]
  onBack: () => void
  mode: 'full' | 'exam' | 'chapter' | 'additional'
  instantFeedback: boolean
  chapterInfo?: { id: number; name: string }
}

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Shuffle question options and update correctAnswer index
const shuffleQuestion = (question: QuizQuestion): QuizQuestion => {
  const indices = question.options.map((_, i) => i)
  const shuffledIndices = shuffleArray(indices)
  const shuffledOptions = shuffledIndices.map(i => question.options[i])
  const newCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer)
  
  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer
  }
}

const ForensicsQuiz: React.FC<ForensicsQuizProps> = ({
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
  const [shuffledQuestions, setShuffledQuestions] = useState<Map<string, QuizQuestion>>(new Map())

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

  // Get or create shuffled version of current question
  const currentQuestion = useMemo(() => {
    const originalQuestion = questions[currentQuestionIndex]
    if (!originalQuestion) return null
    
    const shuffled = shuffledQuestions.get(originalQuestion.id)
    if (shuffled) {
      return shuffled
    }
    
    const newShuffled = shuffleQuestion(originalQuestion)
    setShuffledQuestions(prev => new Map(prev).set(originalQuestion.id, newShuffled))
    return newShuffled
  }, [questions, currentQuestionIndex, shuffledQuestions])

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
    if (showFeedback || quizCompleted || !currentQuestion) return

    setSelectedAnswer(answerIndex)
    if (instantFeedback) {
      setShowFeedback(true)
      if (answerIndex === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1)
      }
    }
  }

  const handleNext = () => {
    if (!currentQuestion) return
    
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
    if (!currentQuestion) return
    
    const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer && !instantFeedback ? 1 : 0)
    const finalAnswers = [...answers]
    
    // Add last answer if not already added
    if (currentQuestion && !answers.find(a => a.questionId === currentQuestion.id)) {
      finalAnswers.push({
        questionId: currentQuestion.id,
        selectedOption: selectedAnswer
      })
    }

    const duration = Math.round((Date.now() - startTime) / 60000) // Duration in minutes

    // Save to history
    saveForensicsQuizResult(
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
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 transition-colors duration-300">
            Digital Forensics Practice
          </h2>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
            {mode === 'chapter' && chapterInfo
              ? `Topic: ${chapterInfo.name}`
              : mode === 'exam'
              ? 'Exam Simulation'
              : mode === 'additional'
              ? 'Additional Practice'
              : 'Full Practice'
            }
          </p>
        </div>
        
        <div className="text-right">
          <div className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          {timeLeft !== null && (
            <div className={`text-lg font-bold transition-colors duration-300 ${
              timeLeft < 300 ? 'text-red-600 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'
            }`}>
              {formatTime(timeLeft)}
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-8 transition-colors duration-300">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-500"
          style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      {currentQuestion && (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 leading-relaxed transition-colors duration-300">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === currentQuestion.correctAnswer
            const showCorrect = showFeedback && isCorrect
            const showIncorrect = showFeedback && isSelected && !isCorrect

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                  showCorrect
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300'
                    : showIncorrect
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300'
                    : isSelected
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-900/10'
                } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center">
                  {showFeedback && (
                    <div className="mr-3">
                      {index === currentQuestion.correctAnswer ? (
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer ? (
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5"></div>
                      )}
                    </div>
                  )}
                  <span>{option}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-6 py-3 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600 rounded-xl font-medium hover:text-slate-800 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-500 transition-colors duration-200"
        >
          Exit Quiz
        </button>

        <div className="text-center">
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 transition-colors duration-300">
            Score: {score}/{currentQuestionIndex + (showFeedback ? 1 : 0)}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className={`px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
            selectedAnswer === null
              ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default ForensicsQuiz 