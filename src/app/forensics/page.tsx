'use client'

import React from 'react'
import Link from 'next/link'

export default function ForensicsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Back Button - Top Left */}
      <div className="absolute top-10 left-10 z-10">
        <Link href="/" className="flex items-center px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-200 shadow-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Digital Forensics Practice
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Master Digital Forensics Techniques and Evidence Recovery
          </p>
        </header>
        
        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-12 text-center transition-colors duration-300">
            <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
              Coming Soon!
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 transition-colors duration-300">
              The Digital Forensics practice module is currently under development.
            </p>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200 dark:border-purple-800 p-6 mb-8 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3 transition-colors duration-300">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2 text-purple-700 dark:text-purple-300 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Evidence acquisition & analysis
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Forensic methodologies
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Report writing & testimony
                  </div>
                </div>
                <div className="space-y-2 text-purple-700 dark:text-purple-300 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Mobile device forensics
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Network forensics
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Chain of custody procedures
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-slate-500 dark:text-slate-400 transition-colors duration-300">
              <p>Questions and practice materials will be added soon.</p>
              <p className="mt-2">Check back later for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 