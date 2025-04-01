import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Błąd weryfikacji podpisu Stripe:", error);
    return new NextResponse("Błąd weryfikacji webhook", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    if (!session?.metadata?.userId || !session?.metadata?.courseId) {
      return new NextResponse("Brak wymaganych metadanych", { status: 400 });
    }

    try {
      // Sprawdź czy użytkownik istnieje
      const user = await db.user.findUnique({
        where: {
          id: session.metadata.userId,
        },
      });

      if (!user) {
        throw new Error("Nie znaleziono użytkownika");
      }

      // Dodaj dostęp do kursu
      await db.userCourse.create({
        data: {
          userId: session.metadata.userId,
          courseId: session.metadata.courseId,
        },
      });

      // Zapisz informację o płatności
      await db.payment.create({
        data: {
          userId: session.metadata.userId,
          courseId: session.metadata.courseId,
          amount: session.amount_total! / 100,
          status: "completed",
          sessionId: session.id,
        },
      });

      return new NextResponse(null, { status: 200 });
    } catch (error) {
      console.error("Błąd podczas przetwarzania płatności:", error);
      return new NextResponse("Błąd wewnętrzny serwera", { status: 500 });
    }
  }

  return new NextResponse(null, { status: 200 });
} 