"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Loader2, Euro, Download } from "lucide-react"

type Workflow = {
  id: string
  title: string
  description: string
  tags: string[]
  price_eur: number
  image_url: string
}

export default function AutomationsPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWorkflows() {
      setLoading(true)
      const { data, error } = await supabase
        .from("workflows")
        .select("id, title, description, tags, price_eur, image_url")
        .order("created_at", { ascending: false })
        .limit(3)
      if (!error && data) setWorkflows(data)
      setLoading(false)
    }
    fetchWorkflows()
  }, [])

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Buy N8N Automations
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Supercharge your business with ready-to-use N8N workflow automations.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-3 flex justify-center items-center h-40">
              <Loader2 className="animate-spin h-8 w-8 text-primary" />
            </div>
          ) : (
            workflows.map((wf) => (
              <Card key={wf.id} className="flex flex-col p-6 gap-4">
                {wf.image_url && (
                  <div className="relative w-full h-40 mb-2">
                    <Image
                      src={wf.image_url}
                      alt={wf.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold">{wf.title}</h2>
                <p className="text-muted-foreground">{wf.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {wf.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Euro className="h-5 w-5 text-primary" />
                  <span className="text-xl font-semibold">{wf.price_eur.toFixed(2)}</span>
                </div>
                <form action={`/api/checkout`} method="POST" className="mt-4">
                  <input type="hidden" name="workflowId" value={wf.id} />
                  <Button type="submit" className="w-full">
                    Buy & Download
                  </Button>
                </form>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
