"use client"

import type React from "react"

import { X, GripVertical } from "lucide-react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function DesktopWindow({
  appKey = "about",
  title = "Window",
  children,
  zIndex = 100,
  onClose = () => { },
  onFocus = () => { },
}: {
  appKey?: string
  title?: string
  children?: React.ReactNode
  zIndex?: number
  onClose?: () => void
  onFocus?: () => void
}) {
  const winRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const pos = useRef<{ x: number; y: number }>({ x: 120, y: 100 })
  const grabbing = useRef(false)
  const start = useRef<{ x: number; y: number; sx: number; sy: number }>({ x: 0, y: 0, sx: 0, sy: 0 })
  const rafRef = useRef<number | null>(null)

  // initial offset based on appKey
  useEffect(() => {
    const offsets: Record<string, { x: number; y: number }> = {
      about: { x: 80, y: 80 },
      project: { x: 160, y: 120 },
      research: { x: 260, y: 140 },
      resume: { x: 200, y: 160 },
    }
    const off = offsets[appKey] ?? { x: 120, y: 120 }
    pos.current = off
    applyTransform()
  }, [appKey])

  const applyTransform = () => {
    if (!winRef.current) return
    const { x, y } = pos.current
    winRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  useEffect(() => {
    const el = headerRef.current
    if (!el) return

    const onPointerDown = (e: PointerEvent) => {
      grabbing.current = true
      onFocus()
      start.current = { x: e.clientX, y: e.clientY, sx: pos.current.x, sy: pos.current.y }
        ; (e.target as Element).setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!grabbing.current) return
      const dx = e.clientX - start.current.x
      const dy = e.clientY - start.current.y
      pos.current.x = start.current.sx + dx
      pos.current.y = start.current.sy + dy
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(applyTransform)
    }
    const onPointerUp = (e: PointerEvent) => {
      grabbing.current = false
      try {
        ; (e.target as Element).releasePointerCapture(e.pointerId)
      } catch { }
    }

    el.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    return () => {
      el.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onFocus])

  return (
    <div
      ref={winRef}
      className="absolute top-0 left-0 w-[min(92vw,1000px)] md:w-[800px]"
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      <div className="border-[3px] border-black bg-white shadow-[10px_10px_0_0_#000] rounded-md overflow-hidden">
        <div
          ref={headerRef}
          className={cn(
            "flex items-center justify-between px-3 py-2 border-b-[3px] border-black cursor-grab active:cursor-grabbing",
            "bg-[#FAFAF0]",
          )}
          style={{ userSelect: "none" }}
        >
          <div className="flex items-center gap-2">
            <GripVertical className="w-5 h-5" aria-hidden="true" />
            <div className="font-black text-xl">{title}</div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 grid place-items-center border-[3px] border-black rounded-md bg-white hover:translate-y-[-1px] transition-transform"
            aria-label={`Close ${title}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="max-h-[60vh] md:max-h-[65vh] overflow-auto bg-white">{children}</div>
      </div>
    </div>
  )
}
