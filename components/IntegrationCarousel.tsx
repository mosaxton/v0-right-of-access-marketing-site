import { UserPlus, Smartphone, Map } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: 1,
    title: "Enter client info",
    description: "Paralegal enters client info and selects their insurance plan.",
  },
  {
    icon: Smartphone,
    number: 2,
    title: "Client authorizes from their phone",
    description: "Client clicks a secure link and authorizes access from their phone. Takes 2 minutes.",
  },
  {
    icon: Map,
    number: 3,
    title: "Provider map delivered",
    description: "Every doctor, specialty, diagnosis code, treatment date, and pharmacy fill — delivered instantly.",
  },
]

export const IntegrationCarousel = () => {
  return (
    <section id="how-it-works" className="w-full px-8 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 text-foreground">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="brutalist-card bg-card rounded-[2rem] p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center border-2 border-black">
                    <Icon className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div className="text-5xl font-black text-foreground/10">{step.number}</div>
                </div>
                <h3 className="text-lg font-black mb-2 text-foreground">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-medium">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="brutalist-card text-center bg-primary rounded-[2rem] p-6">
          <p className="text-primary-foreground font-bold text-base">
            Works with Medicare and the 7 largest commercial payers — covering ~80% of US claimants.
          </p>
        </div>
      </div>
    </section>
  )
}
