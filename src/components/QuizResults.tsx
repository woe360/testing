'use client'

import React from 'react'
import { QuizResult } from '../types/quiz'
import { getPassingScore, isPassingScore } from '../utils/quizUtils'
import QuizQuestion from './QuizQuestion'

interface QuizResultsProps {
  result: QuizResult
  onTryAgain: () => void
  mode?: 'full' | 'exam' | 'chapter' | 'additional'
}

const QuizResults: React.FC<QuizResultsProps> = ({ result, onTryAgain, mode = 'full' }) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100)
  const passingScore = getPassingScore(result.totalQuestions)
  const passed = isPassingScore(result.score, result.totalQuestions)
  
  const getScoreColor = () => {
    if (passed) return 'text-green-600 dark:text-green-400'
    if (percentage >= 50) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getScoreMessage = () => {
    if (mode === 'exam') {
      return passed ? 'Congratulations! You passed!' : 'Keep studying and try again!'
    }
    
    if (mode === 'chapter') {
      if (percentage >= 80) return 'Chapter mastered!'
      if (percentage >= 60) return 'Good understanding!'
      return 'Review this chapter!'
    }
    
    if (mode === 'additional') {
      if (percentage >= 80) return 'Excellent extra practice!'
      if (percentage >= 60) return 'Good additional practice!'
      return 'Keep practicing these bonus questions!'
    }
    
    if (percentage >= 80) return 'Excellent work!'
    if (percentage >= 60) return 'Good job!'
    return 'Keep practicing!'
  }

  const getScoreBadge = () => {
    if (mode === 'exam') {
      return passed ? (
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4 border border-green-200 dark:border-green-700 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          PASSED
        </div>
      ) : (
        <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 rounded-full text-sm font-medium mb-4 border border-red-200 dark:border-red-700 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          NOT PASSED
        </div>
      )
    }
    return null
  }

  const getTitle = () => {
    if (mode === 'exam') return 'Exam Complete!'
    if (mode === 'chapter') return 'Chapter Complete!'
    if (mode === 'additional') return 'Additional Questions Complete!'
    return 'Quiz Complete!'
  }

  const getButtonText = () => {
    if (mode === 'exam') return 'Back to Quiz Selection'
    if (mode === 'chapter') return 'Back to Quiz Selection'
    if (mode === 'additional') return 'Back to Quiz Selection'
    return 'Try Again'
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Score Summary */}
      <div className="text-center mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-8 mb-8 transition-colors duration-300">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4 transition-colors duration-300">
            {getTitle()}
          </h1>
          
          {getScoreBadge()}
          
          <div className={`text-6xl font-bold mb-4 ${getScoreColor()} transition-colors duration-300`}>
            {percentage}%
          </div>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2 transition-colors duration-300">
            You scored {result.score} out of {result.totalQuestions} questions correctly
          </p>
          
          {mode === 'exam' && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 transition-colors duration-300">
              Passing score: {passingScore}/{result.totalQuestions} ({Math.round((passingScore / result.totalQuestions) * 100)}%)
            </p>
          )}
          
          <p className={`text-lg font-medium ${getScoreColor()} transition-colors duration-300`}>
            {getScoreMessage()}
          </p>
          
          <button
            onClick={onTryAgain}
            className="mt-6 px-8 py-3 bg-blue-600 dark:bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 dark:hover:bg-blue-700 transition-all duration-200"
          >
            {getButtonText()}
          </button>
        </div>
      </div>

      {/* Detailed Results */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-8 transition-colors duration-300">
          Review Your Answers
        </h2>
        
        {result.questions.map((question, index) => {
          const userAnswer = result.answers.find(a => a.questionId === question.id)
          const isCorrect = userAnswer?.selectedOption === question.correctAnswer
          
          return (
            <div key={question.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  Question {index + 1}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isCorrect 
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700' 
                    : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700'
                }`}>
                  {isCorrect ? 'Correct' : 'Incorrect'}
                </span>
              </div>
              
              <QuizQuestion
                question={question}
                questionNumber={index + 1}
                totalQuestions={result.totalQuestions}
                selectedOption={userAnswer?.selectedOption ?? null}
                onOptionSelect={() => {}}
                showResults={true}
                userAnswer={userAnswer?.selectedOption ?? null}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuizResults 