"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, X, Diamond, Zap, Crown } from "lucide-react"
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
    { text: 'Acesso a todos os 30+ estilos' },
    { text: 'Resultados sem marca d\'água' },
    { text: 'Alta resolução profissional' },
    { text: 'Download em PDF ilimitado' },
    { text: 'Projetos ilimitados' },
    { text: 'Comparação antes/depois' },
    { text: 'Exportação em múltiplos formatos' },
    { text: 'Suporte prioritário' },
  ]

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: '#0a0a0a' }}
      id="pricing"
    >
      <div className="absolute inset-0 bg-grid-gold opacity-40 pointer-events-none" />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-5 mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.3em] uppercase border"
            style={{ color: '#d4af37', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}
          >
            <Crown className="w-3 h-3" />
            Planos e Preços
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ color: '#f0e6c8' }}
          >
            Escolha Seu Plano
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240,230,200,0.5)' }}
          >
            Comece gratuitamente e faça upgrade quando quiser acesso completo
          </p>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* FREE */}
          <div
            className="rounded-2xl p-8 flex flex-col"
            style={{
              background: '#0e0e0e',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <div className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold mb-5"
                style={{ color: 'rgba(240,230,200,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Zap className="w-3.5 h-3.5" />
                Gratuito
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black" style={{ color: '#f0e6c8' }}>$0</span>
                <span className="pb-1 text-sm" style={{ color: 'rgba(240,230,200,0.4)' }}>/ sempre</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(240,230,200,0.4)' }}>Experimente sem compromisso</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  {f.included
                    ? <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#d4af37' }} />
                    : <X className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(240,230,200,0.2)' }} />
                  }
                  <span className="text-sm" style={{ color: f.included ? 'rgba(240,230,200,0.7)' : 'rgba(240,230,200,0.3)' }}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/result')}
              className="w-full rounded-xl py-6 text-sm tracking-widest uppercase font-semibold transition-all duration-300"
              style={{
                borderColor: 'rgba(212,175,55,0.25)',
                color: 'rgba(240,230,200,0.6)',
                background: 'transparent',
              }}
            >
              Começar Grátis
            </Button>
          </div>

          {/* PREMIUM */}
          <div
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #100e08 0%, #0d0b05 100%)',
              border: '1px solid rgba(212,175,55,0.45)',
              boxShadow: '0 0 60px rgba(212,175,55,0.08), 0 8px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)' }}
            />

            {/* Popular badge */}
            <div
              className="absolute top-5 right-5 text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'linear-gradient(135deg, #8b6914, #d4af37)', color: '#0a0800' }}
            >
              POPULAR
            </div>

            <div className="mb-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-widest uppercase font-semibold mb-5"
                style={{ color: '#d4af37', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
              >
                <Diamond className="w-3.5 h-3.5" />
                Premium
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black" style={{ color: '#d4af37' }}>$7</span>
                <span className="pb-1 text-sm" style={{ color: 'rgba(212,175,55,0.5)' }}>/ pagamento único</span>
              </div>
              <p className="text-sm" style={{ color: 'rgba(212,175,55,0.55)' }}>Acesso vitalício</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#d4af37' }} />
                  <span className="text-sm" style={{ color: 'rgba(240,230,200,0.75)' }}>{f.text}</span>
                </li>
              ))}
            </ul>

            <StripeBuyButton className="flex justify-center" />

            <p
              className="text-center text-xs mt-3 tracking-wider"
              style={{ color: 'rgba(212,175,55,0.4)' }}
            >
              Sem assinatura · Sem taxas ocultas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
