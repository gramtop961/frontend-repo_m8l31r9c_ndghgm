import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:pt-[8rem] lg:pb-[6rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Results-driven social media marketing & high-converting web design
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Grow your brand with stunning design and social reach
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            We craft beautiful, conversion-focused websites and data-backed social campaigns that attract attention and turn followers into customers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-3 text-white shadow-lg shadow-blue-500/20">
              Book a Free Strategy Session
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10">
              See Our Work
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 text-white/70 sm:grid-cols-4">
            <Stat number="120+" label="Websites Launched" />
            <Stat number="4.9/5" label="Client Rating" />
            <Stat number="$2M+" label="Ad Spend Managed" />
            <Stat number="8x" label="Avg. ROI" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
      <p className="text-2xl font-bold text-white">{number}</p>
      <p className="text-xs text-white/70">{label}</p>
    </div>
  )
}
