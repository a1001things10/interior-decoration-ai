"use client"

import { Button } from "@/components/ui/button"
import { Zap, Diamond } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { StripeBuyButton } from "./stripe-buy-button"

export function HeroSection() {
  const { t } = useLanguage()
  const router = useRouter()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 pt-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070707 0%, #0a0a0a 60%, #0d0b07 100%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-gold opacity-100 pointer-events-none" />

      {/* Radial gold glow center */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
      />

      {/* ── Top luxury label ── */}
      <div className="relative z-10 text-center mb-10">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs tracking-[0.3em] uppercase font-semibold border"
          style={{
            color: '#d4af37',
            borderColor: 'rgba(212,175,55,0.3)',
            background: 'rgba(212,175,55,0.06)'
          }}
        >
          <Diamond className="w-3 h-3" />
          {t.aiPowered}
          <Diamond className="w-3 h-3" />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left space-y-8">

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span style={{ color: '#f0e6c8' }}>Interior</span>
              </h1>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none">
                <span className="gold-shimmer">Decoration</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-px flex-1 max-w-16" style={{ background: 'rgba(212,175,55,0.4)' }} />
              <Diamond className="w-3 h-3" style={{ color: '#d4af37' }} />
              <div className="h-px flex-1 max-w-16" style={{ background: 'rgba(212,175,55,0.4)' }} />
            </div>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ color: 'rgba(240,230,200,0.65)' }}
            >
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/result')}
                className="px-8 py-6 text-sm rounded-full tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 gap-2 font-semibold"
                style={{
                  borderColor: 'rgba(212,175,55,0.4)',
                  color: '#d4af37',
                  background: 'rgba(212,175,55,0.06)',
                }}
              >
                <Zap className="w-4 h-4" />
                Versão Gratuita
              </Button>

              <StripeBuyButton />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-6">
              {[
                { value: '50K+', label: t.roomsDesigned },
                { value: '30+', label: t.designStyles },
                { value: '4.9★', label: t.userRating },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div
                    className="text-3xl sm:text-4xl font-black"
                    style={{ color: '#d4af37' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: 'rgba(240,230,200,0.45)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div className="relative mt-8 lg:mt-0">
            <div
              className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 0 60px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.1)'
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop"
                alt="Luxury interior design"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Dark overlay with gold tint */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,8,3,0.55) 0%, transparent 60%)' }}
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-6 rounded-2xl p-5 max-w-[200px] animate-float"
              style={{
                background: 'rgba(12,10,5,0.95)',
                border: '1px solid rgba(212,175,55,0.35)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(212,175,55,0.1)'
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8b6914, #d4af37)' }}
                >
                  <Diamond className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="text-xl font-black" style={{ color: '#d4af37' }}>2.5s</div>
                  <div className="text-xs" style={{ color: 'rgba(240,230,200,0.5)' }}>Avg. Generation</div>
                </div>
              </div>
            </div>

            {/* Corner decoration */}
            <div
              className="absolute -top-3 -right-3 w-20 h-20 rounded-2xl"
              style={{ border: '1px solid rgba(212,175,55,0.2)', background: 'rgba(212,175,55,0.03)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
