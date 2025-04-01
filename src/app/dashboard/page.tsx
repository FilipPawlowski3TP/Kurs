export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
        Witaj, Jan!
      </h1>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Aktywne kursy</p>
              <h3 className="text-2xl font-bold text-white mt-1">2</h3>
            </div>
            <div className="p-3 rounded-lg bg-purple-500/10">
              <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Nadchodzące zajęcia</p>
              <h3 className="text-2xl font-bold text-white mt-1">1</h3>
            </div>
            <div className="p-3 rounded-lg bg-pink-500/10">
              <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Nieprzeczytane wiadomości</p>
              <h3 className="text-2xl font-bold text-white mt-1">3</h3>
            </div>
            <div className="p-3 rounded-lg bg-cyan-500/10">
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent activity and next lesson */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent activity */}
        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
          <h2 className="text-xl font-semibold text-white mb-4">Ostatnia aktywność</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white">Ukończono lekcję "Wprowadzenie do HTML"</p>
                <p className="text-sm text-gray-400">2 godziny temu</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-pink-500/10">
                <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white">Zarezerwowano nowe zajęcia</p>
                <p className="text-sm text-gray-400">wczoraj</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next lesson */}
        <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
          <h2 className="text-xl font-semibold text-white mb-4">Następne zajęcia</h2>
          <div className="p-4 rounded-lg bg-[#2e2e2e]/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Podstawy CSS</h3>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500">
                Za 2 dni
              </span>
            </div>
            <div className="space-y-2 text-gray-400">
              <p>Data: 15 marca 2024, 16:00</p>
              <p>Czas trwania: 1.5h</p>
            </div>
            <button className="mt-4 w-full px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              Dołącz do zajęć
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 