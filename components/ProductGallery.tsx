'use client'
import { useEffect, useRef, useState } from 'react'

const products = [
  {
    id: 'essencial',
    badge: null,
    number: '01',
    name: 'ESSENCIAL',
    tagline: 'O ponto de partida.',
    description: 'Método completo, direto ao ponto. Estratégias práticas para você começar a vender todos os dias desde o primeiro módulo.',
    price: 'R$ 197',
    priceLabel: 'À VISTA',
    priceInstall: '12x de R$ 16,42',
    priceOld: null as string | null,
    discount: null as string | null,
    features: [
      '25 módulos direto ao ponto',
      'Estratégias para vender todo dia',
      'Acesso imediato após a compra',
      'Suporte e comunidade incluso',
    ],
    cta: 'GARANTIR ACESSO ESSENCIAL',
    accentColor: '#D6A354',
    accentRgb: '214,163,84',
  },
  {
    id: 'completo',
    badge: 'MAIS VENDIDO',
    number: '02',
    name: 'COMPLETO',
    tagline: 'O método na íntegra.',
    description: 'Tudo do Essencial mais participantes especiais, cases de sucesso exclusivos e o Livro Digital do Método CEV de bônus.',
    price: 'R$ 497',
    priceLabel: 'À VISTA',
    priceInstall: '12x de R$ 41,42',
    priceOld: 'R$ 997' as string | null,
    discount: '50% OFF' as string | null,
    features: [
      '27 módulos + participantes especiais',
      'Cases reais de sucesso',
      'Livro digital Método CEV BÔNUS',
      'Comunidade exclusiva de alunos',
    ],
    cta: 'GARANTIR ACESSO COMPLETO',
    accentColor: '#FF7800',
    accentRgb: '255,120,0',
  },
  {
    id: 'ai',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    number: '03',
    name: 'COMPLETO\n+ AI CEV',
    tagline: 'O futuro do marketing.',
    description: 'Tudo do Completo com Agente de Marketing com IA exclusivo, disponível 24h. Gera conteúdo, vídeos, áudios e PDFs pelo Método.',
    price: 'R$ 1.597',
    priceLabel: 'À VISTA',
    priceInstall: '12x de R$ 133,08',
    priceOld: null as string | null,
    discount: null as string | null,
    features: [
      'Tudo do Completo incluso',
      'Agente de IA disponível 24 horas',
      'Gera textos, vídeos, áudios e PDFs',
      'Templates validados e autorais',
    ],
    cta: 'GARANTIR ACESSO + AI CEV',
    accentColor: '#00B450',
    accentRgb: '0,180,80',
  },
]

export default function ProductGallery() {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let rafId: number

    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const outer = outerRef.current
        const track = trackRef.current
        if (!outer || !track) return

        const rect = outer.getBoundingClientRect()
        const scrolled = -rect.top
        const maxScroll = rect.height - window.innerHeight
        if (maxScroll <= 0) return

        const p = Math.max(0, Math.min(1, scrolled / maxScroll))
        const newIndex = Math.min(products.length - 1, Math.round(p * (products.length - 1)))

        track.style.transform = `translateX(-${p * (products.length - 1) * 100}vw)`

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${p * 100}%`
          progressBarRef.current.style.background = `rgba(${products[newIndex].accentRgb}, 0.9)`
        }

        setActiveIndex(prev => prev !== newIndex ? newIndex : prev)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const active = products[activeIndex]

  return (
    <div id="produtos">
      {/* ── MOBILE: vertical cards ── */}
      <div className="lg:hidden py-20 px-6" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="text-center mb-12">
          <p className="section-label mb-4">ESCOLHA SEU PLANO</p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: 'var(--text-primary)' }}>
            Escolha seu acesso
          </h2>
        </div>
        <div className="space-y-6 max-w-md mx-auto">
          {products.map((p) => (
            <div key={p.id} className="rounded-2xl p-6"
              style={{ background: 'var(--bg-card)', border: `1px solid rgba(${p.accentRgb},0.25)` }}>
              {p.badge && (
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full mb-3"
                  style={{ background: `rgba(${p.accentRgb},0.12)`, color: p.accentColor, border: `1px solid rgba(${p.accentRgb},0.3)` }}>
                  {p.badge}
                </span>
              )}
              <h3 className="font-bebas leading-none mb-2 whitespace-pre-line"
                style={{ fontSize: '3.5rem', color: 'var(--text-primary)' }}>{p.name}</h3>
              <p className="text-sm font-semibold mb-4 tracking-widest uppercase" style={{ color: p.accentColor }}>{p.tagline}</p>
              {p.priceOld && <p className="text-sm line-through mb-1" style={{ color: '#ffffff' }}>{p.priceOld}</p>}
              <div className="font-bebas mb-1" style={{ fontSize: '3.5rem', color: p.accentColor }}>{p.price}</div>
              <p className="text-sm mb-6" style={{ color: '#ffffff' }}>{p.priceInstall}</p>
              <ul className="space-y-2 mb-6">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#ffffff' }}>
                    <span style={{ color: p.accentColor }}>✦</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center justify-center gap-2 w-full py-4 rounded-full text-sm font-bold tracking-widest"
                style={{ background: `rgba(${p.accentRgb},0.9)`, color: '#050505', boxShadow: `0 6px 24px rgba(${p.accentRgb},0.25)` }}>
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: sticky horizontal scroll ── */}
      <div ref={outerRef} className="hidden lg:block" style={{ height: `${products.length * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>

          {/* Per-slide accent background */}
          {products.map((p, i) => (
            <div key={p.id} className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                background: `radial-gradient(ellipse at 78% 45%, rgba(${p.accentRgb},0.11) 0%, transparent 52%), radial-gradient(ellipse at 15% 85%, rgba(${p.accentRgb},0.05) 0%, transparent 45%)`,
              }}
            />
          ))}

          {/* Decorative vertical line */}
          <div className="absolute left-[48%] top-0 bottom-0 w-px pointer-events-none"
            style={{ background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)` }} />

          {/* Horizontal track — no CSS transition, follows scroll 1:1 */}
          <div ref={trackRef} className="flex h-full will-change-transform"
            style={{ width: `${products.length * 100}vw` }}>
            {products.map((p) => (
              <div key={p.id} className="relative flex items-center h-screen" style={{ width: '100vw', minWidth: '100vw' }}>

                {/* Giant watermark number */}
                <div className="absolute right-[-1vw] top-1/2 -translate-y-1/2 font-bebas select-none pointer-events-none"
                  style={{ fontSize: 'clamp(16rem, 34vw, 44rem)', lineHeight: 1, color: `rgba(${p.accentRgb},0.04)` }}>
                  {p.number}
                </div>

                {/* Glow orb right */}
                <div className="absolute pointer-events-none"
                  style={{
                    right: '4vw', top: '50%', transform: 'translateY(-50%)',
                    width: '520px', height: '520px', borderRadius: '50%',
                    background: `radial-gradient(ellipse, rgba(${p.accentRgb},0.16) 0%, transparent 70%)`,
                    filter: 'blur(70px)',
                  }} />

                {/* Content grid */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-16 xl:px-24 grid grid-cols-2 gap-16 xl:gap-24 items-center">

                  {/* ── LEFT: copy ── */}
                  <div>
                    {/* Number + line + badge */}
                    <div className="flex items-center gap-5 mb-10">
                      <span className="font-bebas select-none"
                        style={{ fontSize: '4.5rem', lineHeight: 1, color: `rgba(${p.accentRgb},0.22)` }}>
                        {p.number}
                      </span>
                      <div className="flex-1 h-px" style={{ background: `rgba(${p.accentRgb},0.2)` }} />
                      {p.badge && (
                        <span className="text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
                          style={{ background: `rgba(${p.accentRgb},0.1)`, color: p.accentColor, border: `1px solid rgba(${p.accentRgb},0.28)` }}>
                          {p.badge}
                        </span>
                      )}
                    </div>

                    {/* Product name */}
                    <h2 className="font-bebas leading-none mb-5 whitespace-pre-line"
                      style={{ fontSize: 'clamp(5rem, 9.5vw, 11.5rem)', color: 'var(--text-primary)' }}>
                      {p.name}
                    </h2>

                    {/* Tagline */}
                    <p className="font-bebas tracking-[0.12em] uppercase mb-6"
                      style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', color: p.accentColor }}>
                      {p.tagline}
                    </p>

                    {/* Description */}
                    <p className="mb-8 max-w-md leading-[1.75]"
                      style={{ color: '#ffffff', fontSize: '1rem' }}>
                      {p.description}
                    </p>

                    {/* Features 2-col */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 mb-10">
                      {p.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm" style={{ color: '#ffffff' }}>
                          <span className="mt-0.5 text-[0.55rem]" style={{ color: p.accentColor }}>✦</span>
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="#"
                      className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03]"
                      style={{
                        background: `rgba(${p.accentRgb},0.92)`,
                        color: '#050505',
                        boxShadow: `0 8px 40px rgba(${p.accentRgb},0.28)`,
                      }}>
                      {p.cta}
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  {/* ── RIGHT: price visualization ── */}
                  <div className="flex flex-col items-center justify-center relative">
                    {/* Concentric rings */}
                    {[580, 460, 340].map((size, ri) => (
                      <div key={ri} className="absolute rounded-full pointer-events-none transition-colors duration-700"
                        style={{
                          width: `${size}px`, height: `${size}px`,
                          border: `1px solid rgba(${p.accentRgb},${0.09 - ri * 0.025})`,
                        }}
                      />
                    ))}

                    {/* Price */}
                    <div className="relative z-10 text-center">
                      <div className="text-xs font-bold tracking-[0.35em] uppercase mb-4"
                        style={{ color: `rgba(${p.accentRgb},0.55)` }}>
                        {p.priceLabel}
                      </div>

                      {p.priceOld && (
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <span className="text-2xl line-through" style={{ color: '#ffffff' }}>{p.priceOld}</span>
                          <span className="px-3 py-1 text-xs font-bold rounded-full"
                            style={{ background: 'rgba(0,180,80,0.12)', color: '#00B450', border: '1px solid rgba(0,180,80,0.28)' }}>
                            {p.discount}
                          </span>
                        </div>
                      )}

                      <div className="font-bebas leading-none mb-5"
                        style={{
                          fontSize: 'clamp(4.5rem, 10vw, 12rem)',
                          background: `linear-gradient(140deg, rgba(${p.accentRgb},0.65) 0%, rgba(${p.accentRgb},1) 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                        {p.price}
                      </div>

                      <div style={{ color: '#ffffff', fontSize: '1rem' }}>
                        {p.priceInstall}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ── Progress bar ── */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div ref={progressBarRef} className="h-full"
              style={{ width: '0%', transition: 'width 0.08s linear', background: `rgba(${active.accentRgb},0.9)` }} />
          </div>

          {/* ── Navigation dots ── */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {products.map((_, i) => (
              <div key={i} className="rounded-full transition-all duration-500"
                style={{
                  width: activeIndex === i ? '28px' : '7px',
                  height: '7px',
                  background: activeIndex === i ? active.accentColor : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>

          {/* ── Slide counter ── */}
          <div className="absolute bottom-[1.85rem] right-12 font-bebas text-xl tracking-widest select-none"
            style={{ color: '#ffffff' }}>
            <span style={{ color: active.accentColor }}>{String(activeIndex + 1).padStart(2, '0')}</span>
            {' / '}{String(products.length).padStart(2, '0')}
          </div>

          {/* ── Scroll hint (first slide only) ── */}
          {activeIndex === 0 && (
            <div className="absolute bottom-7 left-12 flex items-center gap-2 text-xs tracking-[0.2em] uppercase transition-opacity duration-500"
              style={{ color: 'rgba(255,255,255,0.25)' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Role para explorar
            </div>
          )}

          {/* Glow line top */}
          <div className="absolute top-0 left-0 right-0 glow-line" style={{ zIndex: 2 }} />

        </div>
      </div>
    </div>
  )
}
