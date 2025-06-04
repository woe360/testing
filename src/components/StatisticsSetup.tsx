'use client'

import React, { useState } from 'react'
import StatisticsHistory from './StatisticsHistory'
import { getStatisticsChapters } from '../utils/statisticsUtils'
import { statisticsQuestions } from '../data/statisticsQuestions'
import { useTheme } from '../contexts/ThemeContext'

interface StatisticsSetupProps {
  onStartQuiz: (
    mode: 'full' | 'exam' | 'chapter' | 'additional', 
    questionCount?: number, 
    instantFeedback?: boolean,
    chapterId?: number,
    chapterName?: string
  ) => void
  totalQuestions: number
}

const StatisticsSetup: React.FC<StatisticsSetupProps> = ({ onStartQuiz, totalQuestions }) => {
  const [instantFeedback, setInstantFeedback] = useState(false)
  const [showChapters, setShowChapters] = useState(false)
  const { isDarkMode } = useTheme()
  const chapters = getStatisticsChapters()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        {/* Instant Feedback Toggle */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 lg:p-8 mb-8 lg:mb-12 max-w-2xl mx-auto transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">Instant Feedback</h3>
              <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300 transition-colors duration-300">
                Show correct answer immediately after selecting an option
              </p>
            </div>
            <button
              onClick={() => setInstantFeedback(!instantFeedback)}
              className={`relative inline-flex h-7 w-12 lg:h-8 lg:w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                instantFeedback ? 'bg-green-600' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 lg:h-6 lg:w-6 transform rounded-full bg-white transition-transform duration-300 shadow-lg ${
                  instantFeedback ? 'translate-x-6 lg:translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Quiz Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {/* Chapter Quiz Mode */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Topic Quizzes
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Focus on specific statistical topics for targeted learning.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    {chapters.length} topics available
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Focused learning
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Instant feedback' : 'Detailed explanations'}
                  </li>
                </ul>
                
                <button
                  onClick={() => setShowChapters(!showChapters)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:scale-105 text-xs lg:text-sm"
                >
                  {showChapters ? 'Hide Topics' : 'Show Topics'}
                  <svg 
                    className={`w-3 h-3 lg:w-4 lg:h-4 ml-2 transform transition-transform duration-300 ${showChapters ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Full Quiz Mode */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Full Practice
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Practice with all {totalQuestions} statistics questions.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    All {totalQuestions} questions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    No time limit
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Instant feedback' : 'Detailed explanations'}
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('full', undefined, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Full Practice
                </button>
              </div>
            </div>
          </div>

          {/* Quick Test Mode */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Quick Test
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Take a quick test with 10 random statistics questions.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    10 random questions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Learn as you go' : 'Quick assessment'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Fast evaluation
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('exam', 10, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Quick Test
                </button>
              </div>
            </div>
          </div>

          {/* Additional Practice Mode */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Additional Practice
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Extra questions for comprehensive preparation.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Mixed difficulty
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Advanced concepts
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Instant feedback' : 'Detailed solutions'}
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('additional', undefined, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Additional Practice
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Selection */}
        {showChapters && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 lg:p-8 mb-8 lg:mb-12 transition-colors duration-300">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 lg:mb-6 text-center transition-colors duration-300">
              Choose a Statistics Topic
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => onStartQuiz('chapter', undefined, instantFeedback, chapter.id, chapter.name)}
                  className="group p-4 lg:p-6 bg-slate-50 dark:bg-slate-700 rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-sm lg:text-base">
                      {chapter.name}
                    </h4>
                    <span className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded-full">
                      {chapter.count} questions
                    </span>
                  </div>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 text-xs lg:text-sm">
                    <span>Start Topic Quiz</span>
                    <svg className="w-3 h-3 lg:w-4 lg:h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Statistics Quiz History */}
        <StatisticsHistory />
      </div>
    </div>
  )
}

export default StatisticsSetup 