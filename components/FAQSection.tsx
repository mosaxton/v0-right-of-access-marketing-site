"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How does the client authorize access?",
    answer: "Your client receives a secure link by SMS. They click it and authorize access to their insurance claims data via OAuth — the same standard used by banking apps. The whole process takes about 2 minutes on their phone. No office visit, no paper forms, no portal login required.",
  },
  {
    question: "What data do I get back?",
    answer: "You get every provider in your client's insurance claims history: doctor names, specialties, diagnosis codes, treatment dates, and pharmacy fills — pulled directly from their insurer's records.",
  },
  {
    question: "What if my client doesn't have an online account with their insurer?",
    answer: "Most insurers require an online account to authorize access. If your client doesn't have one, the paralegal can help them set one up in a few minutes on the insurer's website or app before sending the authorization link.",
  },
  {
    question: "Is this HIPAA compliant?",
    answer: "Yes. We operate under a Business Associate Agreement (BAA) and all data is encrypted in transit and at rest on HIPAA-compliant infrastructure. We're built on the CMS-mandated Patient Access APIs (CMS-9115-F).",
  },
  {
    question: "Do you integrate with Prevail, SmartAdvocate, or CASEpeer?",
    answer: "Today, provider maps are accessible in your RightOfAccess dashboard and exportable as structured data. Direct integrations with case management software are on our roadmap.",
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="compliance" className="w-full py-16 px-8 bg-background">
      <div className="max-w-4xl mx-auto">

        {/* FAQ accordion */}
        <h2 className="text-3xl font-black mb-8 text-foreground text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-black rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-foreground pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={3} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 text-foreground/70 font-medium leading-relaxed bg-card">
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
