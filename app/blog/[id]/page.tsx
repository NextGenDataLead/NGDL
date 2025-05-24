import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { formatDistance } from "date-fns"

const posts = [
  {
    id: 1,
    title: "The Future of Data Management in 2024",
    content: `
      The landscape of data management is rapidly evolving, driven by technological advancements and changing business needs. As we move through 2024, several key trends are shaping the future of how organizations handle, process, and derive value from their data.

      ## Key Trends

      ### 1. AI-Driven Data Management
      Artificial Intelligence is revolutionizing how we approach data management. From automated data classification to intelligent data governance, AI is making data management more efficient and effective than ever before.

      ### 2. Real-Time Data Processing
      The demand for real-time insights is driving innovations in data processing capabilities. Organizations are increasingly adopting stream processing and edge computing to handle data in real-time.

      ### 3. Enhanced Data Security
      With growing concerns about data privacy and security, organizations are implementing more sophisticated security measures. Zero-trust architectures and enhanced encryption methods are becoming standard practice.

      ## Impact on Business

      These trends are having a significant impact on how businesses operate:

      - Improved decision-making through better data insights
      - Enhanced operational efficiency
      - Better customer experiences
      - Reduced risks and improved compliance

      ## Looking Ahead

      As we continue through 2024 and beyond, we can expect to see:

      1. More integration of AI and ML in data management
      2. Greater emphasis on data quality and governance
      3. Increased adoption of cloud-native data solutions
      4. Evolution of data privacy regulations and compliance requirements

      Organizations that stay ahead of these trends will be better positioned to leverage their data assets for competitive advantage.
    `,
    date: "2024-03-15",
    category: "Data Management",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200&h=600",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
      role: "Data Strategy Consultant"
    }
  },
  {
    id: 2,
    title: "Blockchain Technology in Enterprise Data Solutions",
    content: `
      Blockchain technology is transforming how enterprises manage and secure their data. This article explores the key applications and benefits of blockchain in enterprise data solutions.

      ## Understanding Blockchain in Enterprise

      Blockchain provides a decentralized, immutable ledger that can revolutionize data management:

      1. Enhanced Security
      2. Improved Transparency
      3. Better Traceability
      4. Increased Efficiency

      ## Key Applications

      ### Supply Chain Management
      Tracking products and ensuring authenticity throughout the supply chain.

      ### Financial Services
      Secure transaction processing and record-keeping.

      ### Healthcare
      Patient data management and security.

      ## Implementation Challenges

      While blockchain offers numerous benefits, organizations must overcome several challenges:

      - Technical complexity
      - Integration with existing systems
      - Regulatory compliance
      - Cost considerations

      ## Future Outlook

      The future of blockchain in enterprise data solutions looks promising, with continued innovation and adoption across industries.
    `,
    date: "2024-03-10",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200&h=600",
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
      role: "Blockchain Developer"
    }
  },
  {
    id: 3,
    title: "Maximizing Business Value with Advanced Analytics",
    content: `
      Advanced analytics is revolutionizing how businesses make decisions and create value. This article explores key strategies for implementing and maximizing the benefits of analytics in your organization.

      ## The Power of Advanced Analytics

      Advanced analytics combines:

      - Predictive modeling
      - Machine learning
      - Data mining
      - Statistical analysis

      ## Implementation Strategies

      ### 1. Define Clear Objectives
      Start with specific business goals and KPIs.

      ### 2. Ensure Data Quality
      Implement robust data governance and quality controls.

      ### 3. Build the Right Team
      Combine technical and business expertise.

      ## Best Practices

      1. Start small and scale
      2. Focus on actionable insights
      3. Maintain data quality
      4. Ensure stakeholder buy-in

      ## Measuring Success

      Track and measure the impact of your analytics initiatives through:

      - ROI measurements
      - Performance metrics
      - Business outcomes
      - User adoption rates

      ## Future Trends

      Stay ahead by watching these emerging trends:

      1. AutoML
      2. Edge Analytics
      3. Real-time Analytics
      4. Embedded Analytics
    `,
    date: "2024-03-05",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=600",
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=120&h=120",
      role: "Analytics Director"
    }
  }
]

// Add generateStaticParams function for static site generation
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <Badge variant="secondary" className="mb-4">
          {post.category}
        </Badge>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-x-4 mb-8">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-sm text-muted-foreground">
              {post.author.role} · {formatDistance(new Date(post.date), new Date(), { addSuffix: true })}
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
