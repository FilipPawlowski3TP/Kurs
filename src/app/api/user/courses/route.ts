import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const user = await db.user.findUnique({
      where: { id: session.user.id },
      include: {
        userCourses: {
          include: {
            course: true
          }
        }
      }
    })

    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    const courses = user.userCourses.map(uc => uc.course)
    return NextResponse.json({ courses })
  } catch (error) {
    console.error("[USER_COURSES_GET]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 