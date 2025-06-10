import { Question } from '../data/cybercrimeQuestions'
import { QuizQuestion } from '../types/quiz'

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