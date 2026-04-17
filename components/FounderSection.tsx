import { ArrowRight } from "lucide-react"

export const FounderSection = () => {
  return (
    <section className="w-full px-8 py-20 bg-muted">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-start">
          {/* Left Column - Photo */}
          <div className="flex justify-center md:justify-start">
            {/* Replace with founder headshot of Moses Saxton */}
            <div className="w-40 h-40 rounded-full bg-background border-4 border-gold flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-foreground/10 flex items-center justify-center">
                <span className="text-foreground/40 text-4xl font-black">MS</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
              Who&apos;s Behind This
            </p>
            
            <h2 className="text-3xl font-black text-foreground mb-8 leading-tight text-balance">
              Built for SSDI firms, by someone who got tired of watching them lose winnable cases.
            </h2>

            <div className="space-y-6 text-foreground/90 leading-relaxed">
              <p>
                I&apos;m Moses Saxton, founder of RightOfAccess. I started this company after spending months talking to SSDI paralegals and managing attorneys about the same problem: they were losing cases not because the disability wasn&apos;t real, but because the medical evidence was incomplete on the day of the hearing.
              </p>
              
              <p>
                The data was always there. It was sitting in the claimant&apos;s insurance company&apos;s systems the whole time. CMS just made payers open those systems up — and almost no one in the SSDI world knows it yet.
              </p>
              
              <p>
                RightOfAccess is built around that one fact. If you want to talk through whether it fits your firm&apos;s workflow, I&apos;m the one who&apos;ll be on the demo call. No SDR, no script.
              </p>
            </div>

            <p className="mt-8 text-foreground/70 text-sm italic">
              — Moses Saxton, Pleasant Grove, UT
            </p>

            <a
              href="mailto:moses@rightofaccess.co"
              className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:text-gold transition-colors group"
            >
              Email me directly: moses@rightofaccess.co
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
