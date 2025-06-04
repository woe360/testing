'use client'

import React from 'react'
import Link from 'next/link'

export default function CybercrimesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <Link href="/" className="mr-4 p-2 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Cybercrimes Practice
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Master Cybercrime Investigation and Digital Evidence Handling
          </p>
        </header>
        
        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-12 text-center transition-colors duration-300">
            <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
              Coming Soon!
            </h2>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 transition-colors duration-300">
              The Cybercrimes practice module is currently under development.
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200 dark:border-red-800 p-6 mb-8 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3 transition-colors duration-300">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2 text-red-700 dark:text-red-300 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Cybercrime investigation methods
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Digital evidence procedures
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Legal frameworks & compliance
                  </div>
                </div>
                <div className="space-y-2 text-red-700 dark:text-red-300 transition-colors duration-300">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Incident response procedures
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Cybersecurity law enforcement
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Case study analysis
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