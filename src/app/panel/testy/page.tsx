"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function TestyPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.courses) {
      const userCourses = session.user.courses
      
      if (userCourses.includes('Technik Programista')) {
        router.push('/panel/testy/programista')
      } else if (userCourses.includes('Technik Informatyk')) {
        router.push('/panel/testy/informatyk')
      }
    }
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/login')
    return null
  }

  if (!session?.user?.courses?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-200 mb-4">Brak dostępu do testów</h1>
        <p className="text-gray-400 text-center">
          Nie masz jeszcze wykupionych żadnych kursów. 
          Przejdź do sekcji kursów, aby uzyskać dostęp do materiałów testowych.
        </p>
      </div>
    )
  }

  return null
} 