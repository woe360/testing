'use client'

import React, { useState, useEffect } from 'react'
import { getDuomenuGavybaQuizHistory, getDuomenuGavybaQuizStats, clearDuomenuGavybaQuizHistory } from '../utils/duomenuGavybaUtils'
import { QuizHistoryEntry } from '../types/quiz'

const DuomenuGavybaHistory: React.FC = () => {
  const [history, setHistory] = useState<QuizHistoryEntry[]>([])
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    totalExams: 0,
    totalChapters: 0,
    totalAdditional: 0,
    averageScore: 0,
    examPassRate: 0,
    bestScore: 0
  })
  const [showAll, setShowAll] = useState(false)

  const updateHistory = () => {
    setHistory(getDuomenuGavybaQuizHistory())
    setStats(getDuomenuGavybaQuizStats())
  }

  useEffect(() => {
    updateHistory()
    
    // Listen for storage changes (when quiz results are saved)
    const handleStorageChange = () => updateHistory()
    
    // Listen for custom event when duomenu gavyba quiz is completed
    const handleDuomenuGavybaQuizCompleted = () => updateHistory()
    
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('duomenuGavybaQuizCompleted', handleDuomenuGavybaQuizCompleted)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('duomenuGavybaQuizCompleted', handleDuomenuGavybaQuizCompleted)
    }
  }, [])

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear all data mining quiz history?')) {
      clearDuomenuGavybaQuizHistory()
      setHistory([])
      setStats({
        totalQuizzes: 0,
        totalExams: 0,
        totalChapters: 0,
        totalAdditional: 0,
        averageScore: 0,
        examPassRate: 0,
        bestScore: 0
      })
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const displayedHistory = showAll ? history : history.slice(0, 5)

  if (history.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 transition-colors duration-300">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">Data Mining Quiz History</h3>
        <div className="text-center text-slate-500 dark:text-slate-400 py-12 transition-colors duration-300">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
            <svg className="w-10 h-10 text-slate-400 dark:text-slate-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2 transition-colors duration-300">No data mining quiz history yet</p>
          <p className="text-slate-500 dark:text-slate-400 transition-colors duration-300">Complete a data mining quiz to see your results here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">Data Mining Quiz History</h3>
        <button
          onClick={handleClearHistory}
          className="px-4 py-2 text-red-600 dark:text-red-400 hover:text-white hover:bg-red-600 dark:hover:bg-red-500 rounded-xl transition-all duration-300 border border-red-200 dark:border-red-800 hover:border-red-600 dark:hover:border-red-500"
        >
          Clear History
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-8">
        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1 transition-colors duration-300">{stats.totalQuizzes}</div>
          <div className="text-sm text-green-700 dark:text-green-300 font-medium transition-colors duration-300">Full Practice</div>
        </div>
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1 transition-colors duration-300">{stats.totalExams}</div>
          <div className="text-sm text-blue-700 dark:text-blue-300 font-medium transition-colors duration-300">Quick Tests</div>
        </div>
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1 transition-colors duration-300">{stats.totalChapters}</div>
          <div className="text-sm text-purple-700 dark:text-purple-300 font-medium transition-colors duration-300">Topics</div>
        </div>
        <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-200 dark:border-orange-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1 transition-colors duration-300">{stats.totalAdditional}</div>
          <div className="text-sm text-orange-700 dark:text-orange-300 font-medium transition-colors duration-300">Additional</div>
        </div>
        <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1 transition-colors duration-300">{stats.averageScore}%</div>
          <div className="text-sm text-indigo-700 dark:text-indigo-300 font-medium transition-colors duration-300">Avg Score</div>
        </div>
        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 transition-colors duration-300">{stats.examPassRate}%</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300 font-medium transition-colors duration-300">Pass Rate</div>
        </div>
        <div className="text-center p-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl border border-rose-200 dark:border-rose-800 transition-colors duration-300">
          <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-1 transition-colors duration-300">{stats.bestScore}%</div>
          <div className="text-sm text-rose-700 dark:text-rose-300 font-medium transition-colors duration-300">Best Score</div>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {displayedHistory.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className={`w-4 h-4 rounded-full shadow-lg ${
                entry.mode === 'exam' 
                  ? entry.passed ? 'bg-blue-600' : 'bg-red-600'
                  : entry.mode === 'chapter'
                  ? 'bg-purple-600'
                  : entry.mode === 'additional'
                  ? 'bg-orange-600'
                  : 'bg-green-600'
              }`} />
              
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-100 text-lg transition-colors duration-300">
                    {entry.mode === 'exam' ? 'Quick Test' : 
                     entry.mode === 'chapter' ? `Topic ${entry.chapterInfo?.id}` : 
                     entry.mode === 'additional' ? 'Additional Practice' :
                     'Full Practice'}
                  </span>
                  {entry.instantFeedback && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 text-xs rounded-full border border-yellow-300 dark:border-yellow-700 font-medium transition-colors duration-300">
                      Instant FB
                    </span>
                  )}
                </div>
                <div className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  {entry.mode === 'chapter' && entry.chapterInfo ? (
                    <span className="text-purple-600 dark:text-purple-400 font-medium transition-colors duration-300">{entry.chapterInfo.name}</span>
                  ) : entry.mode === 'additional' ? (
                    <span className="text-orange-600 dark:text-orange-400 font-medium transition-colors duration-300">Advanced Data Mining Concepts</span>
                  ) : null}
                  {((entry.mode === 'chapter' && entry.chapterInfo) || entry.mode === 'additional') ? ' • ' : ''}
                  {formatDate(entry.date)}
                  {entry.duration && ` • ${entry.duration}m`}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`text-2xl font-bold mb-1 ${
                entry.percentage >= 80 ? 'text-green-600 dark:text-green-400' :
                entry.percentage >= 65 ? 'text-yellow-600 dark:text-yellow-400' :
                'text-red-600 dark:text-red-400'
              } transition-colors duration-300`}>
                {entry.percentage}%
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">
                {entry.score}/{entry.totalQuestions}
                {entry.mode === 'exam' && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                    entry.passed 
                      ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700' 
                      : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700'
                  } transition-colors duration-300`}>
                    {entry.passed ? 'PASS' : 'FAIL'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {history.length > 5 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-2xl transition-all duration-300 border border-slate-300 dark:border-slate-600"
          >
            {showAll ? 'Show Less' : `Show All (${history.length} total)`}
          </button>
        </div>
      )}
    </div>
  )
}

export default DuomenuGavybaHistory

