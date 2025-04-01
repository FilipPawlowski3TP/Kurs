import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
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
    subject: 'Potwierdź swoje konto',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #4F46E5;">Potwierdź swoje konto</h1>
        <p>Dziękujemy za rejestrację! Aby potwierdzić swoje konto, kliknij w poniższy link:</p>
        <a href="${verificationUrl}" style="display: inline-block; padding: 12px 24px; background-color: #4F46E5; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
          Potwierdź konto
        </a>
        <p>Ten link wygaśnie za 24 godziny.</p>
        <p>Jeśli nie prosiłeś o utworzenie konta, zignoruj ten email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
} 