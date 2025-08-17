"use client"

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import type { AppKey } from "@/lib/ui-store"

export default function CommandPalette({
  open = false,
  onOpenChange = () => { },
  onAction = () => { },
  onReset = () => { },
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onAction?: (k: Exclude<AppKey, "palette" | null>) => void
  onReset?: () => void
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, onOpenChange])

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Open">
          <CommandItem onSelect={() => onAction("about")}>Open About</CommandItem>
          <CommandItem onSelect={() => onAction("project")}>Open Projects</CommandItem>
          <CommandItem onSelect={() => onAction("research")}>Open Research</CommandItem>
          <CommandItem onSelect={() => onAction("resume")}>Open Resume</CommandItem>
          <CommandItem onSelect={() => onAction("contact")}>Cotact Me</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="System">
          <CommandItem
            onSelect={() => {
              onReset()
            }}
          >
            Reset Desktop
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
