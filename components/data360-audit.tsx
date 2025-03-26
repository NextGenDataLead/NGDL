"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  FileSpreadsheet, 
  Target, 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  BarChart2,
  Presentation,
  ArrowDownToLine,
  Lightbulb,
  ChevronRight,
  ShieldCheck
} from "lucide-react"

export function Data360Audit() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (link.parentNode) link.parentNode.removeChild(link)
    }
  }, [])

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    // @ts-ignore - Calendly is loaded via script
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/imre-dappastra/introduction-for-data360-audit-nextgen-data-lead'
    })
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-background" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Data360 Audit
          </h2>
          <p className="text-lg text-muted-foreground">
            Kickstart your data-driven journey with an introductory Data Excellence Program
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="text-2xl font-bold flex items-center gap-3">
              <span className="text-muted-foreground line-through">€8,690</span>
              <span className="text-primary">€6,950</span>
              <Badge variant="secondary" className="text-sm">20% OFF</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span className="font-medium">100% Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        <div className="relative mt-20">
          {/* Process Flow */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Data Collection Phase */}
            <Card className="p-8 border-primary/50 relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background p-4 rounded-full border-2 border-primary/50">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 mt-4">Data Collection</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">5 Stakeholder Interviews</p>
                    <p className="text-sm text-muted-foreground">Deep-dive sessions with key decision makers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FileSpreadsheet className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">3-Day Analysis</p>
                    <p className="text-sm text-muted-foreground">Comprehensive review of data infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Interactive Workshop</p>
                    <p className="text-sm text-muted-foreground">Collaborative strategy alignment session</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block z-10">
                <ChevronRight className="w-8 h-8 text-primary" />
              </div>
            </Card>

            {/* Analysis & Insights */}
            <Card className="p-8 border-primary/50 relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background p-4 rounded-full border-2 border-primary/50">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 mt-4">Analysis & Insights</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">SWOT Analysis</p>
                    <p className="text-sm text-muted-foreground">Comprehensive evaluation of your data ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BarChart2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Strategic Focus Areas</p>
                    <p className="text-sm text-muted-foreground">Top 3 high-impact opportunities identified</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowDownToLine className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Action Plan</p>
                    <p className="text-sm text-muted-foreground">High-level roadmap for implementation</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block z-10">
                <ChevronRight className="w-8 h-8 text-primary" />
              </div>
            </Card>

            {/* Deliverables */}
            <Card className="p-8 border-primary/50 relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-background p-4 rounded-full border-2 border-primary/50">
                <Presentation className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-6 mt-4">Executive Presentation</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Key Findings</p>
                    <p className="text-sm text-muted-foreground">Clear insights and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Recommendations</p>
                    <p className="text-sm text-muted-foreground">Tailored solutions and best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Possible roadmap</p>
                    <p className="text-sm text-muted-foreground">Next steps?</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 border-primary/50">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data Strategy?</h3>
              <div className="flex flex-col items-center gap-4">
                <div className="text-muted-foreground">
                  Start your journey with our risk-free Data360 Audit
                </div>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span>100% Satisfaction Guaranteed</span>
                </div>
                <Button size="lg" className="group" onClick={openCalendly}>
                  Schedule Introduction
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}