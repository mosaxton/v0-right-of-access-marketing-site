"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does the client authorize access?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        You enter the client's contact info and select their insurance plan. We send them a secure link by text and email. They tap it, log into their existing health plan portal (<b>Medicare.gov</b>, <b>MyUHC</b>, <b>Aetna</b>, etc.), and click "Allow." The whole thing takes about two minutes on a phone, and the client never has to download anything or create a new account. If they get stuck, your paralegal can stay on the line and walk them through it — <i>most of the time it's faster than filling out a single records release form</i>.
      </p>
    ),
  },
  {
    question: "What exactly is in the Provider Map?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        Every provider that submitted a claim against the client's insurance — physicians, specialists, hospitals, ER visits, imaging centers, labs, and pharmacies. For each one you get the provider's name, NPI, specialty, address, and phone number, every date of service, the ICD-10 diagnosis codes attached to those visits, the CPT/HCPCS procedure codes, and prescription fill data including drug name, dosage, fill date, and pharmacy. You can sort, filter, and export the whole thing to CSV or PDF. It's the same data the insurer used to pay the claim — <i>there's no interpretation, no AI summary, just the source data laid out in a way you can act on</i>.
      </p>
    ),
  },
  {
    question: "What if my client doesn't have an online account with their insurer?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        The client doesn't need an existing account — they just need to be able to verify their identity with their insurer when they click the authorization link. For Medicare, that means having a <b>Medicare.gov</b> login (and if they don't, the site walks them through creating one in about three minutes). Commercial payers like <b>UnitedHealthcare</b> and <b>Aetna</b> let the client register and authorize in the same flow. The one case where this gets harder is when the client doesn't have email or smartphone access at all — <i>for those clients, the workflow is the same as any other intake step that requires their participation, and your paralegal walks them through it on the phone</i>.
      </p>
    ),
  },
  {
    question: "What about claimants on Medicaid or who are uninsured?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        Most state Medicaid managed care plans (<b>Centene</b>, <b>UnitedHealthcare Community Plan</b>, <b>Anthem Medicaid</b>, <b>Molina</b>) are covered by the same federal rule that opens up commercial insurer data, so we can pull their claims the same way. State fee-for-service Medicaid varies — coverage is improving but isn't universal yet. For clients who are genuinely uninsured during the period in question, there's no claims data to pull, and ROA can't help with that window. In practice, <i>most SSDI claimants have some coverage at some point in their relevant medical history (employer plan during Phase A, Medicaid or ACA during Phase B, Medicare during Phase C)</i>, and ROA pulls whatever exists for whatever payers we're connected to.
      </p>
    ),
  },
  {
    question: "How is this different from sending HIPAA medical records requests?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        Records requests retrieve documents from a provider you already know about. ROA tells you which providers exist before you've sent a single request. They're complementary, not competing — you'll still send records requests after using ROA, but you'll send them to the right providers, and <i>you won't waste $50 and three weeks chasing a primary care doc the client mentioned but who only saw them once for a flu shot</i>. Most firms find that ROA pays for itself by eliminating <i>3–5 wasted records requests per case</i> before it even gets to the bigger savings on hearings and denials.
      </p>
    ),
  },
  {
    question: "Is this HIPAA compliant?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        Yes. ROA is built on HIPAA-compliant infrastructure with encryption at rest (AES-256) and in transit (TLS 1.2+), audit logs on every data access, role-based access controls, and signed Business Associate Agreements with all subprocessors. We sign a BAA with your firm at no additional cost. We're also working toward <b>SOC 2 Type II</b> — happy to share our current security documentation under NDA if your firm requires it before signing.
      </p>
    ),
  },
  {
    question: "Do you integrate with Prevail, SmartAdvocate, or CASEpeer?",
    answer: (
      <p className="text-foreground font-medium leading-relaxed">
        Today: CSV and PDF export of the Provider Map, which paralegals attach to the matter in their case management system. Direct API integrations with <b>Prevail</b>, <b>SmartAdvocate</b>, and <b>CASEpeer</b> are on the roadmap and we're prioritizing them based on which systems our pilot firms use most. If your firm runs on one of these and direct integration would be a deciding factor, <i>tell me on the demo call — pilot firms get input on the integration order</i>.
      </p>
    ),
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="compliance" className="w-full py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <h2 className="text-3xl font-black mb-8 text-foreground text-center">Frequently Asked Questions</h2>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-primary rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-black text-primary pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-6 bg-card border-t-2 border-primary/10">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
