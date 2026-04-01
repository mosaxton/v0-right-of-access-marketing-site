"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface NewCaseModalProps {
  isOpen: boolean
  onClose: () => void
}

const payers = [
  "Medicare",
  "UHC",
  "Humana",
  "Aetna",
  "Elevance",
  "Centene",
  "Cigna",
  "HCSC",
]

export function NewCaseModal({ isOpen, onClose }: NewCaseModalProps) {
  const [formData, setFormData] = useState({
    claimantName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    payer: "",
    deliveryMethod: "sms" as "sms" | "email" | "both",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
      setFormData({
        claimantName: "",
        dateOfBirth: "",
        phone: "",
        email: "",
        payer: "",
        deliveryMethod: "sms",
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl border-2 border-black w-full max-w-lg mx-4 brutalist-card">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-black">
          <h2 className="text-xl font-black text-foreground">Create New Case</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Claimant Name */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Claimant Name
            </label>
            <input
              type="text"
              name="claimantName"
              value={formData.claimantName}
              onChange={handleChange}
              required
              placeholder="Last Name, First Name"
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

          {/* Payer */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Payer
            </label>
            <select
              name="payer"
              value={formData.payer}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-input border-2 border-black rounded-xl font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
            >
              <option value="">Select a payer...</option>
              {payers.map(payer => (
                <option key={payer} value={payer}>{payer}</option>
              ))}
            </select>
          </div>

          {/* Delivery Method */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Delivery Method
            </label>
            <div className="flex gap-2">
              {(["sms", "email", "both"] as const).map(method => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: method }))}
                  className={`flex-1 px-4 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                    formData.deliveryMethod === method
                      ? "bg-primary text-primary-foreground border-black"
                      : "bg-muted text-foreground border-black/20 hover:border-black/40"
                  }`}
                >
                  {method === "sms" ? "SMS" : method === "email" ? "Email" : "Both"}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
              isSubmitting
                ? "bg-green-500 text-primary-foreground"
                : "bg-primary text-primary-foreground border-2 border-black brutalist-button"
            }`}
          >
            {isSubmitting ? "Creating Case..." : "Create Case & Send Auth Link"}
          </button>
        </form>
      </div>
    </div>
  )
}
