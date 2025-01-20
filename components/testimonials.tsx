"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "After stepping in as Project Manager, Imre quickly turned around a complex project that required careful coordination between our off-shore development team and the client.\n\nHis proactive approach in aligning deliverables with client expectations resulted in a smooth communication flow and high client satisfaction. Remarkably, he achieved +/-40% reduction in development time through his efficiency, interpersonal skills and strategic oversight.\n\nImre's ability to restore trust and deliver results under challenging circumstances has been invaluable",
    author: "Diana ElRafai",
    role: "Customer Success Manager",
    company: "SettleMint",
    image: "/images/testimonials/dianaelrafai.png",
    project: "RWA - Tokenization private equity",
    impact: "40% faster delivery",
    rating: 5
  },
  {
    id: 2,
    content: "I can always count on Imre as a dependable, strategic partner who consistently supports and streamlines our collective goals, making a significant, positive impact every day.\n\nCollaborating with Imre as the COO of DappAstra has been instrumental in driving our team's efficiency and success. His reliability and proactive involvement ensure our developers stay focused on their core expertise—programming—by handling all the essential but time-consuming tasks, such as client interaction, requirement analysis, milestone management, and contract negotiations.",
    author: "Aleksandar Mitchell",
    role: "CTO",
    company: "DappAstra",
    image: "/images/testimonials/aleksandarmitchell.png",
    project: "Raising a Blockahain Power-Up; DappAstra",
    impact: "Satisfied stakeholders accross the board",
    rating: 5
  },
  {
    id: 3,
    content: "It is always a pleasure to work with Imre. His professional attitude and meticulous approach have made each project a success. Imre pays great attention to accuracy and always works with the utmost care.\n\nHis diplomatic approach and excellent communication skills ensure that everyone remains well-informed, and any challenges are efficiently resolved. Furthermore, he is a pleasant person to work with, making our collaboration all the more valuable.\n\nI can certainly recommend Imre to anyone looking for a reliable and professional partner!",
    author: "Tinie D'Hondt",
    role: "Managing Partner",
    company: "Master Data Parnters",
    image: "/images/testimonials/tiniedhondt.png",
    project: "Solutions Architect for BI and Masterdata",
    impact: "45% satisfaction increase",
    rating: 5
  },
  {
    id: 4,
    content: "As Solutions Architect at SettleMint I have got to know Imre as a dedicated Project Manager able to skillfully bridge the gap between client requirements and our full-stack, off-shore, development team.\n\nHis exceptional interpersonal, analytical and web3 skills enable him able to effectively manage stakeholders, tackle challenges and exploit opportunities, making him a highly effective and reliable collaborator.",
    author: "Gurpreet Singh",
    role: "Solutions Architect",
    company: "SettleMint India",
    image: "/images/testimonials/gurpreetsingh.png",
    project: "RWA - Tokenization private equity",
    impact: "On-point requirement analysis and client interaction",
    rating: 5
  },
  {
    id: 5,
    content: "My experience in working with Imre has been very positive. The project management he provides is highly professional and the quality of work meets expectations, often exceeding them. Specialization in the sanitary business greatly facilitates communication and requests for support are promptly responded to.",
    author: "Massimo Terranova",
    role: "Digital Projects Data Specialist",
    company: "Grohe",
    image: "/images/testimonials/massimo-terranova.png",
    project: "GS1 Data Quality Program",
    impact: "Clear insights, pro-active stakeholder- and expectation management",
    rating: 5
  },
  {
    id: 6,
    content: "Imre has the ability to quickly make himself familiar with the specific assignment. He developed an intelligent tool with which a scan of all available data can be done in order to analyze realized production costs. Based on this analyzes cost prices can be evaluated and necessary actions taken. Imre has no problem with multilevel communication within an production environment. He acquired the for his tool necessary production knowledge quickly. His analytic approach is pleasant, professional and definitely to the point.",
    author: "Dries Wiersma",
    role: "Commercial Manager",
    company: "IHC Fabrication",
    image: "/images/testimonials/drieswiersma.png",
    project: "Build Sourcing Calculator",
    impact: "Quick development of a fit-for-purpose tool",
    rating: 5
  }
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="mx-auto mt-20 max-w-7xl px-6 sm:mt-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Testimonials
        </h2>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="flex-none w-[400px] snap-center flex flex-col p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-x-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <Badge variant="secondary" className="w-fit mb-4">
                {testimonial.project}
              </Badge>

              <blockquote className="flex-1 text-muted-foreground mb-8 whitespace-pre-line">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-x-4 border-t border-border pt-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              <div className="mt-4 text-sm font-medium text-primary">
                Impact: {testimonial.impact}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}