# System Korepetycji Online

System do zarządzania korepetycjami online, umożliwiający nauczycielom oferowanie swoich usług, a uczniom rezerwowanie terminów.

## Funkcjonalności

- Rejestracja i logowanie użytkowników (nauczyciele i uczniowie)
- Panel nauczyciela do zarządzania kursami i rezerwacjami
- Panel ucznia do przeglądania i rezerwowania korepetycji
- System rezerwacji terminów
- Zarządzanie statusem rezerwacji

## Technologie

- Next.js 14
- TypeScript
- Prisma
- PostgreSQL
- NextAuth.js
- Tailwind CSS
- Radix UI

## Wymagania

- Node.js 18+
- PostgreSQL

## Instalacja

1. Sklonuj repozytorium:
\`\`\`bash
git clone https://github.com/twoje-repo/korki2.git
cd korki2
\`\`\`

2. Zainstaluj zależności:
\`\`\`bash
npm install
\`\`\`

3. Skopiuj plik .env.example do .env i uzupełnij zmienne środowiskowe:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Uruchom migracje bazy danych:
\`\`\`bash
npx prisma migrate dev
\`\`\`

5. Uruchom aplikację:
\`\`\`bash
npm run dev
\`\`\`

## Struktura projektu

- `/src/app` - Komponenty stron i routing
- `/src/components` - Komponenty wielokrotnego użytku
- `/src/lib` - Konfiguracja i narzędzia
- `/prisma` - Schema i migracje bazy danych

## Licencja

MIT 