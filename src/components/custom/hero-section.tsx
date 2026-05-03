"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Crown, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()
  const router = useRouter()
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const handleCheckout = async () => {
    setCheckoutLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      alert('Erro ao iniciar pagamento. Tente novamente.')
    } finally {
      setCheckoutLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-20 pt-24">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {t.aiPowered}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {t.mainTitle}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
              {/* Free Plan */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/result')}
                className="px-8 py-6 text-lg rounded-full border-2 border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-300 hover:scale-105 gap-2"
              >
                <Zap className="w-5 h-5" />
                Versão Gratuita
              </Button>

              {/* Premium */}
              <Button
                size="lg"
                onClick={handleCheckout}
                disabled={checkoutLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 gap-2"
              >
                <Crown className="w-5 h-5 text-yellow-300" />
                {checkoutLoading ? 'Aguarde...' : `${t.getStarted} — $7,00`}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-gray-600">{t.roomsDesigned}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-sm text-gray-600">{t.designStyles}</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">{t.userRating}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop"
                alt="Modern living room interior"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2.5s</div>
                  <div className="text-sm text-gray-600">Avg. Generation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
