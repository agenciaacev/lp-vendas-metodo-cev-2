'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-md border-b' : ''}`}
      style={{
        background: scrolled ? 'rgba(5,5,5,0.92)' : 'transparent',
        borderColor: scrolled ? 'rgba(214,163,84,0.1)' : 'transparent'
      }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        <div className="font-bebas text-2xl gold-gradient tracking-widest select-none">
          MÉTODO <span style={{color: 'var(--gold)'}}>CEV</span>
        </div>
        <a href="#produtos" className="btn-gold px-6 py-2.5 text-xs rounded-sm font-bold tracking-widest hidden md:block">
          GARANTIR ACESSO
        </a>
      </div>
    </nav>
  )
}
