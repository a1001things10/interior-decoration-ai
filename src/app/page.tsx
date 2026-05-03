"use client"

import { HeroSection } from "@/components/custom/hero-section"
import { HowItWorks } from "@/components/custom/how-it-works"
import { StylesGallery } from "@/components/custom/styles-gallery"
import { FeaturesSection } from "@/components/custom/features-section"
import { CTASection } from "@/components/custom/cta-section"
import { Navbar } from "@/components/custom/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <HowItWorks />
        <StylesGallery />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  )
}
