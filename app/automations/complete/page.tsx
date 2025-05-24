"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Loader2, Download } from "lucide-react"

export default function AutomationCompletePage() {
  const params = useSearchParams()
  const workflowId = params.get("workflowId")
  const [jsonUrl, setJsonUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchJson() {
      if (!workflowId) {
        setError("No workflow specified.")
        setLoading(false)
        return
      }
      // In production, verify payment status with Mollie and only then allow download!
      // For demo, we fetch directly.
      const { data, error } = await supabase
        .from("workflows")
        .select("json, title")
        .eq("id", workflowId)
        .single()
      if (error || !data) {
        setError("Workflow not found or not available.")
        setLoading(false)
        return
      }
      // Create a blob and offer download
      const blob = new Blob([JSON.stringify(data.json, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      setJsonUrl(url)
      setLoading(false)
    }
    fetchJson()
    // Cleanup blob URL
    return () => {
      if (jsonUrl) URL.revokeObjectURL(jsonUrl)
    }
    // eslint-disable-next-line
  }, [workflowId])

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Thank you for your purchase!</h1>
        {loading ? (
          <Loader2 className="animate-spin h-8 w-8 text-primary mx-auto" />
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <a
            href={jsonUrl!}
            download={`n8n-workflow.json`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold mt-6"
          >
            <Download className="h-5 w-5" />
            Download your workflow
          </a>
        )}
      </div>
    </div>
  )
}
