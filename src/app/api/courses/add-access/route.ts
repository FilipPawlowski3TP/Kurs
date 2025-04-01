import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new NextResponse("Brak adresu email", { status: 400 });
    }

    // Znajdź użytkownika
    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return new NextResponse("Użytkownik nie istnieje", { status: 404 });
    }

    // Pobierz wszystkie kursy
    const courses = await db.course.findMany();

    // Dodaj dostęp do wszystkich kursów
    for (const course of courses) {
      await db.userCourse.create({
        data: {
          userId: user.id,
          courseId: course.id
        }
      });
    }

    return NextResponse.json({ message: "Dostęp do kursów został dodany" });
  } catch (error) {
    console.error("[ADD_COURSE_ACCESS]", error);
    return new NextResponse("Wystąpił błąd podczas dodawania dostępu do kursów", { status: 500 });
  }
} 