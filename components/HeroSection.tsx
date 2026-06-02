'use client'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = counterRef.current
    if (!el) return
    let current = 0
    const target = 5000000
    const step = Math.ceil(target / 80)
    const timer = setInterval(() => {
      current = Math.min(current + step, target)
      el.textContent = new Intl.NumberFormat('pt-BR').format(current)
      if (current >= target) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-end sm:items-center overflow-hidden noise-overlay pt-24 hero-bg bg-cover bg-no-repeat bg-position-[center_top]">

      {/* Gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{background: 'radial-gradient(ellipse, rgba(214,163,84,0.05) 0%, transparent 70%)'}} />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px opacity-10" style={{background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'}} />
      <div className="absolute right-8 top-0 bottom-0 w-px opacity-10" style={{background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-12 pt-4 sm:py-20">
        <div className="max-w-2xl lg:max-w-3xl mx-auto sm:mx-0 text-center sm:text-left" data-aos="fade-right" data-aos-duration="900">
          <p className="section-label mb-3 sm:mb-6 flex items-center justify-center sm:justify-start gap-3">
            <span className="w-8 h-px" style={{background: 'var(--gold)'}} />
            CONTEÚDO · ESTRATÉGIA · VENDAS
          </p>

          <h1 className="font-bebas leading-none mb-3 sm:mb-6"
            style={{fontSize: 'clamp(2.2rem, 3.2vw, 4.2rem)', color: 'var(--text-primary)'}}>
            O MÉTODO QUE TRANSFORMA{' '}
            <span className="gold-gradient block">CONTEÚDO EM VENDAS</span>
          </h1>

          <p className="mb-4 leading-relaxed text-sm sm:text-[1.05rem] max-w-[30rem] mx-auto sm:mx-0" style={{color: '#ffffff'}}>
            Conteúdo sem estratégia não vende. Estratégia sem conteúdo não alcança. O Método CEV une os três pilares que todo negócio precisa para crescer no digital e fazer isso todos os dias.
          </p>

          <p className="hidden sm:block mb-10 max-w-[30rem]" style={{color: '#ffffff', fontSize: '0.95rem'}}>
            Empresários, profissionais liberais e empreendedores do Brasil inteiro já aplicaram o CEV para sair do anonimato, construir autoridade e transformar seguidores em clientes reais.
          </p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-4 sm:gap-8 mb-8 sm:mb-10">
            <div>
              <div className="font-bebas text-2xl sm:text-4xl gold-gradient">
                +<span ref={counterRef}>5.000.000</span>
              </div>
              <div className="text-[0.6rem] sm:text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Seguidores</div>
            </div>
            <div className="w-px" style={{background: 'var(--border)'}} />
            <div>
              <div className="font-bebas text-2xl sm:text-4xl gold-gradient">+1 BI</div>
              <div className="text-[0.6rem] sm:text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Visualizações</div>
            </div>
            <div className="w-px" style={{background: 'var(--border)'}} />
            <div>
              <div className="font-bebas text-2xl sm:text-4xl gold-gradient">17</div>
              <div className="text-[0.6rem] sm:text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Anos de Exp.</div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-start">
            <a href="#produtos" className="btn-gold inline-flex items-center gap-3 px-12 py-5 text-base rounded-full pulse-gold">
              QUERO APRENDER O MÉTODO CEV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
