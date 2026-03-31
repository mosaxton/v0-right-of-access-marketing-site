"use client"

import { Search, Plus, Eye, Send } from "lucide-react"

interface Case {
  id: string
  claimantName: string
  payer: string
  status: "Pending Auth" | "Authorized" | "Processing" | "Complete" | "Expired" | "Error"
  createdDate: string
}

interface CasesTableProps {
  cases: Case[]
  searchQuery: string
  onSearchChange: (query: string) => void
  onViewCase: (caseId: string) => void
  onNewCase: () => void
}

const statusColors = {
  "Pending Auth": "bg-amber-100 text-amber-800 border-amber-300",
  "Authorized": "bg-blue-100 text-blue-800 border-blue-300",
  "Processing": "bg-purple-100 text-purple-800 border-purple-300",
  "Complete": "bg-green-100 text-green-800 border-green-300",
  "Expired": "bg-gray-100 text-gray-600 border-gray-300",
  "Error": "bg-red-100 text-red-800 border-red-300",
}

export function CasesTable({ cases, searchQuery, onSearchChange, onViewCase, onNewCase }: CasesTableProps) {
  const filteredCases = cases.filter(c => 
    c.claimantName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black text-foreground">Cases</h2>
        <button
          onClick={onNewCase}
          className="brutalist-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm"
        >
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
        <input
          type="text"
          placeholder="Search by claimant name..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-card border-2 border-black rounded-xl font-medium text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Table */}
      <div className="brutalist-card bg-card rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="text-left px-6 py-4 font-black text-foreground text-sm uppercase tracking-wide">Claimant Name</th>
              <th className="text-left px-6 py-4 font-black text-foreground text-sm uppercase tracking-wide">Payer</th>
              <th className="text-left px-6 py-4 font-black text-foreground text-sm uppercase tracking-wide">Status</th>
              <th className="text-left px-6 py-4 font-black text-foreground text-sm uppercase tracking-wide">Created</th>
              <th className="text-right px-6 py-4 font-black text-foreground text-sm uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map((caseItem) => (
              <tr key={caseItem.id} className="border-b border-black/10 hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-bold text-foreground">{caseItem.claimantName}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-foreground/70 font-medium">{caseItem.payer}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${statusColors[caseItem.status]}`}>
                    {caseItem.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-foreground/60 font-mono text-sm">{caseItem.createdDate}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {(caseItem.status === "Pending Auth" || caseItem.status === "Expired") && (
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold text-foreground rounded-full text-xs font-bold border-2 border-black hover:bg-gold/80 transition-colors">
                        <Send className="w-3 h-3" />
                        Re-send Auth Link
                      </button>
                    )}
                    <button
                      onClick={() => onViewCase(caseItem.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-bold border-2 border-black hover:bg-primary/90 transition-colors"
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredCases.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-foreground/50 font-medium">No cases found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
