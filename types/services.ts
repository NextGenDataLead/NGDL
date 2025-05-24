import { LucideIcon } from "lucide-react"

export interface SubService {
  name: string
  description: string
  icon: LucideIcon
  features: string[]
}

export interface ServicePricing {
  starter: string
  professional: string
  enterprise: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  subServices: SubService[]
  pricing: ServicePricing
}
