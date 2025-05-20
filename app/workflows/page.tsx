"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Workflow, ArrowRight, CheckCircle2 } from "lucide-react"

const workflows = [
  {
    id: "social-automation",
    title: "Social Media Automation Suite",
    description: "Automate your social media presence across multiple platforms",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=400",
    price: 49.99,
    features: [
      "Auto-post to multiple platforms",
      "Content scheduling",
      "Analytics tracking",
      "Engagement monitoring"
    ],
    tags: ["Social Media", "Marketing", "Automation"]
  },
  {
    id: "data-enrichment",
    title: "Data Enrichment Pipeline",
    description: "Enhance your data with automated enrichment workflows",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    price: 79.99,
    features: [
      "API integration",
      "Data validation",
      "Custom mapping",
      "Error handling"
    ],
    tags: ["Data", "Integration", "API"]
  },
  {
    id: "lead-generation",
    title: "Lead Generation Automation",
    description: "Automate your lead generation and qualification process",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
    price: 99.99,
    features: [
      "Lead scoring",
      "CRM integration",
      "Email automation",
      "Follow-up sequences"
    ],
    tags: ["Sales", "Marketing", "CRM"]
  }
]

export default function WorkflowsPage() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null)

  const initiatePayment = async (workflowId: string) => {
    setSelectedWorkflow(workflowId)
    // TODO: Implement Mollie payment
    console.log("Initiating payment for workflow:", workflowId)
  }

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            N8N Automation Workflows
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Pre-built automation workflows to supercharge your business processes
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow) => (
            <Card key={workflow.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={workflow.image}
                  alt={workflow.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {workflow.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-xl font-bold mb-2">{workflow.title}</h2>
                <p className="text-muted-foreground mb-6">{workflow.description}</p>
                <div className="space-y-4 mb-6 flex-1">
                  {workflow.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-2xl font-bold">€{workflow.price}</div>
                  <Button 
                    onClick={() => initiatePayment(workflow.id)}
                    disabled={selectedWorkflow === workflow.id}
                    className="group"
                  >
                    {selectedWorkflow === workflow.id ? (
                      "Processing..."
                    ) : (
                      <>
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}