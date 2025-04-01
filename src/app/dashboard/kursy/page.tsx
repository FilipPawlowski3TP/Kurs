export default function UserCoursesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
        Moje kursy
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active courses */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Aktywne kursy</h2>
          
          {/* Course card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">Kurs INF.03 - Front-end</h3>
                <p className="text-sm text-gray-400 mt-1">Postęp: 60%</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-500">
                Aktywny
              </span>
            </div>
            <div className="w-full h-2 bg-[#2e2e2e] rounded-full mb-4">
              <div className="h-full w-[60%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Ostatnia aktywność: 2 godziny temu</p>
              <p>Ukończone lekcje: 12/20</p>
            </div>
            <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              Kontynuuj naukę
            </button>
          </div>

          {/* Course card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">Kurs INF.03 - Back-end</h3>
                <p className="text-sm text-gray-400 mt-1">Postęp: 25%</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-500">
                Aktywny
              </span>
            </div>
            <div className="w-full h-2 bg-[#2e2e2e] rounded-full mb-4">
              <div className="h-full w-[25%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Ostatnia aktywność: wczoraj</p>
              <p>Ukończone lekcje: 5/20</p>
            </div>
            <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
              Kontynuuj naukę
            </button>
          </div>
        </div>

        {/* Completed courses */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Ukończone kursy</h2>
          
          {/* Completed course card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">Podstawy HTML i CSS</h3>
                <p className="text-sm text-gray-400 mt-1">Ukończono: 1 miesiąc temu</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500">
                Ukończony
              </span>
            </div>
            <div className="w-full h-2 bg-[#2e2e2e] rounded-full mb-4">
              <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Ocena końcowa: 95%</p>
              <p>Ukończone lekcje: 20/20</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
                Zobacz certyfikat
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
                Powtórz kurs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 