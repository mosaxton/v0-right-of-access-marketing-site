'use client'

import { useState } from 'react'
import { Shield, Bookmark, User, Award } from 'lucide-react'
import Link from 'next/link'

interface ClaimantAuthFlowProps {
  firmName: string
  firmPhone: string
  payerName: string
  payerLogoUrl?: string
}

export default function ClaimantAuthFlow({
  firmName = "Smith & Associates",
  firmPhone = "(801) 555-0192",
  payerName = "Medicare",
}: ClaimantAuthFlowProps) {
  const [consentChecked, setConsentChecked] = useState(false)

  const handleContinue = () => {
    if (consentChecked) {
      // Handle authorization submission
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[480px] space-y-8">

        {/* Overlapping Logos */}
        <div className="flex justify-center relative h-24">
          <div className="absolute left-1/2 transform -translate-x-16 top-0">
            <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-white flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl">✓</span>
            </div>
          </div>
          <div className="absolute right-1/2 transform translate-x-16 top-0">
            <div className="w-20 h-20 rounded-full bg-[#0F2044] border-4 border-white flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm text-center px-2 leading-tight">{payerName.substring(0, 3)}</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center pt-2">
          <h1 className="text-[2rem] font-black text-black leading-tight tracking-tight text-balance">
            {firmName} wants to access your {payerName} insurance data
          </h1>
        </div>

        {/* Bullet Points */}
        <div className="space-y-5">
          <div className="flex gap-4 items-start">
            <Shield className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-0.5" />
            <p className="text-[1.05rem] font-semibold text-gray-800 leading-relaxed">
              We will never see your insurance username or password
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Bookmark className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-0.5" />
            <p className="text-[1.05rem] font-semibold text-gray-800 leading-relaxed">
              Your data will only be shared with {firmName} to support your disability case
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <User className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-0.5" />
            <p className="text-[1.05rem] font-semibold text-gray-800 leading-relaxed">
              You can revoke access at any time by contacting your firm or visiting {payerName}&apos;s website
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Award className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-0.5" />
            <p className="text-[1.05rem] font-semibold text-gray-800 leading-relaxed">
              RightOfAccess is HIPAA compliant and your data is encrypted and secure
            </p>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent-checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
            className="w-5 h-5 mt-1 cursor-pointer accent-[#0F2044]"
          />
          <label htmlFor="consent-checkbox" className="text-[1.05rem] font-semibold text-gray-800 cursor-pointer leading-relaxed">
            I have read and agree to the{' '}
            <Link href="/terms" className="text-[#0F2044] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-[#0F2044] underline underline-offset-2 hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            {' '}of RightOfAccess
          </label>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!consentChecked}
          className={`w-full py-4 px-6 rounded-xl font-black text-lg tracking-wide transition-all ${
            consentChecked
              ? 'bg-[#0F2044] text-white hover:bg-[#1a3a5c] cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to {payerName}
        </button>

        {/* Footer */}
        <p className="text-center text-sm font-medium text-gray-500">
          Questions? Call your firm at {firmPhone}
        </p>
      </div>
    </div>
  )
}
