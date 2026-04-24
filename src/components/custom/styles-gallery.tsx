"use client"

import { Card } from "@/components/ui/card"
import { Palette } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function StylesGallery() {
  const { t } = useLanguage()
  
  const styles = [
    {
      name: t.modern,
      description: t.modernDesc,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    },
    {
      name: t.scandinavian,
      description: t.scandinavianDesc,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&h=400&fit=crop"
    },
    {
      name: t.industrial,
      description: t.industrialDesc,
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop"
    },
    {
      name: t.bohemian,
      description: t.bohemianDesc,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop"
    },
    {
      name: t.minimalist,
      description: t.minimalistDesc,
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop"
    },
    {
      name: t.coastal,
      description: t.coastalDesc,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
    },
    {
      name: t.farmhouse,
      description: t.farmhouseDesc,
      image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=400&fit=crop"
    },
    {
      name: t.contemporary,
      description: t.contemporaryDesc,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Palette className="w-4 h-4" />
            {t.stylesAvailable}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {t.chooseStyle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.stylesSubtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {style.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {style.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
