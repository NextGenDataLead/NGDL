"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const workflow = searchParams.get("workflow")

  useEffect(() => {
    // You could trigger any additional success actions here
  }, [workflow])

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Card className="p-8">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. You will receive your workflow configuration via email shortly.
          </p>
          <Button asChild>
            <Link href="/workflows" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Workflows
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  )
  </div>
}