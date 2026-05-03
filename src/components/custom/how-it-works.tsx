"use client"

import { Upload, Palette, Sparkles, Diamond } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    { icon: Upload, title: t.step1Title, description: t.step1Desc, number: '01' },
    { icon: Palette, title: t.step2Title, description: t.step2Desc, number: '02' },
    { icon: Sparkles, title: t.step3Title, description: t.step3Desc, number: '03' },
  ]

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0b07 0%, #080808 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-gold opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-5 mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.3em] uppercase border"
            style={{ color: '#d4af37', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}
          >
            <Diamond className="w-3 h-3" />
            {t.howItWorks}
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{ color: '#f0e6c8' }}
          >
            {t.howItWorksTitle}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240,230,200,0.5)' }}
          >
            {t.howItWorksSubtitle}
          </p>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="gold-card relative p-8 rounded-2xl group transition-all duration-400 hover:scale-[1.02] cursor-default"
              >
                {/* Large background number */}
                <div
                  className="absolute top-4 right-6 text-8xl font-black pointer-events-none select-none leading-none"
                  style={{ color: 'rgba(212,175,55,0.06)' }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,105,20,0.4), rgba(212,175,55,0.2))',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#d4af37' }} />
                </div>

                {/* Step badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs tracking-widest uppercase font-semibold mb-4"
                  style={{ color: '#d4af37', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}
                >
                  Passo {step.number}
                </div>

                <h3
                  className="text-xl font-bold mb-3 tracking-wide"
                  style={{ color: '#f0e6c8' }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: 'rgba(240,230,200,0.5)' }}
                >
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
