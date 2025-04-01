'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FileText, Database, Code } from 'lucide-react';

interface Exam {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'PHP' | 'JavaScript';
  qualification: 'INF.02' | 'INF.03' | 'INF.04';
  files: {
    arkusz?: string;
    baza?: string;
    rozwiazanie?: string;
  };
}

const exams: Exam[] = [
  // 2024
  {
    id: 'inf03-2024-06-01',
    year: '2024 Czerwiec',
    title: 'INF.03 - Aplikacja webowa',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/czerwiec/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/czerwiec/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/czerwiec/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-06-02',
    year: '2024 Czerwiec',
    title: 'INF.03 - Interaktywna galeria',
    description: 'Zadanie praktyczne z JavaScript i DOM',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-01',
    year: '2024 Styczeń',
    title: 'INF.03 - Firma IT',
    description: 'Zadanie praktyczne z JavaScript i DOM',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-02',
    year: '2024 Styczeń',
    title: 'INF.03 - System CMS',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-02/rozwiazanie.zip'
    }
  },
  // 2023
  {
    id: 'inf03-2023-06-01',
    year: '2023 Czerwiec',
    title: 'INF.03 - Portal ogłoszeniowy',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/czerwiec/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/czerwiec/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/czerwiec/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-06-02',
    year: '2023 Czerwiec',
    title: 'INF.03 - Aplikacja ToDo',
    description: 'Zadanie praktyczne z JavaScript i LocalStorage',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-01-01',
    year: '2023 Styczeń',
    title: 'INF.03 - Forum dyskusyjne',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-01-02',
    year: '2023 Styczeń',
    title: 'INF.03 - Galeria zdjęć',
    description: 'Zadanie praktyczne z JavaScript i DOM',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-02/rozwiazanie.zip'
    }
  },
  // 2022
  {
    id: 'inf03-2022-06-01',
    year: '2022 Czerwiec',
    title: 'INF.03 - System rezerwacji',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/czerwiec/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/czerwiec/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/czerwiec/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2022-06-02',
    year: '2022 Czerwiec',
    title: 'INF.03 - Kalkulator',
    description: 'Zadanie praktyczne z JavaScript i DOM',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2022-01-01',
    year: '2022 Styczeń',
    title: 'INF.03 - Portal społecznościowy',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/styczen/zadanie-01/rozwiazanie.zip'
    }
  },
  // 2021
  {
    id: 'inf03-2021-06-01',
    year: '2021 Czerwiec',
    title: 'INF.03 - Sklep muzyczny',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2021/czerwiec/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2021/czerwiec/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2021/czerwiec/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2021-06-02',
    year: '2021 Czerwiec',
    title: 'INF.03 - Aplikacja pogodowa',
    description: 'Zadanie praktyczne z JavaScript i API',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2021/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2021/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2021/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2021-01-01',
    year: '2021 Styczeń',
    title: 'INF.03 - System CMS',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2021/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2021/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2021/styczen/zadanie-01/rozwiazanie.zip'
    }
  },
  // 2020
  {
    id: 'inf03-2020-06-01',
    year: '2020 Czerwiec',
    title: 'INF.03 - Portal społecznościowy',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2020/czerwiec/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2020/czerwiec/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2020/czerwiec/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2020-06-02',
    year: '2020 Czerwiec',
    title: 'INF.03 - Kalkulator walut',
    description: 'Zadanie praktyczne z JavaScript i API',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2020/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2020/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2020/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2020-01-01',
    year: '2020 Styczeń',
    title: 'INF.03 - Sklep internetowy',
    description: 'Zadanie praktyczne z PHP i MySQL',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2020/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2020/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2020/styczen/zadanie-01/rozwiazanie.zip'
    }
  }
];

export default function PraktykaPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.courses) {
      const userCourses = session.user.courses;
      
      if (userCourses.includes('Technik Programista')) {
        router.push('/panel/praktyka/programista');
      } else if (userCourses.includes('Technik Informatyk')) {
        router.push('/panel/praktyka/informatyk');
      }
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  if (!session?.user?.courses?.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-gray-200 mb-4">Brak dostępu do egzaminów</h1>
        <p className="text-gray-400 text-center">
          Nie masz jeszcze wykupionych żadnych kursów. 
          Przejdź do sekcji kursów, aby uzyskać dostęp do materiałów egzaminacyjnych.
        </p>
      </div>
    );
  }

  return null;
} 