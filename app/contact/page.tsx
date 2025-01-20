"use client"

import React, { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { Mail, Phone, Calendar, ArrowRight, Twitter, Github, Linkedin } from "lucide-react"
import { sendEmail } from "@/app/actions"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const service = searchParams.get('service')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: service === 'data360' 
        ? "I'm interested in the Data360 Audit program."
        : "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await sendEmail(values)
      if (result.success) {
        toast.success("Message sent successfully!")
        form.reset()
      } else {
        toast.error(result.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault()
    // @ts-ignore - Calendly is loaded via script
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/imre-dappastra/meetup-with-imre'
    })
  }

  // Add Calendly script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (link.parentNode) link.parentNode.removeChild(link)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* Schedule Meeting Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Let's Connect</h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Schedule a personal consultation to discuss how we can transform your data strategy.
          </p>
          <Card className="mt-8 p-6 border-primary/50 max-w-xl mx-auto">
            <div className="flex items-center gap-x-4 mb-6">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Personal Consultation</h2>
                <p className="text-muted-foreground">45-minute introduction session</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              In this session, we'll:
            </div>
            <ul className="mb-6 space-y-2 text-sm">
              <li className="flex items-center">• Get acquainted</li>
              <li className="flex items-center">• Discuss your current data challenges</li>
              <li className="flex items-center">• Explore potential solutions</li>
              <li className="flex items-center">• Answer any questions you have</li>
            </ul>
            <Button className="w-full group" onClick={openCalendly}>
              Schedule Meeting
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
          {/* Contact Form Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Send a Message</h2>
              <p className="text-muted-foreground">
                Have a specific question or inquiry? Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
            <Card className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="How can we help you?"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          {/* Contact Information Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out directly through any of these channels.
              </p>
            </div>
            <Card className="p-8 space-y-8">
              <div className="flex items-center gap-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a 
                    href="mailto:nextgendatalead@gmail.com?subject=Next-Gen%20Data%20Lead%20-%20inquiry"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nextgendatalead@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a 
                    href="tel:+31613454378"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +31 613454378
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <Twitter className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">X/Twitter</div>
                  <a 
                    href="https://x.com/NextGenDataLead"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @NextGenDataLead
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <Linkedin className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <a 
                    href="https://www.linkedin.com/in/imredekker/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Imre Dekker
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-x-4">
                <Github className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">GitHub</div>
                  <a 
                    href="https://github.com/NextGenDataLead"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    NextGenDataLead
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}