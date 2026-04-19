'use client'

import { useState, useRef } from 'react'
import { Shield, Bookmark, User, Award } from 'lucide-react'
import Link from 'next/link'
import { LegalModal } from './LegalModal'

interface ClaimantAuthFlowProps {
  firmName: string
  firmPhone: string
  payerName: string
  firmLogoUrl?: string
  payerLogoUrl?: string
}

export default function ClaimantAuthFlow({
  firmName = "Smith & Associates",
  firmPhone = "(801) 555-0192",
  payerName = "Medicare",
  firmLogoUrl,
  payerLogoUrl,
}: ClaimantAuthFlowProps) {
  const [consentChecked, setConsentChecked] = useState(false)
  const [whyExpanded, setWhyExpanded] = useState(false)
  const [openModal, setOpenModal] = useState<'terms' | 'privacy' | null>(null)
  const termsLinkRef = useRef<HTMLButtonElement>(null)
  const privacyLinkRef = useRef<HTMLButtonElement>(null)

  const handleContinue = () => {
    if (consentChecked) {
      // Handle authorization submission
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-5 py-8 sm:items-center sm:p-6">
      <div className="w-full max-w-[480px] space-y-7">

        {/* Progress Indicator */}
        <div className="space-y-2">
          <p className="text-center text-sm font-semibold text-[#0F2044] tracking-wide">
            Step 1 of 2
          </p>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-[#0F2044] rounded-full" />
          </div>
        </div>

        {/* Overlapping Logos */}
        <div className="flex justify-center relative h-20 sm:h-24">
          <div className="absolute left-1/2 transform -translate-x-14 sm:-translate-x-16 top-0">
            {firmLogoUrl ? (
              <img
                src={firmLogoUrl}
                alt={firmName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-800 border-4 border-white flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg sm:text-xl">{firmName.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="absolute right-1/2 transform translate-x-14 sm:translate-x-16 top-0">
            {payerLogoUrl ? (
              <img
                src={payerLogoUrl}
                alt={payerName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0F2044] border-4 border-white flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-sm text-center px-2 leading-tight">{payerName.substring(0, 3)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center pt-2">
          <h1 className="text-[2rem] font-black text-black leading-tight tracking-tight text-balance">
            {firmName} is requesting your {payerName} claims history
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

        {/* Why expander */}
        <div>
          <button
            type="button"
            onClick={() => setWhyExpanded(!whyExpanded)}
            className="min-h-[44px] flex items-center gap-1 text-[#0F2044] text-base font-semibold underline underline-offset-2 decoration-[#0F2044]/40 hover:decoration-[#0F2044] transition-all"
            aria-expanded={whyExpanded}
          >
            Why does my lawyer need this? {whyExpanded ? '↑' : '→'}
          </button>
          {whyExpanded && (
            <p className="mt-3 text-[0.95rem] font-medium text-[#0F2044]/70 leading-relaxed">
              Disability cases are won or lost on the strength of your medical evidence. Sharing your insurance claims history helps your lawyer find every doctor and treatment that supports your case.
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent-checkbox"
            checked={consentChecked}
            onChange={(e) => setConsentChecked(e.target.checked)}
            className="w-6 h-6 mt-0.5 cursor-pointer accent-[#0F2044] flex-shrink-0"
          />
          <label htmlFor="consent-checkbox" className="text-[1.05rem] font-semibold text-gray-800 cursor-pointer leading-relaxed">
            I agree to RightOfAccess&apos;s{' '}
            <button
              ref={termsLinkRef}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setOpenModal('terms')
              }}
              className="text-[#0F2044] underline underline-offset-2 hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0 font-semibold"
            >
              Terms of Service
            </button>
            {' '}and{' '}
            <button
              ref={privacyLinkRef}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setOpenModal('privacy')
              }}
              className="text-[#0F2044] underline underline-offset-2 hover:opacity-80 transition-opacity bg-none border-none cursor-pointer p-0 font-semibold"
            >
              Privacy Policy
            </button>
          </label>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!consentChecked}
          className={`w-full min-h-[56px] py-4 px-6 rounded-2xl font-black text-lg tracking-wide transition-all ${
            consentChecked
              ? 'bg-[#0F2044] text-white hover:bg-[#1a3a5c] cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue to {payerName}
        </button>

        {/* Footer */}
        <p className="text-center text-sm font-medium text-gray-500">
          Questions? Call {firmName} at {firmPhone}.
        </p>
      </div>

      {/* Terms Modal */}
      <LegalModal
        isOpen={openModal === 'terms'}
        onClose={() => setOpenModal(null)}
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p>By accessing or using the RightOfAccess platform, website, or services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization (such as a law firm), you represent that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, do not use the Service.</p>
          
          <p>These Terms are in addition to, and do not replace, our Privacy Policy, which is available at rightofaccess.co/privacy. In the event of any conflict between these Terms and the Privacy Policy regarding the handling of your health data, the Privacy Policy shall control.</p>

          <h3 className="text-lg font-black text-[#0F2044] mt-6">Description of Service</h3>
          <p>RightOfAccess provides a platform that enables Social Security Disability (SSDI/SSI) law firms and their authorized representatives to identify their clients' medical providers and treatment history using patient-authorized insurance claims data. The Service connects to health plan Patient Access APIs, including the CMS Blue Button 2.0 API and commercial and Medicaid health plan FHIR APIs, to retrieve Explanation of Benefits (EOB) and related claims data with the patient's explicit authorization.</p>

          <p>RightOfAccess is a technology platform. We are not a law firm, medical provider, health plan, or government agency. We do not provide legal advice, medical advice, or insurance coverage determinations. We are not affiliated with, endorsed by, or operated by the Centers for Medicare & Medicaid Services (CMS), the Social Security Administration (SSA), or the U.S. Department of Health and Human Services (HHS).</p>

          <h3 className="text-lg font-black text-[#0F2044] mt-6">Patient Authorization and Consent</h3>
          <p>All access to health plan claims data through the Service requires the explicit, voluntary authorization of the patient. Authorization is obtained through the health plan's secure OAuth 2.0 authorization flow, during which the patient logs into their own health plan account and grants permission for RightOfAccess to retrieve their data.</p>

          <ul className="list-disc list-inside space-y-2 text-[#0F2044]/80">
            <li>RightOfAccess will never request, access, or store your health plan login credentials (username or password).</li>
            <li>Authorization is entirely voluntary. No patient is required to authorize access as a condition of legal representation.</li>
            <li>You may revoke authorization at any time by disconnecting through our platform or managing connected applications through your health plan's member portal.</li>
          </ul>

          <p className="text-xs text-[#0F2044]/60 mt-6">For the complete Terms of Service, visit <Link href="/terms" className="underline hover:opacity-70">rightofaccess.co/terms</Link></p>
        </div>
      </LegalModal>

      {/* Privacy Modal */}
      <LegalModal
        isOpen={openModal === 'privacy'}
        onClose={() => setOpenModal(null)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p>RightOfAccess is a product operated by Review Fruit LLC, a Utah limited liability company ("RightOfAccess," "we," "our," or "us") operates a healthcare data platform that helps Social Security Disability attorneys and their authorized representatives identify their clients' medical providers and treatment history using patient-authorized insurance claims data. This Privacy Policy describes how we collect, use, store, share, and protect your information, including Protected Health Information ("PHI") as defined under the Health Insurance Portability and Accountability Act ("HIPAA").</p>

          <p>This Privacy Policy applies to all users of our services, including Medicare beneficiaries who authorize access to their claims data through the CMS Blue Button 2.0 API, individuals who authorize access through commercial health plan Patient Access APIs, and law firm personnel who use our platform.</p>

          <h3 className="text-lg font-black text-[#0F2044] mt-6">Information We Collect</h3>
          <p>When you or your authorized legal representative use our services, we may collect:</p>
          <ul className="list-disc list-inside space-y-2 text-[#0F2044]/80">
            <li>Your name, date of birth, mailing address, phone number, and email address</li>
            <li>Your legal representative's name, firm name, and contact information</li>
            <li>Information necessary to verify your identity and connect to your health plan</li>
            <li>Your insurance plan name and member information</li>
          </ul>

          <h3 className="text-lg font-black text-[#0F2044] mt-6">How We Use Your Information</h3>
          <p>Our primary use of your health plan claims data is to generate a provider map and treatment timeline for your authorized legal representative. This includes identifying providers you have visited, dates and types of services received, diagnoses documented in your claims, and medications prescribed — provided solely to support preparation of your Social Security Disability claim.</p>

          <h3 className="text-lg font-black text-[#0F2044] mt-6">Data Security</h3>
          <ul className="list-disc list-inside space-y-2 text-[#0F2044]/80">
            <li>All data is encrypted in transit using TLS 1.2 or higher</li>
            <li>All data is encrypted at rest using AES-256 encryption</li>
            <li>Multi-factor authentication required for all platform administrator accounts</li>
            <li>Regular vulnerability scanning and security testing</li>
          </ul>

          <p className="text-xs text-[#0F2044]/60 mt-6">For the complete Privacy Policy, visit <Link href="/privacy" className="underline hover:opacity-70">rightofaccess.co/privacy</Link></p>
        </div>
      </LegalModal>
    </div>
  )
}
