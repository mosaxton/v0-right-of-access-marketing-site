import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

const FinalCTA = () => {
  return (
    <section id="contact" className="w-full px-8 py-20 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-4 text-primary-foreground text-balance">
          See what providers you've missed.
        </h2>
        <p className="text-primary-foreground/80 font-medium mb-8 text-lg">
          Schedule a 15-minute demo.
        </p>
        <a
          href="https://calendly.com/mosaxton-s/free-demo-call"
          target="_blank"
          rel="noopener noreferrer"
          className="brutalist-button inline-block bg-gold text-foreground px-10 py-4 rounded-full font-black uppercase tracking-wide text-lg border-2 border-gold"
        >
          Book a Demo
        </a>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <PortfolioNavbar />
      <BankingScaleHero />
      <ProductTeaserCard />
      <IntegrationCarousel />
      <section className="w-full px-8 py-20 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-foreground/80 font-medium text-lg mb-4 uppercase tracking-widest text-sm">
            Before You Commit
          </p>
          <h2 className="text-4xl font-black text-primary-foreground text-balance leading-tight">
            See the full picture of the case before you commit money and time.
          </h2>
          <p className="mt-6 text-xl font-black text-gold">
            Maximize your intake. Minimize your risk.
          </p>
        </div>
      </section>
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer tagline="Provider Discovery for SSDI Law Firms" />
    </>
  )
}
