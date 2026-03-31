const stats = [
  {
    stat: "65–78%",
    label: "of initial SSDI applications denied for insufficient medical evidence",
  },
  {
    stat: "25–35%",
    label: "of paralegal time spent discovering and chasing providers",
  },
  {
    stat: "$300–$800",
    label: "in records costs per case — often to the wrong providers",
  },
]

export const ProductTeaserCard = () => {
  return (
    <section className="w-full px-8 py-16 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="brutalist-card bg-card rounded-[2rem] p-8 text-center">
              <div className="text-4xl font-black text-primary mb-3">{item.stat}</div>
              <p className="text-foreground font-medium leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
