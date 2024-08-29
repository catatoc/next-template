import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TechItem {
  emoji: string
  name: string
  description: string
  level: string
}

const techStack: TechItem[] = [
  {
    emoji: "🟦",
    name: "SAP",
    description: "ERP empresarial líder.",
    level: "Avanzado",
  },
  {
    emoji: "🔧",
    name: "VS Code",
    description: "Editor de código poderoso.",
    level: "Avanzado",
  },
  {
    emoji: "💻",
    name: "Python",
    description: "Lenguaje de programación versátil.",
    level: "Avanzado",
  },
  {
    emoji: "🌐",
    name: "JavaScript",
    description: "Lenguaje para la web.",
    level: "Avanzado",
  },
  {
    emoji: "🔮",
    name: "ChatGPT",
    description: "Inteligencia Artificial conversacional.",
    level: "Avanzado",
  },
  {
    emoji: "📎",
    name: "Office 365",
    description: "Suite de productividad empresarial.",
    level: "Avanzado",
  },
  {
    emoji: "🗂",
    name: "Notion",
    description: "Gestión de notas y tareas.",
    level: "Intermedio",
  },
  {
    emoji: "🖥️",
    name: "Power BI",
    description: "Análisis de datos empresarial.",
    level: "Intermedio",
  },
  {
    emoji: "📊",
    name: "Tableau",
    description: "Visualización de datos.",
    level: "Intermedio",
  },
  {
    emoji: "👥",
    name: "Jira",
    description: "Gestión de proyectos y tareas.",
    level: "Intermedio",
  },
  {
    emoji: "🎨",
    name: "Figma",
    description: "Diseño de interfaces colaborativas.",
    level: "Intermedio",
  },
  {
    emoji: "🗃️",
    name: "MongoDB",
    description: "Base de datos NoSQL.",
    level: "Intermedio",
  },
  {
    emoji: "📎",
    name: "Google Workspace",
    description: "Suite de productividad empresarial.",
    level: "Intermedio",
  },
  {
    emoji: "💬",
    name: "Lark",
    description: "Colaboración y comunicación.",
    level: "Básico",
  },
  {
    emoji: "🎥",
    name: "Canva",
    description: "Diseño gráfico sencillo.",
    level: "Básico",
  },
  {
    emoji: "💾",
    name: "Odoo",
    description: "Suite de aplicaciones empresariales.",
    level: "Básico",
  },
  {
    emoji: "📂",
    name: "Celonis",
    description: "Minería de procesos.",
    level: "Básico",
  },
]

const TechStackGallery = () => {
  // Ordenar por nivel: Avanzado > Intermedio > Básico
  const sortedTechStack = [...techStack].sort((a, b) => {
    const levels = ["Avanzado", "Intermedio", "Básico"]
    return levels.indexOf(a.level) - levels.indexOf(b.level)
  })

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortedTechStack.map((tech, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-center text-4xl">{tech.emoji}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-sm text-muted-foreground">{tech.description}</p>
            <div className="mt-4">
              <p className="text-xs text-muted-foreground">{tech.level}</p>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    tech.level === "Avanzado"
                      ? "bg-green-500 w-3/4"
                      : tech.level === "Intermedio"
                      ? "bg-blue-400 w-1/2"
                      : "bg-yellow-500 w-1/4"
                  }`}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default TechStackGallery
