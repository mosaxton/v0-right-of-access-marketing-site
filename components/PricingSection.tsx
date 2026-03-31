import { CheckCircle2, Lock, Shield, Zap } from "lucide-react"

const trustBadges = [
  { icon: Lock, label: "HIPAA Compliant" },
  { icon: Shield, label: "BAA Included" },
  { icon: Zap, label: "Encrypted in transit and at rest" },
]

const features = [
  "Complete provider history from claims data",
  "Every doctor, specialty, and diagnosis code",
  "Every prescription fill and pharmacy",
  "Treatment dates and visit history",
  "Works with 200+ insurance plans",
  "Client authorization in 2 minutes",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Per-case card */}
          <div className="brutalist-card bg-primary rounded-[2rem] p-10 text-center h-full flex flex-col justify-between">
            <div className="text-7xl font-black text-primary-foreground mb-2">$49</div>
            <div className="text-primary-foreground/80 font-bold text-lg mb-8">per case</div>

            <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" strokeWidth={2.5} />
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
              Start Your Free Case
            </a>
          </div>

          {/* Volume card */}
          <div className="brutalist-card bg-background rounded-[2rem] p-10 text-center h-full flex flex-col justify-between">
            <div className="text-5xl font-black text-foreground mb-2">Volume</div>
            <div className="text-foreground/70 font-bold text-lg mb-8">50+ cases per month</div>

            <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-foreground font-medium text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://calendly.com/mosaxton-s/free-demo-call"
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-button inline-block bg-gold text-foreground px-10 py-4 rounded-full font-black text-lg uppercase tracking-wide"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
