"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

interface ReservationFormProps {
  courseId: string
}

export function ReservationForm({ courseId }: ReservationFormProps) {
  const [date, setDate] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          date: new Date(date).toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Wystąpił błąd podczas rezerwacji")
      }

      toast({
        title: "Sukces!",
        description: "Rezerwacja została utworzona pomyślnie.",
      })

      router.push("/korepetycje")
      router.refresh()
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się utworzyć rezerwacji. Spróbuj ponownie później.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="date">Data i godzina</Label>
        <Input
          id="date"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Zarezerwuj
      </Button>
    </form>
  )
} 