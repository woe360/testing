import { Question } from '../data/cybercrimeQuestions'
import { QuizQuestion, QuizHistoryEntry, QuizResult, UserAnswer } from '../types/quiz'

export const getRandomCybercrimeQuestions = (questions: Question[], count: number): QuizQuestion[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map(q => ({
    id: q.id.toString(),
    question: q.question,
    options: q.options,
    correctAnswer: q.options.indexOf(q.correctAnswer),
    explanation: '', // Add empty explanation as it's required by QuizQuestion type
    chapter: getChapterId(q.chapter)
  }))
}

export const getCybercrimeQuestionsByChapter = (questions: Question[], chapterId: number): QuizQuestion[] => {
  const chapterName = getChapterName(chapterId)
  return questions
    .filter(q => q.chapter === chapterName)
    .map(q => ({
      id: q.id.toString(),
      question: q.question,
      options: q.options,
      correctAnswer: q.options.indexOf(q.correctAnswer),
      explanation: '', // Add empty explanation as it's required by QuizQuestion type
      chapter: chapterId
    }))
}

export const getAdditionalCybercrimeQuestions = (questions: Question[]): QuizQuestion[] => {
  // For now, return random 10 questions as additional practice
  return getRandomCybercrimeQuestions(questions, 10)
}

const getChapterName = (chapterId: number): string => {
  const chapters: { [key: number]: string } = {
    1: 'NEE tyrimų principai ir tyrimo eiga',
    2: 'NEE tyrimų tipai',
    3: 'Pirminė reakcija į elektronininius nusikaltimus',
    4: 'Incidentų tipai',
    5: 'Elektroninių nusikaltimų samprata',
    6: 'Informacinis karas',
    7: 'Elektroniniai įkalčiai',
    8: 'Įkalčių analizės metodai'
  }
  return chapters[chapterId] || ''
}

const getChapterId = (chapterName: string): number => {
  const chapters: { [key: string]: number } = {
    'NEE tyrimų principai ir tyrimo eiga': 1,
    'NEE tyrimų tipai': 2,
    'Pirminė reakcija į elektronininius nusikaltimus': 3,
    'Incidentų tipai': 4,
    'Elektroninių nusikaltimų samprata': 5,
    'Informacinis karas': 6,
    'Elektroniniai įkalčiai': 7,
    'Įkalčių analizės metodai': 8
  }
  return chapters[chapterName] || 0
}

// History management functions
const CYBERCRIME_HISTORY_KEY = 'cybercrimeQuizHistory'

export const saveCybercrimeQuizResult = (
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
  
  const history = getCybercrimeQuizHistory()
  history.unshift(entry) // Add to beginning
  
  // Keep only last 50 entries
  const limitedHistory = history.slice(0, 50)
  
  if (typeof window !== 'undefined') {
    localStorage.setItem(CYBERCRIME_HISTORY_KEY, JSON.stringify(limitedHistory))
    
    // Dispatch custom event
    const event = new CustomEvent('cybercrimeQuizCompleted', { detail: entry })
    window.dispatchEvent(event)
  }
}

export const getCybercrimeQuizHistory = (): QuizHistoryEntry[] => {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(CYBERCRIME_HISTORY_KEY)
  return stored ? JSON.parse(stored) : []
}

export const clearCybercrimeQuizHistory = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CYBERCRIME_HISTORY_KEY)
  }
}

export const getCybercrimeQuizStats = () => {
  const history = getCybercrimeQuizHistory()
  
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