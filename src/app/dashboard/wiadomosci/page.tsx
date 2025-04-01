export default function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
        Wiadomości
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Conversations list */}
        <div className="lg:col-span-1 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Szukaj..."
              className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e]/30 border border-[#1e1e1e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Active conversation */}
          <div className="p-4 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/50 border border-purple-500/50 transition-all duration-300 hover:bg-[#1e1e1e]/70 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1e1e1e]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium truncate">Mentor Jan Kowalski</h3>
                <p className="text-sm text-gray-400 truncate">Tak, możemy omówić to na następnych zajęciach</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">12:30</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-500">2</span>
              </div>
            </div>
          </div>

          {/* Other conversations */}
          <div className="p-4 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e] transition-all duration-300 hover:bg-[#1e1e1e]/50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-gray-500 border-2 border-[#1e1e1e]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium truncate">Mentor Anna Nowak</h3>
                <p className="text-sm text-gray-400 truncate">Dziękuję za dzisiejsze zajęcia!</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">Wczoraj</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat window */}
        <div className="lg:col-span-2 flex flex-col h-[calc(100vh-12rem)]">
          <div className="p-4 backdrop-blur-sm bg-[#1e1e1e]/30 border-b border-[#1e1e1e] rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#1e1e1e]"></div>
              </div>
              <div>
                <h3 className="text-white font-medium">Mentor Jan Kowalski</h3>
                <p className="text-sm text-green-500">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 backdrop-blur-sm bg-[#1e1e1e]/30 border-x border-[#1e1e1e]">
            {/* Message from other */}
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>
              <div className="max-w-[80%] rounded-t-2xl rounded-br-2xl bg-[#2e2e2e] p-4">
                <p className="text-white">Cześć! Jak idzie nauka CSS?</p>
                <span className="text-xs text-gray-400 mt-1">12:25</span>
              </div>
            </div>

            {/* Message from user */}
            <div className="flex items-end justify-end space-x-2">
              <div className="max-w-[80%] rounded-t-2xl rounded-bl-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-4">
                <p className="text-white">Całkiem nieźle! Mam tylko problem z flexboxem</p>
                <span className="text-xs text-gray-400 mt-1">12:27</span>
              </div>
            </div>

            {/* Message from other */}
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0"></div>
              <div className="max-w-[80%] rounded-t-2xl rounded-br-2xl bg-[#2e2e2e] p-4">
                <p className="text-white">Tak, możemy omówić to na następnych zajęciach. Przygotuję kilka praktycznych przykładów.</p>
                <span className="text-xs text-gray-400 mt-1">12:30</span>
              </div>
            </div>
          </div>

          <div className="p-4 backdrop-blur-sm bg-[#1e1e1e]/30 border-t border-x border-[#1e1e1e] rounded-b-2xl">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Napisz wiadomość..."
                className="flex-1 px-4 py-2 rounded-lg bg-[#2e2e2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <button className="p-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 