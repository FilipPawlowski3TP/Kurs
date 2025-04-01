import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new NextResponse("Wszystkie pola są wymagane", { status: 400 });
    }

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: "infprepauth@gmail.com",
      subject: `Nowa wiadomość: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Nowa wiadomość od ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Temat:</strong> ${subject}</p>
          <p><strong>Wiadomość:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość została wysłana" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Błąd podczas wysyłania wiadomości:", error);
    return new NextResponse("Wystąpił błąd podczas wysyłania wiadomości", { status: 500 });
  }
} 