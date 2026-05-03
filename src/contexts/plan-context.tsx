"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Plan = 'free' | 'premium'

type PlanContextType = {
  plan: Plan
  setPlan: (plan: Plan) => void
  isPremium: boolean
}

const PlanContext = createContext<PlanContextType | undefined>(undefined)

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlanState] = useState<Plan>('free')

  useEffect(() => {
    const stored = localStorage.getItem('interior_plan')
    if (stored === 'premium') setPlanState('premium')
  }, [])

  const setPlan = (p: Plan) => {
    setPlanState(p)
    localStorage.setItem('interior_plan', p)
  }

  return (
    <PlanContext.Provider value={{ plan, setPlan, isPremium: plan === 'premium' }}>
      {children}
    </PlanContext.Provider>
  )
}

export function usePlan() {
  const context = useContext(PlanContext)
  if (!context) throw new Error('usePlan must be used within PlanProvider')
  return context
}
