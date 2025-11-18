import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Glow Cosmetics',
    metric: '+312% IG Reach',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Stride Activewear',
    metric: '6.1% Site CR',
    image: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Bean & Bloom',
    metric: '+4.3 ROAS',
    image: 'https://images.unsplash.com/photo-1455470956270-4cbb357f7052?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-white/70">A peek at recent campaigns and launches.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm text-white/70">{p.metric}</p>
                  <p className="text-lg font-semibold text-white">{p.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
