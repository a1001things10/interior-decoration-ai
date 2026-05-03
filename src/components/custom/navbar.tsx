"use client"

import { LanguageSelector } from "./language-selector"
import { Diamond } from "lucide-react"

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#d4af3728]"
      style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #8b6914, #d4af37, #8b6914)',
                boxShadow: '0 0 16px rgba(212,175,55,0.3)'
              }}
            >
              <Diamond className="w-4 h-4 text-black" />
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37]/55 font-medium">
                Interior
              </span>
              <span
                className="text-sm font-bold tracking-[0.18em] uppercase"
                style={{ color: '#d4af37' }}
              >
                Decoration
              </span>
            </div>
          </div>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Estilos', 'Como Funciona', 'Preços'].map((item) => (
              <button
                key={item}
                className="text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300"
                style={{ color: 'rgba(240,230,200,0.45)' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#d4af37' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(240,230,200,0.45)' }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right */}
          <LanguageSelector />
        </div>
      </div>

      {/* Gold hairline */}
      <div className="gold-divider" />
    </nav>
  )
}
