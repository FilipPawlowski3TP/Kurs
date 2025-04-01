import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { db } from "@/lib/db"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/mail"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !password || !name) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 })
    }

    const hashedPassword = await hash(password, 10)
    const verificationToken = generateVerificationToken()
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 godziny

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        verificationToken,
        verificationTokenExpiry,
        isVerified: false,
      },
    })

    // Wysyłanie emaila weryfikacyjnego
    await sendVerificationEmail(email, verificationToken)

    return NextResponse.json(
      { message: 'Użytkownik został utworzony. Sprawdź swoją skrzynkę email, aby zweryfikować konto.' },
      { status: 201 }
    )
  } catch (error) {
    console.error("Błąd podczas rejestracji:", error)
    return new NextResponse("Wystąpił błąd podczas rejestracji", { status: 500 })
  }
} 