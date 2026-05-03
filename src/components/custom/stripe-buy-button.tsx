"use client"

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Stripe Buy Button web component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      'stripe-buy-button': any
    }
  }
}

interface StripeBuyButtonProps {
  className?: string
}

export function StripeBuyButton({ className }: StripeBuyButtonProps) {
  return (
    <div className={className}>
      {/* @ts-expect-error Stripe web component */}
      <stripe-buy-button
        buy-button-id="buy_btn_1TSpykRhZWaNA3s8xHoRBNpy"
        publishable-key="pk_test_51TSWIZRhZWaNA3s89BrbmmQq1cMJVi4XMYeVRF132t5Nhawqxl1EnqsMZZJQyHmvCgrPaTQNc1Kf14QA6Vic00kY00yW56crUe"
      />
    </div>
  )
}
