export default function TechnikProgramistaPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="relative overflow-hidden py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technik Programista
            </h1>
            <p className="text-xl text-gray-400">
              Kompleksowe przygotowanie do egzaminów INF.03 i INF.04
            </p>
          </div>

          {/* INF.03 Section */}
          <div className="mb-16">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">INF.03</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Teoria</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Technologie webowe
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Bazy danych
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Bezpieczeństwo aplikacji
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      SEO i optymalizacja
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Praktyka</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Tworzenie stron WWW
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Projektowanie baz danych
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Programowanie aplikacji
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Testowanie aplikacji
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* INF.04 Section */}
          <div className="mb-16">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">INF.04</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Teoria</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Programowanie obiektowe
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Wzorce projektowe
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Testowanie oprogramowania
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Dokumentacja techniczna
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Praktyka</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Tworzenie aplikacji webowych
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Tworzenie aplikacji desktopowych
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Debugowanie i optymalizacja
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      Wdrożenie aplikacji
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Czas trwania</h3>
              <p className="text-gray-400">120 godzin lekcyjnych</p>
            </div>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Forma zajęć</h3>
              <p className="text-gray-400">Online lub stacjonarnie</p>
            </div>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cena</h3>
              <p className="text-gray-400">1999 zł</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a 
              href="/platnosc?course=technik-programista" 
              className="inline-block px-8 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Zapisz się na kurs
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 