"use client"

import { FolderOpen, Plus, Settings, HelpCircle } from "lucide-react"

interface DashboardSidebarProps {
  activeView: "cases" | "newCase" | "settings" | "help"
  onNavClick: (view: "cases" | "newCase" | "settings" | "help") => void
}

const navItems = [
  { id: "cases" as const, label: "Cases", icon: FolderOpen },
  { id: "newCase" as const, label: "New Case", icon: Plus },
  { id: "settings" as const, label: "Settings", icon: Settings },
  { id: "help" as const, label: "Help", icon: HelpCircle },
]

export function DashboardSidebar({ activeView, onNavClick }: DashboardSidebarProps) {
  return (
    <aside className="w-64 min-h-screen bg-primary border-r-2 border-black flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b-2 border-black/20">
        <div className="flex items-center gap-3">
          <span className="text-primary-foreground font-black text-lg">RightOfAccess</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id || (item.id === "newCase" && activeView === "cases")
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                    isActive && item.id !== "newCase"
                      ? "bg-gold text-foreground border-2 border-black"
                      : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t-2 border-black/20">
        <p className="text-xs text-primary-foreground/50 font-medium">
          v1.0.0 Beta
        </p>
      </div>
    </aside>
  )
}
