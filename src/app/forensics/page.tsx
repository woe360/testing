'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ForensicsQuiz from '../../components/ForensicsQuiz'
import ForensicsSetup from '../../components/ForensicsSetup'
import { forensicsQuestions } from '../../data/forensicsQuestions'
import { getRandomForensicsQuestions, getForensicsQuestionsByChapter, getAdditionalForensicsQuestions } from '../../utils/forensicsUtils'
import { QuizQuestion } from '../../types/quiz'
import ForensicsHistory from '../../components/ForensicsHistory'

type QuizMode = 'setup' | 'quiz'
type QuizType = 'full' | 'exam' | 'chapter' | 'additional'

export default function ForensicsPage() {
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
      questions = getRandomForensicsQuestions(forensicsQuestions, questionCount)
    } else if (type === 'chapter' && chapterId) {
      questions = getForensicsQuestionsByChapter(forensicsQuestions, chapterId)
      setChapterInfo({ id: chapterId, name: chapterName || `Topic ${chapterId}` })
    } else if (type === 'additional') {
      questions = getAdditionalForensicsQuestions(forensicsQuestions)
      setChapterInfo({ id: 13, name: 'Additional Practice Questions' })
    } else {
      // Convert all questions to QuizQuestion type
      questions = forensicsQuestions.map(q => ({
        id: q.id.toString(),
        question: q.question,
        options: q.options,
        correctAnswer: q.options.indexOf(q.correctAnswer.replace(/^[A-D]\)\s*/, '')),
        explanation: '',
        chapter: 0
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
        <div className="absolute top-4 left-4 md:top-10 md:left-10 z-10">
          <Link href="/" className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:border-green-300 dark:hover:border-green-600 transition-colors duration-200 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-8">
          <header className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Digital Forensics Practice
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Master Digital Content Analysis and Forensic Investigation
            </p>
          </header>
          
          {/* Quiz Setup */}
          <div className="max-w-7xl mx-auto mb-8">
            <ForensicsSetup 
              onStartQuiz={handleStartQuiz}
              totalQuestions={forensicsQuestions.length}
            />
          </div>

          {/* Quiz History */}
          <div className="max-w-7xl mx-auto">
            <ForensicsHistory />
          </div>
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <ForensicsQuiz 
          questions={currentQuestions}
          onBack={handleBackToSetup}
          mode={quizType}
          instantFeedback={instantFeedback}
          chapterInfo={chapterInfo}
        />
        
        {/* Exit Quiz Button */}
        <div className="mt-[5vh] text-center">
          <button
            onClick={handleBackToSetup}
            className="px-6 py-3 text-red-600 dark:text-red-400 border border-transparent hover:border-red-600 dark:hover:border-red-400 rounded-xl font-medium hover:bg-red-600/60 hover:text-white transition-all duration-200"
          >
            Exit Quiz
          </button>
        </div>
      </div>
    </div>
  )
} 