'use client'

import React from 'react'
import { QuizQuestion as QuizQuestionType } from '../types/quiz'

interface QuizQuestionProps {
  question: QuizQuestionType
  questionNumber: number
  totalQuestions: number
  selectedOption: number | null
  onOptionSelect: (optionIndex: number) => void
  showResults?: boolean
  userAnswer?: number | null
  instantFeedback?: boolean
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  showResults = false,
  userAnswer,
  instantFeedback = false
}) => {
  const getOptionClassName = (optionIndex: number) => {
    let baseClass = 'quiz-option'
    
    if (showResults) {
      if (optionIndex === question.correctAnswer) {
        baseClass += ' correct'
      } else if (optionIndex === userAnswer && userAnswer !== question.correctAnswer) {
        baseClass += ' incorrect'
      }
    } else if (instantFeedback && selectedOption !== null) {
      // Show instant feedback after selection
      if (optionIndex === question.correctAnswer) {
        baseClass += ' correct'
      } else if (optionIndex === selectedOption && selectedOption !== question.correctAnswer) {
        baseClass += ' incorrect'
      } else if (selectedOption === optionIndex) {
        baseClass += ' selected'
      }
    } else if (selectedOption === optionIndex) {
      baseClass += ' selected'
    }
    
    return baseClass
  }

  const getOptionIcon = (optionIndex: number) => {
    if (showResults || (instantFeedback && selectedOption !== null)) {
      if (optionIndex === question.correctAnswer) {
        return (
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )
      } else if (optionIndex === selectedOption && selectedOption !== question.correctAnswer) {
        return (
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        )
      }
    }
    
    // Default radio button
    return (
      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-slate-300 dark:border-slate-500 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 transition-colors duration-300">
        {((showResults || instantFeedback) ? userAnswer === optionIndex : selectedOption === optionIndex) && (
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-current"></div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6 md:mb-8">        
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-6 md:mb-8 leading-tight transition-colors duration-300 px-2">
          {question.question}
        </h2>
        
        <div className="space-y-3 md:space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClassName(index)}
              onClick={() => !showResults && onOptionSelect(index)}
              disabled={showResults}
            >
              <div className="flex items-center">
                {getOptionIcon(index)}
                <span className="text-slate-700 dark:text-slate-300 text-left transition-colors duration-300">{option}</span>
              </div>
            </button>
          ))}
        </div>
        
        {((showResults || (instantFeedback && selectedOption !== null)) && !showResults) && question.explanation && question.explanation.trim() && (
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg md:rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 transition-colors duration-300 text-sm md:text-base">Explanation:</h3>
            <p className="text-blue-800 dark:text-blue-200 transition-colors duration-300 text-sm md:text-base">{question.explanation}</p>
          </div>
        )}

        {showResults && question.explanation && question.explanation.trim() && (
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg md:rounded-xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2 transition-colors duration-300 text-sm md:text-base">Explanation:</h3>
            <p className="text-blue-800 dark:text-blue-200 transition-colors duration-300 text-sm md:text-base">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizQuestion 