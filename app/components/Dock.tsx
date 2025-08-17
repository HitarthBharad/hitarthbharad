"use client"

import type React from "react"
import { User, Images, Brain, FileText, Palette, FolderGit2, MessageSquareMore } from "lucide-react"
import type { AppKey } from "@/lib/ui-store"
import { cn } from "@/lib/utils"

const ACCENT = "#FF2E63"

type DockItem = {
  key: Exclude<AppKey, "palette" | null>
  label: string
  icon: React.ComponentType<any>
}

const ITEMS: DockItem[] = [
  { key: "about", label: "About", icon: User },
  { key: "project", label: "Projects", icon: FolderGit2 },
  { key: "research", label: "Research", icon: Brain },
  { key: "resume", label: "Resume", icon: FileText },
  { key: "contact", label: "Contact", icon: MessageSquareMore }
]

export default function Dock({
  activeApp = null,
  onOpen = () => { },
  onOpenPalette = () => { },
}: {
  activeApp?: AppKey | null
  onOpen?: (k: Exclude<AppKey, "palette" | null>) => void
  onOpenPalette?: () => void
}) {
  return (
    <div className="flex items-center gap-3 bg-white border-[3px] border-black px-3 py-3 rounded-xl shadow-[6px_6px_0_0_#000]">
      {ITEMS.map((it) => {
        const Icon = it.icon
        const isActive = activeApp === it.key
        return (
          <button
            key={it.key}
            onClick={() => onOpen(it.key)}
            className={cn(
              "group relative w-16 h-16 md:w-18 md:h-18 grid place-items-center border-[3px] border-black rounded-lg bg-[#FAFAF0]",
              "hover:translate-y-[-2px] transition-transform",
              "focus-visible:outline-4",
              isActive ? "shadow-[6px_6px_0_0_#000]" : "shadow-[4px_4px_0_0_#000]",
            )}
            style={{ outlineColor: ACCENT }}
            aria-label={it.label}
          >
            <Icon className="w-7 h-7" />

            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-white text-sm group-hover:block">
              {it.label}
            </span>
          </button>
        )
      })}

      <div className="mx-1 w-[2px] self-stretch bg-black/20" />

      {/* Command Palette button with same tooltip style */}
      <button
        onClick={onOpenPalette}
        className={cn(
          "group relative w-16 h-16 md:w-18 md:h-18 grid place-items-center border-[3px] border-black rounded-lg bg-[#FAFAF0]",
          "hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0_0_#000]",
          "focus-visible:outline-4",
        )}
        style={{ outlineColor: ACCENT }}
        aria-label="Command Palette"
      >
        <Palette className="w-7 h-7" />
        <span className="sr-only">Command Palette</span>

        {/* Tooltip */}
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-white text-sm group-hover:block">
          Command Palette
        </span>
      </button>
    </div>
  )
}
