import { CheckCircle2, Lock, Shield, Zap } from "lucide-react"

const trustBadges = [
  { icon: Lock, label: "HIPAA Compliant" },
  { icon: Shield, label: "BAA Included" },
  { icon: Zap, label: "Encrypted in transit and at rest" },
]

const features = [
  "Complete provider history from claims data",
  "Every doctor, specialty, and ICD-10 diagnosis code",
  "Every prescription fill and pharmacy",
  "Treatment dates and visit history",
  "Works with Medicare and the 7 largest commercial payers",
  "Client authorization in 2 minutes",
  "Only pay when we successfully retrieve provider data",
]

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full px-8 py-16 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-foreground">Simple Pricing.</h2>
          <p className="text-lg text-foreground font-medium max-w-xl mx-auto">
            Per case. Recoverable as a case expense. No monthly fee. No minimums.
          </p>
        </div>

        {/* Primary Pricing Card - Centered */}
        <div className="max-w-md mx-auto mb-12">
          <div className="brutalist-card bg-primary rounded-[2rem] p-10 text-center flex flex-col">
            <div className="text-7xl font-black text-primary-foreground mb-2">$199</div>
            <div className="text-primary-foreground/80 font-bold text-lg mb-8">per case</div>

            <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-primary-foreground font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/mosaxton-s/free-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button inline-block bg-gold text-foreground px-10 py-4 rounded-full font-black text-lg uppercase tracking-wide"
            >
              Start Your Free Pilot
            </a>
            <p className="mt-4 text-primary-foreground/70 text-sm italic">
              First 5 cases free. No credit card required.
            </p>
          </div>
        </div>

        {/* Hearing Prep Add-on */}
        <p className="text-center text-foreground/80 text-sm italic mb-10 max-w-2xl mx-auto">
          Hearing Prep add-on: $99/case — re-pull provider data before the ALJ hearing and flag any new treatment since intake.
        </p>

        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div key={i} className="brutalist-card bg-card rounded-[2rem] px-8 py-5 flex items-center gap-4">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2.5} />
                <span className="font-bold text-foreground text-sm">{badge.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
