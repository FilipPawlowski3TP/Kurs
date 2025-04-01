'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseType = searchParams.get('course');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const courseDetails = {
    'technik-informatyk': {
      name: 'Kurs Technik Informatyk',
      price: 50,
      description: 'Kompleksowe przygotowanie do egzaminów INF.02 i INF.03',
      duration: '120 godzin',
    },
    'technik-programista': {
      name: 'Kurs Technik Programista',
      price: 50,
      description: 'Kompleksowe przygotowanie do egzaminów INF.03 i INF.04',
      duration: '120 godzin',
    },
  };

  const selectedCourse = courseDetails[courseType as keyof typeof courseDetails];

  if (!selectedCourse) {
    return (
      <div className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Błąd</h1>
            <p className="text-gray-300">Nie wybrano kursu. Proszę wrócić do strony kursów.</p>
            <a href="/kursy" className="mt-6 inline-block px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
              Wróć do kursów
            </a>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Wywołaj API do utworzenia sesji płatności
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseType,
          ...formData,
        }),
      });

      const { sessionId } = await response.json();
      
      // Przekieruj do Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Błąd:', error);
      }
    } catch (err) {
      console.error('Błąd:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">Finalizacja zakupu</h1>
            <p className="text-gray-300">Wypełnij poniższy formularz, aby zakończyć zakup kursu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Szczegóły zamówienia */}
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <h2 className="text-xl font-bold text-white mb-4">Szczegóły zamówienia</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedCourse.name}</h3>
                  <p className="text-gray-300">{selectedCourse.description}</p>
                  <p className="text-gray-300">Czas trwania: {selectedCourse.duration}</p>
                </div>
                <div className="pt-4 border-t border-[#1e1e1e]">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cena kursu:</span>
                    <span className="text-2xl font-bold text-white">{selectedCourse.price} zł</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formularz płatności */}
            <div className="p-6 rounded-2xl backdrop-blur-sm bg-[#1e1e1e]/30 border border-[#1e1e1e]">
              <h2 className="text-xl font-bold text-white mb-4">Dane do płatności</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    placeholder="jan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-[#2e2e2e] text-white focus:outline-none focus:border-purple-500"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full mt-6 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Przetwarzanie...' : 'Przejdź do płatności'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 