import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionDivider } from "@/components/section-divider"
import {
  Brain,
  Briefcase,
  GraduationCap,
  LineChart,
  MessageSquare,
  Users,
  Linkedin,
  ArrowRight,
} from "lucide-react"

const skills = [
  "Data Management",
  "Data Governance",
  "Project Management",
  "Business Analysis",
  "Business Intelligence",
  "Analytics",
  "Team Leadership",
]

const certifications = [
  "Blockchain Developer",
  "Certified Business Intelligence Professional",
  "Data Scientist",
  "Lean Six Sigma Foundation"
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* Top Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 mb-16 relative">
          {/* Vertical Separator */}
          <div className="absolute top-0 left-1/2 h-full w-px hidden lg:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-border/50 to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_4rem,black_calc(100%-4rem),transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat] border-r border-dashed border-border/50" />
          </div>

          {/* Top Left: Introduction */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm Imre!
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Next to being a dedicated husband and father I am breathe data as a seasoned data professional with <strong><em className="text-foreground">over 15 years of experience</em></strong> in data management and -governance, project management, business analysis and BI.
            </p>

            <div className="mt-6 relative">
              <Card className="p-6 border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background">
                <p className="text-lg font-medium">
                  I excel at{" "}
                  <span className="text-primary font-semibold">
                    bridging the gap between C-level stakeholders and technical teams
                  </span>
                  , blending strong business acumen, analytical expertise, communication skills and technical proficiency (certified).
                </p>
              </Card>
              <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-primary/0 blur-xl opacity-20 -z-10" />
            </div>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              My passion lies in creating <strong><em className="text-foreground">value-driven data assets</em></strong> by turning <strong><em className="text-foreground">complex requirements into actionable, impactful solutions</em></strong>. With experience across diverse sectors, I've honed my skills in problem-solving, negotiation, and delivering results that drive success.
            </p>
          </div>

          {/* Top Right: Professional Experience, Skills, and Certifications */}
          <div className="mt-10 lg:mt-0 flex flex-col justify-center space-y-8">
            {/* LinkedIn Card */}
            <Card className="p-6 border-primary/50">
              <div className="flex items-center gap-4 mb-4">
                <Linkedin className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Professional Experience</h3>
                  <p className="text-muted-foreground">View my complete journey</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                For a detailed overview of my professional experience, achievements, and the impact I've made across various roles, please visit my LinkedIn profile.
              </p>
              <Link 
                href="https://www.linkedin.com/in/imredekker/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                View LinkedIn Profile
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            {/* Skills and Certifications Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Skills</h2>
                <div className="grid grid-cols-1 gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="justify-center">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Certifications</h2>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Bottom Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Bottom Left: Skills Puzzle */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">Core Competencies</h2>
            <div className="relative w-full max-w-[456px] mx-auto">
              <Image
                src="/images/skills.png"
                alt="Skills Puzzle showing core competencies"
                width={456}
                height={456}
                priority
              />
            </div>
          </div>

          {/* Bottom Right: Competency Cards */}
          <div className="mt-10 lg:mt-0 flex items-center">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Analytical Skills</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expert in statistical analysis, machine learning, and data visualization
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Communication</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Skilled at translating complex data concepts into actionable insights
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <LineChart className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Business Acumen</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of business metrics and growth strategies
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Leadership</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proven track record of leading successful data teams and projects
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
