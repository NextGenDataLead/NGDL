"use client"

import { ServiceCard } from "@/components/service-card"
import { services } from "@/config/services"

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              subServices={service.subServices}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl mt-20">
        <p className="text-lg leading-8 text-muted-foreground text-justify">
          I specialize in <span className="text-foreground italic">transforming data into strategic assets</span> using advanced data solutions. With over 15 years of experience in <span className="text-foreground italic">diverse data roles and as a certified developer</span>, I bridge the gap between C-level stakeholders and technical teams. By combining deep data expertise, strong business acumen, and excellent people skills, I deliver<span className="text-foreground italic"> tailored solutions that drive innovation, efficiency, and success.</span>
        </p>
        <div className="mt-6 bg-gradient-to-r from-background via-primary/10 to-background p-4 rounded-lg">
          <p className="text-xl font-semibold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent text-center">
            Ready to unlock your data's true potential? Let's begin the transformation today.
          </p>
        </div>
      </div>
    </section>
  )
}
