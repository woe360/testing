export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface UserAnswer {
  questionId: string
  selectedOption: number | null
}

export interface QuizResult {
  score: number
  totalQuestions: number
  answers: UserAnswer[]
  questions: QuizQuestion[]
}

export interface QuizState {
  currentQuestionIndex: number
  answers: UserAnswer[]
  isCompleted: boolean
  showResults: boolean
}

export interface QuizHistoryEntry {
  id: string
  date: string
  mode: 'full' | 'exam' | 'chapter' | 'additional'
  score: number
  totalQuestions: number
  percentage: number
  passed?: boolean
  instantFeedback: boolean
  duration?: number
  chapterInfo?: { id: number, name: string }
} 