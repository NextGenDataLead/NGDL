import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <Link href="/services" className="text-sm leading-6 text-muted-foreground hover:text-primary">
              Services
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-primary">
              About
            </Link>
          </div>
          {/* <div className="pb-6">
            <Link href="/blog" className="text-sm leading-6 text-muted-foreground hover:text-primary">
              Blog
            </Link>
          </div> */}
          <div className="pb-6">
            <Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link href="https://x.com/NextGenDataLead" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/NextGenDataLead" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/imredekker/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Next-Gen Data Lead. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
