'use client'

const courses = [
  {
    tag: null,
    name: 'ESSENCIAL',
    price: '12X DE R$ 16,42',
    priceVista: 'ou à vista R$ 197,00',
    priceOld: null,
    discount: null,
    badgeColor: null,
    features: [
      'Aulas de conteúdo, estratégia e vendas',
      'Acesso imediato e direto ao ponto',
      'Estratégias práticas para vender todos os dias',
      '25 módulos com aulas direto ao ponto',
      'Conteúdo, estratégia e vendas na prática',
      'Acesso imediato após a compra',
      'Suporte e comunidade de alunos',
    ],
    cta: 'Garantir minha vaga',
    featured: false,
  },
  {
    tag: 'MAIS VENDIDO',
    name: 'COMPLETO',
    price: '12X DE R$ 41,42',
    priceVista: 'ou à vista R$ 497,00',
    priceOld: 'R$ 997,00',
    discount: '50% OFF',
    badgeColor: '#FF7800',
    badgeBg: 'rgba(255,120,0,0.15)',
    features: [
      'Todas as aulas + participantes especiais',
      'Cases de sucesso e conteúdos exclusivos',
      'Estratégias práticas para vender todos os dias',
      '27 módulos com aulas direto ao ponto',
      'Conteúdo, estratégia e vendas na prática',
      'Acesso imediato após a compra',
      'Suporte e comunidade de alunos',
      'Livro digital Método CEV Completo BÔNUS',
    ],
    cta: 'Garantir minha vaga',
    featured: true,
  },
  {
    tag: 'MELHOR CUSTO-BENEFÍCIO',
    name: 'COMPLETO + AI CEV',
    subtitle: 'Agente de Marketing IA disponível 24h',
    price: '12X DE R$ 133,08',
    priceVista: 'ou à vista R$ 1.597,00',
    priceOld: null,
    discount: null,
    badgeColor: '#00B450',
    badgeBg: 'rgba(0,180,80,0.15)',
    features: [
      'Tudo do Completo incluso',
      'Agente de Marketing IA disponível 24h',
      'Gera prompt, textos e scripts de conteúdo validados',
      'Templates já validados e autorais',
      'Cria narrações e áudios em vários formatos',
      'Gera fotos incríveis',
      'Cria vídeo de forma automática',
      'Gera PDFs prontos e profissionais',
      'Livro digital Método CEV Completo BÔNUS',
    ],
    cta: 'Garantir minha vaga',
    featured: false,
  },
]

const books = [
  {
    tag: 'E-BOOK',
    name: 'Versão Digital',
    subtitle: 'Acesso imediato após a compra',
    price: 'R$ 37,00',
    priceDetail: null,
    features: [
      'Leitura no celular, tablet ou computador',
      'Acesso vitalício ao conteúdo',
      'Receba agora mesmo por e-mail',
    ],
    cta: 'Comprar E-book',
    footer: 'Pagamento seguro · Entrega imediata',
    highlight: null,
  },
  {
    tag: 'LIVRO FÍSICO',
    name: 'Versão Física',
    subtitle: 'Livro impresso na sua casa',
    price: 'R$ 157,00',
    priceDetail: null,
    features: [
      'Livro físico de alta qualidade',
      'Frete grátis para todo o Brasil',
      'Perfeito para anotar e estudar',
    ],
    cta: 'Quero o Livro Físico',
    footer: 'Garantia de entrega · Compra segura',
    highlight: 'FRETE GRÁTIS',
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="rgba(214,163,84,0.15)" stroke="rgba(214,163,84,0.4)" strokeWidth="1"/>
      <path d="M5 8l2 2 4-4" stroke="#D6A354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-28 relative" style={{background: 'var(--bg-secondary)'}}>
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* BLOCK A: Courses */}
        <div className="mb-24">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="section-label mb-4">ESCOLHA SEU PLANO</p>
            <h2 className="font-bebas" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', color: 'var(--text-primary)'}}>
              Escolha o seu acesso ao{' '}
              <span className="gold-gradient">Método CEV</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Do conteúdo essencial à experiência completa com Inteligência Artificial. Escolha o plano que combina com o seu momento agora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div
                key={i}
                className="relative rounded-sm flex flex-col overflow-hidden"
                style={{
                  background: course.featured
                    ? 'linear-gradient(135deg, rgba(214,163,84,0.08), rgba(17,17,17,0.95))'
                    : 'var(--bg-card)',
                  border: course.featured
                    ? '1px solid rgba(214,163,84,0.4)'
                    : '1px solid var(--border)',
                  boxShadow: course.featured ? '0 0 40px rgba(214,163,84,0.1)' : 'none',
                }}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Featured glow line top */}
                {course.featured && <div className="glow-line" />}

                <div className="p-8 flex flex-col flex-1">
                  {/* Tag */}
                  {course.tag && (
                    <div className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-bold tracking-widest uppercase mb-4 self-start"
                      style={{background: (course as any).badgeBg, color: (course as any).badgeColor, border: `1px solid ${(course as any).badgeColor}30`}}>
                      {course.tag}
                    </div>
                  )}

                  <h3 className="font-bebas text-2xl mb-1" style={{color: 'var(--text-primary)', fontSize: '1.8rem'}}>
                    {course.name}
                  </h3>

                  {(course as any).subtitle && (
                    <p className="text-xs mb-4" style={{color: 'var(--gold)'}}>{(course as any).subtitle}</p>
                  )}

                  {/* Price */}
                  <div className="my-6 pb-6" style={{borderBottom: '1px solid var(--border)'}}>
                    {course.priceOld && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="price-strike text-sm">{course.priceOld}</span>
                        {course.discount && (
                          <span className="px-2 py-0.5 text-xs font-bold rounded-sm"
                            style={{background: 'rgba(0,180,80,0.15)', color: '#00B450', border: '1px solid rgba(0,180,80,0.3)'}}>
                            {course.discount}
                          </span>
                        )}
                      </div>
                    )}
                    <div className="font-bebas text-2xl gold-gradient">{course.price}</div>
                    <div className="text-sm mt-1" style={{color: 'var(--text-muted)'}}>{course.priceVista}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {course.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{color: 'var(--text-secondary)'}}>
                        <CheckIcon />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="#" className="btn-gold w-full py-4 text-sm rounded-sm text-center flex items-center justify-center gap-2">
                    {course.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK B: Books */}
        <div>
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="section-label mb-2">COMECE PELO LIVRO DIGITAL</p>
            <h2 className="font-bebas" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', color: 'var(--text-primary)'}}>
              Livro{' '}
              <span className="gold-gradient">Conteúdo · Estratégia · Vendas</span>
              <br />7 Continentes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Um guia direto ao ponto para você entender como se posicionar, comunicar com clareza e transformar seguidores em clientes. Mais que um livro — uma visão viva, prática e atual sobre como usar conteúdo com estratégia para vender todos os dias, em qualquer mercado.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="card-gold-border rounded-sm p-8 flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="section-label text-[0.65rem] px-2 py-1 rounded-sm"
                      style={{background: 'rgba(214,163,84,0.08)', border: '1px solid rgba(214,163,84,0.2)'}}>
                      {book.tag}
                    </div>
                    {book.highlight && (
                      <div className="px-2 py-1 text-xs font-bold rounded-sm"
                        style={{background: 'rgba(0,180,80,0.15)', color: '#00B450', border: '1px solid rgba(0,180,80,0.3)'}}>
                        {book.highlight}
                      </div>
                    )}
                  </div>

                  <h3 className="font-bebas text-xl mb-1" style={{color: 'var(--text-primary)', fontSize: '1.5rem'}}>
                    {book.name}
                  </h3>
                  <p className="text-xs mb-6" style={{color: 'var(--text-muted)'}}>{book.subtitle}</p>

                  <div className="font-bebas text-3xl gold-gradient mb-6">{book.price}</div>

                  <ul className="space-y-3 flex-1 mb-6">
                    {book.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{color: 'var(--text-secondary)'}}>
                        <CheckIcon />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a href="#" className="btn-gold w-full py-3.5 text-sm rounded-sm text-center block mb-3">
                    {book.cta}
                  </a>
                  <p className="text-center text-xs" style={{color: 'var(--text-muted)'}}>{book.footer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
