"use client"

import { useState, useMemo } from "react"
import { ArrowLeft, Calendar, ChevronDown, ChevronRight, Stethoscope, Building2, Scan, Pill } from "lucide-react"

interface Diagnosis {
  code: string
  description: string
  relevance: "primary" | "supporting" | "incidental"
}

interface Prescription {
  name: string
  dosage: string
  fillDate: string
  pharmacy: string
}

interface Provider {
  id: string
  name: string
  npi: string
  facilityType: "physician" | "hospital" | "imaging" | "pharmacy"
  specialty: string
  address: string
  visitCount: number
  firstVisit: string
  lastVisit: string
  recordsNeeded: boolean
  diagnoses: Diagnosis[]
  prescriptions: Prescription[]
}

interface CaseData {
  id: string
  claimantName: string
  dob: string
  ssn: string
  payer: string
  allegedOnsetDate: string
}

interface CaseDetailViewProps {
  caseData: CaseData
  providers: Provider[]
  onBack: () => void
}

const facilityIcons = {
  physician: Stethoscope,
  hospital: Building2,
  imaging: Scan,
  pharmacy: Pill,
}

const diagnosisColors = {
  primary: "bg-amber-50 text-amber-800 border-amber-200",
  supporting: "bg-blue-50 text-blue-800 border-blue-200",
  incidental: "bg-gray-100 text-gray-600 border-gray-200",
}

const diagnosisDotColors = {
  primary: "bg-amber-500",
  supporting: "bg-blue-500",
  incidental: "bg-gray-400",
}

function getRelationshipBadge(visitCount: number): { label: string; color: string } {
  if (visitCount >= 3) return { label: "Treating Provider", color: "bg-green-100 text-green-800 border-green-300" }
  if (visitCount === 2) return { label: "Limited Contact", color: "bg-amber-100 text-amber-800 border-amber-300" }
  return { label: "One-Time", color: "bg-gray-100 text-gray-600 border-gray-300" }
}

function getAODPeriod(firstVisit: string, lastVisit: string, aod: string): { label: string; color: string; tooltip: string } {
  // Parse dates (MM/YYYY format)
  const parseDate = (str: string) => {
    const [month, year] = str.split("/").map(Number)
    return new Date(year, month - 1)
  }
  
  const aodDate = parseDate(aod)
  const firstDate = parseDate(firstVisit)
  const lastDate = parseDate(lastVisit)

  const seenBefore = firstDate < aodDate
  const seenAfter = lastDate >= aodDate

  if (seenBefore && seenAfter) {
    return { 
      label: "Pre & Post Onset", 
      color: "bg-purple-100 text-purple-800 border-purple-300",
      tooltip: "This provider treated the claimant both before and after the alleged onset date, which can help establish the progression of the condition."
    }
  }
  if (seenAfter) {
    return { 
      label: "Post Onset", 
      color: "bg-green-100 text-green-800 border-green-300",
      tooltip: "This provider only saw the claimant after the alleged onset date, providing evidence of ongoing treatment for the claimed condition."
    }
  }
  return { 
    label: "Pre Onset", 
    color: "bg-blue-100 text-blue-800 border-blue-300",
    tooltip: "This provider only treated the claimant before the alleged onset date, which may help establish baseline health or pre-existing conditions."
  }
}

function formatAODForComparison(aod: string): string {
  // Convert MM/DD/YYYY to MM/YYYY for comparison
  const parts = aod.split("/")
  if (parts.length === 3) {
    return `${parts[0]}/${parts[2]}`
  }
  return aod
}

function formatAODReadable(aod: string): string {
  const parts = aod.split("/")
  if (parts.length === 3) {
    const date = new Date(Number(parts[2]), Number(parts[0]) - 1, Number(parts[1]))
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }
  return aod
}

export function CaseDetailView({ caseData, providers, onBack }: CaseDetailViewProps) {
  const [selectedProviders, setSelectedProviders] = useState<Set<string>>(new Set())
  const [recordsNeededState, setRecordsNeededState] = useState<Record<string, boolean>>(
    Object.fromEntries(providers.map(p => [p.id, p.recordsNeeded]))
  )
  const [expandedPrescriptions, setExpandedPrescriptions] = useState<Set<string>>(new Set())
  const [isExporting, setIsExporting] = useState(false)

  const aodForComparison = formatAODForComparison(caseData.allegedOnsetDate)
  const aodReadable = formatAODReadable(caseData.allegedOnsetDate)

  const providersWithRecordsNeeded = useMemo(() => 
    providers.filter(p => recordsNeededState[p.id]).length,
    [providers, recordsNeededState]
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProviders(new Set(providers.map(p => p.id)))
    } else {
      setSelectedProviders(new Set())
    }
  }

  const handleSelectProvider = (providerId: string, checked: boolean) => {
    const newSelected = new Set(selectedProviders)
    if (checked) {
      newSelected.add(providerId)
    } else {
      newSelected.delete(providerId)
    }
    setSelectedProviders(newSelected)
  }

  const handleRecordsNeededToggle = (providerId: string) => {
    setRecordsNeededState(prev => ({
      ...prev,
      [providerId]: !prev[providerId]
    }))
  }

  const togglePrescriptions = (providerId: string) => {
    const newExpanded = new Set(expandedPrescriptions)
    if (newExpanded.has(providerId)) {
      newExpanded.delete(providerId)
    } else {
      newExpanded.add(providerId)
    }
    setExpandedPrescriptions(newExpanded)
  }

  const handleExport = () => {
    setIsExporting(true)
    setTimeout(() => {
      setIsExporting(false)
      setSelectedProviders(new Set())
    }, 1500)
  }

  const allSelected = selectedProviders.size === providers.length && providers.length > 0

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground font-bold text-sm mb-4 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Cases
      </button>

      {/* Case Header */}
      <div className="bg-primary rounded-2xl p-6 mb-4 border-2 border-black">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-mono text-primary-foreground/50 tracking-widest block mb-1">PROVIDER MAP</span>
            <h1 className="text-3xl font-black text-primary-foreground mb-2">{caseData.claimantName}</h1>
            <div className="flex items-center gap-2 text-primary-foreground/70 font-medium text-sm">
              <span>DOB {caseData.dob}</span>
              <span>·</span>
              <span>SSN ···· {caseData.ssn}</span>
              <span>·</span>
              <span>{caseData.payer}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg font-black text-green-400">{providers.length} providers found</span>
            </div>
            <p className="text-primary-foreground/70 text-sm font-medium">{providersWithRecordsNeeded} flagged for records</p>
            <p className="text-primary-foreground/50 text-sm font-medium mt-1">
              Alleged Onset: {caseData.allegedOnsetDate}
            </p>
          </div>
        </div>
      </div>

      {/* Onset Date Info Bar */}
      <div className="bg-purple-100 border-2 border-purple-200 rounded-xl px-5 py-3 mb-6 flex items-center gap-3">
        <Calendar className="w-5 h-5 text-purple-600" />
        <span className="font-bold text-purple-800">Alleged Onset Date: {aodReadable}</span>
        <span className="text-purple-600 font-medium">— Providers are tagged by when they treated relative to this date.</span>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="w-5 h-5 rounded border-2 border-black accent-primary"
          />
          <span className="font-bold text-foreground">Select all</span>
        </label>
        <button
          onClick={handleExport}
          disabled={selectedProviders.size === 0 || isExporting}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            selectedProviders.size === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : isExporting
              ? "bg-green-500 text-primary-foreground"
              : "bg-primary text-primary-foreground border-2 border-black brutalist-button"
          }`}
        >
          {isExporting ? "Exported!" : `Export Selected (${selectedProviders.size})`}
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
        <div className="flex items-center gap-4">
          <span className="text-foreground/50 font-bold uppercase tracking-wide text-xs">Diagnosis:</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="font-medium text-foreground">Primary</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="font-medium text-foreground">Supporting</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <span className="font-medium text-foreground">Incidental</span>
          </div>
        </div>
        <div className="w-px h-5 bg-black/10"></div>
        <div className="flex items-center gap-4">
          <span className="text-foreground/50 font-bold uppercase tracking-wide text-xs">AOD Period:</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="font-medium text-foreground">Pre & Post</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="font-medium text-foreground">Post Onset</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="font-medium text-foreground">Pre Onset</span>
          </div>
        </div>
      </div>

      {/* Provider Cards */}
      <div className="space-y-4 mb-6">
        {providers.map((provider) => {
          const FacilityIcon = facilityIcons[provider.facilityType]
          const relationship = getRelationshipBadge(provider.visitCount)
          const aodPeriod = getAODPeriod(provider.firstVisit, provider.lastVisit, aodForComparison)
          const isSelected = selectedProviders.has(provider.id)
          const isPrescriptionsExpanded = expandedPrescriptions.has(provider.id)

          return (
            <div
              key={provider.id}
              className={`bg-card rounded-xl p-5 border-2 transition-colors ${
                isSelected ? "border-primary" : "border-black/10"
              }`}
            >
              <div className="flex gap-4">
                {/* Checkbox */}
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={(e) => handleSelectProvider(provider.id, e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-black accent-primary cursor-pointer"
                  />
                </div>

                {/* Provider Details */}
                <div className="flex-1">
                  {/* Name and NPI */}
                  <div className="flex items-center gap-2 mb-1">
                    <FacilityIcon className="w-5 h-5 text-foreground/50" />
                    <span className="font-black text-foreground text-lg">{provider.name}</span>
                    <span className="font-mono text-foreground/40 text-sm">NPI {provider.npi}</span>
                  </div>

                  {/* Specialty and Address */}
                  <p className="text-foreground/60 font-medium text-sm mb-3">
                    {provider.specialty} · {provider.address}
                  </p>

                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex px-3 py-1 bg-primary text-primary-foreground rounded-lg text-xs font-bold border-2 border-black">
                      {provider.visitCount} visit{provider.visitCount !== 1 ? "s" : ""}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${relationship.color}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                      {relationship.label}
                    </span>
                    <span 
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${aodPeriod.color} cursor-help`}
                      title={aodPeriod.tooltip}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                      {aodPeriod.label}
                    </span>
                  </div>

                  {/* Diagnoses */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {provider.diagnoses.map((dx, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border ${diagnosisColors[dx.relevance]}`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${diagnosisDotColors[dx.relevance]}`}></div>
                        {dx.code} — {dx.description}
                      </span>
                    ))}
                  </div>

                  {/* Prescriptions */}
                  {provider.prescriptions.length > 0 && (
                    <div>
                      <button
                        onClick={() => togglePrescriptions(provider.id)}
                        className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline"
                      >
                        {isPrescriptionsExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                        {provider.prescriptions.length} prescription{provider.prescriptions.length !== 1 ? "s" : ""} from this provider
                      </button>

                      {isPrescriptionsExpanded && (
                        <div className="mt-3 bg-muted rounded-lg p-4 space-y-3">
                          {provider.prescriptions.map((rx, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Pill className="w-4 h-4 text-amber-600 mt-0.5" />
                              <div>
                                <div className="flex items-baseline gap-2">
                                  <span className="font-bold text-foreground">{rx.name}</span>
                                  <span className="text-foreground/60 font-medium">{rx.dosage}</span>
                                  <span className="text-foreground/40">·</span>
                                  <span className="text-foreground/60 font-medium">Filled {rx.fillDate}</span>
                                </div>
                                <p className="text-foreground/50 text-sm">{rx.pharmacy}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Right Column - Date Range & Records Toggle */}
                <div className="text-right flex-shrink-0 w-44">
                  <p className="font-black text-foreground">
                    {provider.firstVisit} — {provider.lastVisit}
                  </p>
                  <p className="text-foreground/50 text-sm font-medium mb-4">
                    {provider.visitCount} visit{provider.visitCount !== 1 ? "s" : ""} over this period
                  </p>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-sm font-medium text-foreground/70">Records needed</span>
                    <button
                      onClick={() => handleRecordsNeededToggle(provider.id)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        recordsNeededState[provider.id] ? "bg-primary" : "bg-gray-300"
                      }`}
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform border border-black/10 ${
                          recordsNeededState[provider.id] ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Export Footer */}
      <div className="bg-primary rounded-xl p-4 flex items-center justify-between border-2 border-black">
        <div className="text-primary-foreground">
          <span className="font-bold text-gold">{providersWithRecordsNeeded} providers</span>
          <span className="font-medium text-primary-foreground/70"> flagged for records · </span>
          <span className="font-medium text-primary-foreground/70">{selectedProviders.size} selected for export</span>
        </div>
        <button
          onClick={handleExport}
          disabled={selectedProviders.size === 0 || isExporting}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
            selectedProviders.size === 0
              ? "bg-primary-foreground/20 text-primary-foreground/40 cursor-not-allowed"
              : isExporting
              ? "bg-green-500 text-primary-foreground"
              : "bg-gold text-foreground border-2 border-black"
          }`}
        >
          {isExporting ? "Exported!" : "Export Records Request List"}
        </button>
      </div>
    </div>
  )
}
