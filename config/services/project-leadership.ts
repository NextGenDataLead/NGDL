import { Briefcase, Network, CheckCircle2, Code } from "lucide-react"
import { Service } from "@/types/services"

export const projectLeadershipService: Service = {
  id: "project-leadership",
  title: "Project Leadership and Delivery",
  icon: Briefcase,
  description: "Expert project leadership and delivery services to ensure successful implementation of data initiatives and digital transformation projects.",
  subServices: [
    {
      name: "(Web3) Project Management",
      description: "Specialized project management for blockchain and Web3 initiatives",
      icon: Network,
      features: [
        "DApp Development",
        "Smart Contract Management",
        "Blockchain Integration",
        "Token Implementation",
      ]
    },
    {
      name: "Data Quality Programs",
      description: "Comprehensive data quality improvement and maintenance programs",
      icon: CheckCircle2,
      features: [
        "Quality Assessment",
        "Process Implementation",
        "Monitoring Systems",
        "Continuous Improvement",
      ]
    },
    {
      name: "Assemble (team of) Developer(s)",
      description: "Build and manage high-performing development teams for your projects",
      icon: Code,
      features: [
        "Team Selection",
        "Skill Assessment",
        "Performance Management",
        "Technical Leadership",
      ]
    }
  ],
  pricing: {
    starter: "15,000",
    professional: "30,000",
    enterprise: "Custom",
  },
}
