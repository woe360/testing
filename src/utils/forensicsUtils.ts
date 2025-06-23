import { Question } from '../data/forensicsQuestions'
import { QuizQuestion, QuizHistoryEntry } from '../types/quiz'

// Convert forensics Question to QuizQuestion format
export const convertToQuizQuestion = (question: Question): QuizQuestion => {
  return {
    id: question.id.toString(),
    question: question.question,
    options: question.options,
    correctAnswer: question.options.indexOf(question.correctAnswer.replace(/^[A-D]\)\s*/, '')),
    explanation: '',
    chapter: 0
  }
}

// Get random forensics questions for exam mode
export const getRandomForensicsQuestions = (allQuestions: Question[], count: number): QuizQuestion[] => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count).map(convertToQuizQuestion)
}

// Get forensics questions by chapter
export const getForensicsQuestionsByChapter = (allQuestions: Question[], chapterId: number): QuizQuestion[] => {
  const chapterMap: { [key: number]: string } = {
    1: "IT ekspertai ir specialistai",
    2: "Ekspertų teisės ir pareigos", 
    3: "IT tyrimų objektai ir tipai",
    4: "Tyrimo procedūros",
    5: "Duomenų nuskaitymas ir kopijavimas",
    6: "Technikiniai aspektai",
    7: "Particijos ir skaidiniai",
    8: "FAT failų sistema",
    9: "NTFS failų sistema",
    10: "Windows operacinė sistema",
    11: "Linux forensics",
    12: "Mobiliųjų įrenginių forensics"
  }

  const chapterName = chapterMap[chapterId]
  if (!chapterName) return []

  const filtered = allQuestions.filter(q => q.chapter === chapterName)
  return filtered.map(convertToQuizQuestion)
}

// Get additional practice questions (mix from different chapters)
export const getAdditionalForensicsQuestions = (allQuestions: Question[]): QuizQuestion[] => {
  // Get a mix of questions from different chapters
  const chapters = [
    "Technikiniai aspektai",
    "NTFS failų sistema", 
    "Windows operacinė sistema",
    "Linux forensics",
    "Mobiliųjų įrenginių forensics"
  ]
  
  const additionalQuestions: Question[] = []
  
  chapters.forEach(chapter => {
    const chapterQuestions = allQuestions.filter(q => q.chapter === chapter)
    // Get 5-10 random questions from each chapter
    const randomCount = Math.min(Math.floor(Math.random() * 6) + 5, chapterQuestions.length)
    const shuffled = [...chapterQuestions].sort(() => 0.5 - Math.random())
    additionalQuestions.push(...shuffled.slice(0, randomCount))
  })
  
  return additionalQuestions.map(convertToQuizQuestion)
}

// Get all available chapters
export const getForensicsChapters = (allQuestions: Question[]) => {
  const chapterCounts: { [key: string]: number } = {}
  
  allQuestions.forEach(q => {
    chapterCounts[q.chapter] = (chapterCounts[q.chapter] || 0) + 1
  })
  
  const chapters = [
    { id: 1, name: "IT ekspertai ir specialistai", count: chapterCounts["IT ekspertai ir specialistai"] || 0 },
    { id: 2, name: "Ekspertų teisės ir pareigos", count: chapterCounts["Ekspertų teisės ir pareigos"] || 0 },
    { id: 3, name: "IT tyrimų objektai ir tipai", count: chapterCounts["IT tyrimų objektai ir tipai"] || 0 },
    { id: 4, name: "Tyrimo procedūros", count: chapterCounts["Tyrimo procedūros"] || 0 },
    { id: 5, name: "Duomenų nuskaitymas ir kopijavimas", count: chapterCounts["Duomenų nuskaitymas ir kopijavimas"] || 0 },
    { id: 6, name: "Technikiniai aspektai", count: chapterCounts["Technikiniai aspektai"] || 0 },
    { id: 7, name: "Particijos ir skaidiniai", count: chapterCounts["Particijos ir skaidiniai"] || 0 },
    { id: 8, name: "FAT failų sistema", count: chapterCounts["FAT failų sistema"] || 0 },
    { id: 9, name: "NTFS failų sistema", count: chapterCounts["NTFS failų sistema"] || 0 },
    { id: 10, name: "Windows operacinė sistema", count: chapterCounts["Windows operacinė sistema"] || 0 },
    { id: 11, name: "Linux forensics", count: chapterCounts["Linux forensics"] || 0 },
    { id: 12, name: "Mobiliųjų įrenginių forensics", count: chapterCounts["Mobiliųjų įrenginių forensics"] || 0 },
  ]
  
  return chapters.filter(chapter => chapter.count > 0)
}

// History management functions
const FORENSICS_HISTORY_KEY = 'forensicsQuizHistory'

export const saveForensicsQuizResult = (
  score: number,
  totalQuestions: number,
  mode: 'full' | 'exam' | 'chapter' | 'additional',
  instantFeedback: boolean,
  duration?: number,
  chapterInfo?: { id: number, name: string }
): void => {
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = mode === 'exam' ? percentage >= 70 : undefined // 70% passing for exams
  
  const entry: QuizHistoryEntry = {
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
  
  const history = getForensicsQuizHistory()
  history.unshift(entry) // Add to beginning
  
  // Keep only last 50 entries
  const limitedHistory = history.slice(0, 50)
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(FORENSICS_HISTORY_KEY, JSON.stringify(limitedHistory))
    
    // Dispatch custom event
    const event = new CustomEvent('forensicsQuizCompleted', { detail: entry })
    window.dispatchEvent(event)
  }
}

export const getForensicsQuizHistory = (): QuizHistoryEntry[] => {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(FORENSICS_HISTORY_KEY)
  return stored ? JSON.parse(stored) : []
}

export const clearForensicsQuizHistory = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(FORENSICS_HISTORY_KEY)
  }
}

export const getForensicsQuizStats = () => {
  const history = getForensicsQuizHistory()
  
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
  
  const totalQuizzes = history.filter(h => h.mode === 'full').length
  const totalExams = history.filter(h => h.mode === 'exam').length
  const totalChapters = history.filter(h => h.mode === 'chapter').length
  const totalAdditional = history.filter(h => h.mode === 'additional').length
  
  const examResults = history.filter(h => h.mode === 'exam')
  const examPassRate = examResults.length > 0 
    ? Math.round((examResults.filter(h => h.passed).length / examResults.length) * 100)
    : 0
  
  const averageScore = Math.round(
    history.reduce((sum, entry) => sum + entry.percentage, 0) / history.length
  )
  
  const bestScore = Math.max(...history.map(h => h.percentage))
  
  return {
    totalQuizzes,
    totalExams,
    totalChapters,
    totalAdditional,
    averageScore,
    examPassRate,
    bestScore
  }
} 