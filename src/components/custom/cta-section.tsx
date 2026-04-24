"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CTASection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5))]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          {t.readyTransform}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {t.ctaSubtitle}
        </p>
        
        <Button 
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 font-bold"
        >
          {t.getStarted}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-6 text-white/90">
          <CheckCircle className="w-5 h-5" />
          <span>{t.noCredit}</span>
        </div>
      </div>
    </section>
  )
}
