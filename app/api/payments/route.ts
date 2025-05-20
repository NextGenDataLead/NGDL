import { createMollieClient } from "@mollie/api-client"
import { NextResponse } from "next/server"

const mollieClient = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY || ""
})

export async function POST(request: Request) {
  try {
    const { workflowId, amount } = await request.json()

    const payment = await mollieClient.payments.create({
      amount: {
        currency: "EUR",
        value: amount.toFixed(2)
      },
      description: `N8N Workflow: ${workflowId}`,
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/workflows/success?workflow=${workflowId}`,
      webhookUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/webhook`,
      metadata: {
        workflowId
      }
    })

    return NextResponse.json({ url: payment.getCheckoutUrl() })
  } catch (error) {
    console.error("Payment creation failed:", error)
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    )
  }
}