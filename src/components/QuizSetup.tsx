'use client'

import React, { useState } from 'react'
import QuizHistory from './QuizHistory'
import { getChaptersWithCounts, getAdditionalQuestions } from '../utils/quizUtils'
import { sampleQuestions } from '../data/sampleQuestions'
import { useTheme } from '../contexts/ThemeContext'

interface QuizSetupProps {
  onStartQuiz: (
    mode: 'full' | 'exam' | 'chapter' | 'additional', 
    questionCount?: number, 
    instantFeedback?: boolean,
    chapterId?: number,
    chapterName?: string
  ) => void
  totalQuestions: number
}

const QuizSetup: React.FC<QuizSetupProps> = ({ onStartQuiz, totalQuestions }) => {
  const [instantFeedback, setInstantFeedback] = useState(false)
  const [showChapters, setShowChapters] = useState(false)
  const { isDarkMode } = useTheme()
  const chapters = getChaptersWithCounts(sampleQuestions)
  const additionalQuestions = getAdditionalQuestions(sampleQuestions)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 px-4 transition-colors duration-300">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-16">          
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4 lg:mb-6 transition-colors duration-300">
            Testing Exam Practice
          </h1>
          <p className="text-base lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
            Master ISTQB Foundation Level certification with comprehensive practice tests
          </p>
        </div>

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
              className={`relative inline-flex h-7 w-12 lg:h-8 lg:w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
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

        {/* Quiz Options - Now 4 columns with mobile-friendly adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {/* Chapter Quiz Mode - First */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Chapter Quizzes
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Study specific ISTQB chapters for targeted learning.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    6 chapters available
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Targeted learning
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
                  {showChapters ? 'Hide Chapters' : 'Show Chapters'}
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

          {/* Full Quiz Mode - Second */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Full Quiz
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Practice with all {totalQuestions} questions. Perfect for comprehensive study.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    All {totalQuestions} questions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    No time limit
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Instant feedback' : 'Detailed explanations'}
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('full', undefined, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Full Quiz
                </button>
              </div>
            </div>
          </div>

          {/* Exam Simulation Mode - Third */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Exam Simulation
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Take a realistic exam with 10 random questions.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    10 random questions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Learn as you go' : 'Realistic conditions'}
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full mr-2"></div>
                    Quick assessment
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('exam', 10, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Exam Simulation
                </button>
              </div>
            </div>
          </div>

          {/* Additional Questions Mode - Fourth */}
          <div className="group">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="text-center flex flex-col h-full">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 lg:mb-3 transition-colors duration-300">
                  Additional Questions
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3 lg:mb-4 leading-relaxed transition-colors duration-300 text-xs lg:text-sm">
                  Extra practice with {additionalQuestions.length} bonus questions.
                </p>
                
                <ul className="text-left text-slate-600 dark:text-slate-300 mb-4 lg:mb-6 space-y-1 lg:space-y-2 flex-grow transition-colors duration-300 text-xs lg:text-sm">
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {additionalQuestions.length} bonus questions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Extra practice
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    {instantFeedback ? 'Instant feedback' : 'Detailed explanations'}
                  </li>
                </ul>
                
                <button
                  onClick={() => onStartQuiz('additional', undefined, instantFeedback)}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg lg:rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs lg:text-sm"
                >
                  Start Additional Quiz
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter List - Horizontal Layout */}
        {showChapters && (
          <div className="mb-8 lg:mb-12 animate-in slide-in-from-top duration-300">
            <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 lg:p-8 transition-colors duration-300">
              <h4 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 lg:mb-8 text-center transition-colors duration-300">Select a Chapter</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => onStartQuiz('chapter', undefined, instantFeedback, chapter.id, chapter.name)}
                    className="group p-4 lg:p-6 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 rounded-xl lg:rounded-2xl border border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 text-left shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 dark:text-slate-100 text-base lg:text-lg group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                          Chapter {chapter.id}
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 mt-1 lg:mt-2 leading-relaxed text-xs lg:text-sm transition-colors duration-300">
                          {chapter.name}
                        </div>
                        <div className="text-purple-600 dark:text-purple-400 mt-2 lg:mt-3 font-semibold text-xs lg:text-sm transition-colors duration-300">
                          {chapter.questionCount} questions
                        </div>
                      </div>
                      <div className="flex items-center text-purple-600 dark:text-purple-400 ml-3 lg:ml-4 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quiz History Below */}
        <QuizHistory />

        {/* About Section */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 lg:p-8 max-w-3xl mx-auto transition-colors duration-300">
            <h4 className="text-lg lg:text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 lg:mb-4 transition-colors duration-300">About ISTQB Foundation Level</h4>
            <p className="text-sm lg:text-base text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
              The ISTQB Foundation Level certification covers fundamental testing principles, 
              testing throughout the software lifecycle, static testing, test design techniques, 
              test management, and tool support for testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizSetup 