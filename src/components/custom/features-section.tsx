"use client"

import { Zap, Clock, Palette, Image as ImageIcon, Smile, Infinity, Diamond } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Zap, title: t.feature1, description: t.feature1Desc },
    { icon: Clock, title: t.feature2, description: t.feature2Desc },
    { icon: Palette, title: t.feature3, description: t.feature3Desc },
    { icon: ImageIcon, title: t.feature4, description: t.feature4Desc },
    { icon: Smile, title: t.feature5, description: t.feature5Desc },
    { icon: Infinity, title: t.feature6, description: t.feature6Desc },
  ]

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0d0b07 100%)' }}
    >
      <div className="absolute inset-0 bg-grid-gold opacity-50 pointer-events-none" />

      {/* Gold radial glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-5 mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.3em] uppercase border"
            style={{ color: '#d4af37', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}
          >
            <Diamond className="w-3 h-3" />
            {t.whyChoose}
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{ color: '#f0e6c8' }}
          >
            {t.whyChooseTitle}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240,230,200,0.5)' }}
          >
            {t.whyChooseSubtitle}
          </p>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="gold-card relative p-7 rounded-2xl group transition-all duration-400 hover:scale-[1.02] cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(139,105,20,0.4), rgba(212,175,55,0.15))',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#d4af37' }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2 tracking-wide"
                  style={{ color: '#f0e6c8' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(240,230,200,0.48)' }}
                >
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
