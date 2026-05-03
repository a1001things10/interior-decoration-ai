"use client"

import { Diamond } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function StylesGallery() {
  const { t } = useLanguage()

  const styles = [
    { name: t.modern, description: t.modernDesc, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" },
    { name: t.scandinavian, description: t.scandinavianDesc, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=400&fit=crop" },
    { name: t.industrial, description: t.industrialDesc, image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop" },
    { name: t.bohemian, description: t.bohemianDesc, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop" },
    { name: t.minimalist, description: t.minimalistDesc, image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop" },
    { name: t.coastal, description: t.coastalDesc, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },
    { name: t.farmhouse, description: t.farmhouseDesc, image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=400&fit=crop" },
    { name: t.contemporary, description: t.contemporaryDesc, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  ]

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      <div className="absolute inset-0 bg-grid-gold opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-5 mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.3em] uppercase border"
            style={{ color: '#d4af37', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)' }}
          >
            <Diamond className="w-3 h-3" />
            {t.stylesAvailable}
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            style={{ color: '#f0e6c8' }}
          >
            {t.chooseStyle}
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(240,230,200,0.5)' }}
          >
            {t.stylesSubtitle}
          </p>
          <div className="gold-divider max-w-xs mx-auto" />
        </div>

        {/* Gallery — 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-400 hover:scale-[1.03]"
              style={{
                border: '1px solid rgba(212,175,55,0.18)',
                background: '#0e0e0e',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(212,175,55,0.5)'
                el.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212,175,55,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(212,175,55,0.18)'
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,8,3,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }}
                />
                {/* Gold shine on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.07) 0%, transparent 60%)' }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3
                  className="font-bold text-base tracking-wide mb-1"
                  style={{ color: '#d4af37' }}
                >
                  {style.name}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: 'rgba(240,230,200,0.45)' }}
                >
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
