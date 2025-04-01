import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseType, name, email, phone } = body;

    const courseDetails = {
      'technik-informatyk': {
        name: 'Kurs Technik Informatyk',
        price: 5000, // cena w groszach (50 zł)
      },
      'technik-programista': {
        name: 'Kurs Technik Programista',
        price: 5000, // cena w groszach (50 zł)
      },
    };

    const selectedCourse = courseDetails[courseType as keyof typeof courseDetails];

    if (!selectedCourse) {
      return NextResponse.json(
        { error: 'Nieprawidłowy typ kursu' },
        { status: 400 }
      );
    }

    // Tworzenie sesji płatności Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'blik'],
      line_items: [
        {
          price_data: {
            currency: 'pln',
            product_data: {
              name: selectedCourse.name,
              description: 'Dostęp do pełnego kursu',
            },
            unit_amount: selectedCourse.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/platnosc/sukces?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/platnosc/anulowano`,
      customer_email: email,
      metadata: {
        courseType,
        name,
        phone,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Błąd podczas tworzenia sesji płatności:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas przetwarzania płatności' },
      { status: 500 }
    );
  }
} 