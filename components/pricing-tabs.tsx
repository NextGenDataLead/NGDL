"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PricingTabsProps {
  pricing: {
    starter: string
    professional: string
    enterprise: string
  }
}

export function PricingTabs({ pricing }: PricingTabsProps) {
  return (
    <Card className="overflow-hidden rounded-lg">
      <Tabs defaultValue="starter" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="starter">Starter</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
        </TabsList>
        <TabsContent value="starter" className="p-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Starting at</div>
            <div className="mt-2">
              <span className="text-4xl font-bold">${pricing.starter}</span>
              <span className="text-sm font-semibold text-muted-foreground">/project</span>
            </div>
            <Button className="mt-6 w-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="professional" className="p-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Starting at</div>
            <div className="mt-2">
              <span className="text-4xl font-bold">${pricing.professional}</span>
              <span className="text-sm font-semibold text-muted-foreground">/project</span>
            </div>
            <Button className="mt-6 w-full" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="enterprise" className="p-6">
          <div className="text-center">
            <div className="text-sm font-semibold text-muted-foreground">Enterprise</div>
            <div className="mt-2">
              <span className="text-4xl font-bold">Custom</span>
              <div className="text-sm text-muted-foreground">Contact for pricing</div>
            </div>
            <Button className="mt-6 w-full" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
