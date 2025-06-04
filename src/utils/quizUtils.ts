import { QuizQuestion, QuizHistoryEntry } from '../types/quiz'

// Chapter definitions
export const chapters = [
  { id: 1, name: 'Fundamentals of Testing', range: [1, 13] },
  { id: 2, name: 'Testing Throughout the Software Lifecycle', range: [14, 24] },
  { id: 3, name: 'Static Testing', range: [25, 35] },
  { id: 4, name: 'Test Design Techniques', range: [36, 47] },
  { id: 5, name: 'Test Management', range: [48, 57] },
  { id: 6, name: 'Tool Support for Testing', range: [58, 58] }
]

// Get questions for a specific chapter
export function getQuestionsByChapter(questions: QuizQuestion[], chapterId: number): QuizQuestion[] {
  const chapter = chapters.find(c => c.id === chapterId)
  if (!chapter) return []
  
  return questions.filter(q => {
    const questionNum = parseInt(q.id)
    return questionNum >= chapter.range[0] && questionNum <= chapter.range[1]
  })
}

// Get all chapters with question counts
export function getChaptersWithCounts(questions: QuizQuestion[]) {
  return chapters.map(chapter => ({
    ...chapter,
    questionCount: getQuestionsByChapter(questions, chapter.id).length
  }))
}

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get random questions for exam simulation
export function getRandomQuestions(questions: QuizQuestion[], count: number): QuizQuestion[] {
  if (count >= questions.length) {
    return shuffleArray(questions)
  }
  
  const shuffled = shuffleArray(questions)
  return shuffled.slice(0, count)
}

// Calculate passing score (typically 65% for ISTQB)
export function getPassingScore(totalQuestions: number): number {
  return Math.ceil(totalQuestions * 0.65)
}

// Check if score is passing
export function isPassingScore(score: number, totalQuestions: number): boolean {
  return score >= getPassingScore(totalQuestions)
}

// Quiz history management
const QUIZ_HISTORY_KEY = 'quiz_history'

export function saveQuizResult(
  mode: 'full' | 'exam' | 'chapter',
  score: number,
  totalQuestions: number,
  instantFeedback: boolean,
  startTime?: Date,
  chapterInfo?: { id: number, name: string }
): void {
  if (typeof window === 'undefined') return // Skip on server side

  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = mode === 'exam' ? isPassingScore(score, totalQuestions) : undefined
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

  const history = getQuizHistory()
  history.unshift(historyEntry) // Add to beginning of array
  
  // Keep only last 20 results
  const trimmedHistory = history.slice(0, 20)
  
  localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(trimmedHistory))
}

export function getQuizHistory(): QuizHistoryEntry[] {
  if (typeof window === 'undefined') return [] // Skip on server side
  
  try {
    const history = localStorage.getItem(QUIZ_HISTORY_KEY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Error reading quiz history:', error)
    return []
  }
}

export function clearQuizHistory(): void {
  if (typeof window === 'undefined') return // Skip on server side
  localStorage.removeItem(QUIZ_HISTORY_KEY)
}

export function getQuizStats(): {
  totalQuizzes: number
  totalExams: number
  totalChapters: number
  averageScore: number
  examPassRate: number
  bestScore: number
} {
  const history = getQuizHistory()
  
  if (history.length === 0) {
    return {
      totalQuizzes: 0,
      totalExams: 0,
      totalChapters: 0,
      averageScore: 0,
      examPassRate: 0,
      bestScore: 0
    }
  }

  const fullQuizzes = history.filter(entry => entry.mode === 'full')
  const examResults = history.filter(entry => entry.mode === 'exam')
  const chapterQuizzes = history.filter(entry => entry.mode === 'chapter')
  const examPasses = examResults.filter(entry => entry.passed).length

  const averageScore = Math.round(
    history.reduce((sum, entry) => sum + entry.percentage, 0) / history.length
  )

  const bestScore = Math.max(...history.map(entry => entry.percentage))

  return {
    totalQuizzes: fullQuizzes.length,
    totalExams: examResults.length,
    totalChapters: chapterQuizzes.length,
    averageScore,
    examPassRate: examResults.length > 0 ? Math.round((examPasses / examResults.length) * 100) : 0,
    bestScore
  }
} 