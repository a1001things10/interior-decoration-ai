"use client"

import { Button } from "@/components/ui/button"
import { Diamond, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import { StripeBuyButton } from "./stripe-buy-button"

export function CTASection() {
  const { t } = useLanguage()
  const router = useRouter()

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0b07 0%, #080808 100%)' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-gold opacity-50 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-10">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.3em] uppercase border"
          style={{ color: '#d4af37', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}
        >
          <Diamond className="w-3 h-3" />
          Exclusivo
          <Diamond className="w-3 h-3" />
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
            style={{ color: '#f0e6c8' }}
          >
            {t.readyTransform}
          </h2>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Subtitle */}
        <p
          className="text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: 'rgba(240,230,200,0.55)' }}
        >
          {t.ctaSubtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push('/result')}
            className="px-8 py-6 text-sm rounded-full tracking-[0.15em] uppercase font-semibold transition-all duration-300 hover:scale-105 gap-2"
            style={{
              borderColor: 'rgba(212,175,55,0.3)',
              color: 'rgba(240,230,200,0.65)',
              background: 'rgba(212,175,55,0.04)',
            }}
          >
            <Zap className="w-4 h-4" />
            Versão Gratuita
          </Button>

          <StripeBuyButton />
        </div>

        {/* Trust note */}
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: 'rgba(212,175,55,0.4)' }}
        >
          Pagamento único · Acesso vitalício · Sem assinatura
        </p>
      </div>
    </section>
  )
}
