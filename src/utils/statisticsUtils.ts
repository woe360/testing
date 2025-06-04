import { QuizQuestion, QuizHistoryEntry } from '../types/quiz'

export function getRandomStatisticsQuestions(questions: QuizQuestion[], count: number): QuizQuestion[] {
  const shuffled = [...questions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function getStatisticsQuestionsByChapter(questions: QuizQuestion[], chapterId: number): QuizQuestion[] {
  return questions.filter(q => q.chapter === chapterId)
}

export function getAdditionalStatisticsQuestions(questions: QuizQuestion[]): QuizQuestion[] {
  return questions.filter(q => q.chapter === 7)
}

export function getStatisticsChapters(): { id: number, name: string, count: number }[] {
  return [
    { id: 1, name: 'Descriptive Statistics', count: 5 },
    { id: 2, name: 'Probability Theory', count: 5 },
    { id: 3, name: 'Sampling and Distributions', count: 5 },
    { id: 4, name: 'Confidence Intervals', count: 5 },
    { id: 5, name: 'Hypothesis Testing', count: 5 },
    { id: 6, name: 'Regression Analysis', count: 5 },
    { id: 7, name: 'Additional Practice', count: 5 }
  ]
}

// Statistics Quiz History Management
const STATISTICS_HISTORY_KEY = 'statistics_quiz_history'

export function saveStatisticsQuizResult(
  mode: 'full' | 'exam' | 'chapter' | 'additional',
  score: number,
  totalQuestions: number,
  instantFeedback: boolean,
  startTime?: Date,
  chapterInfo?: { id: number, name: string }
): void {
  if (typeof window === 'undefined') return // Skip on server side

  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = mode === 'exam' ? isStatisticsPassingScore(score, totalQuestions) : undefined
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

  const history = getStatisticsQuizHistory()
  history.unshift(historyEntry) // Add to beginning of array
  
  // Keep only last 20 results
  const trimmedHistory = history.slice(0, 20)
  
  localStorage.setItem(STATISTICS_HISTORY_KEY, JSON.stringify(trimmedHistory))
}

export function getStatisticsQuizHistory(): QuizHistoryEntry[] {
  if (typeof window === 'undefined') return [] // Skip on server side
  
  try {
    const history = localStorage.getItem(STATISTICS_HISTORY_KEY)
    return history ? JSON.parse(history) : []
  } catch (error) {
    console.error('Error reading statistics quiz history:', error)
    return []
  }
}

export function clearStatisticsQuizHistory(): void {
  if (typeof window === 'undefined') return // Skip on server side
  localStorage.removeItem(STATISTICS_HISTORY_KEY)
}

export function getStatisticsQuizStats(): {
  totalQuizzes: number
  totalExams: number
  totalChapters: number
  totalAdditional: number
  averageScore: number
  examPassRate: number
  bestScore: number
} {
  const history = getStatisticsQuizHistory()
  
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

export function isStatisticsPassingScore(score: number, totalQuestions: number): boolean {
  const passingPercentage = 65 // 65% pass rate for statistics
  const percentage = (score / totalQuestions) * 100
  return percentage >= passingPercentage
}

export function getStatisticsPassingScore(totalQuestions: number): number {
  return Math.ceil(totalQuestions * 0.65) // 65% pass rate
} 