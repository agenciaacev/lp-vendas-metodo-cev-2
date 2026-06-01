'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

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
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient noise-overlay pt-24">
      {/* Gold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] -translate-y-1/2 translate-x-1/4 rounded-full"
          style={{background: 'radial-gradient(ellipse, rgba(214,163,84,0.08) 0%, transparent 70%)'}} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{background: 'radial-gradient(ellipse, rgba(214,163,84,0.05) 0%, transparent 70%)'}} />
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px opacity-10" style={{background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'}} />
      <div className="absolute right-8 top-0 bottom-0 w-px opacity-10" style={{background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Text */}
        <div data-aos="fade-right" data-aos-duration="900">
          <p className="section-label mb-6 flex items-center gap-3">
            <span className="w-8 h-px" style={{background: 'var(--gold)'}} />
            CONTEÚDO · ESTRATÉGIA · VENDAS
          </p>

          <h1 className="font-bebas leading-none mb-6"
            style={{fontSize: 'clamp(2.4rem, 3.5vw, 4.4rem)', color: 'var(--text-primary)'}}>
            O MÉTODO QUE{' '}
            <span className="gold-gradient block">TRANSFORMA CONTEÚDO</span>
            EM VENDAS
          </h1>

          <p className="mb-4 leading-relaxed" style={{color: 'var(--text-secondary)', fontSize: '1.05rem'}}>
            Conteúdo sem estratégia não vende. Estratégia sem conteúdo não alcança. O Método CEV une os três pilares que todo negócio precisa para crescer no digital — e fazer isso todos os dias.
          </p>

          <p className="mb-10 text-sm" style={{color: 'var(--text-muted)'}}>
            Empresários, profissionais liberais e empreendedores do Brasil inteiro já aplicaram o CEV para sair do anonimato, construir autoridade e transformar seguidores em clientes reais.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            <div>
              <div className="font-bebas text-3xl gold-gradient">
                +<span ref={counterRef}>5.000.000</span>
              </div>
              <div className="text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Seguidores</div>
            </div>
            <div className="w-px" style={{background: 'var(--border)'}} />
            <div>
              <div className="font-bebas text-3xl gold-gradient">+1 BI</div>
              <div className="text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Visualizações</div>
            </div>
            <div className="w-px" style={{background: 'var(--border)'}} />
            <div>
              <div className="font-bebas text-3xl gold-gradient">17</div>
              <div className="text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Anos de Exp.</div>
            </div>
          </div>

          <a href="#produtos" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm rounded-sm pulse-gold">
            QUERO APRENDER O MÉTODO CEV
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Right: Hero image */}
        <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
          <div className="relative float-anim">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{background: 'radial-gradient(ellipse, var(--gold) 0%, transparent 70%)', transform: 'scale(0.8)'}} />
            <Image
              src="/cleane-hero.webp"
              alt="Cleane Fontenele"
              width={520}
              height={680}
              className="relative z-10 object-cover"
              style={{
                maxHeight: '75vh',
                width: 'auto',
                filter: 'drop-shadow(0 0 40px rgba(214,163,84,0.2))',
              }}
              priority
            />
          </div>
          {/* Badge overlay */}
          <div className="absolute bottom-10 left-4 card-gold-border rounded-sm px-4 py-3 backdrop-blur-sm"
            style={{background: 'rgba(17,17,17,0.85)'}}>
            <div className="text-xs tracking-widest uppercase mb-1" style={{color: 'var(--text-muted)'}}>Criadora do</div>
            <div className="font-bebas text-xl gold-gradient">MÉTODO CEV</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
