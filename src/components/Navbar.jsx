import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-fuchsia-500 shadow-lg">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Vibrant Social</p>
              <p className="-mt-1 text-xs text-white/60">Marketing & Web</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20">
              <Sparkles className="h-4 w-4" /> Free Strategy Call
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a onClick={() => setOpen(false)} key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4" /> Free Strategy Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
