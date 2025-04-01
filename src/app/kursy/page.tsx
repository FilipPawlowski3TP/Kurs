'use client';

import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero section */}
      <div className="relative overflow-hidden py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kursy do egzaminów zawodowych
            </h1>
            <p className="text-xl text-gray-400">
              Kompleksowe przygotowanie do egzaminów zawodowych dla technika informatyka i technika programisty
            </p>
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Technik Informatyk */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500/50">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technik Informatyk</h3>
              <p className="text-gray-400 mb-4">Przygotowanie do egzaminów INF.02 i INF.03</p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#1e1e1e]/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">INF.02</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Administracja i eksploatacja systemów komputerowych</li>
                    <li>• Urządzeń peryferyjnych i lokalnych sieci komputerowych</li>
                    <li>• Teoria i praktyka</li>
                  </ul>
                </div>
                <div className="bg-[#1e1e1e]/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">INF.03</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Tworzenie i administrowanie stronami internetowymi</li>
                    <li>• Bazami danych i aplikacjami internetowymi</li>
                    <li>• Teoria i praktyka</li>
                  </ul>
                </div>
              </div>
              <Link href="/kursy/technik-informatyk">
                <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Wybierz kurs
                </button>
              </Link>
            </div>

            {/* Technik Programista */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:border-pink-500/50">
              <div className="bg-gradient-to-br from-pink-500 to-cyan-500 w-12 h-12 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technik Programista</h3>
              <p className="text-gray-400 mb-4">Przygotowanie do egzaminów INF.03 i INF.04</p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#1e1e1e]/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">INF.03</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Tworzenie i administrowanie stronami internetowymi</li>
                    <li>• Bazami danych i aplikacjami internetowymi</li>
                    <li>• Teoria i praktyka</li>
                  </ul>
                </div>
                <div className="bg-[#1e1e1e]/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">INF.04</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>• Programowanie aplikacji webowych</li>
                    <li>• Programowanie aplikacji desktopowych</li>
                    <li>• Teoria i praktyka</li>
                  </ul>
                </div>
              </div>
              <Link href="/kursy/technik-programista">
                <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
                  Wybierz kurs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Co otrzymujesz w ramach kursu?
            </h2>
            <p className="text-gray-400">
              Kompleksowe przygotowanie do egzaminów zawodowych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-purple-500/10 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-purple-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Materiały wideo</h3>
              <p className="text-gray-400">Profesjonalnie przygotowane lekcje wideo z dokładnymi wyjaśnieniami</p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300">
              <div className="bg-pink-500/10 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-pink-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Materiały teoretyczne</h3>
              <p className="text-gray-400">Szczegółowe materiały teoretyczne do każdej części egzaminu</p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="bg-cyan-500/10 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zadania praktyczne</h3>
              <p className="text-gray-400">Ćwiczenia praktyczne i przykładowe zadania egzaminacyjne</p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="bg-yellow-500/10 rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:bg-yellow-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Testy sprawdzające</h3>
              <p className="text-gray-400">Regularne testy sprawdzające postępy w nauce</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 