export const ROISection = () => {
  return (
    <section className="w-full px-8 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
            For Firm Owners
          </p>
          <h2 className="text-4xl font-black mb-4 text-foreground">
            The math is uncomfortable.
          </h2>
          <p className="text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
            SSDI cases lose on incomplete evidence, not on weak claims. Here&apos;s what one prevented denial covers.
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Column 1: What you spend */}
          <div className="brutalist-card bg-card rounded-[2rem] p-8">
            <h3 className="text-lg font-black mb-6 text-foreground">
              What you spend per case today
            </h3>
            <ul className="space-y-4 text-foreground/80 font-medium text-sm leading-relaxed">
              <li>
                Records requests to wrong providers: <span className="font-black text-foreground">$300–$800</span>
              </li>
              <li>
                Paralegal time on provider discovery: <span className="font-black text-foreground">4–6 hours</span>
              </li>
              <li>
                One Consultative Exam from missed evidence: <span className="font-black text-foreground">delayed case + ALJ skepticism</span>
              </li>
              <li>
                One denial that should have been an approval: <span className="font-black text-foreground">$3,000–$6,000</span> in lost contingency fees
              </li>
            </ul>
          </div>

          {/* Column 2: What ROA costs */}
          <div className="brutalist-card bg-card rounded-[2rem] p-8">
            <h3 className="text-lg font-black mb-6 text-foreground">
              What ROA costs
            </h3>
            <ul className="space-y-4 text-foreground/80 font-medium text-sm leading-relaxed">
              <li>
                Per case: <span className="font-black text-foreground">$49</span> (recoverable as case expense)
              </li>
              <li>
                At 40 cases/month: <span className="font-black text-foreground">$1,960/mo</span>
              </li>
              <li>
                At 100 cases/month: <span className="font-black text-foreground">$3,900/mo</span> (volume rate)
              </li>
            </ul>
            <p className="mt-6 text-foreground/60 text-xs italic">
              Recoverable from the claimant&apos;s back pay award — the firm&apos;s net cost is often $0.
            </p>
          </div>

          {/* Column 3: Pull Quote (distinct treatment) */}
          <div className="brutalist-card bg-primary rounded-[2rem] p-8 flex flex-col justify-center">
            <p className="text-primary-foreground font-medium text-lg italic leading-relaxed mb-6">
              &ldquo;One additional won case at the average <span className="text-gold font-black not-italic">$4,500</span> SSDI fee covers <span className="text-gold font-black not-italic">2+ months</span> of ROA at 40 cases/month.&rdquo;
            </p>
            <p className="text-primary-foreground font-black text-sm">
              ROA pays for itself on the first prevented denial.
            </p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-foreground/70 font-medium text-sm max-w-2xl mx-auto">
          Most firms see the ROI on case #1. The pilot is free for the first 5 cases so you can verify it on your own caseload before paying anything.
        </p>
      </div>
    </section>
  )
}
