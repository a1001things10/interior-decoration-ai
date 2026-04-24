"use client"

import { Card } from "@/components/ui/card"
import { Upload, Palette, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function HowItWorks() {
  const { t } = useLanguage()
  
  const steps = [
    {
      icon: Upload,
      title: t.step1Title,
      description: t.step1Desc,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Palette,
      title: t.step2Title,
      description: t.step2Desc,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Sparkles,
      title: t.step3Title,
      description: t.step3Desc,
      gradient: "from-cyan-500 to-cyan-600"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            {t.howItWorks}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            {t.howItWorksTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card 
                key={index}
                className="relative p-8 border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
