import { createTransport } from "nodemailer"

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const workflows = {
  "social-automation": {
    name: "Social Media Automation Suite",
    json: {
      // Your N8N workflow JSON here
      nodes: [],
      connections: {},
      // ... rest of the workflow configuration
    }
  },
  "data-enrichment": {
    name: "Data Enrichment Pipeline",
    json: {
      // Your N8N workflow JSON here
      nodes: [],
      connections: {},
    }
  },
  "lead-generation": {
    name: "Lead Generation Automation",
    json: {
      // Your N8N workflow JSON here
      nodes: [],
      connections: {},
    }
  }
}

export async function deliverWorkflow(workflowId: string, customerId: string) {
  const workflow = workflows[workflowId as keyof typeof workflows]
  
  if (!workflow) {
    throw new Error("Workflow not found")
  }

  const jsonString = JSON.stringify(workflow.json, null, 2)
  
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: customerId,
    subject: `Your N8N Workflow: ${workflow.name}`,
    text: `Thank you for your purchase! Here is your N8N workflow configuration.`,
    attachments: [
      {
        filename: `${workflowId}.json`,
        content: jsonString,
        contentType: "application/json"
      }
    ]
  })
}