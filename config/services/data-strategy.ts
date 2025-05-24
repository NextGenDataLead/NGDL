import { Database, Brain, Shield, Target } from "lucide-react"
import { Service } from "@/types/services"

export const dataStrategyService: Service = {
  id: "data-strategy",
  title: "Data Strategy and Governance",
  icon: Database,
  description: "Transform data from a cost to a strategic value driver.\n\nEmpower organizations with robust frameworks and strategies for managing, protecting, and optimizing data assets to drive informed decision-making and ensure compliance.",
  subServices: [
    {
      name: "Data Management",
      description: "Comprehensive data lifecycle management, quality control, and optimization strategies",
      icon: Brain,
      features: [
        "Data Quality Framework",
        "Master Data Management",
        "Data Architecture Design",
        "Process Optimization",
      ]
    },
    {
      name: "Data Governance",
      description: "Establish and maintain robust data policies, standards, and compliance frameworks",
      icon: Shield,
      features: [
        "Policy Development",
        "Compliance Management",
        "Security Protocols",
        "Risk Assessment",
      ]
    },
    {
      name: "Change Management & Coaching",
      description: "Guide organizations through data transformation with expert coaching and change management",
      icon: Target,
      features: [
        "Transformation Strategy",
        "Team Training",
        "Cultural Adaptation",
        "Stakeholder Management",
      ]
    }
  ],
  pricing: {
    starter: "10,000",
    professional: "20,000",
    enterprise: "Custom",
  },
}
