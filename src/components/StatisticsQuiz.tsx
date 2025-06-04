'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { QuizQuestion as QuizQuestionType, UserAnswer, QuizResult, QuizState } from '../types/quiz'
import { saveStatisticsQuizResult } from '../utils/statisticsUtils'
import QuizQuestion from './QuizQuestion'
import QuizNavigation from './QuizNavigation'
import StatisticsQuizResults from './StatisticsQuizResults'

interface StatisticsQuizProps {
  questions: QuizQuestionType[]
  onBack?: () => void
  mode?: 'full' | 'exam' | 'chapter' | 'additional'
  instantFeedback?: boolean
  chapterInfo?: { id: number, name: string }
}

const StatisticsQuiz: React.FC<StatisticsQuizProps> = ({ 
  questions, 
  onBack, 
  mode = 'full', 
  instantFeedback = false,
  chapterInfo 
}) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: questions.map(q => ({ questionId: q.id, selectedOption: null })),
    isCompleted: false,
    showResults: false
  })
  const [startTime] = useState<Date>(new Date())
  const [resultSaved, setResultSaved] = useState(false)

  const currentQuestion = questions[quizState.currentQuestionIndex]
  const currentAnswer = quizState.answers.find(a => a.questionId === currentQuestion?.id)

  const handleOptionSelect = useCallback((optionIndex: number) => {
    setQuizState(prevState => ({
      ...prevState,
      answers: prevState.answers.map(answer =>
        answer.questionId === currentQuestion.id
          ? { ...answer, selectedOption: optionIndex }
          : answer
      )
    }))
  }, [currentQuestion?.id])

  const handlePrevious = useCallback(() => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex - 1
      }))
    }
  }, [quizState.currentQuestionIndex])

  const handleNext = useCallback(() => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prevState => ({
        ...prevState,
        currentQuestionIndex: prevState.currentQuestionIndex + 1
      }))
    }
  }, [quizState.currentQuestionIndex, questions.length])

  const handleSubmit = useCallback(() => {
    setQuizState(prevState => ({
      ...prevState,
      isCompleted: true,
      showResults: true
    }))
  }, [])

  const handleTryAgain = useCallback(() => {
    if (onBack) {
      onBack()
    } else {
      setQuizState({
        currentQuestionIndex: 0,
        answers: questions.map(q => ({ questionId: q.id, selectedOption: null })),
        isCompleted: false,
        showResults: false
      })
      setResultSaved(false)
    }
  }, [questions, onBack])

  const calculateResult = (): QuizResult => {
    const score = quizState.answers.reduce((total, answer) => {
      const question = questions.find(q => q.id === answer.questionId)
      return total + (answer.selectedOption === question?.correctAnswer ? 1 : 0)
    }, 0)

    return {
      score,
      totalQuestions: questions.length,
      answers: quizState.answers,
      questions
    }
  }

  // Save result when quiz is completed
  useEffect(() => {
    if (quizState.isCompleted && quizState.showResults && !resultSaved) {
      const result = calculateResult()
      saveStatisticsQuizResult(mode, result.score, result.totalQuestions, instantFeedback, startTime, chapterInfo)
      setResultSaved(true)
      
      // Trigger a custom event to notify StatisticsHistory component
      window.dispatchEvent(new Event('statisticsQuizCompleted'))
    }
  }, [quizState.isCompleted, quizState.showResults, resultSaved, mode, instantFeedback, startTime, chapterInfo])

  if (quizState.showResults) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {mode === 'exam' && (
            <div className="text-center mb-6">
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Quick Test Complete
              </span>
            </div>
          )}
          {mode === 'chapter' && chapterInfo && (
            <div className="text-center mb-6">
              <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Topic {chapterInfo.id}: {chapterInfo.name} Complete
              </span>
            </div>
          )}
          {mode === 'additional' && (
            <div className="text-center mb-6">
              <span className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Additional Practice Complete
              </span>
            </div>
          )}
          <StatisticsQuizResults 
            result={calculateResult()} 
            onTryAgain={handleTryAgain}
            mode={mode}
          />
        </div>
      </div>
    )
  }

  const canGoNext = currentAnswer?.selectedOption !== null
  const isLastQuestion = quizState.currentQuestionIndex === questions.length - 1

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-4 md:py-8 px-2 md:px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Mode Indicator */}
        <div className="text-center mb-4 md:mb-6">
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            {mode === 'exam' ? (
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300">
                Quick Test - {questions.length} Questions
              </span>
            ) : mode === 'chapter' && chapterInfo ? (
              <span className="inline-block bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300">
                Topic {chapterInfo.id}: {chapterInfo.name} - {questions.length} Questions
              </span>
            ) : mode === 'additional' ? (
              <span className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300">
                Additional Practice - {questions.length} Questions
              </span>
            ) : (
              <span className="inline-block bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300">
                Full Practice - {questions.length} Questions
              </span>
            )}
            
            {instantFeedback && (
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium transition-colors duration-300">
                Instant Feedback ON
              </span>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 md:p-8 transition-colors duration-300">
          <QuizQuestion
            question={currentQuestion}
            questionNumber={quizState.currentQuestionIndex + 1}
            totalQuestions={questions.length}
            selectedOption={currentAnswer?.selectedOption ?? null}
            onOptionSelect={handleOptionSelect}
            instantFeedback={instantFeedback}
          />
          
          <QuizNavigation
            currentQuestion={quizState.currentQuestionIndex}
            totalQuestions={questions.length}
            canGoNext={canGoNext}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isLastQuestion={isLastQuestion}
          />
        </div>

        {/* Back to Setup Button */}
        {onBack && (
          <div className="text-center mt-4 md:mt-6">
            <button
              onClick={onBack}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs md:text-sm transition-colors duration-300"
            >
              ← Back to Statistics Practice Selection
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatisticsQuiz 