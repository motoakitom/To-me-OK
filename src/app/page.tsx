import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { DemoSection } from '@/components/sections/demo-section'
import { StatsSection } from '@/components/sections/stats-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <div className="space-y-16 md:space-y-24">
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <DemoSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  )
}