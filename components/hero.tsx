import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-[80vh] pt-24 sm:pt-32 mb-20">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-[calc(100%-6rem)] flex items-center">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative w-full h-[200px] sm:h-[300px] lg:w-[624px] lg:h-[371px] mb-10">
            <Image
              src="/images/logo_text.png"
              alt="Next-Gen Data Lead"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 624px, 624px"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <Link href="/contact">
                Reach out
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
