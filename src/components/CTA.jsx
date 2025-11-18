export default function CTA() {
  return (
    <section id="contact" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-tr from-blue-600/20 to-fuchsia-600/20 p-8 text-white shadow-xl backdrop-blur md:grid-cols-2 md:p-12">
          <div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to scale your brand?</h3>
            <p className="mt-3 text-white/80">Get a free, no-pressure strategy call. We’ll audit your social, website, and funnel—and give you a clear plan to grow.</p>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li>• Quick wins you can implement immediately</li>
              <li>• Budget-friendly growth roadmap</li>
              <li>• Honest benchmarks and expected ROI</li>
            </ul>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="grid gap-3">
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
            <input className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Website (optional)" />
            <textarea className="min-h-[120px] rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your goals" />
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20">Book my free call</button>
            <p className="text-xs text-white/60">We’ll reply within 24 hours.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
