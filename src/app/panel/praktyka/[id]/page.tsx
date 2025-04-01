'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  solution?: string;
}

interface Exam {
  id: string;
  year: string;
  title: string;
  description: string;
  tasks: Task[];
}

const exam: Exam = {
  id: 'inf02-2024',
  year: '2024',
  title: 'INF.02 - Egzamin praktyczny 2024',
  description: 'Zadania praktyczne z administracji i eksploatacji systemów komputerowych',
  tasks: [
    {
      id: 'task1',
      title: 'Konfiguracja sieci',
      description: 'Skonfiguruj sieć komputerową zgodnie z podanymi wymaganiami',
      requirements: [
        'Utwórz sieć lokalną z 5 komputerami',
        'Skonfiguruj adresację IP',
        'Ustaw maskę podsieci',
        'Skonfiguruj bramę domyślną'
      ],
      solution: 'Szczegółowe rozwiązanie zadania...'
    }
  ]
};

export default function ExamPage() {
  const [showSolutions, setShowSolutions] = useState<{ [key: string]: boolean }>({});
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

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

  if (!session) {
    return null;
  }

  const toggleSolution = (taskId: string) => {
    setShowSolutions(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Nagłówek */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              {exam.title}
            </h1>
            <p className="text-gray-400 mt-2">
              {exam.description}
            </p>
          </div>
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
            {exam.year}
          </Badge>
        </div>

        {/* Zadania */}
        <div className="space-y-6">
          {exam.tasks.map((task) => (
            <Card key={task.id} className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">{task.title}</CardTitle>
                <CardDescription className="text-gray-400">{task.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Wymagania:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {task.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  {task.solution && (
                    <div>
                      <Button
                        variant="outline"
                        className="border-white/10 hover:bg-white/10"
                        onClick={() => toggleSolution(task.id)}
                      >
                        {showSolutions[task.id] ? 'Ukryj rozwiązanie' : 'Pokaż rozwiązanie'}
                      </Button>
                      {showSolutions[task.id] && (
                        <div className="mt-4 p-4 bg-[#1e1e1e]/50 rounded-lg">
                          <p className="text-gray-300 whitespace-pre-wrap">{task.solution}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 