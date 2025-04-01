import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await request.json()
    const { courseId, date } = json

    if (!courseId || !date) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course) {
      return new NextResponse("Course not found", { status: 404 })
    }

    const reservation = await prisma.reservation.create({
      data: {
        date: new Date(date),
        courseId,
        studentId: session.user.id,
        status: "PENDING",
      },
    })

    return NextResponse.json(reservation)
  } catch (error) {
    console.error("[RESERVATIONS_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 