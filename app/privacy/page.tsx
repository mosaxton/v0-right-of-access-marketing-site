import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Right of Access",
  description: "How RightOfAccess collects, uses, stores, and protects your information, including Protected Health Information under HIPAA.",
}

const sections = [
  {
    number: "1",
    title: "Introduction",
    content: `RightOfAccess ("RightOfAccess," "we," "our," or "us") operates a healthcare data platform that helps Social Security Disability attorneys and their authorized representatives identify their clients' medical providers and treatment history using patient-authorized insurance claims data. This Privacy Policy describes how we collect, use, store, share, and protect your information, including Protected Health Information ("PHI") as defined under the Health Insurance Portability and Accountability Act ("HIPAA").

This Privacy Policy applies to all users of our services, including Medicare beneficiaries who authorize access to their claims data through the CMS Blue Button 2.0 API, individuals who authorize access through commercial health plan Patient Access APIs, and law firm personnel who use our platform.

We are committed to protecting your privacy and ensuring you understand exactly how your data is collected, used, and shared. If you have questions, contact us at privacy@rightofaccess.co.`,
  },
  {
    number: "2",
    title: "Information We Collect",
    subsections: [
      {
        title: "2.1 Information You Provide Directly",
        content: "When you or your authorized legal representative use our services, we may collect:",
        list: [
          "Your name, date of birth, mailing address, phone number, and email address",
          "Your legal representative's name, firm name, and contact information",
          "Information necessary to verify your identity and connect to your health plan",
          "Your insurance plan name and member information",
        ],
      },
      {
        title: "2.2 Health Information We Receive Through Authorized API Access",
        content: "When you authorize RightOfAccess to access your health plan data, we receive the following through standardized FHIR APIs:",
        list: [
          "Explanation of Benefits (EOB) data, including dates of service, providers visited, and services rendered",
          "Diagnosis codes (ICD-10) associated with your claims",
          "Procedure codes (CPT/HCPCS) for treatments and services you received",
          "Prescription medication history, including drug names, dosages, fill dates, and prescribing providers",
          "Provider information, including names, NPIs, specialties, and addresses",
          "Coverage and enrollment information, including plan type and coverage dates",
          "Amounts billed and paid by your health plan",
        ],
      },
  {
    title: "2.3 Information We Collect Automatically",
    content: "When you interact with our platform, we may automatically collect technical information required for platform operation and security, including device information (browser type, operating system), IP address and approximate geographic location, and usage data (pages viewed, features used, time spent). We do not use third-party advertising or analytics cookies. Session management is handled through secure, server-side authentication tokens only.",
  },
    ],
  },
  {
    number: "3",
    title: "How We Use Your Information",
    subsections: [
      {
        title: "3.1 Primary Purpose: Provider Discovery and Treatment Timeline Generation",
        content: "Our primary use of your health plan claims data is to generate a provider map and treatment timeline for your authorized legal representative. This includes identifying providers you have visited, dates and types of services received, diagnoses documented in your claims, and medications prescribed — provided solely to support preparation of your Social Security Disability claim.",
      },
      {
        title: "3.2 Additional Uses",
        list: [
          "To verify your identity and connect to the correct health plan APIs",
          "To communicate about the status of your data authorization",
          "To provide customer support to you and your legal representative",
          "To improve the functionality, security, and reliability of our platform",
          "To comply with applicable laws, regulations, and legal processes",
        ],
      },
      {
        title: "3.3 Uses We Will Never Engage In",
        content: "We will never:",
        list: [
          "Sell your personal health information or claims data to any third party",
          "Use your health data for marketing, advertising, or promotional purposes",
          "Share your health data with insurance companies, employers, or data brokers",
          "Use your data to make coverage, eligibility, or employment decisions about you",
          "Access your Medicare.gov or health plan login credentials",
        ],
      },
    ],
  },
  {
    number: "4",
    title: "How We Share Your Information",
    subsections: [
      {
        title: "4.1 With Your Authorized Legal Representative",
        content: "The primary recipient of your health claims data is the law firm or legal representative that you have authorized to act on your behalf in your Social Security Disability claim. This sharing occurs only with your explicit consent.",
      },
      {
        title: "4.2 With Service Providers",
        content: "We may share limited information with third-party service providers who assist us in operating our platform, such as cloud hosting providers, security monitoring services, and customer support tools. All service providers are contractually required to protect your data. Where service providers may access PHI, we maintain Business Associate Agreements (BAAs) as required by HIPAA.",
      },
      {
        title: "4.3 As Required by Law",
        content: "We may disclose your information when required by law, such as in response to a court order, subpoena, or government investigation. We will notify you of such requests unless prohibited by law.",
      },
      {
        title: "4.4 In the Event of a Business Transfer",
        content: "If RightOfAccess is acquired or merges, your information may be transferred to the acquiring entity. We will notify you before your information is transferred and you will have the opportunity to request deletion of your data.",
      },
      {
        title: "4.5 No Other Sharing",
        content: "We do not share your health information with any other third parties. We do not share de-identified, anonymized, or pseudonymized health data with any third parties for research, analytics, or any other purpose.",
      },
    ],
  },
  {
    number: "5",
    title: "Data Retention",
    content: "We retain your health claims data only for as long as necessary to fulfill the purpose for which it was collected:",
    list: [
      "Active cases: Retained for the duration of your legal representative's active representation of your disability claim.",
      "Case closure: Securely deleted within 90 days of case closure unless earlier deletion is requested.",
      "Revocation of access: New data retrieval stops immediately. Previously retrieved data is retained until case closure or deletion request.",
      "Dormant accounts: After 24 months of inactivity, we will contact you. If no response within 30 days, health claims data will be securely deleted.",
      "Account data: Basic account information may be retained for up to 7 years for legal and regulatory compliance.",
    ],
    footer: "All deletions are performed using industry-standard secure deletion methods that render the data unrecoverable.",
  },
  {
    number: "6",
    title: "Data Security",
    subsections: [
      {
        title: "6.1 Technical Safeguards",
        list: [
          "All data is encrypted in transit using TLS 1.2 or higher",
          "All data is encrypted at rest using AES-256 encryption",
          "Access tokens and credentials are stored using industry-standard encryption",
          "Multi-factor authentication required for all platform administrator accounts",
          "Automated session timeouts after periods of inactivity",
          "Regular vulnerability scanning and security testing",
          "Intrusion detection and monitoring systems",
        ],
      },
      {
        title: "6.2 Administrative Safeguards",
        list: [
          "All personnel with access to PHI undergo HIPAA training",
          "Role-based access controls ensure each law firm can only access data for their own clients",
          "Comprehensive audit logs record all data access events",
          "Regular risk assessments conducted in accordance with 45 CFR § 164.308",
          "Incident response procedures are documented and tested",
          "BAAs maintained with all subcontractors who may access PHI",
        ],
      },
      {
        title: "6.3 Physical Safeguards",
        content: "Our platform is hosted on HIPAA-eligible cloud infrastructure with SOC 2 certified data centers that maintain physical access controls, environmental protections, and redundant systems.",
      },
    ],
  },
  {
    number: "7",
    title: "Your Rights and Choices",
    subsections: [
      {
        title: "7.1 Right to Access",
        content: "You may request a copy of the health claims data we have retrieved on your behalf at any time by contacting us at privacy@rightofaccess.co.",
      },
      {
        title: "7.2 Right to Revoke Authorization",
        content: "You may revoke your authorization at any time by disconnecting your health plan through our platform, contacting us at privacy@rightofaccess.co, or revoking access directly through your health plan's member portal. Revocation takes effect immediately.",
      },
      {
        title: "7.3 Right to Deletion",
        content: "You may request that we delete your health claims data at any time by contacting us at privacy@rightofaccess.co. We will process deletion requests within 30 days and confirm deletion in writing.",
      },
      {
        title: "7.4 Right to Opt Out of Personal Data Sharing",
        content: "When authorizing access through Medicare or a commercial health plan, you may have the option to exclude personal demographic information from the data shared with our application. This choice is presented during the authorization flow and is controlled by your health plan.",
      },
      {
        title: "7.5 Right to Be Informed of Changes",
        content: "If we make material changes to this Privacy Policy, we will notify you by email and by posting the updated policy on our website at least 30 days before the changes take effect.",
      },
    ],
  },
  {
    number: "8",
    title: "Medicare-Specific Disclosures",
    content: "If you are a Medicare beneficiary and authorize access through the CMS Blue Button 2.0 API, the following additional disclosures apply:",
    list: [
      "We access your Medicare Part A, Part B, and Part D claims data through the CMS Blue Button 2.0 API.",
      "Your Medicare claims data may include up to four years of historical claims with dates of service on or after January 1, 2016.",
      "We do not request, access, or store your Medicare.gov login credentials. Authentication is handled entirely by Medicare.gov through a secure OAuth 2.0 process.",
      "You may revoke our access at any time by visiting Medicare.gov and managing your connected applications.",
      "Our use of your Medicare data is subject to the CMS Blue Button 2.0 API Terms of Service.",
      "RightOfAccess is not affiliated with, endorsed by, or operated by CMS or HHS.",
    ],
  },
  {
    number: "9",
    title: "Commercial and Medicaid Health Plan Disclosures",
    content: "If you authorize access through a commercial health plan or Medicaid managed care plan Patient Access API:",
    list: [
      "Data access is governed by the CMS Interoperability and Patient Access Final Rule (CMS-9115-F) and subsequent regulations.",
      "We access only the data your health plan makes available through its Patient Access API.",
      "We do not request, access, or store your health plan member portal login credentials.",
      "You may revoke access at any time through your health plan's member portal or by contacting us directly.",
      "The specific data available may vary by health plan.",
    ],
  },
  {
    number: "10",
    title: "HIPAA Compliance and Legal Framework",
    content: "RightOfAccess is committed to complying with all applicable federal and state privacy laws, including:",
    list: [
      "The HIPAA Privacy Rule (45 CFR Part 160 and Part 164, Subparts A and E)",
      "The HIPAA Security Rule (45 CFR Part 164, Subpart C)",
      "The HITECH Act Breach Notification Rule",
      "The FTC Health Breach Notification Rule (16 CFR Part 318)",
      "The CMS Blue Button 2.0 API Terms of Service",
      "Applicable state privacy laws and data breach notification statutes",
    ],
    footer: "We maintain BAAs with law firm clients and all subcontractors and service providers who may access, process, or store PHI on our behalf.",
  },
  {
    number: "11",
    title: "Breach Notification",
    content: "In the event of a security breach resulting in unauthorized access to your Protected Health Information, we will:",
    list: [
      "Notify you in writing within 60 days of discovering the breach, as required by the HITECH Act",
      "Provide a description of what happened, types of information involved, and steps you can take to protect yourself",
      "Notify the U.S. Department of Health and Human Services as required by law",
      "Notify the Federal Trade Commission as applicable under the FTC Health Breach Notification Rule",
      "Notify prominent media outlets if the breach affects 500 or more individuals",
    ],
  },
  {
    number: "12",
    title: "Children's Privacy",
    content: "Our services are intended for use by adults age 18 and older. We do not knowingly collect health information from children under 18 without the consent of a parent or legal guardian. If you believe we have inadvertently collected information from a child, please contact us at privacy@rightofaccess.co and we will promptly delete the data.",
  },
  {
    number: "13",
    title: "State-Specific Privacy Rights",
    content: "Depending on your state of residence, you may have additional privacy rights under state law. These may include the right to know what personal information we collect, the right to request deletion, the right to opt out of the sale of personal information (note: we do not sell personal information), and the right to non-discrimination for exercising your privacy rights. Contact us at privacy@rightofaccess.co to exercise your rights.",
  },
  {
    number: "14",
    title: "Third-Party Service Providers",
    content: "We use the following categories of third-party service providers, all bound by BAAs where they have access to PHI:",
    list: [
      "Cloud hosting and database services (HIPAA-eligible infrastructure with signed BAA)",
      "Application hosting and content delivery",
      "Email and communication services (for transactional notifications only)",
      "Security monitoring and logging",
    ],
    footer: "We do not use third-party analytics, advertising, or tracking services that have access to your health information.",
  },
  {
    number: "15",
    title: "Contact Information",
    content: "If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how your data is being handled, please contact us:",
    contact: {
      company: "RightOfAccess",
      email: "privacy@rightofaccess.co",
      address: "1185 W 100 S, Pleasant Grove, UT 84062",
      phone: "385-441-6676",
    },
    footer: "For questions specifically about your Medicare data, you may also contact CMS at 1-800-MEDICARE (1-800-633-4227) or visit Medicare.gov.",
  },
  {
    number: "16",
    title: "Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email at least 30 days before the changes take effect and post the updated policy on our website with a revised 'Last Updated' date. Your continued use of our services after the effective date constitutes your acceptance of the updated Privacy Policy.",
  },
  {
    number: "17",
    title: "CMS Blue Button Attribution",
    content: `This application uses the Blue Button 2.0 API developed by the Centers for Medicare & Medicaid Services. The Blue Button 2.0 API provides Medicare Part A, B, and D claims data in FHIR format. For more information, visit bluebutton.cms.gov.`,
    footer: `CMS disclaimer: "The Blue Button 2.0 API platform is provided 'as is' and on an 'as-available' basis." This application is not affiliated with, endorsed by, or operated by CMS or HHS.`,
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
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
                      <p className="text-foreground/80 font-medium leading-relaxed text-sm md:text-base">
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
                  <div className="brutalist-card bg-primary/5 rounded-2xl p-6 space-y-2">
                    <p className="font-black text-foreground">{section.contact.company}</p>
                    <p className="text-sm font-medium text-foreground/80">
                      Email:{" "}
                      <a href={`mailto:${section.contact.email}`} className="text-primary font-bold underline">
                        {section.contact.email}
                      </a>
                    </p>
                    <p className="text-sm font-medium text-foreground/80">Address: {section.contact.address}</p>
                    <p className="text-sm font-medium text-foreground/80">Phone: {section.contact.phone}</p>
                  </div>
                )}

                {section.footer && (
                  <p className="text-foreground/60 font-medium leading-relaxed text-sm italic border-l-2 border-gold pl-4">
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
