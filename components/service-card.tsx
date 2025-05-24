"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface SubService {
  name: string
  icon: LucideIcon
  description?: string
}

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: LucideIcon
  subServices: SubService[]
}

export function ServiceCard({ id, title, description, icon: Icon, subServices }: ServiceCardProps) {
  return (
    <Card className="flex flex-col p-6 hover:border-primary/50 transition-colors h-full">
      <div className="flex items-center gap-x-3 text-lg font-semibold leading-7 mb-4">
        <Icon className="h-8 w-8 lg:h-12 lg:w-12 flex-none text-primary" aria-hidden="true" />
        {title}
      </div>
      
      {/* Flexible height container for description */}
      <div className="min-h-[96px] mb-6">
        <p className="text-muted-foreground text-justify">{description}</p>
      </div>
      
      <div className="space-y-4 flex-1">
        {subServices.map((subService) => (
          <div key={subService.name} className="flex items-center gap-3">
            <subService.icon 
              className="text-primary h-5 w-5 lg:h-6 lg:w-6 flex-shrink-0"
            />
            <div className="text-sm font-medium">{subService.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <Link
          href={`/services#${id}`}
          className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
        >
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  )
}
