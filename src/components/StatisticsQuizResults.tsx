'use client'

import React from 'react'
import { QuizResult } from '../types/quiz'
import { getStatisticsPassingScore, isStatisticsPassingScore } from '../utils/statisticsUtils'
import QuizQuestion from './QuizQuestion'

interface StatisticsQuizResultsProps {
  result: QuizResult
  onTryAgain: () => void
  mode?: 'full' | 'exam' | 'chapter' | 'additional'
}

const StatisticsQuizResults: React.FC<StatisticsQuizResultsProps> = ({ result, onTryAgain, mode = 'full' }) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100)
  const isPassed = mode === 'exam' ? isStatisticsPassingScore(result.score, result.totalQuestions) : percentage >= 65
  const passingScore = getStatisticsPassingScore(result.totalQuestions)
  
  const getScoreColor = () => {
    if (percentage >= 85) return 'text-green-600 dark:text-green-400'
    if (percentage >= 65) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getScoreBadgeColor = () => {
    if (percentage >= 85) return 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700'
    if (percentage >= 65) return 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700'
    return 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700'
  }

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! You have a strong grasp of statistical concepts."
    if (percentage >= 80) return "Great job! You understand most statistical principles well."
    if (percentage >= 65) return "Good work! You have a solid foundation, with room for improvement."
    if (percentage >= 50) return "You're getting there! Review the concepts and practice more."
    return "Keep studying! Focus on the fundamentals and try again."
  }

  const getEmoji = () => {
    if (percentage >= 90) return "🎉"
    if (percentage >= 80) return "👏"
    if (percentage >= 65) return "👍"
    if (percentage >= 50) return "📚"
    return "💪"
  }

  return (
    <div className="space-y-8">
      {/* Score Summary */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 text-center transition-colors duration-300">
        <div className={`text-6xl md:text-8xl font-bold mb-4 ${getScoreColor()} transition-colors duration-300`}>
          {percentage}%
        </div>
        
        <div className="mb-6">
          <span className={`inline-block px-6 py-3 rounded-2xl text-lg font-semibold border-2 transition-colors duration-300 ${getScoreBadgeColor()}`}>
            {result.score} out of {result.totalQuestions} correct
          </span>
        </div>

        {mode === 'exam' && (
          <div className="mb-6">
            <div className={`inline-flex items-center px-6 py-3 rounded-2xl text-lg font-bold transition-colors duration-300 ${
              isPassed 
                ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-700' 
                : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 border-2 border-red-200 dark:border-red-700'
            }`}>
              {isPassed ? '✅ PASSED' : '❌ FAILED'}
              <span className="ml-2 text-sm font-medium">
                (Need {passingScore}/{result.totalQuestions} to pass)
              </span>
            </div>
          </div>
        )}

        <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6 transition-colors duration-300">
          {getEmoji()} {getPerformanceMessage()}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onTryAgain}
            className="px-8 py-4 bg-green-600 dark:bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {mode === 'exam' && !isPassed ? 'Retake Test' : 'Practice Again'}
          </button>
        </div>
      </div>

      {/* Detailed Statistics */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 transition-colors duration-300">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center transition-colors duration-300">
          Performance Breakdown
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-300">
              {result.answers.filter((answer, index) => answer.selectedOption === result.questions[index].correctAnswer).length}
            </div>
            <div className="text-green-700 dark:text-green-300 font-medium transition-colors duration-300">Correct Answers</div>
          </div>
          
          <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800 transition-colors duration-300">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2 transition-colors duration-300">
              {result.answers.filter((answer, index) => answer.selectedOption !== result.questions[index].correctAnswer && answer.selectedOption !== null).length}
            </div>
            <div className="text-red-700 dark:text-red-300 font-medium transition-colors duration-300">Incorrect Answers</div>
          </div>
          
          <div className="text-center p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-200 dark:border-slate-600 transition-colors duration-300">
            <div className="text-3xl font-bold text-slate-600 dark:text-slate-400 mb-2 transition-colors duration-300">
              {result.answers.filter(answer => answer.selectedOption === null).length}
            </div>
            <div className="text-slate-700 dark:text-slate-300 font-medium transition-colors duration-300">Unanswered</div>
          </div>
        </div>

        {/* Study Recommendations */}
        {percentage < 85 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 p-6 transition-colors duration-300">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3 transition-colors duration-300">
              📚 Study Recommendations
            </h4>
            <div className="text-blue-700 dark:text-blue-300 transition-colors duration-300">
              {percentage < 50 && "Focus on fundamental statistical concepts including descriptive statistics, probability basics, and sampling methods."}
              {percentage >= 50 && percentage < 65 && "Review hypothesis testing, confidence intervals, and practice interpreting statistical results."}
              {percentage >= 65 && percentage < 85 && "Strengthen your understanding of advanced topics like regression analysis and statistical inference."}
            </div>
          </div>
        )}
      </div>

      {/* Question Review */}
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

export default StatisticsQuizResults 