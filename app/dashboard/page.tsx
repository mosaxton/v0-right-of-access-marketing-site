"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { CasesTable } from "@/components/dashboard/CasesTable"
import { CaseDetailView } from "@/components/dashboard/CaseDetailView"
import { NewCaseModal } from "@/components/dashboard/NewCaseModal"
import { PilotBanner } from "@/components/dashboard/PilotBanner"

// Mock data for the single case
const mockCase = {
  id: "case-001",
  claimantName: "Martinez, Elena",
  dob: "09/14/1961",
  ssn: "4821",
  payer: "UnitedHealthcare PPO",
  status: "Complete" as const,
  createdDate: "03/15/2026",
  allegedOnsetDate: "03/01/2021",
  phone: "(559) 555-0123",
  email: "elena.martinez@email.com",
}

const mockProviders = [
  {
    id: "prov-001",
    name: "Dr. Sarah Kaufman, MD",
    npi: "1234567890",
    facilityType: "physician" as const,
    specialty: "Orthopedic Surgery",
    address: "2400 E. Spruce Ave, Suite 210, Fresno, CA 93720",
    visitCount: 14,
    firstVisit: "01/2021",
    lastVisit: "03/2022",
    recordsNeeded: true,
    diagnoses: [
      { code: "M54.5", description: "Low back pain", relevance: "primary" as const },
      { code: "M51.16", description: "Intervertebral disc degeneration", relevance: "primary" as const },
    ],
    prescriptions: [
      { name: "Gabapentin", dosage: "300mg", fillDate: "03/15/2022", pharmacy: "Walgreens #4412" },
      { name: "Cyclobenzaprine", dosage: "10mg", fillDate: "01/08/2021", pharmacy: "Walgreens #4412" },
    ],
  },
  {
    id: "prov-002",
    name: "Valley Pain Clinic",
    npi: "9876543210",
    facilityType: "physician" as const,
    specialty: "Pain Management",
    address: "1100 Van Ness Ave, Fresno, CA 93721",
    visitCount: 9,
    firstVisit: "05/2021",
    lastVisit: "08/2022",
    recordsNeeded: true,
    diagnoses: [
      { code: "M47.816", description: "Spondylosis", relevance: "primary" as const },
      { code: "M54.4", description: "Lumbago with sciatica", relevance: "supporting" as const },
    ],
    prescriptions: [
      { name: "Tramadol", dosage: "50mg", fillDate: "06/20/2022", pharmacy: "CVS #8821" },
    ],
  },
  {
    id: "prov-003",
    name: "Dr. James Osei, MD",
    npi: "1122334455",
    facilityType: "physician" as const,
    specialty: "Neurology",
    address: "568 E. Herndon Ave, Fresno, CA 93720",
    visitCount: 2,
    firstVisit: "07/2022",
    lastVisit: "08/2022",
    recordsNeeded: true,
    diagnoses: [
      { code: "G54.2", description: "Cervical root disorder", relevance: "supporting" as const },
      { code: "G89.29", description: "Chronic pain", relevance: "incidental" as const },
    ],
    prescriptions: [],
  },
  {
    id: "prov-004",
    name: "Summit Imaging Center",
    npi: "5566778899",
    facilityType: "imaging" as const,
    specialty: "Radiology",
    address: "7130 N. Millbrook Ave, Fresno, CA 93720",
    visitCount: 1,
    firstVisit: "08/2022",
    lastVisit: "08/2022",
    recordsNeeded: false,
    diagnoses: [
      { code: "Z13.88", description: "MRI Lumbar Spine", relevance: "incidental" as const },
    ],
    prescriptions: [],
  },
  {
    id: "prov-005",
    name: "Fresno Community Hospital",
    npi: "6677889900",
    facilityType: "hospital" as const,
    specialty: "Emergency Medicine",
    address: "2823 Fresno St, Fresno, CA 93721",
    visitCount: 1,
    firstVisit: "11/2020",
    lastVisit: "11/2020",
    recordsNeeded: false,
    diagnoses: [
      { code: "S39.012A", description: "Strain of muscle of lower back", relevance: "supporting" as const },
    ],
    prescriptions: [],
  },
]

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<"cases" | "newCase" | "settings" | "help">("cases")
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null)
  const [isNewCaseModalOpen, setIsNewCaseModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const cases = [mockCase]
  const caseCount = cases.length
  const pilotCasesRemaining = 5 - caseCount

  const handleViewCase = (caseId: string) => {
    setSelectedCaseId(caseId)
  }

  const handleBackToCases = () => {
    setSelectedCaseId(null)
  }

  const handleNewCase = () => {
    setIsNewCaseModalOpen(true)
  }

  const handleNavClick = (view: "cases" | "newCase" | "settings" | "help") => {
    if (view === "newCase") {
      setIsNewCaseModalOpen(true)
    } else {
      setActiveView(view)
      setSelectedCaseId(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {pilotCasesRemaining > 0 && <PilotBanner casesRemaining={pilotCasesRemaining} />}
      
      <div className="flex">
        <DashboardSidebar 
          activeView={activeView} 
          onNavClick={handleNavClick} 
        />
        
        <div className="flex-1 flex flex-col min-h-screen">
          <DashboardHeader 
            firmName="Smith & Associates Law Firm"
            onNewCase={handleNewCase}
          />
          
          <main className="flex-1 p-6">
            {selectedCaseId ? (
              <CaseDetailView 
                caseData={mockCase}
                providers={mockProviders}
                onBack={handleBackToCases}
              />
            ) : (
              <CasesTable 
                cases={cases}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onViewCase={handleViewCase}
                onNewCase={handleNewCase}
              />
            )}
          </main>
        </div>
      </div>

      <NewCaseModal 
        isOpen={isNewCaseModalOpen}
        onClose={() => setIsNewCaseModalOpen(false)}
      />
    </div>
  )
}
