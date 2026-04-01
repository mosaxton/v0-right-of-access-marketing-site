"use client"

interface PilotBannerProps {
  casesRemaining: number
}

export function PilotBanner({ casesRemaining }: PilotBannerProps) {
  return (
    <div className="bg-gold/20 border-b-2 border-gold px-4 py-2 text-center">
      <p className="text-sm font-bold text-foreground">
        You have{" "}
        <span className="text-gold">{casesRemaining} pilot case{casesRemaining !== 1 ? "s" : ""}</span>
        {" "}remaining — no charge until your 6th case.
      </p>
    </div>
  )
}
