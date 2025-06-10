'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CybercrimesQuiz from '../../components/CybercrimesQuiz'
import CybercrimesSetup from '../../components/CybercrimesSetup'
import { cybercrimeQuestions } from '../../data/cybercrimeQuestions'
import { getRandomCybercrimeQuestions, getCybercrimeQuestionsByChapter, getAdditionalCybercrimeQuestions } from '../../utils/cybercrimeUtils'
import { QuizQuestion } from '../../types/quiz'

type QuizMode = 'setup' | 'quiz'
type QuizType = 'full' | 'exam' | 'chapter' | 'additional'

export default function CybercrimesPage() {
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
      questions = getRandomCybercrimeQuestions(cybercrimeQuestions, questionCount)
    } else if (type === 'chapter' && chapterId) {
      questions = getCybercrimeQuestionsByChapter(cybercrimeQuestions, chapterId)
      setChapterInfo({ id: chapterId, name: chapterName || `Topic ${chapterId}` })
    } else if (type === 'additional') {
      questions = getAdditionalCybercrimeQuestions(cybercrimeQuestions)
      setChapterInfo({ id: 7, name: 'Additional Practice Questions' })
    } else {
      // Convert all questions to QuizQuestion type
      questions = cybercrimeQuestions.map(q => ({
        id: q.id.toString(),
        question: q.question,
        options: q.options,
        correctAnswer: q.options.indexOf(q.correctAnswer),
        explanation: '',
        chapter: 0 // Default chapter if not specified
      }))
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
              Cybercrimes Practice
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Master Cybercrime Investigation and Digital Forensics
            </p>
          </header>
          
          <CybercrimesSetup 
            onStartQuiz={handleStartQuiz}
            totalQuestions={cybercrimeQuestions.length}
          />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <CybercrimesQuiz 
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