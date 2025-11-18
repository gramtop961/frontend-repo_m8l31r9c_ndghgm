import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[100px]" />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-10 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Vibrant Social — Social Media Marketing & Web Design
        </p>
        <p className="mt-2 text-xs">Built with love and a splash of creativity.</p>
      </footer>
    </div>
  )
}

export default App
