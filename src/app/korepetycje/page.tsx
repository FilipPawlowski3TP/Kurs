import { prisma } from "@/lib/prisma"
import { Course, User } from "@prisma/client"
import Link from "next/link"

type CourseWithTeacher = Course & {
  teacher: User
}

async function getCourses(): Promise<CourseWithTeacher[]> {
  const courses = await prisma.course.findMany({
    include: {
      teacher: true,
    },
  })
  return courses
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dostępne Korepetycje</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">{course.price} zł/h</span>
              <span className="text-sm text-gray-500">
                Czas trwania: {course.duration} min
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Prowadzący: {course.teacher.name || "Nieznany"}
            </div>
            <Link
              href={`/korepetycje/${course.id}`}
              className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Zarezerwuj
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 