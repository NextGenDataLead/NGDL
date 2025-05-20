import { createMollieClient } from "@mollie/api-client"
import { NextResponse } from "next/server"
import { deliverWorkflow } from "@/lib/workflow-delivery"

const mollieClient = createMollieClient({
  apiKey: process.env.MOLLIE_API_KEY || ""
})

export async function POST(request: Request) {
  try {
    const data = await request.formData()
    const paymentId = data.get("id")?.toString()

    if (!paymentId) {
      return NextResponse.json(
        { error: "Payment ID is required" },
        { status: 400 }
      )
    }

    const payment = await mollieClient.payments.get(paymentId)

    if (payment.isPaid()) {
      const { workflowId } = payment.metadata
      await deliverWorkflow(workflowId, payment.customerId)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook processing failed:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}