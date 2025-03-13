"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

interface ResumeViewerProps {
  resumeUrl: string
  previewImageUrl: string
}

export function ResumeViewer({ resumeUrl, previewImageUrl }: ResumeViewerProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <Card className="relative w-full max-w-md overflow-hidden shadow-lg border-2">
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img
              src={previewImageUrl || "/placeholder.svg"}
              alt="Resume preview"
              className="w-full h-auto transition-opacity duration-300"
              style={{ opacity: isHovered ? 0.7 : 1 }}
            />
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <Button asChild>
                  <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={resumeUrl} download="Your_Name_Resume.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Link>
                </Button>
              </div>
            )}
          </div>
          <CardContent className="p-4 md:hidden">
            <div className="flex gap-4 justify-center">
              <Button size="sm" asChild>
                <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href={resumeUrl} download="Your_Name_Resume.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">My Resume</h3>
        <p>
          Download my resume to get a comprehensive overview of my skills, experience, and qualifications. The PDF
          version contains additional details about my projects and achievements.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium">Complete work history</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium">Technical skills & certifications</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium">Education & professional development</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 pt-4">
          <Button asChild>
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Full Resume
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={resumeUrl} download="Your_Name_Resume.pdf">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

