import type { Metadata } from 'next'
import ClaimantAuthFlow from '@/components/auth/ClaimantAuthFlow'

export const metadata: Metadata = {
  title: 'Authorize Insurance Access - RightOfAccess',
  description: 'Securely authorize access to your insurance data for your disability case.',
}

export default function ClaimantAuthPage({ params }: { params: { token: string } }) {
  // In a real app, you would validate the token and fetch firm/payer details from the database
  // For now, using realistic placeholder values

  const authData = {
    firmName: "Smith & Associates",
    firmPhone: "(801) 555-0192",
    payerName: "Medicare",
    payerLogoUrl: "placeholder"
  }

  return (
    <ClaimantAuthFlow
      firmName={authData.firmName}
      firmLogo={authData.firmLogo}
      firmPhone={authData.firmPhone}
      payerName={authData.payerName}
      payerLogoUrl={authData.payerLogoUrl}
    />
  )
}
