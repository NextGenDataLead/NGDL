"use client"

import { useState } from "react"
import { Brain, Briefcase, MessageSquare } from "lucide-react"

const skills = [
  {
    id: "communication",
    name: "Communication Skills",
    icon: MessageSquare,
    color: "from-emerald-500/20 to-emerald-500/30",
    hoverColor: "from-emerald-500/30 to-emerald-500/40",
    position: "translate-y-[-45%]",
  },
  {
    id: "business",
    name: "Business Acumen",
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-500/30",
    hoverColor: "from-blue-500/30 to-blue-500/40",
    position: "translate-x-[45%]",
  },
  {
    id: "analytical",
    name: "Analytical Skills",
    icon: Brain,
    color: "from-purple-500/20 to-purple-500/30",
    hoverColor: "from-purple-500/30 to-purple-500/40",
    position: "translate-x-[-45%]",
  },
]

export function VennDiagram() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  return (
    <div className="relative h-[500px] w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`absolute w-52 h-52 rounded-full transition-all duration-300 cursor-pointer
              ${skill.position}
              ${activeSkill === skill.id ? "z-20 scale-110" : skill.id === "communication" ? "z-0" : "z-10"}
              ${activeSkill && activeSkill !== skill.id ? "opacity-50" : "opacity-100"}
            `}
            onMouseEnter={() => setActiveSkill(skill.id)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br backdrop-blur-sm transition-all duration-300
              ${activeSkill === skill.id ? skill.hoverColor : skill.color}
            `} />
            <div className={`absolute inset-0 flex flex-col items-center justify-center text-center
              ${skill.id === "communication" ? "-translate-y-12" : ""}
            `}>
              <skill.icon className={`w-8 h-8 mb-2 transition-colors duration-300
                ${activeSkill === skill.id ? "text-foreground" : "text-muted-foreground"}
              `} />
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}