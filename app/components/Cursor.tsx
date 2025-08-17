'use client'

import { useEffect, useState } from 'react'

export default function ClassicCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const addHover = () => setIsHovering(true)
    const removeHover = () => setIsHovering(false)

    // Track mouse movement
    window.addEventListener('mousemove', moveCursor)

    // Track hover on interactive elements
    document.querySelectorAll('button, a').forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.querySelectorAll('button, a').forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-100 ease-out
        ${isHovering ? 'bg-blue-600 w-10 h-10 -translate-x-1/2 -translate-y-1/2' : 'bg-black w-6 h-6 -translate-x-1/2 -translate-y-1/2'}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  )
}