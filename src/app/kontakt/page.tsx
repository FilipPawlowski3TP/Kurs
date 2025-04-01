'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości');
      }

      toast.success('Wiadomość została wysłana');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Błąd:', error);
      toast.error('Nie udało się wysłać wiadomości. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="relative overflow-hidden py-24">
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-gray-400">
              Masz pytania? Skontaktuj się z nami!
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Temat
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    required
                  >
                    <option value="">Wybierz temat</option>
                    <option value="kursy">Kursy</option>
                    <option value="egzaminy">Egzaminy</option>
                    <option value="cennik">Cennik</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Często zadawane pytania
            </h2>
            <div className="space-y-6">
              <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Jakie są godziny pracy?
                </h3>
                <p className="text-gray-400">
                  Jesteśmy dostępni od poniedziałku do niedzieli w godzinach 8:00-20:00. W tych godzinach możesz się z nami kontaktować w sprawie kursów, egzaminów i innych zapytań.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Jak długo czeka się na odpowiedź?
                </h3>
                <p className="text-gray-400">
                  Staramy się odpowiadać na wszystkie wiadomości w ciągu 24 godzin roboczych. W przypadku pilnych spraw, prosimy o zaznaczenie tego w formularzu kontaktowym.
                </p>
              </div>

              <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Czy można umówić się na konsultację?
                </h3>
                <p className="text-gray-400">
                  Tak, oferujemy możliwość umówienia się na indywidualną konsultację. Wystarczy wypełnić formularz kontaktowy i wybrać temat "Konsultacja" w polu "Temat".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 