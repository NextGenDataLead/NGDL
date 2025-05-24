import { Database, LineChart, Briefcase, Brain, Shield, Target, Users, GitBranch, BarChart2, Code, CheckCircle2, Network } from "lucide-react";
  
export const services = [
  {
    id: "data-strategy",
    title: "Data Strategy",
    icon: Database,
    description: "Transform your data into strategic value. Establish robust frameworks for managing, protecting, and optimizing data assets while ensuring compliance and driving informed decision-making.",
    subServices: [
      {
        name: "Data Management",
        description: "Comprehensive data lifecycle management, quality control, and optimization strategies tailored to industry needs",
        icon: Brain,
        features: [
          "Interim Data Management & CDO",
          "Setup, coach and improve Data Teams",
          "Standardization & Data Model Integration",
          "Data Quality Programs",
          "Stakeholder Management"
        ]
      },
      {
        name: "Data Governance",
        description: "Establish and maintain robust data policies and standards, to support effective growth",
        icon: Shield,
        features: [
          "Setup Data Governance Frameworks",
          "Assessments",
          "Data Glossaries & Data Flow Diagram",
          "Stakeholder identification"
        ]
      },
      {
        name: "Change Management",
        description: "Guide organizations through data transformation with expert coaching and change management",
        icon: Target,
        features: [
          "Contagious Positivity & Intrisic motivator",
          "Team Training",
          "Workshops",
          "Ambassador"
        ]
      }
    ],
    pricing: {
      starter: "100",
      professional: "112.5",
      enterprise: "125"
    }
  },
  {
    id: "project-leadership",
    title: "Project Leadership",
    icon: Briefcase,
    description: "Expert project leadership ensuring successful implementation of data initiatives and digital transformation projects. Drive innovation with proven methodologies.",
    subServices: [
      {
        name: "(Web3) Project Management",
        description: "Specialized project management for blockchain and Web3 initiatives",
        icon: Network,
        features: [
          "RWA - Tokenization",
          "Full-Stack DApp Development",
          "Smart Contract Management",
          "Blockchain Integration"
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
          "Continuous Improvement"
        ]
      },
      {
        name: "Team Assembly",
        description: "Build and manage high-performing development teams for your projects",
        icon: Code,
        features: [
          "Team Selection",
          "Skill Assessment",
          "Performance Management",
          "Operational Leadership"
        ]
      }
    ],
    pricing: {
      starter: "90",
      professional: "100",
      enterprise: "110"
    }
  },
  {
    id: "insights-intelligence",
    title: "Data-Driven Solutions",
    icon: LineChart,
    description: "Transform raw data into actionable insights with advanced analytics and intelligence solutions. Leverage cutting-edge techniques for better decision-making.",
    subServices: [
      {
        name: "Business Intelligence",
        description: "Comprehensive BI solutions for better decision-making",
        icon: BarChart2,
        features: [
          "Dashboard Development",
          "KPI Monitoring",
          "Report Automation",
          "Financial reporting"
        ]
      },
      {
        name: "AI & Automation",
        description: "Advanced analytics to optimize business performance",
        icon: Target,
        features: [
          "Create (network of) custom AI agents",
          "Chatbots (for custom AI agent)",
          "Repetitive task Automation",
          "Social Media Automation"
        ]
      },
      {
        name: "Analytics",
        description: "Comprehensive analysis of business and data processes",
        icon: Brain,
        features: [
          "Data Analysis",
          "Business Analysis",
          "Process Analytics",
          "Impact Assessment",
          "Predictive Analytics",
          "Performance Metrics",
          "Trend Analysis"
        ]
      }
    ],
    pricing: {
      starter: "80",
      professional: "90",
      enterprise: "100"
    }
  }
];