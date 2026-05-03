"use client"

import { useState, useRef, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import { usePlan } from '@/contexts/plan-context'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Lock, Sparkles, Crown } from 'lucide-react'
import Image from 'next/image'
import { StripeBuyButton } from '@/components/custom/stripe-buy-button'

const DEMO_RESULTS = [
  {
    style: 'Modern',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
  },
  {
    style: 'Scandinavian',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop',
  },
  {
    style: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
  }
]

function ResultContent() {
  const { isPremium } = usePlan()
  const router = useRouter()
  const [downloading, setDownloading] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async (imageUrl: string, style: string) => {
    if (!isPremium) return
    setDownloading(true)
    try {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Interior Decoration - ${style}</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                h1 { color: #7c3aed; font-size: 24px; margin-bottom: 8px; }
                p { color: #6b7280; margin-bottom: 16px; }
                img { width: 100%; max-width: 800px; border-radius: 12px; }
                .footer { margin-top: 20px; font-size: 12px; color: #9ca3af; }
                @media print { body { padding: 0; } }
              </style>
            </head>
            <body>
              <h1>Interior Decoration AI — Estilo: ${style}</h1>
              <p>Resultado gerado com Inteligência Artificial</p>
              <img src="${imageUrl}" alt="${style}" />
              <div class="footer">interior-decoration.ai · Premium</div>
              <script>window.onload = function() { window.print(); window.close(); }</script>
            </body>
          </html>
        `)
        printWindow.document.close()
      }
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => router.push('/')} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900">Interior Decoration</span>
            </div>
          </div>

          {isPremium ? (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium">
              <Crown className="w-4 h-4" />
              Premium Ativo
            </div>
          ) : (
            <StripeBuyButton />
          )}
        </div>
      </div>

      {/* Plan Banner */}
      {!isPremium && (
        <div className="bg-purple-600 text-white text-center py-3 px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm">
              <Lock className="w-4 h-4 inline mr-1" />
              Versão Gratuita — Resultados com marca d'água. Faça upgrade para remover.
            </span>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-10" ref={resultRef}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Seus Resultados</h1>
          <p className="text-gray-500">
            {isPremium
              ? 'Versão Premium — Faça download em PDF de qualquer resultado'
              : 'Versão Gratuita — Faça upgrade para remover a marca d\'água e baixar em PDF'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_RESULTS.map((result, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              {/* Image with watermark */}
              <div className="relative">
                <Image
                  src={result.image}
                  alt={result.style}
                  width={800}
                  height={600}
                  className={`w-full h-56 object-cover ${!isPremium ? 'opacity-85' : ''}`}
                />

                {/* Watermark for free plan */}
                {!isPremium && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ transform: 'rotate(-30deg)' }}
                    >
                      <div className="space-y-4">
                        {[0, 1, 2, 3].map((row) => (
                          <div key={row} className="flex gap-6">
                            {[0, 1, 2].map((col) => (
                              <span
                                key={col}
                                className="text-white/35 font-bold text-xs whitespace-nowrap select-none"
                                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
                              >
                                Interior Decoration
                              </span>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lock badge */}
                    <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">Free</span>
                    </div>
                  </div>
                )}

                {/* Premium badge */}
                {isPremium && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-white rounded-lg px-2 py-1 flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    <span className="text-xs font-bold">Premium</span>
                  </div>
                )}
              </div>

              {/* Card Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{result.style}</h3>
                  <span className="text-xs text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                    Gerado com IA
                  </span>
                </div>

                {isPremium ? (
                  <Button
                    onClick={() => handleDownloadPDF(result.image, result.style)}
                    disabled={downloading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {downloading ? 'Preparando...' : 'Baixar PDF'}
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button
                      disabled
                      variant="outline"
                      className="w-full rounded-xl gap-2 border-gray-200 text-gray-400 cursor-not-allowed"
                    >
                      <Lock className="w-4 h-4" />
                      Download bloqueado (Free)
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade CTA for free users */}
        {!isPremium && (
          <div className="mt-12 bg-purple-600 rounded-3xl p-8 text-white text-center">
            <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-3">Desbloqueie o Premium</h2>
            <p className="text-purple-200 text-lg mb-8 max-w-lg mx-auto">
              Remova a marca d'água, baixe todos os resultados em PDF e tenha acesso ilimitado.
            </p>
            <div className="flex justify-center">
              <StripeBuyButton />
            </div>
            <p className="text-purple-300 text-sm mt-4">Pagamento único · Acesso vitalício</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ResultContent />
    </Suspense>
  )
}
