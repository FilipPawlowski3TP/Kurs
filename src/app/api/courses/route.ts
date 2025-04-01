import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await request.json()
    const { title, description, price, duration } = json

    if (!title || !description || !price || !duration) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price,
        duration,
        teacherId: session.user.id,
      },
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error("[COURSES_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const courses = await db.course.findMany()
    return NextResponse.json(courses)
  } catch (error) {
    console.error("Błąd podczas pobierania kursów:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
} 