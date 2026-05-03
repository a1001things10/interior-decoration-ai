"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, X, Crown, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { StripeBuyButton } from "./stripe-buy-button"

export function PricingSection() {
  const router = useRouter()

  const freeFeatures = [
    { text: 'Acesso a 3 estilos básicos', included: true },
    { text: 'Visualização com marca d\'água', included: true },
    { text: 'Resultados em baixa resolução', included: true },
    { text: 'Download em PDF', included: false },
    { text: 'Sem marca d\'água', included: false },
    { text: 'Todos os 30+ estilos', included: false },
    { text: 'Alta resolução', included: false },
    { text: 'Suporte prioritário', included: false },
  ]

  const premiumFeatures = [
    { text: 'Acesso a todos os 30+ estilos', included: true },
    { text: 'Resultados sem marca d\'água', included: true },
    { text: 'Alta resolução profissional', included: true },
    { text: 'Download em PDF ilimitado', included: true },
    { text: 'Projetos ilimitados', included: true },
    { text: 'Comparação antes/depois', included: true },
    { text: 'Exportação em múltiplos formatos', included: true },
    { text: 'Suporte prioritário', included: true },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-purple-50" id="pricing">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Crown className="w-4 h-4" />
            Planos e Preços
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece gratuitamente e faça upgrade quando quiser acesso completo
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 flex flex-col">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                Gratuito
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 pb-1">/ sempre</span>
              </div>
              <p className="text-gray-600">Experimente sem compromisso</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  {feature.included ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  )}
                  <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/result')}
              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl py-6 text-lg"
            >
              Começar Grátis
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-purple-600 rounded-3xl border-2 border-purple-500 p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-purple-500/30">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <Crown className="w-4 h-4 text-yellow-300" />
                Premium
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-bold text-white">$7</span>
                <span className="text-purple-300 pb-1">/ único</span>
              </div>
              <p className="text-purple-200">Pagamento único · Acesso vitalício</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {premiumFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Stripe Buy Button nativo */}
            <StripeBuyButton className="flex justify-center" />

            <p className="text-center text-purple-300 text-sm mt-3">
              Sem assinatura · Sem taxas ocultas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
