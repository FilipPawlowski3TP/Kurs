export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              O nas
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Poznaj naszą historię, zobacz statystyki i przekonaj się, dlaczego warto nam zaufać
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
              <div className="text-gray-300">Zdawalność egzaminów</div>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">500+</div>
              <div className="text-gray-300">Zadowolonych absolwentów</div>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] text-center">
              <div className="text-4xl font-bold text-cyan-500 mb-2">5+</div>
              <div className="text-gray-300">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
            Szczegóły kursów
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <h3 className="text-2xl font-bold text-white mb-4">Czas trwania</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Kurs Technik Informatyk: 120 godzin</li>
                <li>• Kurs Technik Programista: 120 godzin</li>
                <li>• Dostęp do materiałów: 12 miesięcy</li>
                <li>• Możliwość przerabiania materiałów w swoim tempie</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <h3 className="text-2xl font-bold text-white mb-4">Forma zajęć</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Materiały wideo dostępne 24/7</li>
                <li>• Praktyczne zadania i projekty</li>
                <li>• Konsultacje online z mentorem</li>
                <li>• Grupowe sesje Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
            Historie sukcesu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Technik Informatyk */}
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Marek Kowalski</h3>
                  <p className="text-gray-400">Senior System Administrator w Google</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Wyniki egzaminów:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• INF.02 - Teoria: 95%, Praktyka: 98%</li>
                    <li>• INF.03 - Teoria: 92%, Praktyka: 95%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Doświadczenie zawodowe:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• 5 lat w Google jako Senior System Administrator</li>
                    <li>• Zarządzanie infrastrukturą chmurową dla ponad 1000 serwerów</li>
                    <li>• Implementacja rozwiązań bezpieczeństwa dla globalnych projektów</li>
                  </ul>
                </div>
                <p className="text-gray-300">
                  "Dzięki solidnemu przygotowaniu do egzaminów zawodowych, które obejmowało zarówno teorię jak i praktykę, 
                  byłem w stanie szybko rozwinąć swoją karierę w branży IT. Obecnie pracuję w Google, gdzie wykorzystuję 
                  wiedzę zdobytą podczas przygotowań do egzaminów INF.02 i INF.03."
                </p>
              </div>
              <div className="mt-4 flex items-center text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>

            {/* Technik Programista */}
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Anna Nowak</h3>
                  <p className="text-gray-400">Senior Full Stack Developer w Microsoft</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Wyniki egzaminów:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• INF.03 - Teoria: 98%, Praktyka: 100%</li>
                    <li>• INF.04 - Teoria: 95%, Praktyka: 98%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Doświadczenie zawodowe:</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• 6 lat w Microsoft jako Senior Full Stack Developer</li>
                    <li>• Rozwój aplikacji w chmurze Azure</li>
                    <li>• Prowadzenie zespołów deweloperskich</li>
                  </ul>
                </div>
                <p className="text-gray-300">
                  "Przygotowanie do egzaminów zawodowych dało mi solidne fundamenty w programowaniu. 
                  Dzięki praktycznym projektom i kompleksowej wiedzy teoretycznej, szybko znalazłam 
                  pracę w Microsoft, gdzie rozwijam się zawodowo i realizuję swoje pasje."
                </p>
              </div>
              <div className="mt-4 flex items-center text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              Nasza gwarancja
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Jeśli nie zdasz egzaminu za pierwszym razem, zapewniamy darmowe powtórzenie kursu. 
              Naszym celem jest Twój sukces!
            </p>
            <a href="/kursy" className="inline-block px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              Rozpocznij naukę
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 