import React, { useState } from 'react'

interface CybercrimesSetupProps {
  onStartQuiz: (
    type: 'full' | 'exam' | 'chapter' | 'additional',
    questionCount?: number,
    feedback?: boolean,
    chapterId?: number,
    chapterName?: string
  ) => void
  totalQuestions: number
}

const CybercrimesSetup: React.FC<CybercrimesSetupProps> = ({ onStartQuiz, totalQuestions }) => {
  const [selectedMode, setSelectedMode] = useState<'full' | 'exam' | 'chapter' | 'additional'>('full')
  const [instantFeedback, setInstantFeedback] = useState(false)
  const [selectedChapter, setSelectedChapter] = useState<number | undefined>()

  const chapters = [
    { id: 1, name: 'NEE tyrimų principai ir tyrimo eiga' },
    { id: 2, name: 'NEE tyrimų tipai' },
    { id: 3, name: 'Pirminė reakcija į elektronininius nusikaltimus' },
    { id: 4, name: 'Incidentų tipai' },
    { id: 5, name: 'Elektroninių nusikaltimų samprata' },
    { id: 6, name: 'Informacinis karas' },
    { id: 7, name: 'Elektroniniai įkalčiai' },
    { id: 8, name: 'Įkalčių analizės metodai' }
  ]

  const handleStart = () => {
    if (selectedMode === 'exam') {
      onStartQuiz(selectedMode, 25, instantFeedback)
    } else if (selectedMode === 'chapter' && selectedChapter) {
      const chapter = chapters.find(c => c.id === selectedChapter)
      onStartQuiz(selectedMode, undefined, instantFeedback, selectedChapter, chapter?.name)
    } else {
      onStartQuiz(selectedMode, undefined, instantFeedback)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 transition-colors duration-300">
        <div className="space-y-6">
          {/* Mode Selection */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Select Practice Mode</h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedMode('full')}
                className={`p-4 rounded-xl border transition-colors duration-200 ${
                  selectedMode === 'full'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600'
                }`}
              >
                <div className="font-medium mb-1">Full Practice</div>
                <div className="text-sm opacity-75">All {totalQuestions} questions</div>
              </button>

              <button
                onClick={() => setSelectedMode('exam')}
                className={`p-4 rounded-xl border transition-colors duration-200 ${
                  selectedMode === 'exam'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600'
                }`}
              >
                <div className="font-medium mb-1">Exam Simulation</div>
                <div className="text-sm opacity-75">25 random questions</div>
              </button>

              <button
                onClick={() => setSelectedMode('chapter')}
                className={`p-4 rounded-xl border transition-colors duration-200 ${
                  selectedMode === 'chapter'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600'
                }`}
              >
                <div className="font-medium mb-1">Topic Practice</div>
                <div className="text-sm opacity-75">Practice by topic</div>
              </button>

              <button
                onClick={() => setSelectedMode('additional')}
                className={`p-4 rounded-xl border transition-colors duration-200 ${
                  selectedMode === 'additional'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600'
                }`}
              >
                <div className="font-medium mb-1">Additional Practice</div>
                <div className="text-sm opacity-75">Extra practice questions</div>
              </button>
            </div>
          </div>

          {/* Chapter Selection (only shown when 'chapter' mode is selected) */}
          {selectedMode === 'chapter' && (
            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Select Topic</h3>
              <div className="grid grid-cols-1 gap-4">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => setSelectedChapter(chapter.id)}
                    className={`p-4 rounded-xl border transition-colors duration-200 ${
                      selectedChapter === chapter.id
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300'
                        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-green-300 dark:hover:border-green-600'
                    }`}
                  >
                    <div className="font-medium">{chapter.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Feedback Toggle */}
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
            <div>
              <div className="font-medium text-slate-800 dark:text-slate-200">Instant Feedback</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Get immediate feedback after each answer</div>
            </div>
            <button
              onClick={() => setInstantFeedback(!instantFeedback)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                instantFeedback ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  instantFeedback ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={selectedMode === 'chapter' && !selectedChapter}
            className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-colors duration-200 ${
              selectedMode === 'chapter' && !selectedChapter
                ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700'
            }`}
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  )
}

export default CybercrimesSetup 