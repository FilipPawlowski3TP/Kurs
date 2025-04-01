import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST() {
  try {
    // Dodaj kurs Technik Informatyk
    const technikInformatyk = await db.course.create({
      data: {
        name: "Technik Informatyk",
        description: "INF.02 i INF.03",
        price: 299.99
      }
    })

    // Dodaj kurs Technik Programista
    const technikProgramista = await db.course.create({
      data: {
        name: "Technik Programista",
        description: "INF.03 i INF.04",
        price: 399.99
      }
    })

    return NextResponse.json({
      message: "Kursy zostały dodane",
      courses: [technikInformatyk, technikProgramista]
    })
  } catch (error) {
    console.error("[SEED_COURSES]", error)
    return new NextResponse("Wystąpił błąd podczas dodawania kursów", { status: 500 })
  }
} 