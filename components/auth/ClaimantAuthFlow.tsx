'use client'

import { useState } from 'react'
import { ChevronLeft, X, Shield, Bookmark, User, Award } from 'lucide-react'

interface ClaimantAuthFlowProps {
  firmName: string
  firmPhone: string
  payerName: string
  payerLogoUrl: string
}

export default function ClaimantAuthFlow({
  firmName = "Smith & Associates",
  firmPhone = "(801) 555-0192",
  payerName = "Medicare",
  payerLogoUrl = "placeholder"
}: ClaimantAuthFlowProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)
  const [consentChecked, setConsentChecked] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)
  const [expandedAccordion, setExpandedAccordion] = useState<'privacy' | 'terms' | null>(null)

  const handleContinueStep1 = () => {
    if (consentChecked) {
      setCurrentStep(2)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  const handleAcceptTerms = () => {
    if (termsChecked) {
      // Handle final submission
      console.log('Authorization accepted')
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Center container - max width 480px */}
      <div className="w-full max-w-[480px]">
        {/* Step Indicator */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
            currentStep === 1 
              ? 'bg-[#0F2044] text-white' 
              : 'bg-green-100 text-green-800'
          }`}>
            ✓ Authorization
          </div>
          <div className="text-gray-300">→</div>
          <div className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
            currentStep === 2 
              ? 'bg-[#0F2044] text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            Terms & Privacy
          </div>
        </div>

        {/* Screen 1 - Authorization */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Close button */}
            <div className="flex justify-end">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Overlapping Logos */}
            <div className="flex justify-center relative h-24">
              {/* RightOfAccess logo circle */}
              <div className="absolute left-1/2 transform -translate-x-16 top-0">
                <div className="w-20 h-20 rounded-full bg-gray-800 border-4 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
              </div>
              {/* Payer logo circle */}
              <div className="absolute right-1/2 transform translate-x-16 top-0">
                <div className="w-20 h-20 rounded-full bg-[#0F2044] border-4 border-white flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm text-center px-2">{payerName.substring(0, 3)}</span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="text-center pt-6">
              <h1 className="text-3xl font-bold text-black leading-tight">
                {firmName} wants to access your {payerName} insurance data
              </h1>
            </div>

            {/* Bullet Points */}
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700 leading-relaxed">
                  We will never see your insurance username or password
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <Bookmark className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700 leading-relaxed">
                  Your data will only be shared with {firmName} to support your disability case
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <User className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700 leading-relaxed">
                  You can revoke access at any time by contacting your firm or visiting {payerName}&apos;s website
                </p>
              </div>
              
              <div className="flex gap-4 items-start">
                <Award className="w-6 h-6 text-[#0F2044] flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700 leading-relaxed">
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
              <label htmlFor="consent-checkbox" className="text-base text-gray-700 cursor-pointer leading-relaxed">
                I have read and agree to the Terms of Service and Privacy Policy of RightOfAccess
              </label>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinueStep1}
              disabled={!consentChecked}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                consentChecked
                  ? 'bg-[#0F2044] text-white hover:bg-[#1a3a5c] cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continue to {payerName}
            </button>

            {/* Footer Text */}
            <p className="text-center text-sm text-gray-500">
              Questions? Call your firm at {firmPhone}
            </p>
          </div>
        )}

        {/* Screen 2 - Terms & Privacy */}
        {currentStep === 2 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Back button */}
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={handleBack}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Before we continue</h2>
              <p className="text-base text-gray-500">Please review and accept the following</p>
            </div>

            {/* Accordions */}
            <div className="space-y-3">
              {/* Privacy Policy Accordion */}
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 'privacy' ? null : 'privacy')}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Privacy Policy</span>
                  <span className={`text-gray-500 transition-transform ${expandedAccordion === 'privacy' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedAccordion === 'privacy' && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700 text-base space-y-4">
                    <p>
                      RightOfAccess collects only the health insurance data necessary to support your disability case. We never sell your personal information to any third party.
                    </p>
                    <p>
                      Your data is stored securely using encryption and is only shared with {firmName} as authorized by you.
                    </p>
                    <p>
                      You can request deletion of your data at any time by contacting privacy@rightofaccess.co.
                    </p>
                    <a
                      href="https://rightofaccess.co/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[#0F2044] font-semibold hover:underline"
                    >
                      Read full Privacy Policy →
                    </a>
                  </div>
                )}
              </div>

              {/* Terms of Service Accordion */}
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 'terms' ? null : 'terms')}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">Terms of Service</span>
                  <span className={`text-gray-500 transition-transform ${expandedAccordion === 'terms' ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedAccordion === 'terms' && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200 text-gray-700 text-base space-y-4">
                    <p>
                      By authorizing RightOfAccess, you permit us to access and retrieve your {payerName} insurance data on your behalf.
                    </p>
                    <p>
                      Your data will only be shared with {firmName} to support your disability claim. It will not be used for any other purpose.
                    </p>
                    <p>
                      You can revoke access at any time by contacting {firmName} or by visiting your {payerName} account settings.
                    </p>
                    <a
                      href="https://rightofaccess.co/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[#0F2044] font-semibold hover:underline"
                    >
                      Read full Terms of Service →
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms-checkbox"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="w-5 h-5 mt-1 cursor-pointer accent-[#0F2044]"
              />
              <label htmlFor="terms-checkbox" className="text-base text-gray-700 cursor-pointer leading-relaxed">
                I agree to the RightOfAccess Terms of Service and Privacy Policy
              </label>
            </div>

            {/* Accept & Continue Button */}
            <button
              onClick={handleAcceptTerms}
              disabled={!termsChecked}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all ${
                termsChecked
                  ? 'bg-[#0F2044] text-white hover:bg-[#1a3a5c] cursor-pointer'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Accept & Continue to {payerName}
            </button>

            {/* Footer Text */}
            <p className="text-center text-xs text-gray-500">
              Operated by Review Fruit LLC, doing business as RightOfAccess · privacy@rightofaccess.co
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
