"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  // { name: "Blog", href: "/blog" },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-2">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo_no_text.png"
                alt="Next-Gen Data Lead Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold" style={{ 
              background: `linear-gradient(to right, #FD59A1, hsl(var(--primary)))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Next-Gen Data Lead
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:w-[300px] p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle>
                  <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/images/logo_no_text.png"
                        alt="Next-Gen Data Lead Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="text-xl font-bold" style={{ 
                      background: `linear-gradient(to right, #FD59A1, hsl(var(--primary)))`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      Next-Gen Data Lead
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-6 px-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-semibold transition-colors px-4 py-2 rounded-md",
                      isActive(item.href)
                        ? "text-[#FD59A1]"
                        : "text-gray-500 hover:text-[#FD59A1]"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors px-4 py-2 rounded-md",
                isActive(item.href)
                  ? "text-[#FD59A1]"
                  : "text-gray-500 hover:text-[#FD59A1]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact" className="text-sm font-semibold">
              Contact
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}