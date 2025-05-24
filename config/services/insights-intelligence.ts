import { LineChart, BarChart2, Target, Brain } from "lucide-react"
import { Service } from "@/types/services"

export const insightsIntelligenceService: Service = {
  id: "insights-intelligence",
  title: "Insights and Intelligence",
  icon: LineChart,
  description: "Transform raw data into actionable insights with advanced analytics and intelligence solutions.",
  subServices: [
    {
      name: "Business Intelligence",
      description: "Comprehensive BI solutions for better decision-making",
      icon: BarChart2,
      features: [
        "Dashboard Development",
        "KPI Monitoring",
        "Report Automation",
        "Data Visualization",
      ]
    },
    {
      name: "Performance Analytics",
      description: "Advanced analytics to optimize business performance",
      icon: Target,
      features: [
        "Predictive Analytics",
        "Performance Metrics",
        "Optimization Models",
        "Trend Analysis",
      ]
    },
    {
      name: "Business & Data Analytics",
      description: "Comprehensive analysis of business and data processes",
      icon: Brain,
      features: [
        "Process Analysis",
        "Data Mining",
        "Statistical Modeling",
        "Impact Assessment",
      ]
    }
  ],
  pricing: {
    starter: "8,000",
    professional: "15,000",
    enterprise: "Custom",
  },
}
