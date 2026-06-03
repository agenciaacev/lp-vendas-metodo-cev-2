'use client'
import { useRef, useEffect } from 'react'

interface Plan {
  id: string
  badge: string | null
  badgeIcon: string | null
  badgeBg: string | null
  badgeTextColor: string | null
  badgeBorder: string | null
  name: string
  subtitle: string | null
  installLabel: string
  installPrice: string
  vista: string
  priceOld: string | null
  discount: string | null
  features: string[]
  borderColor: string
  glowClass?: string
}

const essencial: Plan = {
  id: 'essencial',
  badge: null,
  badgeIcon: null,
  badgeBg: null,
  badgeTextColor: null,
  badgeBorder: null,
  name: 'ESSENCIAL',
  subtitle: null,
  installLabel: '12X DE',
  installPrice: 'R$ 16,42',
  vista: 'ou à vista R$ 197,00',
  priceOld: null,
  discount: null,
  features: [
    'Aulas de conteúdo, estratégia e vendas',
    'Acesso imediato e direto ao ponto',
    'Estratégias práticas para vender todos os dias',
    '25 módulos com aulas direto ao ponto',
    'Conteúdo, estratégia e vendas na prática',
    'Acesso imediato após a compra',
    'Suporte e comunidade de alunos',
  ],
  borderColor: 'rgba(214,163,84,0.35)',
}

const completo: Plan = {
  id: 'completo',
  badge: 'Mais vendido',
  badgeIcon: '🔥',
  badgeBg: 'rgba(255,120,0,0.15)',
  badgeTextColor: '#FF7800',
  badgeBorder: '1px solid rgba(255,120,0,0.4)',
  name: 'COMPLETO',
  subtitle: null,
  installLabel: '12X DE',
  installPrice: 'R$ 41,42',
  vista: 'ou à vista R$ 497,00',
  priceOld: 'R$ 997',
  discount: '-50% OFF',
  features: [
    'Todas as aulas + participantes especiais',
    'Cases de sucesso e conteúdos exclusivos',
    'Estratégias práticas para vender todos os dias',
    '27 módulos com aulas direto ao ponto',
    'Conteúdo, estratégia e vendas na prática',
    'Acesso imediato após a compra',
    'Suporte e comunidade de alunos',
    'Livro digital Método CEV Completo *BONUS*',
  ],
  borderColor: 'rgba(214,163,84,0.6)',
}

const aiPlan: Plan = {
  id: 'ai',
  badge: 'Melhor custo-benefício',
  badgeIcon: null,
  badgeBg: 'rgba(0,180,80,0.1)',
  badgeTextColor: '#00B450',
  badgeBorder: '1px solid rgba(0,180,80,0.4)',
  name: 'COMPLETO + AI CEV',
  subtitle: 'Agente de Marketing 24h incluso',
  installLabel: '12X DE',
  installPrice: 'R$ 133,08',
  vista: 'ou à vista R$ 1.597,00',
  priceOld: null,
  discount: null,
  features: [
    'Todas as aulas + participantes especiais',
    'Agente de Marketing IA disponível 24h',
    'Gera prompt, textos e scripts de conteúdo validados',
    'Templates já validados e autorais',
    'Cria narrações e áudios em vários formatos',
    'Gera fotos incríveis',
    'Cria vídeo de forma automática',
    'Gera PDFs prontos e profissionais',
    'Livro digital Método CEV Completo *BONUS*',
  ],
  borderColor: 'rgba(0,180,80,0.35)',
  glowClass: 'glow-green',
}

function CheckDot() {
  return (
    <span
      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
      style={{ background: '#D6A354', display: 'inline-block' }}
    />
  )
}

function PlanCard({ p, delay = 0 }: { p: Plan; delay?: number }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="flex flex-col h-full">
      <div className="h-9 flex items-center justify-center mb-2">
        {p.badge && (
          <span
            className="px-4 py-1 text-xs font-bold rounded-full"
            style={{ background: p.badgeBg!, color: p.badgeTextColor!, border: p.badgeBorder! }}
          >
            {p.badgeIcon && <>{p.badgeIcon} </>}
            {p.badge}
          </span>
        )}
      </div>

      <div
        className={`rounded-2xl p-7 flex flex-col flex-1${p.glowClass ? ` ${p.glowClass}` : ''}`}
        style={{ background: 'var(--bg-card)', border: `1px solid ${p.borderColor}` }}
      >
        <h3
          className="font-bebas leading-none mb-1 text-center"
          style={{ fontSize: '2rem', color: 'var(--text-primary)' }}
        >
          {p.name}
        </h3>

        {p.subtitle && (
          <p className="text-xs mb-3 text-center" style={{ color: '#ffffff' }}>
            {p.subtitle}
          </p>
        )}

        <div className="mt-3 mb-1 text-center">
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D6A354' }}>
            {p.installLabel}
          </p>
          <p className="font-bebas leading-none" style={{ fontSize: '3.2rem', color: '#D6A354' }}>
            {p.installPrice}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
          <span className="text-sm" style={{ color: '#ffffff' }}>
            {p.vista}
          </span>
          {p.priceOld && (
            <span className="text-sm line-through" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {p.priceOld}
            </span>
          )}
          {p.discount && (
            <span
              className="px-2 py-0.5 text-xs font-bold rounded-full"
              style={{
                background: 'rgba(0,180,80,0.15)',
                color: '#00B450',
                border: '1px solid rgba(0,180,80,0.3)',
              }}
            >
              {p.discount}
            </span>
          )}
        </div>

        <div className="my-5 h-px" style={{ background: 'var(--border)' }} />

        <ul className="space-y-2.5 flex-1 mb-7">
          {p.features.map((f, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: '#ffffff' }}>
              <CheckDot />
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="btn-gold w-full py-4 rounded-full text-sm text-center block"
        >
          Garantir o meu acesso →
        </a>
      </div>
    </div>
  )
}

function IPhone17Mockup({
  label,
  sublabel,
  videoSrc,
  topLabel,
  aosDelay = 0,
}: {
  label: string
  sublabel?: string
  videoSrc?: string
  topLabel?: string
  aosDelay?: number
}) {
  return (
    <div
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay={aosDelay}
    >
      {topLabel && (
        <p className="font-bebas text-center mb-3" style={{ fontSize: '1.8rem', color: '#D6A354', letterSpacing: '0.12em' }}>
          {topLabel}
        </p>
      )}
      {/* Wrapper para posicionar os botões laterais */}
      <div className="relative" style={{ width: '320px' }}>

        {/* Botão Action (esquerda, topo) */}
        <div style={{
          position: 'absolute', left: '-7px', top: '126px',
          width: '7px', height: '37px',
          background: 'linear-gradient(180deg, #3a3a3c, #2c2c2e)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.7), inset 1px 0 0 rgba(255,255,255,0.1)',
        }} />

        {/* Volume + (esquerda) */}
        <div style={{
          position: 'absolute', left: '-7px', top: '183px',
          width: '7px', height: '60px',
          background: 'linear-gradient(180deg, #3a3a3c, #2c2c2e)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.7), inset 1px 0 0 rgba(255,255,255,0.1)',
        }} />

        {/* Volume - (esquerda) */}
        <div style={{
          position: 'absolute', left: '-7px', top: '263px',
          width: '7px', height: '60px',
          background: 'linear-gradient(180deg, #3a3a3c, #2c2c2e)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-2px 0 4px rgba(0,0,0,0.7), inset 1px 0 0 rgba(255,255,255,0.1)',
        }} />

        {/* Botão Power (direita) */}
        <div style={{
          position: 'absolute', right: '-7px', top: '212px',
          width: '7px', height: '97px',
          background: 'linear-gradient(180deg, #3a3a3c, #2c2c2e)',
          borderRadius: '0 3px 3px 0',
          boxShadow: '2px 0 4px rgba(0,0,0,0.7), inset -1px 0 0 rgba(255,255,255,0.1)',
        }} />

        {/* Corpo do iPhone */}
        <div style={{
          width: '320px',
          height: '692px',
          background: 'linear-gradient(160deg, #2c2c2e 0%, #1c1c1e 50%, #0f0f11 100%)',
          borderRadius: '72px',
          padding: '14px',
          position: 'relative',
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.14),
            inset 0 0 0 1px rgba(255,255,255,0.05),
            0 40px 100px rgba(0,0,0,0.75),
            0 0 0 2px rgba(0,0,0,0.9),
            0 0 60px rgba(214,163,84,0.12)
          `,
        }}>

          {/* Tela */}
          <div style={{
            width: '100%',
            height: '100%',
            background: '#05050a',
            borderRadius: '60px',
            overflow: 'hidden',
            position: 'relative',
          }}>

            {/* Dynamic Island */}
            <div style={{
              position: 'absolute',
              top: '18px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '132px',
              height: '43px',
              background: '#000',
              borderRadius: '30px',
              zIndex: 20,
              boxShadow: '0 0 0 1px rgba(255,255,255,0.04), inset 0 0 8px rgba(0,0,0,0.8)',
            }} />

            {/* Conteúdo da tela */}
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 55%, rgba(214,163,84,0.07) 0%, transparent 65%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '74px',
                paddingBottom: '46px',
                paddingLeft: '22px',
                paddingRight: '22px',
              }}>
                <div style={{
                  width: '76px', height: '76px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #9A6A2F, #D6A354, #F1C87A)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 0 36px rgba(214,163,84,0.45)',
                  flexShrink: 0,
                }}>
                  <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
                    <path d="M6 4l11 6-11 6V4z" fill="#050505" />
                  </svg>
                </div>
                <p style={{
                  fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                  fontWeight: 600, color: '#D6A354', textAlign: 'center', lineHeight: 1.4,
                }}>{label}</p>
                {sublabel && (
                  <p style={{
                    color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem',
                    marginTop: '6px', textAlign: 'center', lineHeight: 1.4,
                  }}>{sublabel}</p>
                )}
              </div>
            )}

            {/* Indicador Home */}
            <div style={{
              position: 'absolute', bottom: '13px',
              left: '50%', transform: 'translateX(-50%)',
              width: '154px', height: '7px',
              background: 'rgba(255,255,255,0.22)',
              borderRadius: '4px', zIndex: 20,
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0
    let H = 0

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const GOLD = [214, 163, 84]
    const WHITE = [255, 248, 220]

    type Star = {
      x: number; y: number; r: number
      alpha: number; dAlpha: number
      vx: number; vy: number
      isMain: boolean
      color: number[]
    }

    const mkStar = (): Star => {
      const isMain = Math.random() < 0.12
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: isMain ? Math.random() * 1.4 + 1.1 : Math.random() * 0.9 + 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        dAlpha: (Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        isMain,
        color: Math.random() < 0.6 ? GOLD : WHITE,
      }
    }

    const stars: Star[] = Array.from({ length: 160 }, mkStar)
    const LINK_DIST = 130

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // constellation lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            const op = (1 - d / LINK_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.strokeStyle = `rgba(214,163,84,${op})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // stars
      for (const s of stars) {
        s.alpha += s.dAlpha
        if (s.alpha > 0.85 || s.alpha < 0.08) s.dAlpha *= -1
        s.x += s.vx
        s.y += s.vy
        if (s.x < -2) s.x = W + 2
        if (s.x > W + 2) s.x = -2
        if (s.y < -2) s.y = H + 2
        if (s.y > H + 2) s.y = -2

        const [r, g, b] = s.color

        // glow halo
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5)
        grd.addColorStop(0, `rgba(${r},${g},${b},${s.alpha * 0.55})`)
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // star core
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${s.alpha})`
        ctx.fill()

        // sparkle cross for main stars
        if (s.isMain) {
          const len = s.r * 7
          ctx.save()
          ctx.globalAlpha = s.alpha * 0.45
          ctx.strokeStyle = `rgba(${r},${g},${b},1)`
          ctx.lineWidth = 0.7
          for (let angle = 0; angle < Math.PI; angle += Math.PI / 2) {
            ctx.beginPath()
            ctx.moveTo(s.x + Math.cos(angle) * s.r, s.y + Math.sin(angle) * s.r)
            ctx.lineTo(s.x + Math.cos(angle) * len, s.y + Math.sin(angle) * len)
            ctx.moveTo(s.x - Math.cos(angle) * s.r, s.y - Math.sin(angle) * s.r)
            ctx.lineTo(s.x - Math.cos(angle) * len, s.y - Math.sin(angle) * len)
            ctx.stroke()
          }
          ctx.restore()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function ProductGallery() {
  return (
    <>
      {/* ── Seção 1: Vídeo 9:16 (esquerda) + Essencial & Completo (direita) ── */}
      <section id="produtos" className="py-24 relative" style={{ background: 'var(--bg-secondary)' }}>
        <div className="absolute top-0 left-0 right-0 glow-line" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-label mb-4">ESCOLHA SEU PLANO</p>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
            >
              Plataforma Digital ·{' '}
              <span className="gold-gradient">Método CEV</span>
            </h2>
          </div>

          {/* ── 3 cards de destaque ── */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-5 mb-12">
            {[
              'Ensinando tudo sobre nossa metodologia.',
              'Criar conteúdo com estratégia para vender.',
              'Empreendedores e empresários do Brasil e do mundo confiam na nossa plataforma!',
            ].map((text, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="relative rounded-2xl px-6 py-6 flex flex-col items-center text-center gap-4 overflow-hidden"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(214,163,84,0.25)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                }}
              >
                {/* glow de canto */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(214,163,84,0.18) 0%, transparent 70%)' }} />

                {/* ícone checkmark */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #9A6A2F, #D6A354)', boxShadow: '0 0 16px rgba(214,163,84,0.4)' }}>
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#050505" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: '1.6', fontWeight: 500, letterSpacing: '0.01em' }}>{text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Col 1: Vídeo 9:16 */}
            <IPhone17Mockup
              label="Plataforma Método CEV"
              sublabel="Vídeo de apresentação"
              videoSrc="/plataforma.MOV"
              aosDelay={0}
            />

            {/* Col 2: Essencial */}
            <PlanCard p={essencial} delay={100} />

            {/* Col 3: Completo */}
            <PlanCard p={completo} delay={200} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 glow-line" />
      </section>

      {/* ── Seção 2: Completo + AI (esquerda) + Vídeo 9:16 (direita) ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#03030a' }}>
        {/* starfield canvas */}
        <StarField />

        {/* nebula glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(214,163,84,0.06) 0%, transparent 65%)', transform: 'translate(30%,-30%)' }} />
          <div className="absolute bottom-0 left-0 w-125 h-125 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(154,106,47,0.07) 0%, transparent 65%)', transform: 'translate(-30%,30%)' }} />
        </div>

        <div className="absolute top-0 left-0 right-0 glow-line" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-label mb-4">POTENCIALIZE COM INTELIGÊNCIA ARTIFICIAL</p>
            <h2
              className="font-bebas"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}
            >
              AI CEV ·{' '}
              <span className="gold-gradient">Agente de Marketing 24h</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Col 1-2: dois celulares com + entre eles */}
            {/* Mobile: títulos + só IA CEV */}
            <div className="sm:hidden md:col-span-2 flex flex-col items-center">
              <div className="flex flex-col items-center mb-3">
                <span className="font-bebas" style={{ fontSize: '1.8rem', color: '#D6A354', letterSpacing: '0.12em', lineHeight: 1.2 }}>PLATAFORMA COMPLETA</span>
                <span className="font-bebas" style={{ fontSize: '2rem', color: '#D6A354', lineHeight: 1 }}>+</span>
                <span className="font-bebas" style={{ fontSize: '1.8rem', color: '#D6A354', letterSpacing: '0.12em', lineHeight: 1.2 }}>IA CEV</span>
              </div>
              <IPhone17Mockup
                label="AI CEV em ação"
                sublabel="Inteligência Artificial disponível 24h"
                videoSrc="/videoIA.MOV"
                aosDelay={0}
              />
            </div>

            {/* Desktop: dois celulares + "+" */}
            <div className="hidden sm:grid md:col-span-2" style={{ gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'start' }}>
              <IPhone17Mockup
                label="Plataforma Método CEV"
                sublabel="Vídeo de apresentação"
                videoSrc="/plataforma.MOV"
                topLabel="PLATAFORMA COMPLETA"
                aosDelay={0}
              />
              <div className="flex items-start" style={{ paddingTop: '0.3rem' }}>
                <span className="font-bebas" style={{ fontSize: '1.8rem', color: '#D6A354', lineHeight: 1 }}>+</span>
              </div>
              <IPhone17Mockup
                label="AI CEV em ação"
                sublabel="Inteligência Artificial disponível 24h"
                videoSrc="/videoIA.MOV"
                topLabel="IA CEV"
                aosDelay={150}
              />
            </div>

            {/* Col 3: card Completo + AI */}
            <PlanCard p={aiPlan} delay={300} />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 glow-line" />
      </section>
    </>
  )
}
