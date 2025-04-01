"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RezerwacjaPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    imie: "",
    email: "",
    telefon: "",
    data: "",
    godzina: "",
    przedmiot: "",
    wiadomosc: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tutaj będzie logika wysyłania formularza
    toast({
      title: "Formularz wysłany",
      description: "Dziękujemy za rezerwację. Skontaktujemy się z Tobą wkrótce.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, przedmiot: value }));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Rezerwacja Korepetycji</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <Label htmlFor="imie">Imię i Nazwisko</Label>
          <Input
            id="imie"
            name="imie"
            value={formData.imie}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefon">Telefon</Label>
          <Input
            id="telefon"
            name="telefon"
            type="tel"
            value={formData.telefon}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="data">Data</Label>
          <Input
            id="data"
            name="data"
            type="date"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="godzina">Godzina</Label>
          <Input
            id="godzina"
            name="godzina"
            type="time"
            value={formData.godzina}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="przedmiot">Przedmiot</Label>
          <Select onValueChange={handleSelectChange} value={formData.przedmiot}>
            <SelectTrigger>
              <SelectValue placeholder="Wybierz przedmiot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inf02">INF.02</SelectItem>
              <SelectItem value="inf03">INF.03</SelectItem>
              <SelectItem value="inf04">INF.04</SelectItem>
              <SelectItem value="programowanie">Programowanie</SelectItem>
              <SelectItem value="matematyka">Matematyka</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="wiadomosc">Dodatkowe informacje</Label>
          <Textarea
            id="wiadomosc"
            name="wiadomosc"
            value={formData.wiadomosc}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full">
          Zarezerwuj
        </Button>
      </form>
    </div>
  );
} 