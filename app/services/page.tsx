"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { services } from "@/config/services"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Expert Data Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16 space-y-32">
          {services.map((service) => {
            const ServiceIcon = service.icon
            return (
              <div key={service.id} className="relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Main Content */}
                  <div className="relative lg:col-span-8">
                    <div className="flex items-center gap-4 mb-8">
                      <ServiceIcon className="h-12 w-12 text-primary" />
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg leading-8 text-muted-foreground mb-12">
                      {service.description}
                    </p>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.subServices.map((subService) => {
                        const SubServiceIcon = subService.icon
                        return (
                          <Card key={subService.name} className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <SubServiceIcon className="h-6 w-6 text-primary" />
                              <h3 className="text-xl font-semibold">{subService.name}</h3>
                            </div>
                            <p className="text-muted-foreground mb-6">
                              {subService.description}
                            </p>
                            <div className="grid gap-2">
                              {subService.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2">
                                  <ArrowRight className="h-4 w-4 text-primary" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>

                  {/* Pricing Sidebar */}
                  <div className="mt-10 lg:mt-0 lg:col-span-4">
                    <div className="sticky top-24">
                      <Card className="overflow-hidden rounded-lg">
                        <Tabs defaultValue="starter" className="w-full">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="starter">+12 Months</TabsTrigger>
                            <TabsTrigger value="professional">+6 Months</TabsTrigger>
                            <TabsTrigger value="enterprise"><6 Months</TabsTrigger>
                          </TabsList>
                          <TabsContent value="starter" className="p-6">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-muted-foreground">Rate per hour</div>
                              <div className="mt-2">
                                <span className="text-4xl font-bold">€{service.pricing.starter}</span>
                              </div>
                              <Button className="mt-6 w-full" asChild>
                                <Link href="/contact">Get in touch</Link>
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="professional" className="p-6">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-muted-foreground">Rate per hour</div>
                              <div className="mt-2">
                                <span className="text-4xl font-bold">€{service.pricing.professional}</span>
                              </div>
                              <Button className="mt-6 w-full" asChild>
                                <Link href="/contact">Get in touch</Link>
                              </Button>
                            </div>
                          </TabsContent>
                          <TabsContent value="enterprise" className="p-6">
                            <div className="text-center">
                              <div className="text-sm font-semibold text-muted-foreground">Rate per hour</div>
                              <div className="mt-2">
                                <span className="text-4xl font-bold">€{service.pricing.enterprise}</span>
                              </div>
                              <Button className="mt-6 w-full" asChild>
                                <Link href="/contact">Get in touch</Link>
                              </Button>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
