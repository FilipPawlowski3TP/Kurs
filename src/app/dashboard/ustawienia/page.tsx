export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
        Ustawienia
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile settings */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
            <h2 className="text-xl font-semibold text-white mb-6">Profil</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <button className="absolute bottom-0 right-0 p-2 rounded-full bg-[#2e2e2e] border border-[#1e1e1e] text-white hover:bg-[#3e3e3e]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Jan Nowak</h3>
                  <p className="text-gray-400">jan.nowak@example.com</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    defaultValue="Jan Nowak"
                    className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="jan.nowak@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Telefon</label>
                  <input
                    type="tel"
                    defaultValue="+48 123 456 789"
                    className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Discord</label>
                  <input
                    type="text"
                    defaultValue="jannowak#1234"
                    className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>
              </div>

              <button className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Zapisz zmiany
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
            <h2 className="text-xl font-semibold text-white mb-6">Zmień hasło</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Obecne hasło</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nowe hasło</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Potwierdź nowe hasło</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg bg-[#2e2e2e] text-white border border-[#3e3e3e] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                />
              </div>
              <button className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                Zmień hasło
              </button>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="lg:col-span-1 space-y-8">
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
            <h2 className="text-xl font-semibold text-white mb-6">Preferencje</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Powiadomienia email</h3>
                  <p className="text-sm text-gray-400">Otrzymuj powiadomienia na email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#2e2e2e] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Powiadomienia Discord</h3>
                  <p className="text-sm text-gray-400">Otrzymuj powiadomienia na Discord</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#2e2e2e] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Tryb ciemny</h3>
                  <p className="text-sm text-gray-400">Włącz tryb ciemny</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-[#2e2e2e] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
            <h2 className="text-xl font-semibold text-white mb-6">Sesja</h2>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-red-500/10 text-red-500 border border-red-500/20 transition-all duration-300 hover:bg-red-500/20">
                Wyloguj się
              </button>
              <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-red-500/10 text-red-500 border border-red-500/20 transition-all duration-300 hover:bg-red-500/20">
                Usuń konto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 