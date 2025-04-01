"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Course {
  id: string
  name: string
  description: string
}

export default function PanelPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login")
    }
  }, [status, router])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/user/courses")
        const data = await response.json()
        setCourses(data.courses)
      } catch (error) {
        console.error("Błąd podczas pobierania kursów:", error)
      } finally {
        setLoading(false)
      }
    }

    if (session) {
      fetchCourses()
    }
  }, [session])

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Ładowanie...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Nagłówek */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              Panel użytkownika
            </h1>
            <p className="text-gray-400 mt-2">
              Witaj, {session.user?.name || session.user?.email}!
            </p>
          </div>
        </div>

        {/* Statystyki */}
        <div className="p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10">
          <h3 className="text-lg font-medium text-gray-300">Twoje kursy</h3>
          <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            {courses.length}
          </p>
        </div>

        {/* Sekcja kursów */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Twoje kursy</h2>
          
          {courses.length === 0 ? (
            <div className="p-8 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brak dostępnych kursów</h3>
              <p className="text-gray-400 mb-6">Nie masz jeszcze dostępu do żadnego kursu. Zakup kurs, aby uzyskać dostęp do materiałów.</p>
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Przejdź do zakupu kursów
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {courses.map((course) => (
                <div key={course.id} className="p-6 rounded-2xl backdrop-blur-sm bg-black/30 border border-white/10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">{course.name}</h3>
                      <p className="text-gray-400 mt-1">{course.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-[#1e1e1e]/50 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Część teoretyczna</h4>
                      <div className="space-y-3">
                        <Link
                          href={course.name === "Technik Informatyk" ? "/panel/testy/informatyk" : "/panel/testy/programista"}
                          className="flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <span className="text-gray-300">Testy kwalifikacyjne</span>
                          </div>
                          <span className="text-sm text-gray-400">→</span>
                        </Link>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#1e1e1e]/50 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Część praktyczna</h4>
                      <div className="space-y-3">
                        <Link
                          href={course.name === "Technik Informatyk" ? "/panel/praktyka/informatyk" : "/panel/praktyka/programista"}
                          className="flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </div>
                            <span className="text-gray-300">Egzaminy praktyczne</span>
                          </div>
                          <span className="text-sm text-gray-400">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 