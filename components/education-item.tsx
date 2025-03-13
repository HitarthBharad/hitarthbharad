import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EducationItemProps {
  degree: string
  institution: string
  period: string
  description: string
}

export function EducationItem({ degree, institution, period, description }: EducationItemProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{degree}</h3>
            <p className="text-muted-foreground">{institution}</p>
          </div>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

