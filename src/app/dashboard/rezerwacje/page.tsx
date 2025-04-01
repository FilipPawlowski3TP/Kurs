export default function ReservationsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Rezerwacje
        </h1>
        <button className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
          Nowa rezerwacja
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming reservations */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Nadchodzące zajęcia</h2>
          
          {/* Reservation card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">Podstawy CSS</h3>
                <p className="text-sm text-gray-400 mt-1">15 marca 2024, 16:00</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-500">
                Potwierdzone
              </span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Czas trwania: 1.5h</p>
              <p>Forma: Online</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Dołącz do zajęć
              </button>
              <button className="px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
                Anuluj
              </button>
            </div>
          </div>

          {/* Pending reservation card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">JavaScript - Funkcje</h3>
                <p className="text-sm text-gray-400 mt-1">20 marca 2024, 17:30</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-500">
                Oczekujące
              </span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Czas trwania: 2h</p>
              <p>Forma: Online</p>
              <p className="text-yellow-500">Oczekiwanie na potwierdzenie mentora</p>
            </div>
            <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
              Anuluj rezerwację
            </button>
          </div>
        </div>

        {/* Past reservations */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Historia zajęć</h2>
          
          {/* Past reservation card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">Wprowadzenie do HTML</h3>
                <p className="text-sm text-gray-400 mt-1">10 marca 2024, 16:00</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-500">
                Zakończone
              </span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm mb-4">
              <p>Czas trwania: 1.5h</p>
              <p>Forma: Online</p>
            </div>
            <div className="flex space-x-4">
              <button className="flex-1 px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
                Zobacz notatki
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg text-white font-medium bg-[#2e2e2e] transition-all duration-300 hover:bg-[#3e3e3e]">
                Oceń zajęcia
              </button>
            </div>
          </div>

          {/* Cancelled reservation card */}
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-white">PHP - Podstawy</h3>
                <p className="text-sm text-gray-400 mt-1">5 marca 2024, 18:00</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500">
                Anulowane
              </span>
            </div>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Czas trwania: 2h</p>
              <p>Forma: Online</p>
              <p className="text-red-500">Anulowane przez użytkownika</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 