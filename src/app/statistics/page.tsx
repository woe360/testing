'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import StatisticsQuiz from '../../components/StatisticsQuiz'
import StatisticsSetup from '../../components/StatisticsSetup'
import { statisticsQuestions } from '../../data/statisticsQuestions'
import { getRandomStatisticsQuestions, getStatisticsQuestionsByChapter, getAdditionalStatisticsQuestions } from '../../utils/statisticsUtils'
import { QuizQuestion } from '../../types/quiz'

type QuizMode = 'setup' | 'quiz'
type QuizType = 'full' | 'exam' | 'chapter' | 'additional'

export default function StatisticsPage() {
  const [mode, setMode] = useState<QuizMode>('setup')
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([])
  const [quizType, setQuizType] = useState<QuizType>('full')
  const [instantFeedback, setInstantFeedback] = useState(false)
  const [chapterInfo, setChapterInfo] = useState<{ id: number, name: string } | undefined>()

  const handleStartQuiz = (
    type: QuizType, 
    questionCount?: number, 
    feedback?: boolean,
    chapterId?: number,
    chapterName?: string
  ) => {
    let questions: QuizQuestion[]
    
    if (type === 'exam' && questionCount) {
      questions = getRandomStatisticsQuestions(statisticsQuestions, questionCount)
    } else if (type === 'chapter' && chapterId) {
      questions = getStatisticsQuestionsByChapter(statisticsQuestions, chapterId)
      setChapterInfo({ id: chapterId, name: chapterName || `Topic ${chapterId}` })
    } else if (type === 'additional') {
      questions = getAdditionalStatisticsQuestions(statisticsQuestions)
      setChapterInfo({ id: 7, name: 'Additional Practice Questions' })
    } else {
      questions = statisticsQuestions
    }
    
    setCurrentQuestions(questions)
    setQuizType(type)
    setInstantFeedback(feedback || false)
    setMode('quiz')
  }

  const handleBackToSetup = () => {
    setMode('setup')
    setCurrentQuestions([])
    setChapterInfo(undefined)
  }

  if (mode === 'setup') {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors pt-5 duration-300">
        {/* Back Button - Top Left */}
        <div className="absolute top-10 left-10 z-10">
          <Link href="/" className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <header className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Statistics Practice
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Master Statistical Concepts and Data Analysis
            </p>
          </header>
          
          <StatisticsSetup 
            onStartQuiz={handleStartQuiz}
            totalQuestions={statisticsQuestions.length}
          />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <StatisticsQuiz 
          questions={currentQuestions}
          onBack={handleBackToSetup}
          mode={quizType}
          instantFeedback={instantFeedback}
          chapterInfo={chapterInfo}
        />
      </div>
    </div>
  )
} 