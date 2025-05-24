import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabaseClient"

const mollieApiKey = process.env.MOLLIE_API_KEY as string
const mollieBaseUrl = "https://api.mollie.com/v2"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const workflowId = formData.get("workflowId") as string

  // Fetch workflow details for price and title
  const { data: workflow, error } = await supabase
    .from("workflows")
    .select("id, title, price_eur")
    .eq("id", workflowId)
    .single()

  if (error || !workflow) {
    return NextResponse.json({ error: "Workflow not found" }, { status: 404 })
  }

  // Create Mollie payment
  const paymentRes = await fetch(`${mollieBaseUrl}/payments`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${mollieApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: {
        currency: "EUR",
        value: workflow.price_eur.toFixed(2)
      },
      description: `N8N Workflow: ${workflow.title}`,
      redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/automations/complete?workflowId=${workflow.id}`,
      metadata: {
        workflowId: workflow.id
      }
    })
  })

  if (!paymentRes.ok) {
    return NextResponse.json({ error: "Payment creation failed" }, { status: 500 })
  }

  const payment = await paymentRes.json()
  return NextResponse.redirect(payment._links.checkout.href)
}
