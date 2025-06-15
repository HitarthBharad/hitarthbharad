"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

interface ResumeViewerProps {
  resumeUrl: string
  previewImageUrl: string
}

export function ResumeViewer({ resumeUrl, previewImageUrl }: ResumeViewerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resumeTrigger = async () => {
    setIsLoading(true);

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language;

    try {
      await fetch("/api/resume-tracker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timezone, locale })
      });
    } catch (err) {
      console.error("Error logging resume download", err);
    }
    finally {
      setIsLoading(false);
    }
  };
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
                {
                  !isLoading ? (
                    <Link
                      href="#"
                      onClick={async (e) => {
                        e.preventDefault();
                        await resumeTrigger();
                        window.open(resumeUrl, '_blank');
                      }}
                      role="button"
                      className="inline-flex items-center px-4 py-2 text-black-100 font-semibold rounded-md shadow-md transition transform hover:shadow-lg focus:outline-none"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Link>
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="animate-spin mr-2 h-4 w-4 text-gray-50"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 017.088-7.948L11 4l1 0 0 1-1 0A7 7 0 004 12z"
                      ></path>
                    </svg>
                  )
                }
              </div>
            )}
          </div>
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
          {
            !isLoading ? (
              <Link
                href="#"
                onClick={async (e) => {
                  e.preventDefault();
                  await resumeTrigger();
                  window.open(resumeUrl, '_blank');
                }}
                role="button"
                className="inline-flex items-center px-4 py-2 bg-black text-white font-semibold rounded-md shadow-md transition transform hover:bg-white hover:text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-offset-2"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View
              </Link>
            ) : (
              <svg
                aria-hidden="true"
                className="animate-spin mr-2 h-4 w-4 text-gray-50"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 017.088-7.948L11 4l1 0 0 1-1 0A7 7 0 004 12z"
                ></path>
              </svg>
            )
          }
        </div>
      </div>
    </div>
  )
}

