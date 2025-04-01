import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const json = await request.json()
    const { courseId } = json

    // Pobierz kurs z bazy danych
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    })

    if (!course) {
      return new NextResponse("Course not found", { status: 404 })
    }

    // Sprawdź czy użytkownik już ma ten kurs
    const existingCourse = await prisma.course.findFirst({
      where: {
        id: courseId,
        users: {
          some: {
            id: session.user.id
          }
        }
      }
    })

    if (existingCourse) {
      return new NextResponse("Course already purchased", { status: 400 })
    }

    // Utwórz płatność w bazie danych
    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        courseId: course.id,
        amount: course.price,
        status: "pending",
      },
    })

    // Utwórz sesję płatności w Stripe
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "blik"],
      line_items: [
        {
          price_data: {
            currency: "pln",
            product_data: {
              name: course.name,
              description: `Kurs ${course.type === "INF" ? "Technika Informatyka" : "Technika Programisty"}`,
            },
            unit_amount: Math.round(course.price * 100), // Stripe używa najmniejszych jednostek waluty (groszy)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/platnosc/sukces?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/platnosc/anulowano`,
      metadata: {
        paymentId: payment.id,
        userId: session.user.id,
        courseId: course.id,
      },
    })

    // Zaktualizuj płatność o ID sesji Stripe
    await prisma.payment.update({
      where: { id: payment.id },
      data: { stripeSessionId: stripeSession.id },
    })

    return NextResponse.json({ url: stripeSession.url })
  } catch (error) {
    console.error("[PAYMENT_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 