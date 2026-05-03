"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Crown, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"

export function CTASection() {
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
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5))]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {t.readyTransform}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {t.ctaSubtitle}
        </p>

        {/* Two Plan Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Free Plan */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push('/result')}
            className="border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm gap-2"
          >
            <Zap className="w-5 h-5" />
            Versão Gratuita
          </Button>

          {/* Premium Plan */}
          <Button
            size="lg"
            onClick={handleCheckout}
            disabled={checkoutLoading}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 font-bold gap-2"
          >
            <Crown className="w-5 h-5 text-yellow-500" />
            {checkoutLoading ? 'Aguarde...' : `${t.getStarted} — $7,00`}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 text-white/80">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm">Pagamento único · Acesso vitalício</span>
        </div>
      </div>
    </section>
  )
}
