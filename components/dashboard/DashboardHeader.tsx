"use client"

import { Bell, Plus, User } from "lucide-react"

interface DashboardHeaderProps {
  firmName: string
  onNewCase: () => void
}

export function DashboardHeader({ firmName, onNewCase }: DashboardHeaderProps) {
  return (
    <header className="h-16 bg-card border-b-2 border-black flex items-center justify-between px-6">
      <div>
        <h1 className="font-black text-foreground text-lg">{firmName}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onNewCase}
          className="brutalist-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm"
        >
          <Plus className="w-4 h-4" />
          New Case
        </button>

        <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full border border-black"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l-2 border-black/10">
          <div className="w-8 h-8 bg-primary rounded-full border-2 border-black flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-bold text-foreground hidden md:block">Admin</span>
        </div>
      </div>
    </header>
  )
}
