import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

interface PublicationItemProps {
  title: string
  authors: string
  journal: string
  date: string
  description: string
  tags: string[]
  doi?: string
  paperLink?: string
}

export function PublicationItem({
  title,
  authors,
  journal,
  date,
  description,
  tags,
  doi,
  paperLink,
}: PublicationItemProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>{authors}</p>
          <p className="italic">{journal}</p>
          <p>{date}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 w-full">
          {doi && (
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5 mr-1" />
                DOI
              </Link>
            </Button>
          )}
          {paperLink && (
            <Button variant="outline" size="sm" className="text-xs ml-auto" asChild>
              <Link href={paperLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5 mr-1" />
                View Paper
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

