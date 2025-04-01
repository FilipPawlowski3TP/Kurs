'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FileText, Database, Code } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface Exam {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'PHP' | 'JavaScript';
  qualification: 'INF.03';
  files: {
    arkusz?: string;
    baza?: string;
    rozwiazanie?: string;
  };
}

const exams: Exam[] = [
  // 2024
  {
    id: 'inf03-2024-01-01',
    year: '2024 Styczeń',
    title: 'INF.03 - Firma IT',
    description: 'Zadanie praktyczne z JavaScript',
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
    title: 'INF.03 - Komputery',
    description: 'Zadanie praktyczne z JavaScript',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-04',
    year: '2024 Styczeń',
    title: 'INF.03 - Terminarz',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-04/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-04/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-04/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-05',
    year: '2024 Styczeń',
    title: 'INF.03 - Salon kosmetyczny',
    description: 'Zadanie praktyczne z JavaScript',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-05/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-05/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-05/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-06',
    year: '2024 Styczeń',
    title: 'INF.03 - Poznaj Europę',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-06/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-06/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-06/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2024-01-08',
    year: '2024 Styczeń',
    title: 'INF.03 - Salon fryzjerski',
    description: 'Zadanie praktyczne z JavaScript',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2024/styczen/zadanie-08/arkusz.pdf',
      baza: '/egzaminy/inf03/2024/styczen/zadanie-08/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2024/styczen/zadanie-08/rozwiazanie.zip'
    }
  },
  // 2023
  {
    id: 'inf03-2023-01-01',
    year: '2023 Styczeń',
    title: 'INF.03 - Malarz',
    description: 'Zadanie praktyczne z JavaScript',
    category: 'JavaScript',
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
    title: 'INF.03 - Wynajem pokoi',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-01-03',
    year: '2023 Styczeń',
    title: 'INF.03 - Kwiaty',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-03/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-03/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-03/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-01-04',
    year: '2023 Styczeń',
    title: 'INF.03 - Wycieczki po Europie',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-04/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-04/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-04/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2023-01-05',
    year: '2023 Styczeń',
    title: 'INF.03 - Sierpniowy kalendarz',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2023/styczen/zadanie-05/arkusz.pdf',
      baza: '/egzaminy/inf03/2023/styczen/zadanie-05/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2023/styczen/zadanie-05/rozwiazanie.zip'
    }
  },
  // 2022
  {
    id: 'inf03-2022-01-01',
    year: '2022 Styczeń',
    title: 'INF.03 - Restauracja Wszystkie Smaki',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/styczen/zadanie-01/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/styczen/zadanie-01/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/styczen/zadanie-01/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2022-06-01',
    year: '2022 Czerwiec',
    title: 'INF.03 - Portal dla wędkarzy',
    description: 'Zadanie praktyczne z PHP',
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
    title: 'INF.03 - Stacja paliw',
    description: 'Zadanie praktyczne z JavaScript',
    category: 'JavaScript',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/czerwiec/zadanie-02/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/czerwiec/zadanie-02/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/czerwiec/zadanie-02/rozwiazanie.zip'
    }
  },
  {
    id: 'inf03-2022-06-03',
    year: '2022 Czerwiec',
    title: 'INF.03 - Zawody wędkarskie',
    description: 'Zadanie praktyczne z PHP',
    category: 'PHP',
    qualification: 'INF.03',
    files: {
      arkusz: '/egzaminy/inf03/2022/czerwiec/zadanie-03/arkusz.pdf',
      baza: '/egzaminy/inf03/2022/czerwiec/zadanie-03/baza.zip',
      rozwiazanie: '/egzaminy/inf03/2022/czerwiec/zadanie-03/rozwiazanie.zip'
    }
  }
];

export default function InformatykPraktykaPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedQualifications, setSelectedQualifications] = useState<string[]>(['INF.03']);

  if (status === "unauthenticated") {
    router.push("/auth/login");
    return null;
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-purple-500 border-r-pink-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Ładowanie...</p>
        </div>
      </div>
    );
  }

  const availableExams = exams.filter(exam => 
    selectedQualifications.includes(exam.qualification)
  );

  const filteredExams = selectedCategory === 'all' 
    ? availableExams 
    : availableExams.filter(exam => exam.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Nagłówek */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              Egzaminy Praktyczne - Technik Informatyk
            </h1>
            <p className="text-gray-400 mt-2">
              Wybierz egzamin praktyczny z interesującego Cię zakresu
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Filtry kategorii */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={setSelectedCategory}>
            <TabsList className="bg-[#1e1e1e]/50">
              <TabsTrigger value="all">Wszystkie</TabsTrigger>
              <TabsTrigger value="JavaScript">JavaScript</TabsTrigger>
              <TabsTrigger value="PHP">PHP</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Filtry kwalifikacji */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="inf03"
                checked={selectedQualifications.includes('INF.03')}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedQualifications(['INF.03']);
                  } else {
                    setSelectedQualifications([]);
                  }
                }}
                className="border-gray-600 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
              />
              <label
                htmlFor="inf03"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
              >
                INF.03
              </label>
            </div>
          </div>

          {/* Lista egzaminów */}
          <div className="space-y-6">
            {filteredExams.map((exam) => (
              <Card key={exam.id} className="bg-black/30 border-white/10 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-white">{exam.title}</CardTitle>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">{exam.year}</Badge>
                  </div>
                  <CardDescription className="text-gray-400">{exam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      {exam.files.arkusz && (
                        <a 
                          href={exam.files.arkusz}
                          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Arkusz</span>
                        </a>
                      )}
                      {exam.files.baza && (
                        <a 
                          href={exam.files.baza}
                          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-pink-500/20 text-pink-400 hover:bg-pink-500/30 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Database className="w-4 h-4" />
                          <span>Baza</span>
                        </a>
                      )}
                      {exam.files.rozwiazanie && (
                        <a 
                          href={exam.files.rozwiazanie}
                          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="w-4 h-4" />
                          <span>Rozwiązanie</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 