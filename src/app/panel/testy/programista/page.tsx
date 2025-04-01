"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import questions from "@/data/questions.json"

interface Question {
  id: number
  question: string
  answers: string[]
  correctAnswer: number
  explanation: string
}

interface Test {
  id: string
  name: string
  questions: Question[]
}

export default function ProgramistaTestyPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedTest, setSelectedTest] = useState<Test | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<{
    correct: number
    total: number
    wrongQuestions: number[]
  } | null>(null)

  if (status === "unauthenticated") {
    router.push("/auth/login")
    return null
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Ładowanie...</p>
        </div>
      </div>
    )
  }

  if (!session?.user?.courses?.includes("Technik Programista")) {
    router.push("/panel/testy")
    return null
  }

  const tests: Test[] = [
    {
      id: "inf03",
      name: questions.inf03.name,
      questions: questions.inf03.questions
    },
    {
      id: "inf04",
      name: questions.inf04.name,
      questions: questions.inf04.questions
    }
  ]

  const handleStartTest = (test: Test) => {
    setSelectedTest(test)
    setCurrentQuestion(0)
    setAnswers(new Array(test.questions.length).fill(-1))
    setShowResults(false)
    setResults(null)
  }

  const handleAnswer = (answerIndex: number) => {
    if (!selectedTest) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (currentQuestion < selectedTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: number[]) => {
    if (!selectedTest) return

    const wrongQuestions: number[] = []
    let correct = 0

    finalAnswers.forEach((answer, index) => {
      if (answer === selectedTest.questions[index].correctAnswer) {
        correct++
      } else {
        wrongQuestions.push(index)
      }
    })

    setResults({
      correct,
      total: selectedTest.questions.length,
      wrongQuestions
    })
    setShowResults(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text mb-8">
          Testy kwalifikacyjne - Technik Programista
        </h1>

        {!selectedTest ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer"
                onClick={() => handleStartTest(test)}
              >
                <h2 className="text-xl font-bold text-white mb-2">{test.name}</h2>
                <p className="text-gray-400">
                  Liczba pytań: {test.questions.length}
                </p>
              </div>
            ))}
          </div>
        ) : !showResults ? (
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">{selectedTest.name}</h2>
              <p className="text-gray-400">
                Pytanie {currentQuestion + 1} z {selectedTest.questions.length}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-6">
                {selectedTest.questions[currentQuestion].question}
              </p>
              <div className="space-y-4">
                {selectedTest.questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-4 rounded-lg text-left transition-colors ${
                      answers[currentQuestion] === index
                        ? "bg-purple-500/20 border-purple-500"
                        : "bg-black/30 hover:bg-black/50 border border-white/10"
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6">Wyniki testu</h2>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-2">
                Wynik: {results?.correct} z {results?.total} ({Math.round((results?.correct || 0) / (results?.total || 1) * 100)}%)
              </p>
              {results?.wrongQuestions.length ? (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Niepoprawne odpowiedzi:</h3>
                  <div className="space-y-4">
                    {results.wrongQuestions.map((questionIndex) => (
                      <div key={questionIndex} className="p-4 rounded-lg bg-black/30 border border-white/10">
                        <p className="text-gray-300 mb-2">
                          {selectedTest.questions[questionIndex].question}
                        </p>
                        <p className="text-gray-400">
                          Poprawna odpowiedź: {selectedTest.questions[questionIndex].answers[selectedTest.questions[questionIndex].correctAnswer]}
                        </p>
                        <p className="text-gray-400 mt-2">
                          Wyjaśnienie: {selectedTest.questions[questionIndex].explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-green-500 font-semibold">Gratulacje! Wszystkie odpowiedzi są poprawne!</p>
              )}
            </div>
            <button
              onClick={() => setSelectedTest(null)}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Wróć do wyboru testu
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 