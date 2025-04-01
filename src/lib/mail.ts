import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify?token=${token}`;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Zweryfikuj swoje konto',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #6366f1;">Witaj w naszym systemie!</h1>
        <p>Dziękujemy za rejestrację. Aby aktywować swoje konto, kliknij w poniższy link:</p>
        <a href="${verificationUrl}" style="display: inline-block; background: linear-gradient(to right, #8b5cf6, #ec4899, #06b6d4); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; margin: 16px 0;">
          Zweryfikuj konto
        </a>
        <p>Link jest ważny przez 24 godziny.</p>
        <p>Jeśli nie rejestrowałeś się w naszym serwisie, zignoruj tę wiadomość.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
} 