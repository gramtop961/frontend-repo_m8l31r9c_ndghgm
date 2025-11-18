import { Palette, Share2, BarChart3, PenTool, Globe, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Share2,
    title: 'Social Media Strategy',
    desc: 'Channel audits, content pillars, and monthly calendars tailored to your brand.',
  },
  {
    icon: BarChart3,
    title: 'Paid Ads Management',
    desc: 'ROI-focused campaigns on Meta, TikTok, Google, and LinkedIn with live reporting.',
  },
  {
    icon: Palette,
    title: 'Brand & Creative',
    desc: 'Visual identity, templates, and thumb-stopping content that stands out in feeds.',
  },
  {
    icon: PenTool,
    title: 'Web Design & UX',
    desc: 'Lightning-fast, responsive sites built for conversions and SEO.',
  },
  {
    icon: Globe,
    title: 'SEO & Content',
    desc: 'Technical SEO, landing pages, and content that ranks and converts.',
  },
  {
    icon: Smartphone,
    title: 'Funnel & CRO',
    desc: 'A/B testing and optimized funnels to turn traffic into revenue.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">End-to-end solutions for modern brands ready to scale.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 text-white/80 shadow-xl backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-fuchsia-500 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
