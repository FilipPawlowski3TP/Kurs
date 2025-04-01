import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = headers().get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Błąd weryfikacji podpisu webhooka:", err)
      return new NextResponse("Webhook Error", { status: 400 })
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session

      // Znajdź płatność w bazie danych
      const payment = await prisma.payment.findUnique({
        where: { stripeSessionId: session.id },
        include: { course: true }
      })

      if (!payment) {
        console.error("Nie znaleziono płatności:", session.id)
        return new NextResponse("Payment not found", { status: 404 })
      }

      // Zaktualizuj status płatności
      await prisma.payment.update({
        where: { id: payment.id },
        data: { status: "completed" }
      })

      // Dodaj kurs do użytkownika
      await prisma.user.update({
        where: { id: payment.userId },
        data: {
          courses: {
            connect: { id: payment.courseId }
          }
        }
      })
    }

    return new NextResponse(null, { status: 200 })
  } catch (error) {
    console.error("Błąd podczas przetwarzania webhooka:", error)
    return new NextResponse("Webhook Error", { status: 400 })
  }
} 