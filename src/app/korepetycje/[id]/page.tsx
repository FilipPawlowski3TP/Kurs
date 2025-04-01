import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { ReservationForm } from "./reservation-form"

async function getCourse(id: string) {
  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      teacher: true,
    },
  })

  if (!course) {
    notFound()
  }

  return course
}

export default async function CoursePage({
  params,
}: {
  params: { id: string }
}) {
  const course = await getCourse(params.id)

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">{course.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Cena</h3>
              <p className="text-lg">{course.price} zł/h</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Czas trwania</h3>
              <p className="text-lg">{course.duration} minut</p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Prowadzący</h3>
            <p className="text-lg">{course.teacher.name || "Nieznany"}</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Zarezerwuj termin</h2>
          <ReservationForm courseId={course.id} />
        </div>
      </div>
    </div>
  )
} 