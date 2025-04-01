"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from 'react-hot-toast'

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')

  const validatePassword = (password: string) => {
    const minLength = 6
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)

    if (password.length < minLength) {
      return 'Hasło musi mieć minimum 6 znaków'
    }
    if (!hasSpecialChar) {
      return 'Hasło musi zawierać przynajmniej jeden znak specjalny'
    }
    if (!hasNumber) {
      return 'Hasło musi zawierać przynajmniej jedną cyfrę'
    }
    if (!hasUpperCase) {
      return 'Hasło musi zawierać przynajmniej jedną wielką literę'
    }
    if (!hasLowerCase) {
      return 'Hasło musi zawierać przynajmniej jedną małą literę'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Walidacja hasła
      const passwordError = validatePassword(formData.password)
      if (passwordError) {
        toast.error(passwordError)
        setIsLoading(false)
        return
      }

      // Sprawdzenie czy hasła są takie same
      if (formData.password !== formData.confirmPassword) {
        toast.error('Hasła nie są identyczne')
        setIsLoading(false)
        return
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Wystąpił błąd podczas rejestracji')
      }

      toast.success('Rejestracja udana! Sprawdź swoją skrzynkę email, aby potwierdzić konto.')
      router.push("/auth/login")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Wystąpił błąd podczas rejestracji')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Zarejestruj się</h2>
          <p className="mt-2 text-gray-400">
            Masz już konto?{' '}
            <Link href="/auth/login" className="text-purple-400 hover:text-purple-300">
              Zaloguj się
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">
                Imię i nazwisko
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 bg-black/30 border-white/10 text-white"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 bg-black/30 border-white/10 text-white"
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-300">
                Hasło
              </Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="mt-1 bg-black/30 border-white/10 text-white"
                disabled={isLoading}
              />
              <p className="mt-1 text-sm text-gray-400">
                Hasło musi zawierać minimum 6 znaków, jedną wielką literę, jedną małą literę, jedną cyfrę i jeden znak specjalny
              </p>
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-gray-300">
                Potwierdź hasło
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="mt-1 bg-black/30 border-white/10 text-white"
                disabled={isLoading}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Rejestracja...' : 'Zarejestruj się'}
          </Button>
        </form>
      </div>
    </div>
  )
} 