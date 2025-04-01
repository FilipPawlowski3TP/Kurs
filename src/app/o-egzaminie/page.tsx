export default function AboutExamPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="relative overflow-hidden py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O egzaminie zawodowym
            </h1>
            <p className="text-xl text-gray-400">
              Struktura i wymagania egzaminów zawodowych dla technika informatyka i programisty
            </p>
          </div>

          {/* Exam Structure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Technik Informatyk */}
            <div className="space-y-8">
              <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Technik Informatyk</h2>
                
                {/* INF.02 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">INF.02</h3>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-white mb-3">Część pisemna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 40 pytań testowych</li>
                      <li>• Czas trwania: 60 minut</li>
                      <li>• Minimalny wynik: 50%</li>
                    </ul>
                  </div>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg mt-4">
                    <h4 className="text-xl font-medium text-white mb-3">Część praktyczna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 2 zadania praktyczne</li>
                      <li>• Czas trwania: 180 minut</li>
                      <li>• Minimalny wynik: 75%</li>
                    </ul>
                  </div>
                </div>

                {/* INF.03 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">INF.03</h3>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-white mb-3">Część pisemna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 40 pytań testowych</li>
                      <li>• Czas trwania: 60 minut</li>
                      <li>• Minimalny wynik: 50%</li>
                    </ul>
                  </div>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg mt-4">
                    <h4 className="text-xl font-medium text-white mb-3">Część praktyczna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 2 zadania praktyczne</li>
                      <li>• Czas trwania: 180 minut</li>
                      <li>• Minimalny wynik: 75%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Technik Programista */}
            <div className="space-y-8">
              <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Technik Programista</h2>
                
                {/* INF.03 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">INF.03</h3>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-white mb-3">Część pisemna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 40 pytań testowych</li>
                      <li>• Czas trwania: 60 minut</li>
                      <li>• Minimalny wynik: 50%</li>
                    </ul>
                  </div>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg mt-4">
                    <h4 className="text-xl font-medium text-white mb-3">Część praktyczna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 2 zadania praktyczne</li>
                      <li>• Czas trwania: 180 minut</li>
                      <li>• Minimalny wynik: 75%</li>
                    </ul>
                  </div>
                </div>

                {/* INF.04 */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">INF.04</h3>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-white mb-3">Część pisemna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 40 pytań testowych</li>
                      <li>• Czas trwania: 60 minut</li>
                      <li>• Minimalny wynik: 50%</li>
                    </ul>
                  </div>
                  <div className="bg-[#1e1e1e]/50 p-6 rounded-lg mt-4">
                    <h4 className="text-xl font-medium text-white mb-3">Część praktyczna</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 2 zadania praktyczne</li>
                      <li>• Czas trwania: 180 minut</li>
                      <li>• Minimalny wynik: 75%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ważne informacje</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Egzaminy są przeprowadzane w różnych terminach dla różnych klas
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Każda część egzaminu (pisemna i praktyczna) jest oceniana osobno
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Do zdania egzaminu wymagane jest uzyskanie minimalnego wyniku z obu części
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Wyniki egzaminu są dostępne w systemie OKE po około 2 tygodniach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 