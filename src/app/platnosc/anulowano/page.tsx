'use client';

import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function PaymentCancelledPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
          Płatność została anulowana
        </h1>
        <p className="text-gray-400">
          Nie martw się! Możesz spróbować ponownie w dowolnym momencie.
        </p>
        <div className="space-y-4">
          <Link href="/kursy">
            <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-all duration-300">
              Wróć do kursów
            </button>
          </Link>
          <Link href="/panel">
            <button className="w-full px-6 py-3 rounded-lg bg-[#1e1e1e]/30 border border-[#1e1e1e] text-white font-medium hover:bg-[#1e1e1e]/50 transition-all duration-300">
              Wróć do panelu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 