'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import DuomenuGavybaQuiz from '../../components/DuomenuGavybaQuiz'
import DuomenuGavybaSetup from '../../components/DuomenuGavybaSetup'
import { duomenuGavybaQuestions } from '../../data/duomenuGavybaQuestions'
import { getRandomDuomenuGavybaQuestions, getDuomenuGavybaQuestionsByChapter, getAdditionalDuomenuGavybaQuestions, getDuomenuGavybaChapters } from '../../utils/duomenuGavybaUtils'
import { QuizQuestion } from '../../types/quiz'

type QuizMode = 'setup' | 'quiz'
type QuizType = 'full' | 'exam' | 'chapter' | 'additional'

export default function DuomenuGavybaPage() {
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
    
    try {
      if (type === 'exam' && questionCount) {
        questions = getRandomDuomenuGavybaQuestions(duomenuGavybaQuestions, questionCount)
      } else if (type === 'chapter' && chapterId) {
        questions = getDuomenuGavybaQuestionsByChapter(duomenuGavybaQuestions, chapterId)
        setChapterInfo({ id: chapterId, name: chapterName || `Topic ${chapterId}` })
      } else if (type === 'additional') {
        questions = getAdditionalDuomenuGavybaQuestions(duomenuGavybaQuestions)
        const chapters = getDuomenuGavybaChapters(duomenuGavybaQuestions)
        const lastChapter = chapters[chapters.length - 1]
        setChapterInfo({ id: lastChapter?.id || 0, name: lastChapter?.name || 'Additional Practice Questions' })
      } else {
        // Convert all questions to QuizQuestion type
        const chapters = getDuomenuGavybaChapters(duomenuGavybaQuestions)
        questions = duomenuGavybaQuestions.map(q => {
          const chapter = chapters.find((c: { name: string }) => c.name === q.chapter)
          const correctIndex = q.options.indexOf(q.correctAnswer)
          return {
            id: q.id.toString(),
            question: q.question,
            options: q.options,
            correctAnswer: correctIndex >= 0 ? correctIndex : 0,
            explanation: q.explanation || '',
            chapter: chapter?.id || 0
          }
        })
      }
      
      setCurrentQuestions(questions)
      setQuizType(type)
      setInstantFeedback(feedback || false)
      setMode('quiz')
    } catch (error) {
      console.error('Error starting quiz:', error)
      alert('Error starting quiz. Please check the console.')
    }
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
          <Link href="/" className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-200 shadow-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        <div className="container mx-auto px-4">
          <header className="text-center py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Data Mining Practice
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Master Data Mining Concepts and Techniques
            </p>
          </header>
          
          <DuomenuGavybaSetup 
            onStartQuiz={handleStartQuiz}
            totalQuestions={duomenuGavybaQuestions.length}
          />
        </div>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <DuomenuGavybaQuiz 
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

