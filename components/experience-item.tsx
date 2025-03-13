import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

export function ExperienceItem({ title, company, period, description, skills }: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{company}</p>
          </div>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

