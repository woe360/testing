'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Quiz from '../../components/Quiz'
import QuizSetup from '../../components/QuizSetup'
import { sampleQuestions } from '../../data/sampleQuestions'
import { getRandomQuestions, getQuestionsByChapter, getAdditionalQuestions } from '../../utils/quizUtils'
import { QuizQuestion } from '../../types/quiz'

type QuizMode = 'setup' | 'quiz'
type QuizType = 'full' | 'exam' | 'chapter' | 'additional'

export default function TestingPage() {
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
      questions = getRandomQuestions(sampleQuestions, questionCount)
    } else if (type === 'chapter' && chapterId) {
      questions = getQuestionsByChapter(sampleQuestions, chapterId)
      setChapterInfo({ id: chapterId, name: chapterName || `Chapter ${chapterId}` })
    } else if (type === 'additional') {
      questions = getAdditionalQuestions(sampleQuestions)
      setChapterInfo({ id: 7, name: 'Additional Practice Questions' })
    } else {
      questions = sampleQuestions
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
      <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto">
          <header className="text-center py-8">
            <div className="flex items-center justify-center mb-4">
              <Link href="/" className="mr-4 p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
                Software Testing Practice
              </h1>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              ISTQB Foundation Level Certification
            </p>
          </header>
          
          <QuizSetup 
            onStartQuiz={handleStartQuiz}
            totalQuestions={sampleQuestions.length}
          />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Quiz 
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