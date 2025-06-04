'use client'

import React from 'react'

interface QuizNavigationProps {
  currentQuestion: number
  totalQuestions: number
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
  onSubmit: () => void
  isLastQuestion: boolean
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  canGoNext,
  onPrevious,
  onNext,
  onSubmit,
  isLastQuestion
}) => {
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
          currentQuestion === 0
            ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
        } transition-colors duration-300`}
      >
        ← Previous
      </button>

      <div className="text-center">
        <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">
          Question {currentQuestion + 1} of {totalQuestions}
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2 transition-colors duration-300">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="px-6 py-3 bg-green-500 dark:bg-green-600 text-white rounded-xl font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-200 flex items-center"
        >
          Submit Quiz
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center ${
            canGoNext
              ? 'bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
          } transition-colors duration-300`}
        >
          Next Question
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default QuizNavigation 