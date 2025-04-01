import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: 'Brak tokenu weryfikacyjnego' },
        { status: 400 }
      );
    }

    // Znajdź użytkownika z podanym tokenem
    const user = await db.user.findFirst({
      where: {
        verificationToken: token,
        verificationTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Nieprawidłowy lub wygasły token weryfikacyjny' },
        { status: 400 }
      );
    }

    // Aktualizuj użytkownika
    await db.user.update({
      where: { id: user.id },
      data: {
        isVerified: true,
        verificationToken: null,
        verificationTokenExpiry: null,
      },
    });

    return NextResponse.json(
      { message: 'Email został potwierdzony' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd podczas weryfikacji:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas weryfikacji' },
      { status: 500 }
    );
  }
} 