import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Right of Access",
  description: "Terms governing your use of the RightOfAccess platform, including user obligations, permitted uses, fees, and dispute resolution.",
}

type Section = {
  number: string
  title: string
  content?: string
  list?: string[]
  subsections?: { title: string; content?: string; list?: string[] }[]
  footer?: string
  contact?: { company: string; email: string; address: string; phone: string }
}

const sections: Section[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: `By accessing or using the RightOfAccess platform, website, or services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you are using the Service on behalf of an organization (such as a law firm), you represent that you have the authority to bind that organization to these Terms. If you do not agree to these Terms, do not use the Service.

These Terms are in addition to, and do not replace, our Privacy Policy, which is available at rightofaccess.co/privacy. In the event of any conflict between these Terms and the Privacy Policy regarding the handling of your health data, the Privacy Policy shall control.`,
  },
  {
    number: "2",
    title: "Description of Service",
    content: `RightOfAccess provides a platform that enables Social Security Disability (SSDI/SSI) law firms and their authorized representatives to identify their clients' medical providers and treatment history using patient-authorized insurance claims data. The Service connects to health plan Patient Access APIs, including the CMS Blue Button 2.0 API and commercial and Medicaid health plan FHIR APIs, to retrieve Explanation of Benefits (EOB) and related claims data with the patient's explicit authorization.

RightOfAccess is a technology platform. We are not a law firm, medical provider, health plan, or government agency. We do not provide legal advice, medical advice, or insurance coverage determinations. We are not affiliated with, endorsed by, or operated by the Centers for Medicare & Medicaid Services (CMS), the Social Security Administration (SSA), or the U.S. Department of Health and Human Services (HHS).`,
  },
  {
    number: "3",
    title: "User Types and Eligibility",
    subsections: [
      {
        title: "3.1 Patients / Claimants",
        content: "If you are a patient or disability claimant, you may use the Service to authorize access to your health plan claims data at the request of your legal representative. You must be at least 18 years of age or have a parent or legal guardian authorize access on your behalf. You must have an active account with the relevant health plan (such as Medicare.gov) to complete the authorization process.",
      },
      {
        title: "3.2 Law Firm Users",
        content: "If you are an attorney, paralegal, or other authorized employee of a law firm, you may use the Service to submit client information, initiate data authorization requests, and view provider maps and treatment timelines for your firm's clients. You represent that you have a valid attorney-client or employment relationship with the law firm and that each client whose data you request has provided informed consent for your firm to access their health plan data through our Service.",
      },
    ],
  },
  {
    number: "4",
    title: "Patient Authorization and Consent",
    content: "All access to health plan claims data through the Service requires the explicit, voluntary authorization of the patient. Authorization is obtained through the health plan's secure OAuth 2.0 authorization flow, during which the patient logs into their own health plan account and grants permission for RightOfAccess to retrieve their data.\n\nYou understand and agree that:",
    list: [
      "RightOfAccess will never request, access, or store your health plan login credentials (username or password).",
      "Authorization is entirely voluntary. No patient is required to authorize access as a condition of legal representation.",
      "You may revoke authorization at any time by disconnecting through our platform, contacting us at legal@rightofaccess.co, or managing connected applications through your health plan's member portal.",
      "Revoking authorization will stop future data retrieval but will not automatically delete data that has already been retrieved. You may separately request deletion of previously retrieved data as described in our Privacy Policy.",
      "When authorizing access through Medicare, you may choose to exclude personal demographic information (name, date of birth, race, sex) from the data shared with our application. This choice is presented during the Medicare.gov authorization flow.",
    ],
  },
  {
    number: "5",
    title: "Permitted and Prohibited Uses",
    subsections: [
      {
        title: "5.1 Permitted Uses",
        content: "The Service may be used solely for the purpose of identifying medical providers and treatment history to support the preparation and prosecution of Social Security Disability (SSDI/SSI) claims, or other lawful legal representation purposes authorized by the patient.",
      },
      {
        title: "5.2 Prohibited Uses",
        content: "You agree not to:",
        list: [
          "Access or attempt to access health data for any individual without their explicit, voluntary authorization.",
          "Use the Service or any data obtained through it for marketing, advertising, or promotional purposes.",
          "Sell, license, rent, or otherwise commercially transfer any health data obtained through the Service.",
          "Use health data to make or influence insurance coverage, eligibility, underwriting, or employment decisions about any individual.",
          "Share health data with any third party other than the authorized legal representative and their staff, unless the patient provides separate, explicit consent.",
          "Attempt to re-identify de-identified data or combine data obtained through the Service with other data sources for the purpose of identifying individuals.",
          "Use automated means (bots, scrapers, crawlers) to access the Service beyond the authorized API connections.",
          "Interfere with, disrupt, or attempt to gain unauthorized access to the Service, its servers, or connected health plan APIs.",
          "Use the Service in violation of any applicable federal, state, or local law or regulation.",
        ],
      },
    ],
  },
  {
    number: "6",
    title: "Law Firm Obligations",
    content: "If you are a law firm using the Service, you agree to:",
    list: [
      "Execute a Business Associate Agreement (BAA) with RightOfAccess prior to accessing any patient health data through the Service.",
      "Ensure that each client whose data is requested through the Service has provided informed consent for your firm to access their health plan claims data.",
      "Maintain appropriate safeguards to protect any health data you receive through the Service, consistent with HIPAA and applicable state laws.",
      "Promptly notify RightOfAccess if a client revokes their consent, terminates the attorney-client relationship, or if a case is closed, so that we may update our data retention accordingly.",
      "Use health data obtained through the Service only for the purposes authorized by the patient and consistent with these Terms and our Privacy Policy.",
      "Ensure that all firm employees who access the Service are trained on their obligations regarding the handling of Protected Health Information.",
    ],
  },
  {
    number: "7",
    title: "Fees and Payment",
    content: "The Service is offered on a per-case pricing basis. Current pricing is published at rightofaccess.co/pricing and may be updated from time to time with at least 30 days' notice to active customers.\n\nLaw firms are invoiced based on the number of successful patient data retrievals completed during each billing period. A \"successful retrieval\" means at least one health plan returned claims data for the patient. If no data is returned from any connected health plan (for example, because the patient's authorization failed or the health plan had no claims on file), no charge is incurred for that case.\n\nPayment is due within 30 days of invoice. RightOfAccess reserves the right to suspend access to the Service for accounts with balances overdue by more than 60 days.",
  },
  {
    number: "8",
    title: "Data Accuracy and Limitations",
    content: "RightOfAccess retrieves health claims data directly from health plan Patient Access APIs. We do not modify, edit, or interpret the clinical content of this data. You understand and agree that:",
    list: [
      "Claims data reflects what was billed and paid by the health plan. It may not include all services received by the patient (for example, services paid out-of-pocket or provided by non-participating providers).",
      "Diagnosis and procedure codes in claims data represent billing classifications and may not be identical to the clinical diagnoses recorded in the provider's medical records.",
      "Claims data is not a substitute for obtaining the complete medical records from each provider. The Service is designed to identify which providers to request records from, not to replace the records themselves.",
      "Data availability depends on the health plan's API implementation. Some plans may not have data for all time periods or all claim types.",
      "RightOfAccess does not guarantee that the data retrieved is complete, current, or error-free. We rely on the accuracy of the data provided by the health plans.",
    ],
  },
  {
    number: "9",
    title: "Intellectual Property",
    content: `The Service, including its software, design, user interface, documentation, and all related intellectual property, is owned by RightOfAccess and is protected by applicable copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Service for its intended purpose as described in these Terms.

Health claims data retrieved through the Service belongs to the patient. RightOfAccess does not claim ownership of any patient health data.`,
  },
  {
    number: "10",
    title: "Disclaimers",
    content: `THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." RIGHTOFACCESS MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

RightOfAccess does not warrant that the Service will be uninterrupted, error-free, or that defects will be corrected. Health plan APIs may experience downtime, data delays, or errors that are beyond our control.

RightOfAccess does not provide legal advice. The provider maps and treatment timelines generated by the Service are informational tools to assist legal professionals. They do not constitute legal, medical, or professional advice and should not be relied upon as a substitute for professional judgment.`,
  },
  {
    number: "11",
    title: "Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIGHTOFACCESS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF REVENUE, OR DAMAGES RESULTING FROM RELIANCE ON DATA OBTAINED THROUGH THE SERVICE.

RIGHTOFACCESS'S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID TO RIGHTOFACCESS IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law.`,
  },
  {
    number: "12",
    title: "Indemnification",
    content: "You agree to indemnify, defend, and hold harmless RightOfAccess, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of the Service, your violation of these Terms, your violation of any applicable law, or your violation of any rights of a third party.",
  },
  {
    number: "13",
    title: "Termination",
    content: `Either party may terminate these Terms at any time. Patients may revoke authorization as described in Section 4. Law firms may cancel their account by providing written notice to legal@rightofaccess.co.

RightOfAccess may suspend or terminate your access to the Service immediately if we reasonably believe you have violated these Terms, used the Service in a manner that poses a security risk, or engaged in activity that may cause legal liability for us or other users.

Upon termination, your right to use the Service ceases immediately. Provisions of these Terms that by their nature should survive termination (including Sections 8 through 12 and 15) will remain in effect. Data retention and deletion following termination will be handled as described in our Privacy Policy.`,
  },
  {
    number: "14",
    title: "Changes to These Terms",
    content: "We may update these Terms from time to time. When we make material changes, we will notify you by email at least 30 days before the changes take effect and post the updated Terms on our website with a revised effective date. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree with the changes, you may terminate your use of the Service as described in Section 13.",
  },
  {
    number: "15",
    title: "Governing Law and Dispute Resolution",
    content: "These Terms are governed by the laws of the State of Utah, without regard to its conflict of law principles. Any dispute arising from these Terms or your use of the Service shall be resolved through binding arbitration in Utah County, Utah, in accordance with the rules of the American Arbitration Association. Either party may seek injunctive relief in a court of competent jurisdiction to prevent irreparable harm.",
  },
  {
    number: "16",
    title: "CMS Blue Button 2.0 Attribution",
    content: "This application uses the CMS Blue Button 2.0 API to retrieve Medicare claims data on behalf of authorized Medicare beneficiaries. The Blue Button 2.0 API is developed and maintained by the Centers for Medicare & Medicaid Services (CMS).",
    footer: `CMS Disclaimer: The CMS Blue Button 2.0 API platform is provided "as is" and on an "as-available" basis. CMS makes no warranty that data will be error-free or that access will be continuous or uninterrupted. RightOfAccess is not affiliated with, endorsed by, or operated by CMS or the U.S. Department of Health and Human Services.`,
  },
  {
    number: "17",
    title: "General Provisions",
    subsections: [
      {
        title: "Entire Agreement",
        content: "These Terms, together with our Privacy Policy and any executed Business Associate Agreement, constitute the entire agreement between you and RightOfAccess regarding the Service.",
      },
      {
        title: "Severability",
        content: "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
      },
      {
        title: "Waiver",
        content: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.",
      },
      {
        title: "Assignment",
        content: "You may not assign your rights under these Terms without our prior written consent. RightOfAccess may assign its rights and obligations under these Terms in connection with a merger, acquisition, or sale of assets, subject to the notification requirements in our Privacy Policy.",
      },
      {
        title: "Notices",
        content: "All notices to RightOfAccess should be sent to legal@rightofaccess.co. We will send notices to you at the email address associated with your account.",
      },
    ],
  },
  {
    number: "18",
    title: "Contact Information",
    content: "For questions about these Terms of Service, please contact us:",
    contact: {
      company: "Review Fruit LLC operating as RightOfAccess",
      email: "legal@rightofaccess.co",
      address: "1185 W 100 S, Pleasant Grove, UT 84062",
      phone: "385-441-6676",
    },
    footer: "For questions about how we handle your health data, please refer to our Privacy Policy at rightofaccess.co/privacy.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioNavbar />

      {/* Hero */}
      <section className="w-full bg-primary pt-32 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-foreground/60 font-bold uppercase tracking-widest text-sm mb-4">
            Legal
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary-foreground text-balance leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-primary-foreground/70 font-medium text-base">
            Effective Date: March 23, 2026 &nbsp;·&nbsp; Last Updated: March 23, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section) => (
            <div key={section.number} className="brutalist-card bg-card rounded-[2rem] p-8 md:p-10">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-xs font-black text-primary bg-primary/10 rounded-full px-3 py-1 mt-1 shrink-0 uppercase tracking-widest">
                  {section.number}
                </span>
                <h2 className="text-xl md:text-2xl font-black text-foreground">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-5 pl-0 md:pl-12">
                {section.content && (
                  <p className="text-foreground/80 font-medium leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/80 font-medium text-sm md:text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((sub, i) => (
                  <div key={i} className="space-y-3">
                    <h3 className="text-base font-black text-foreground">{sub.title}</h3>
                    {sub.content && (
                      <p className="text-foreground/80 font-medium leading-relaxed text-sm md:text-base whitespace-pre-line">
                        {sub.content}
                      </p>
                    )}
                    {sub.list && (
                      <ul className="space-y-2">
                        {sub.list.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-foreground/80 font-medium text-sm md:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.contact && (
                  <div className="brutalist-card bg-primary rounded-2xl p-6 space-y-2">
                    <p className="font-black text-primary-foreground">{section.contact.company}</p>
                    <p className="text-primary-foreground/80 font-medium text-sm">
                      Email:{" "}
                      <a href={`mailto:${section.contact.email}`} className="text-gold underline underline-offset-2">
                        {section.contact.email}
                      </a>
                    </p>
                    <p className="text-primary-foreground/80 font-medium text-sm">
                      Mailing Address: {section.contact.address}
                    </p>
                    <p className="text-primary-foreground/80 font-medium text-sm">
                      Phone:{" "}
                      <a href={`tel:${section.contact.phone}`} className="text-gold underline underline-offset-2">
                        {section.contact.phone}
                      </a>
                    </p>
                  </div>
                )}

                {section.footer && (
                  <p className="text-foreground/60 font-medium text-xs md:text-sm italic border-l-2 border-gold pl-4 leading-relaxed">
                    {section.footer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
