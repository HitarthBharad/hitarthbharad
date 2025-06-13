import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ProjectCard } from "@/components/project-card"
import { ExperienceItem } from "@/components/experience-item"
import { EducationItem } from "@/components/education-item"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Mail } from "lucide-react"
import { ResumeViewer } from "@/components/resume-viewer"
import { PublicationItem } from "@/components/publication-item"

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl px-4">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Portfolio</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors">
                Education
              </Link>
              <Link href="#publications" className="text-sm font-medium hover:text-primary transition-colors">
                Publications
              </Link>
              <Link href="#resume" className="text-sm font-medium hover:text-primary transition-colors">
                Resume
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://github.com/hitarthbharad" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <Link href="https://linkedin.com/in/hitarthbharad/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="container mx-auto py-10">
          <section id="about" className="py-16 md:py-24">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, I&#39;m <span className="text-primary">Hitarth Bharad</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A passionate Software Engineer focused on creating functional and smart solutions.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#contact">Get in touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View my work</Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-full border-4 border-primary/20 mx-auto lg:ml-auto lg:mr-0 max-w-[350px]">
                <img src="/Hitarth-Bharad.jpeg?height=400&width=400" alt="Profile" className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

          <section id="projects" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">
                A showcase of my recent work and personal projects.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <ProjectCard
                title="Connect IO"
                description="Developing an advanced graph database with embeddings and an LLM-powered chat application for intelligent data interactions"
                tags={["Next.JS", "Python", "MongoDB", "Neo4J", "OpenAI"]}
                image="/connect-io.png?height=300&width=500"
                link="https://connect-io-rust.vercel.app/"
              />
              <ProjectCard
                title="Auto PO"
                description="Automated platform to extract, match, and validate purchase order data from PDFs, streamlining procurement workflows."
                tags={["Next.js", "Tailwind CSS", "FastAPI", "OCR"]}
                image="/ocr.png?height=300&width=500"
                link="https://emotional-pod.vercel.app/"
              />
              <ProjectCard
                title="Emotional POD"
                description="Vulnerability rules based Social Media prototype"
                tags={["Next.js", "Tailwind CSS", "TypeScript"]}
                image="/socialmedia.png?height=300&width=500"
                link="https://emotional-pod.vercel.app/"
              />
              <ProjectCard
                title="Tucson Crime Pattern Analysis Dashboard"
                description="Enhancing public safety through data-driven crime insights"
                tags={["R", "ShinyApp"]}
                image="/tucson.jpg?height=300&width=500"
                link="https://info-526-f24.github.io/project-01-VIZards/dashboard.html"
              />
              <ProjectCard
                title="Anamoly Detection Algorithm"
                description="Real-time anomaly detection in time series data for proactive insights and decision-making"
                tags={["Python", "Matplotlib"]}
                image="/ana-detect.png?height=300&width=500"
                link="https://github.com/HitarthBharad/anomaly-detection"
              />
              
            </div>
          </section>

          <section id="experience" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">My professional journey and work experience.</p>
            </div>
            <div className="space-y-8 max-w-3xl mx-auto">
              <ExperienceItem
                title="Software Development Engineer 2"
                company="FERO.AI"
                period="Sept 2021 - July 2024"
                description="Designed and implemented scalable SaaS infrastructure, integrating authentication, payments, and financial services to support enterprise clients globally. Led the development of an iPaaS solution integrating 30+ third-party systems, reducing data transfer time and improving operational efficiency by 20%."
                skills={["Solution Designing", "Microservices & API Development", "LLM Integration & RAG Pipelines", "SaaS Development"]}
              />
              <ExperienceItem
                title="Associate Software Engineer"
                company="Verse Innovation"
                period="June 2021 - August 2021"
                description="Developed backend infrastructure for a high-traffic video streaming platform serving 10M+ daily active users, ensuring system stability and scalability."
                skills={["Backend Development", "Performance Optimization", "Java, Spring Boot"]}
              />
              <ExperienceItem
                title="Software Engineer Intern"
                company="Fineprint"
                period="January 2021 - May 2021"
                description="Assisted in the development of smart document building and internal tools."
                skills={["React", "JavaScript", "Python"]}
              />
            </div>
          </section>

          <section id="education" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">My academic background and qualifications.</p>
            </div>
            <div className="space-y-8 max-w-3xl mx-auto">
              <EducationItem
                degree="MS Information Science - Machine Learning"
                institution="University of Arizona"
                period="2023 - 2025"
                description="Graduate program focusing on the intersection of Data Analysis, Visualization and Deep Learning . It covers advanced machine learning algorithms, big data processing, natural language processing (NLP), and cloud-based AI solutions. Emphasizing both theoretical foundations and real-world applications."
              />
              <EducationItem
                degree="BTech in Information and Communication Technology"
                institution="Dhirubhai Ambani Institute of Information and Communication Technology"
                period="2017 - 2021"
                description="Undergraduate program blending computer science, networking, and digital communication technologies. It covers software development, database management, cloud computing, cybersecurity, and embedded systems, with a strong focus on algorithms, data structures, and system architecture."
              />
            </div>
          </section>

          <section id="publications" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research & Publications</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">My academic research and published papers.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <PublicationItem
                title="FastSpectralNet: Efficient Hyperspectral Image Classification using Context Vector Attention"
                authors="Hitarth Bharad, Jayant Biradar, Eung-Joo Lee"
                journal="To Be Published"
                date="2025"
                description="This paper explores novel Vision Transformer architecture for Hyperspectral Image Classification which provides low latency and higher accuracy for inference"
                tags={["Hyperspectral Images", "Vision Transformer", "Context Vector Attention"]}
                doi=""
                paperLink="#"
              />
              <PublicationItem
                title="Performative Analysis on Ion-Sensitive Field-Effect Transistor by Varying Intrinsic Parameter"
                authors="Hitarth Bharad, Rutu Parekh"
                journal="Sustainable Technology and Advanced Computing in Electrical Engineering"
                date="November 2022"
                description="Study the effects on the performance of silicon-based and germanium-based ISFET by varying the device parameters."
                tags={["Transistor", "Analysis"]}
                paperLink="https://link.springer.com/chapter/10.1007/978-981-19-4364-5_46"
              />
            </div>
          </section>

          <section id="resume" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">
                Download my resume for a comprehensive overview of my skills and experience.
              </p>
            </div>
            <ResumeViewer resumeUrl="/Hitarth-Bharad.pdf" previewImageUrl="/resume.png?height=800&width=600" />
          </section>

          <section id="contact" className="py-16 md:py-24">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-muted-foreground mx-auto max-w-[700px]">
                Have a project in mind or want to chat? Feel free to reach out.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>hitarth.bharad@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <Link
                      href="https://linkedin.com/in/hitarthbharad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/hitarthbharad
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <Link href="https://github.com/hitarthbharad" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      github.com/hitarthbharad
                    </Link>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </main>
        <footer className="border-t py-6 md:py-8">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Hitarth Bharad. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/hitarthbharad" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/hitarthbharad" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hitarth.bharad@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

