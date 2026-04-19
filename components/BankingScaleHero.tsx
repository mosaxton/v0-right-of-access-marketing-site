import { ArrowRight } from "lucide-react"

const providers = [
  { name: "Dr. Sarah Kaufman, MD", specialty: "Orthopedic Surgery", date: "03/12/2022", dx: "M54.5 — Low back pain" },
  { name: "Valley Pain Clinic", specialty: "Pain Management", date: "05/07/2022", dx: "M47.816 — Spondylosis" },
  { name: "Walgreens #4412", specialty: "Pharmacy", date: "06/01/2022", rx: "Gabapentin 300mg" },
  { name: "Dr. James Osei, MD", specialty: "Neurology", date: "07/19/2022", dx: "G54.2 — Cervical root disorder" },
  { name: "Summit Imaging Center", specialty: "Radiology", date: "08/30/2022", dx: "MRI Lumbar Spine" },
]

export const BankingScaleHero = () => {
  return (
    <div className="w-full bg-background pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-full border-2 border-black font-bold uppercase text-xs tracking-wide">
              <span>SSDI PROVIDER DISCOVERY</span>
            </div>
            <h1 className="text-5xl font-black text-foreground mb-6 leading-tight">
              Every Provider Your SSDI Client Has Seen.{" "}
              <span className="text-gold">In 60 Seconds.</span>
            </h1>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              RightOfAccess pulls your client's complete provider history from their insurance claims data — every doctor, every diagnosis, every prescription.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/mosaxton-s/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-black text-lg"
              >
                Watch the Demo <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="https://calendly.com/mosaxton-s/free-demo-call"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button inline-flex items-center gap-3 bg-muted text-foreground border-2 border-black px-8 py-4 rounded-full font-black text-lg"
              >
                Start Free Pilot
              </a>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t-2 border-black/10">
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs tracking-wide">
                HIPAA Compliant
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs tracking-wide">
                BAA Included
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs tracking-wide">
                SOC 2 in progress
              </div>
            </div>
          </div>

          {/* Provider map mockup */}
          <div className="brutalist-card bg-card rounded-[2rem] p-6">
            <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black/10">
              <div>
                <span className="text-xs font-mono text-foreground/50 tracking-wider block">PROVIDER MAP</span>
                <span className="text-sm font-black text-foreground">Martinez, Elena — DOB 09/14/1961</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-bold text-green-600">5 providers found</span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {providers.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted border border-black/10">
                  <div className="w-2 h-2 rounded-full bg-primary border border-black mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-black text-foreground text-sm truncate">{p.name}</span>
                      <span className="text-xs text-foreground/40 font-mono flex-shrink-0">{p.date}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-foreground/60 font-medium">{p.specialty}</span>
                      {p.dx && <span className="text-xs text-primary font-bold">{p.dx}</span>}
                      {p.rx && <span className="text-xs text-primary font-bold">{p.rx}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t-2 border-black/10">
              <p className="text-xs text-foreground/50 font-medium">
                Retrieved from UnitedHealthcare claims data · Authorization took 2 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
