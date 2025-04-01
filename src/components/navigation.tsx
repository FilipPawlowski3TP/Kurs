"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Strona główna' },
    { href: '/kursy', label: 'Kursy' },
    { href: '/o-egzaminie', label: 'O egzaminie' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0a]/50 backdrop-blur-sm border-b border-[#1e1e1e]' 
        : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
              INFPrep
            </span>
            <span className="text-sm text-gray-400 hidden md:block">
              Przygotuj się do egzaminów zawodowych
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-white bg-[#1e1e1e]/50 backdrop-blur-[2px]'
                    : 'text-gray-300 hover:text-white hover:bg-[#1e1e1e]/30 backdrop-blur-[2px]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {session ? (
              <>
                <Link
                  href="/panel"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]/30 backdrop-blur-[2px]"
                >
                  Panel
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                >
                  Wyloguj się
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Zaloguj się
              </Link>
            )}
          </div>

          <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1e1e1e]/30 backdrop-blur-[2px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-lg text-base font-medium backdrop-blur-[2px] ${
                pathname === link.href
                  ? 'text-white bg-[#1e1e1e]/50'
                  : 'text-gray-300 hover:text-white hover:bg-[#1e1e1e]/30'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              <Link
                href="/panel"
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]/30"
              >
                Panel
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white"
              >
                Wyloguj się
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="block px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white"
            >
              Zaloguj się
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
} 