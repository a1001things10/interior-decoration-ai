"use client"

import { Card } from "@/components/ui/card"
import { Zap, Clock, Palette, Image as ImageIcon, Smile, Infinity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: Zap,
      title: t.feature1,
      description: t.feature1Desc,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Clock,
      title: t.feature2,
      description: t.feature2Desc,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Palette,
      title: t.feature3,
      description: t.feature3Desc,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: ImageIcon,
      title: t.feature4,
      description: t.feature4Desc,
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: Smile,
      title: t.feature5,
      description: t.feature5Desc,
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: Infinity,
      title: t.feature6,
      description: t.feature6Desc,
      gradient: "from-cyan-400 to-blue-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Zap className="w-4 h-4" />
            {t.whyChoose}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {t.whyChooseTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.whyChooseSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                className="p-8 border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
