import { Question } from '../data/duomenuGavybaQuestions'
import { QuizQuestion, QuizHistoryEntry } from '../types/quiz'

// Extract unique chapters from questions
const getUniqueChapters = (questions: Question[]): { id: number, name: string, count: number }[] => {
  const chapterMap = new Map<string, number>()
  
  questions.forEach(q => {
    const count = chapterMap.get(q.chapter) || 0
    chapterMap.set(q.chapter, count + 1)
  })
  
  return Array.from(chapterMap.entries()).map(([name, count], index) => ({
    id: index + 1,
    name,
    count
  }))
}

// Convert Question to QuizQuestion format
const convertToQuizQuestion = (question: Question, chapterId: number): QuizQuestion => {
  const correctIndex = question.options.indexOf(question.correctAnswer)
  if (correctIndex === -1) {
    console.warn(`Question ${question.id}: correctAnswer "${question.correctAnswer}" not found in options`, question.options)
  }
  return {
    id: question.id.toString(),
    question: question.question,
    options: question.options,
    correctAnswer: correctIndex >= 0 ? correctIndex : 0,
    explanation: question.explanation || '',
    chapter: chapterId
  }
}

// Get random questions for exam mode
export function getRandomDuomenuGavybaQuestions(questions: Question[], count: number): QuizQuestion[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, count)
  const chapters = getUniqueChapters(questions)
  
  return selected.map(q => {
    const chapter = chapters.find(c => c.name === q.chapter)
    return convertToQuizQuestion(q, chapter?.id || 0)
  })
}

// Get questions by chapter
export function getDuomenuGavybaQuestionsByChapter(questions: Question[], chapterId: number): QuizQuestion[] {
  const chapters = getUniqueChapters(questions)
  const chapter = chapters.find(c => c.id === chapterId)
  
  if (!chapter) return []
  
  return questions
    .filter(q => q.chapter === chapter.name)
    .map(q => convertToQuizQuestion(q, chapterId))
}

// Get additional questions (last chapter or specific range)
export function getAdditionalDuomenuGavybaQuestions(questions: Question[]): QuizQuestion[] {
  const chapters = getUniqueChapters(questions)
  const lastChapter = chapters[chapters.length - 1]
  
  if (!lastChapter) return []
  
  return getDuomenuGavybaQuestionsByChapter(questions, lastChapter.id)
}

// Get chapters list - memoized to avoid recalculating
let cachedChapters: { id: number, name: string, count: number }[] | null = null

export function getDuomenuGavybaChapters(questions: Question[]): { id: number, name: string, count: number }[] {
  if (!cachedChapters) {
    cachedChapters = getUniqueChapters(questions)
  }
  return cachedChapters
}

// Quiz History Management
const DUOMENU_GAVYBA_HISTORY_KEY = 'duomenu_gavyba_quiz_history'

export function saveDuomenuGavybaQuizResult(
  mode: 'full' | 'exam' | 'chapter' | 'additional',
  score: number,
  totalQuestions: number,
  instantFeedback: boolean,
  startTime?: Date,
  chapterInfo?: { id: number, name: string }
): void {
  if (typeof window === 'undefined') return

  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = mode === 'exam' ? isDuomenuGavybaPassingScore(score, totalQuestions) : undefined
  const duration = startTime ? Math.round((Date.now() - startTime.getTime()) / 1000 / 60) : undefined

  const historyEntry: QuizHistoryEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    mode,
    score,
    totalQuestions,
    percentage,
    passed,
    instantFeedback,
    duration,
    chapterInfo
  }

  const history = getDuomenuGavybaQuizHistory()
  history.unshift(historyEntry)
  
  const trimmedHistory = history.slice(0, 20)
  localStorage.setItem(DUOMENU_GAVYBA_HISTORY_KEY, JSON.stringify(trimmedHistory))
}

export function getDuomenuGavybaQuizHistory(): QuizHistoryEntry[] {
  if (typeof window === 'undefined') return []
  
  try {
    const history = localStorage.getItem(DUOMENU_GAVYBA_HISTORY_KEY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Error reading duomenu gavyba quiz history:', error)
    return []
  }
}

export function clearDuomenuGavybaQuizHistory(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(DUOMENU_GAVYBA_HISTORY_KEY)
}

export function getDuomenuGavybaQuizStats(): {
  totalQuizzes: number
  totalExams: number
  totalChapters: number
  totalAdditional: number
  averageScore: number
  examPassRate: number
  bestScore: number
} {
  const history = getDuomenuGavybaQuizHistory()
  
  if (history.length === 0) {
    return {
      totalQuizzes: 0,
      totalExams: 0,
      totalChapters: 0,
      totalAdditional: 0,
      averageScore: 0,
      examPassRate: 0,
      bestScore: 0
    }
  }

  const fullQuizzes = history.filter(entry => entry.mode === 'full')
  const examResults = history.filter(entry => entry.mode === 'exam')
  const chapterQuizzes = history.filter(entry => entry.mode === 'chapter')
  const additionalQuizzes = history.filter(entry => entry.mode === 'additional')
  const examPasses = examResults.filter(entry => entry.passed).length

  const averageScore = Math.round(
    history.reduce((sum, entry) => sum + entry.percentage, 0) / history.length
  )

  const bestScore = Math.max(...history.map(entry => entry.percentage))

  return {
    totalQuizzes: fullQuizzes.length,
    totalExams: examResults.length,
    totalChapters: chapterQuizzes.length,
    totalAdditional: additionalQuizzes.length,
    averageScore,
    examPassRate: examResults.length > 0 ? Math.round((examPasses / examResults.length) * 100) : 0,
    bestScore
  }
}

export function isDuomenuGavybaPassingScore(score: number, totalQuestions: number): boolean {
  const passingPercentage = 65 // 65% pass rate
  const percentage = (score / totalQuestions) * 100
  return percentage >= passingPercentage
}

export function getDuomenuGavybaPassingScore(totalQuestions: number): number {
  return Math.ceil(totalQuestions * 0.65) // 65% pass rate
}

