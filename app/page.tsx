"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { useUIStore, type AppKey } from "@/lib/ui-store"
import Eyes from "./components/Eyes"
import Dock from "./components/Dock"
import DesktopWindow from "./components/Window"
import CommandPalette from "./components/CommandPalette"
import Link from "next/link"
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"

type WindowSpec = {
  key: Exclude<AppKey, "palette" | null>
  title: string
  content: React.ReactNode
}

// Placeholder content builders
function AboutContent() {
  return (
    <div className="p-5 md:p-6">
      <div className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] rounded-lg">
        <span className="font-bold text-lg">Latest Update: </span>
        <span>
          Releasing early version of{' '}
          <a
            href="https://your-aegion-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Aegion
          </a>
        </span>
      </div>

      <h1 className="mt-6 font-black leading-none" style={{ fontSize: 52 }}>
        Hello, I&apos;m Hitarth.
      </h1>
      <p className="mt-4 text-lg">Software Engineer - From Problem to Product.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["Full Stack Development", "Microservices", "Machine Learning", "Data Modeling", "Vector Search"].map((chip) => (
          <span
            key={chip}
            className="text-sm font-semibold px-3 py-1 rounded-md border-[3px] border-black"
            style={{ backgroundColor: "#FF2E63", color: "#000" }}
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-6 text-lg font-semibold">
        <a
          href="https://www.linkedin.com/in/hitarthbharad/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-900 transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/HitarthBharad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
        >
          <Github />
        </a>
        <a
          href="mailto:hitarth.bharad@gmail.com"
          className="hover:text-red-600 transition-colors"
        >
          <Mail />
        </a>
      </div>
    </div>
  )
}

function ProjectContent() {
  const projects = [{
    title: "Aegion",
    description: "An Orchestration engine that turns any code or API into an intelligent agent capable of executing complex, cross-domain workflows on demand.",
    tags: ["Next.JS", "FastAPI", "PostgreSQL", "OpenAI"],
    image: "/mcp.png?height=600&width=600",
    link: "https://aegion.app/"
  }, {
    title: "Connect IO",
    description: "Developed a graph database with embeddings and an LLM-powered chat application for intelligent data interactions for Journal Application",
    tags: ["Next.JS", "Python", "MongoDB", "Neo4J", "OpenAI"],
    image: "/connect-io.png?height=600&width=600",
    link: "https://journal.aegion.app/"
  },
  {
    title: "Auto PO",
    description: "Automated platform to extract, match, and validate purchase order data from PDFs, streamlining procurement workflows.",
    tags: ["Next.js", "Tailwind CSS", "FastAPI", "OCR"],
    image: "/ocr.png?height=600&width=600",
    link: "https://auto-po.vercel.app/"
  },
  {
    title: "Emotional POD",
    description: "Vulnerability rules based Social Media prototype",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/socialmedia.png?height=600&width=600",
    link: "https://emotional-pod.vercel.app/"
  },
  {
    title: "Tucson Crime Pattern Analysis Dashboard",
    description: "Enhancing public safety through data-driven crime insights",
    tags: ["R", "ShinyApp", "Data Modeling", "Data Processing", "Analysis"],
    image: "/tucson.jpg?height=600&width=600",
    link: "https://info-526-f24.github.io/project-01-VIZards/dashboard.html"
  },
  {
    title: "Anamoly Detection Algorithm",
    description: "Real-time anomaly detection in time series data for proactive insights and decision-making",
    tags: ["Python", "Matplotlib"],
    image: "/ana-detect.png?height=600&width=600",
    link: "https://github.com/HitarthBharad/anomaly-detection"
  }];

  return (
    <div className="p-5 grid gap-4 md:grid-cols-2">
      {projects.map((p, i) => (
        <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={p.image || "/placeholder.svg"}
              alt={p.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link
                href={p.link}
                className="text-white flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="text-xl font-black">{p.title}</div>
          <div className="mt-2">{p.description}</div>
        </div>
      ))}
    </div>
  )
}

function ResearchPublicationContent() {

  const publication = [
    {
      title: "FastSpectralNet: Efficient Hyperspectral Image Classification using Context Vector Attention",
      journal: "WACV - Under Review",
      date: "2025",
      description: "This paper explores novel Vision Transformer architecture for Hyperspectral Image Classification which provides low latency and higher accuracy for inference",
      tags: ["Hyperspectral Images", "Vision Transformer", "Context Vector Attention"],
    },
    {
      title: "Performative Analysis on Ion-Sensitive Field-Effect Transistor by Varying Intrinsic Parameter",
      journal: "Sustainable Technology and Advanced Computing in Electrical Engineering",
      date: "2022",
      description: "Study the effects on the performance of silicon-based and germanium-based ISFET by varying the device parameters.",
      tags: ["Transistor", "Analysis"],
      paperLink: "https://link.springer.com/chapter/10.1007/978-981-19-4364-5_46"
    },
  ]
  return (
    <div className="p-5 grid gap-4 md:grid-cols-2">
      {publication.map((p, i) => (
        <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] text-lg font-semibold">
          <div className="text-xl font-black">{p.title}</div>
          <div className="mt-1 text-sm font-medium text-gray-700">
            {p.journal} • {p.date}
          </div>
          <div className="mt-2">{p.description}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {p.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
            ))}
          </div>
          {p.paperLink && (
            <div className="mt-2">
              <a href={p.paperLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Paper
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function ResumeContent() {
  const cards = [
    { title: "Work", body: "Software Engineer @ FERO.AI (2021—2024)" },
    { title: "Tech", body: "Python, Java, React, Next.js, MCP, RAG" },
    { title: "Focus", body: "Distributed Systems, Event-Driven Architecture, ETL & Data Integration, Real-Time Data Processing, UI/UX" },
    { title: "Education", body: "MS Information Science - Machine Learning, University of Arizona (2023-2025)" },
  ]
  return (
    <div className="p-5 grid gap-4 md:grid-cols-2">
      {cards.map((c, i) => (
        <div key={i} className="p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000]">
          <div className="text-xl font-black">{c.title}</div>
          <div className="mt-2">{c.body}</div>
        </div>
      ))}
      <div className="md:col-span-2 mt-4 text-center">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold underline text-lg"
        >
          View Resume
        </a>
      </div>
    </div>
  )
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(null)

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          from: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error('Failed to send message.')

      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-5 grid gap-4 md:grid-cols-2">
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-[6px_6px_0_0_#000] text-center">
            <h2 className="text-2xl font-bold mb-2">Got your message!</h2>
            <p className="text-lg">Thanks for reaching out. I will get back to you soon.</p>
          </div>
        </div>
      )}

      <div className="md:col-span-2 p-4 border-[3px] border-black bg-white shadow-[6px_6px_0_0_#000] rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col text-lg font-semibold">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="mt-1 p-2 border-[2px] border-gray-400 rounded focus:outline-none focus:border-black"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-1 p-2 border-[2px] border-gray-400 rounded focus:outline-none focus:border-black"
              required
            />
          </label>

          <label className="flex flex-col text-lg font-semibold">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="mt-1 p-2 border-[2px] border-gray-400 rounded focus:outline-none focus:border-black"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="self-start px-6 py-3 bg-black text-white font-bold rounded shadow-[6px_6px_0_0_#000] hover:translate-y-[-2px] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default function Page() {
  // Windows order doubles as z-order; last is topmost
  const [openApps, setOpenApps] = useState<Exclude<AppKey, "palette" | null>[]>(["about"])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const setActiveApp = useUIStore((s) => s.setActiveApp)
  const activeApp = useUIStore((s) => s.activeApp)

  // Initialize active app (About by default)
  useEffect(() => {
    setActiveApp("about")
  }, [setActiveApp])

  // Global key handling: Esc closes palette or topmost window
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (paletteOpen) {
          setPaletteOpen(false)
          setActiveApp(null)
          return
        }
        if (openApps.length > 0) {
          const top = openApps[openApps.length - 1]
          closeApp(top)
          return
        }
      }
      // Enter on focused dock item is native click; no interception necessary.
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [paletteOpen, openApps])

  const windows: WindowSpec[] = useMemo(
    () => [
      { key: "about", title: "About", content: <AboutContent /> },
      { key: "project", title: "Projects", content: <ProjectContent /> },
      { key: "research", title: "Research Publication", content: <ResearchPublicationContent /> },
      { key: "resume", title: "Resume", content: <ResumeContent /> },
      { key: "contact", "title": "Contact", content: <ContactContent /> }
    ],
    [],
  )

  function openApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      if (prev.includes(app)) {
        const without = prev.filter((a) => a !== app)
        return [...without, app]
      }
      return [...prev, app]
    })
    setActiveApp(app)
  }

  function closeApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => prev.filter((a) => a !== app))
    // If top was closed, set active to new top or null
    setActiveApp((s) => {
      // s can accept direct value; but we need latest openApps after removal
      return null
    })
  }

  function focusApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      const without = prev.filter((a) => a !== app)
      return [...without, app]
    })
    setActiveApp(app)
  }

  function resetAll() {
    setOpenApps(["about"])
    setPaletteOpen(false)
    setActiveApp("about")
  }

  return (
    <main className="fixed inset-0 overflow-hidden">
      {/* Background: off-white, 8px grid + subtle grain */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#FAFAF0",
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 8px)
          `,
          backgroundSize: "8px 8px, 8px 8px",
        }}
      />
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "2px 2px",
        }}
      />

      {/* p5 Eyes wallpaper */}
      <Eyes activeApp={activeApp ?? null} />

      {/* Windows */}
      <div className="absolute inset-0 z-10">
        {windows
          .filter((w) => openApps.includes(w.key))
          .map((w) => {
            const zIndex = 100 + openApps.indexOf(w.key)
            return (
              <DesktopWindow
                key={w.key}
                appKey={w.key}
                title={w.title}
                zIndex={zIndex}
                onClose={() => closeApp(w.key)}
                onFocus={() => focusApp(w.key)}
              >
                {w.content}
              </DesktopWindow>
            )
          })}
      </div>

      {/* Dock */}
      <div className="absolute left-0 right-0 bottom-6 z-20 flex justify-center">
        <Dock
          activeApp={activeApp ?? null}
          onOpen={(k) => openApp(k)}
          onOpenPalette={() => {
            setPaletteOpen(true)
            setActiveApp("palette")
          }}
        />
      </div>

      {/* Command Palette */}
      <CommandPalette
        open={paletteOpen}
        onOpenChange={(o) => {
          setPaletteOpen(o)
          if (!o) setActiveApp(null)
          if (o) setActiveApp("palette")
        }}
        onAction={(k) => {
          openApp(k)
          setPaletteOpen(false)
        }}
        onReset={resetAll}
      />
    </main>
  )
}
