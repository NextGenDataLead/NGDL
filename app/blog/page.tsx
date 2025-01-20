import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistance } from "date-fns"

const posts = [
  {
    id: 1,
    title: "The Future of Data Management in 2024",
    excerpt: "Exploring emerging trends in data management and how they'll shape business strategies.",
    date: "2024-03-15",
    category: "Data Management",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800&h=400",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
    }
  },
  {
    id: 2,
    title: "Blockchain Technology in Enterprise Data Solutions",
    excerpt: "How blockchain is revolutionizing data security and transparency in enterprise systems.",
    date: "2024-03-10",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=400",
    author: {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    }
  },
  {
    id: 3,
    title: "Maximizing Business Value with Advanced Analytics",
    excerpt: "Strategic approaches to implementing analytics for better business outcomes.",
    date: "2024-03-05",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    author: {
      name: "Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=120&h=120"
    }
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Latest Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Expert perspectives on data management, analytics, and technology trends
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-4">
                    {post.category}
                  </Badge>
                  <h2 className="text-xl font-bold leading-tight mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-x-4 border-t border-border pt-4">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{post.author.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatDistance(new Date(post.date), new Date(), { addSuffix: true })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}