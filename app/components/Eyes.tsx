"use client"

import { useEffect, useRef } from "react"
import type { AppKey } from "@/lib/ui-store"

type Mood = "friendly" | "playful" | "thoughtful" | "confident" | "focused" | "curious" | "neutral"

function moodFromApp(app: AppKey): Mood {
  switch (app) {
    case "about":
      return "friendly"
    case "project":
      return "playful"
    case "research":
      return "thoughtful"
    case "resume":
      return "confident"
    case "contact":
      return "curious"
    case "palette":
      return "curious"
    default:
      return "neutral"
  }
}

export default function Eyes({
  activeApp = "about",
}: {
  activeApp?: AppKey
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const p5Ref = useRef<any | null>(null)
  const moodRef = useRef<Mood>(moodFromApp(activeApp ?? null))
  const reducedMotionRef = useRef<boolean>(false)
  const cursorRef = useRef({ x: 0, y: 0 })

  // Initialize p5 ONCE; StrictMode-safe via guard and cleanup
  useEffect(() => {
    if (p5Ref.current) return
    let removeMouse: (() => void) | null = null
    let p5Instance: any = null

    // Set initial cursor position
    cursorRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", onMouseMove)
    removeMouse = () => window.removeEventListener("mousemove", onMouseMove)

    const initP5 = async () => {
      try {
        // Import p5
        let p5Module: any
        if (typeof window !== "undefined") {
          // @ts-ignore
          p5Module = (await import("p5")).default
        }
        const P5 = p5Module.default || p5Module

        if (!containerRef.current) return

        const BG = "#FAFAF0"

        const sketch = (p: any) => {
          // Animation state
          let nextBlinkAt = 0
          let blinking = false
          let blinkStart = 0
          const blinkDuration = 120

          const scheduleNextBlink = () => {
            const inMs = p.random ? p.random(2000, 5000) : 3000
            nextBlinkAt = p.millis() + inMs
          }

          p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight)
            p.pixelDensity(1)
            reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            scheduleNextBlink()
          }

          p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight)
          }

          p.draw = () => {
            p.clear()

            // Eye positions at the top center
            const eyeSpacing = 120
            const cx1 = p.width / 2 - eyeSpacing / 2
            const cy1 = 100
            const cx2 = p.width / 2 + eyeSpacing / 2
            const cy2 = 100

            const eyeRx = 50
            const eyeRy = 42
            const pupilR = 12

            // Get current cursor position
            const cursorX = cursorRef.current.x
            const cursorY = cursorRef.current.y

            // Mood parameters
            const mood = moodRef.current
            let eyeOpen = 1
            let followStrength = 0.4

            switch (mood) {
              case "playful":
                followStrength = 0.6
                break
              case "focused":
                followStrength = 0.8
                break
              case "curious":
                followStrength = 0.7
                break
              case "thoughtful":
                followStrength = 0.3
                break
              default:
                followStrength = 0.4
            }

            // Blink logic
            const now = p.millis()
            if (!reducedMotionRef.current && now >= nextBlinkAt && !blinking) {
              blinking = true
              blinkStart = now
            }
            if (blinking) {
              const t = (now - blinkStart) / blinkDuration
              if (t >= 1) {
                blinking = false
                scheduleNextBlink()
              } else {
                const k = t < 0.5 ? t * 2 : 1 - (t - 0.5) * 2
                eyeOpen = Math.max(0.1, 1 - k)
              }
            }

            // Draw eyes
            p.stroke(0)
            p.strokeWeight(3)
            p.noFill()

            // Eye outlines
            p.ellipse(cx1, cy1, eyeRx * 2, eyeRy * 2 * eyeOpen)
            p.ellipse(cx2, cy2, eyeRx * 2, eyeRy * 2 * eyeOpen)

            // Calculate and draw pupils
            const drawPupil = (cx: number, cy: number) => {
              // Vector from eye center to cursor
              const dx = cursorX - cx
              const dy = cursorY - cy

              // Limit pupil movement within eye bounds
              const maxMoveX = eyeRx * 0.6
              const maxMoveY = eyeRy * 0.6

              // Calculate pupil position with following
              const pupilX = cx + Math.max(-maxMoveX, Math.min(maxMoveX, dx * followStrength * 0.01))
              const pupilY = cy + Math.max(-maxMoveY, Math.min(maxMoveY, dy * followStrength * 0.01))

              // Draw pupil
              p.fill(0)
              p.noStroke()
              p.circle(pupilX, pupilY, pupilR * 2)
            }

            if (eyeOpen > 0.2) {
              drawPupil(cx1, cy1)
              drawPupil(cx2, cy2)
            }

            // Draw eyelids for blinking
            if (eyeOpen < 1) {
              p.noStroke()
              p.fill(BG)
              const lidHeight = eyeRy * (1 - eyeOpen)

              // Top lids
              p.rect(cx1 - eyeRx - 3, cy1 - eyeRy - 3, eyeRx * 2 + 6, lidHeight + 3)
              p.rect(cx2 - eyeRx - 3, cy2 - eyeRy - 3, eyeRx * 2 + 6, lidHeight + 3)

              // Bottom lids
              p.rect(cx1 - eyeRx - 3, cy1 + eyeRy - lidHeight, eyeRx * 2 + 6, lidHeight + 3)
              p.rect(cx2 - eyeRx - 3, cy2 + eyeRy - lidHeight, eyeRx * 2 + 6, lidHeight + 3)
            }
          }
        }

        p5Instance = new P5(sketch, containerRef.current!)
        p5Ref.current = p5Instance
      } catch (error) {
        console.warn("Failed to initialize p5:", error)

        // CSS/JS fallback with actual mouse tracking
        if (containerRef.current) {
          const fallbackHTML = `
            <div id="fallback-eyes" style="position: absolute; top: 100px; left: 50%; transform: translateX(-50%); display: flex; gap: 120px; z-index: 1;">
              <div class="eye" style="position: relative; width: 100px; height: 84px; border: 3px solid black; border-radius: 50%; background: transparent; overflow: hidden;">
                <div class="pupil" style="position: absolute; width: 24px; height: 24px; border-radius: 50%; background: black; top: 50%; left: 50%; transform: translate(-50%, -50%); transition: all 0.1s ease;"></div>
              </div>
              <div class="eye" style="position: relative; width: 100px; height: 84px; border: 3px solid black; border-radius: 50%; background: transparent; overflow: hidden;">
                <div class="pupil" style="position: absolute; width: 24px; height: 24px; border-radius: 50%; background: black; top: 50%; left: 50%; transform: translate(-50%, -50%); transition: all 0.1s ease;"></div>
              </div>
            </div>
          `
          containerRef.current.innerHTML = fallbackHTML

          // Add mouse tracking to fallback
          const updateFallbackEyes = (e: MouseEvent) => {
            const eyes = containerRef.current?.querySelectorAll(".eye")
            if (!eyes) return

            eyes.forEach((eye) => {
              const pupil = eye.querySelector(".pupil") as HTMLElement
              if (!pupil) return

              const eyeRect = eye.getBoundingClientRect()
              const eyeCenterX = eyeRect.left + eyeRect.width / 2
              const eyeCenterY = eyeRect.top + eyeRect.height / 2

              const dx = e.clientX - eyeCenterX
              const dy = e.clientY - eyeCenterY

              const maxMove = 25
              const moveX = Math.max(-maxMove, Math.min(maxMove, dx * 0.3))
              const moveY = Math.max(-maxMove, Math.min(maxMove, dy * 0.3))

              pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`
            })
          }

          window.addEventListener("mousemove", updateFallbackEyes)

          // Store cleanup function
          removeMouse = () => {
            window.removeEventListener("mousemove", updateFallbackEyes)
            window.removeEventListener("mousemove", onMouseMove)
          }
        }
      }
    }

    initP5()

    return () => {
      if (removeMouse) removeMouse()
      if (p5Instance) {
        try {
          p5Instance.remove()
        } catch (error) {
          console.warn("Error removing p5 instance:", error)
        }
      }
      if (p5Ref.current) {
        p5Ref.current = null
      }
    }
  }, [])

  // Mirror activeApp -> moodRef without re-rendering the sketch
  useEffect(() => {
    moodRef.current = moodFromApp(activeApp ?? null)
  }, [activeApp])

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />
}
