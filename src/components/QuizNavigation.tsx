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
    <div className="flex justify-between items-center mt-6 md:mt-8 gap-2 md:gap-4">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium transition-all duration-200 text-sm md:text-base ${
          currentQuestion === 0
            ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400'
        } transition-colors duration-300`}
      >
        <span className="hidden sm:inline">← Previous</span>
        <span className="sm:hidden">← Prev</span>
      </button>

      <div className="text-center flex-1 max-w-xs">
        <div className="text-sm md:text-lg font-semibold text-slate-700 dark:text-slate-300 transition-colors duration-300">
          <span className="hidden sm:inline">Question {currentQuestion + 1} of {totalQuestions}</span>
          <span className="sm:hidden">{currentQuestion + 1} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 md:h-2 mt-1 md:mt-2 transition-colors duration-300">
          <div
            className="bg-blue-600 dark:bg-blue-500 h-1.5 md:h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="px-3 py-2 md:px-6 md:py-3 bg-green-500 dark:bg-green-600 text-white rounded-lg md:rounded-xl font-medium hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-200 flex items-center text-sm md:text-base"
        >
          <span className="hidden sm:inline">Submit Quiz</span>
          <span className="sm:hidden">Submit</span>
          <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`px-3 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium transition-all duration-200 flex items-center text-sm md:text-base ${
            canGoNext
              ? 'bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
          } transition-colors duration-300`}
        >
          <span className="hidden sm:inline">Next Question</span>
          <span className="sm:hidden">Next</span>
          <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default QuizNavigation 