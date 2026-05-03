"use client"

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { usePlan } from '@/contexts/plan-context'
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { setPlan } = usePlan()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      setPlan('premium')
    }
  }, [sessionId, setPlan])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-14 h-14 text-green-500" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Premium Ativado
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">
            Pagamento Confirmado!
          </h1>
          <p className="text-gray-600 text-lg">
            Seu acesso <strong>Premium</strong> foi ativado com sucesso. Aproveite todos os recursos sem limites!
          </p>
        </div>

        {/* Features unlocked */}
        <div className="bg-white rounded-2xl border-2 border-purple-200 p-6 text-left space-y-3">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Recursos desbloqueados:</h3>
          {[
            'Designs sem marca d\'água',
            'Download em PDF em alta resolução',
            'Todos os 30+ estilos disponíveis',
            'Resultados em alta qualidade',
            'Acesso ilimitado'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          onClick={() => router.push('/')}
          size="lg"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg rounded-full"
        >
          Começar a Criar
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
