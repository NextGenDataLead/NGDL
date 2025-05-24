import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { Data360Audit } from "@/components/data360-audit"
import { Testimonials } from "@/components/testimonials"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <div className="relative isolate">
      <Hero />
      <ServicesSection />
      <SectionDivider />
      <div className="mx-auto mt-20 sm:mt-24">
        <Data360Audit />
      </div>
      <SectionDivider />
      <Testimonials />
    </div>
  )
}
