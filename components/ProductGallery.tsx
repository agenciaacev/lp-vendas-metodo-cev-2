'use client'

const products = [
  {
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
    priceOld: null as string | null,
    discount: null as string | null,
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
    featured: false,
  },
  {
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
    priceOld: 'R$ 997' as string | null,
    discount: '-50% OFF' as string | null,
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
    featured: true,
  },
  {
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
    priceOld: null as string | null,
    discount: null as string | null,
    features: [
      'Tudo do Completo incluso',
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
    featured: false,
  },
]

function CheckDot() {
  return (
    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#D6A354', display: 'inline-block' }} />
  )
}

export default function ProductGallery() {
  return (
    <section id="produtos" className="py-24 relative" style={{ background: 'var(--bg-secondary)' }}>
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-label mb-4">ESCOLHA SEU PLANO</p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-primary)' }}>
            Escolha seu acesso
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {products.map((p, i) => (
            <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col">

              {/* Badge above card */}
              <div className="h-9 flex items-center justify-center mb-2">
                {p.badge && (
                  <span className="px-4 py-1 text-xs font-bold rounded-full"
                    style={{ background: p.badgeBg!, color: p.badgeTextColor!, border: p.badgeBorder! }}>
                    {p.badgeIcon && <>{p.badgeIcon} </>}{p.badge}
                  </span>
                )}
              </div>

              {/* Card */}
              <div className="rounded-2xl p-7 flex flex-col flex-1"
                style={{ background: 'var(--bg-card)', border: `1px solid ${p.borderColor}` }}>

                {/* Name */}
                <h3 className="font-bebas leading-none mb-1 text-center" style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
                  {p.name}
                </h3>

                {/* Subtitle */}
                {p.subtitle && (
                  <p className="text-xs mb-3 text-center" style={{ color: '#ffffff' }}>{p.subtitle}</p>
                )}

                {/* Price block */}
                <div className="mt-3 mb-1 text-center">
                  <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#D6A354' }}>{p.installLabel}</p>
                  <p className="font-bebas leading-none" style={{ fontSize: '3.2rem', color: '#D6A354' }}>{p.installPrice}</p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-1 flex-wrap">
                  <span className="text-sm" style={{ color: '#ffffff' }}>{p.vista}</span>
                  {p.priceOld && (
                    <span className="text-sm line-through" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.priceOld}</span>
                  )}
                  {p.discount && (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full"
                      style={{ background: 'rgba(0,180,80,0.15)', color: '#00B450', border: '1px solid rgba(0,180,80,0.3)' }}>
                      {p.discount}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div className="my-5 h-px" style={{ background: 'var(--border)' }} />

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-7">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: '#ffffff' }}>
                      <CheckDot />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#"
                  className="w-full py-4 rounded-full text-sm font-bold text-center transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #9A6A2F, #D6A354, #F1C87A)', color: '#050505' }}>
                  Garantir minha vaga →
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
