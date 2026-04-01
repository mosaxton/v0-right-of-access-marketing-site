"use client"

import { useState } from "react"
import { X, ArrowRight, ArrowLeft, Check, Send } from "lucide-react"
import Image from "next/image"

interface NewCaseModalProps {
  isOpen: boolean
  onClose: () => void
}

const payers = [
  {
    id: "medicare",
    name: "Medicare",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.41.33%E2%80%AFPM-85hGxn21GY1q0CFDkoseDSeAL53nIR.png",
  },
  {
    id: "unitedhealthcare",
    name: "UnitedHealthcare",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.41.48%E2%80%AFPM-3o39sffTkqHyjTWqdljY0rvb8hhIkL.png",
  },
  {
    id: "humana",
    name: "Humana",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.41.28%E2%80%AFPM-fOhsy4MTygumZOfVbWAE9j1ibedcl3.png",
  },
  {
    id: "aetna",
    name: "Aetna",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.41.28%E2%80%AFPM-fOhsy4MTygumZOfVbWAE9j1ibedcl3.png",
  },
  {
    id: "anthem",
    name: "Elevance / Anthem BCBS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.42.21%E2%80%AFPM-nTe9IlX0bhMXneXORrIb5RgBFHdaH9.png",
  },
  {
    id: "centene",
    name: "Centene",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.42.36%E2%80%AFPM-GldAnTuWNTHAsYHrTx5r2OUlR7IB5X.png",
  },
  {
    id: "cigna",
    name: "Cigna",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-31%20at%2011.41.28%E2%80%AFPM-fOhsy4MTygumZOfVbWAE9j1ibedcl3.png",
  },
]

// Custom payer logos as SVG components for accurate branding
function MedicareLogo() {
  return (
    <div className="w-12 h-12 bg-[#2E5B5B] rounded-lg flex items-center justify-center">
      <span className="text-white text-xs font-bold">Medicare</span>
    </div>
  )
}

function UnitedHealthcareLogo() {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <svg viewBox="0 0 48 48" className="w-10 h-10">
        <path d="M8 8 L8 40 L16 40 L16 8 Z" fill="#2A3B8F"/>
        <path d="M14 8 L14 40 L22 40 L22 8 Z" fill="#2A3B8F"/>
        <path d="M20 8 L20 40 L28 40 L28 8 Z" fill="#2A3B8F"/>
        <path d="M26 12 L26 40 L34 40 L34 16 Z" fill="#2A3B8F"/>
      </svg>
    </div>
  )
}

function HumanaLogo() {
  return (
    <div className="w-12 h-12 bg-[#78BE20] rounded-lg flex items-center justify-center">
      <span className="text-white text-2xl font-bold">H</span>
    </div>
  )
}

function AetnaLogo() {
  return (
    <div className="w-12 h-12 bg-[#7B2D8E] rounded-lg flex items-center justify-center">
      <span className="text-white text-[10px] font-bold">♥aetna</span>
    </div>
  )
}

function AnthemLogo() {
  return (
    <div className="w-12 h-12 bg-[#3B5CAD] rounded-lg flex items-center justify-center">
      <span className="text-white text-xs font-bold">Anthem</span>
    </div>
  )
}

function CenteneLogo() {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <span className="text-[#1E4B8F] text-xs font-black tracking-tight">CENTENE</span>
    </div>
  )
}

function CignaLogo() {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <span className="text-[#00A94F] text-sm font-bold italic">cigna</span>
    </div>
  )
}

const payerLogos: Record<string, () => JSX.Element> = {
  medicare: MedicareLogo,
  unitedhealthcare: UnitedHealthcareLogo,
  humana: HumanaLogo,
  aetna: AetnaLogo,
  anthem: AnthemLogo,
  centene: CenteneLogo,
  cigna: CignaLogo,
}

const payersList = [
  { id: "medicare", name: "Medicare" },
  { id: "unitedhealthcare", name: "UnitedHealthcare" },
  { id: "humana", name: "Humana" },
  { id: "aetna", name: "Aetna" },
  { id: "anthem", name: "Elevance / Anthem BCBS" },
  { id: "centene", name: "Centene" },
  { id: "cigna", name: "Cigna" },
]

export function NewCaseModal({ isOpen, onClose }: NewCaseModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    claimantName: "",
    dateOfBirth: "",
    allegedOnsetDate: "",
    phone: "",
    email: "",
    payers: [] as string[],
    deliveryMethod: "sms" as "sms" | "email" | "both",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleClose = () => {
    onClose()
    // Reset form after close
    setTimeout(() => {
      setCurrentStep(1)
      setFormData({
        claimantName: "",
        dateOfBirth: "",
        allegedOnsetDate: "",
        phone: "",
        email: "",
        payers: [],
        deliveryMethod: "sms",
      })
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      handleClose()
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const togglePayer = (payerId: string) => {
    setFormData(prev => ({
      ...prev,
      payers: prev.payers.includes(payerId)
        ? prev.payers.filter(p => p !== payerId)
        : [...prev.payers, payerId]
    }))
  }

  const handleSendToSelf = () => {
    // TODO: Implement send to self functionality
    alert("Authorization link will be sent to your email address")
  }

  const canContinueStep1 = formData.claimantName && formData.dateOfBirth && (formData.phone || formData.email)
  const canContinueStep2 = formData.payers.length > 0

  const steps = [
    { number: 1, label: "Claimant Info" },
    { number: 2, label: "Insurance & Delivery" },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl border-2 border-black w-full max-w-xl mx-4 brutalist-card max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-black shrink-0">
          <h2 className="text-xl font-black text-foreground">Create New Case</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-5 pb-4 border-b border-black/10 shrink-0">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                      currentStep > step.number 
                        ? "bg-green-500 border-green-600 text-white"
                        : currentStep === step.number 
                          ? "bg-primary border-black text-primary-foreground" 
                          : "bg-muted border-black/20 text-foreground/50"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="w-4 h-4" /> : step.number}
                  </div>
                  <span className={`text-sm font-semibold ${
                    currentStep >= step.number ? "text-foreground" : "text-foreground/50"
                  }`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className={`w-4 h-4 ${
                    currentStep > step.number ? "text-green-500" : "text-foreground/30"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Claimant Information */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-foreground mb-4">Claimant Information</h3>
                
                {/* Claimant Name */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Claimant Name (Last, First)
                  </label>
                  <input
                    type="text"
                    name="claimantName"
                    value={formData.claimantName}
                    onChange={handleChange}
                    required
                    placeholder="Martinez, Elena"
                    className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Alleged Onset Date */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Alleged Onset Date
                  </label>
                  <input
                    type="date"
                    name="allegedOnsetDate"
                    value={formData.allegedOnsetDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="mt-1.5 text-xs text-foreground/60">
                    The date the claimant alleges their disability began
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Claimant Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-0123"
                    className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Claimant Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="claimant@email.com"
                    className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <p className="text-xs text-foreground/60 bg-muted px-3 py-2 rounded-lg">
                  At least one contact method (phone or email) is required
                </p>

                {/* Continue Button */}
                <button
                  type="button"
                  disabled={!canContinueStep1}
                  onClick={() => setCurrentStep(2)}
                  className={`w-full py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
                    canContinueStep1
                      ? "bg-primary text-primary-foreground border-2 border-black brutalist-button"
                      : "bg-muted text-foreground/40 border-2 border-black/20 cursor-not-allowed"
                  }`}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Payer Selection */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-foreground mb-4">Select Insurance Payer(s)</h3>
                <p className="text-sm text-foreground/70 -mt-2 mb-4">Select all payers that apply to this claimant</p>
                
                <div className="grid grid-cols-1 gap-3">
                  {payersList.map(payer => {
                    const LogoComponent = payerLogos[payer.id]
                    const isSelected = formData.payers.includes(payer.id)
                    
                    return (
                      <button
                        key={payer.id}
                        type="button"
                        onClick={() => togglePayer(payer.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                            : "border-black/20 bg-card hover:border-black/40"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 ${
                          isSelected 
                            ? "bg-primary border-primary" 
                            : "border-black/30 bg-white"
                        }`}>
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <LogoComponent />
                        <span className="font-semibold text-foreground">{payer.name}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 py-4 rounded-xl font-bold text-foreground bg-muted border-2 border-black/20 hover:border-black/40 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!canContinueStep2}
                    onClick={() => setCurrentStep(3)}
                    className={`flex-1 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
                      canContinueStep2
                        ? "bg-primary text-primary-foreground border-2 border-black brutalist-button"
                        : "bg-muted text-foreground/40 border-2 border-black/20 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Delivery Method */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-foreground mb-4">Delivery Method</h3>
                <p className="text-sm text-foreground/70 -mt-2 mb-4">
                  How should we send the authorization request to the claimant?
                </p>
                
                <div className="flex gap-2">
                  {(["sms", "email", "both"] as const).map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: method }))}
                      className={`flex-1 px-4 py-4 rounded-full font-bold text-base transition-all border-2 ${
                        formData.deliveryMethod === method
                          ? "bg-primary text-primary-foreground border-black"
                          : "bg-muted text-foreground border-black/20 hover:border-black/40"
                      }`}
                    >
                      {method === "sms" ? "SMS" : method === "email" ? "Email" : "Both"}
                    </button>
                  ))}
                </div>

                {/* Send to Self Button */}
                <button
                  type="button"
                  onClick={handleSendToSelf}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-foreground/70 bg-transparent border-2 border-dashed border-black/20 hover:border-black/40 hover:text-foreground transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send yourself a copy
                </button>

                {/* Summary */}
                <div className="bg-muted/50 rounded-xl p-4 border border-black/10">
                  <h4 className="font-bold text-sm text-foreground mb-3">Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Claimant:</span>
                      <span className="font-medium text-foreground">{formData.claimantName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Payers:</span>
                      <span className="font-medium text-foreground text-right">
                        {formData.payers.map(id => payersList.find(p => p.id === id)?.name).join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Delivery:</span>
                      <span className="font-medium text-foreground capitalize">
                        {formData.deliveryMethod === "both" ? "SMS & Email" : formData.deliveryMethod.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="py-4 px-6 rounded-xl font-bold text-foreground bg-muted border-2 border-black/20 hover:border-black/40 transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 py-4 rounded-xl font-black text-lg transition-all ${
                      isSubmitting
                        ? "bg-green-500 text-white"
                        : "bg-primary text-primary-foreground border-2 border-black brutalist-button"
                    }`}
                  >
                    {isSubmitting ? "Creating Case..." : "Create Case & Send Auth Link"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
