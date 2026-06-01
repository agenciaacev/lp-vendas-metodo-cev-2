'use client'

export default function CTAFinalSection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{background: 'var(--bg-secondary)'}}>
      <div className="absolute top-0 left-0 right-0 glow-line" />

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{background: 'radial-gradient(ellipse at 50% 50%, rgba(214,163,84,0.06) 0%, transparent 70%)'}} />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{background: 'radial-gradient(ellipse, var(--gold) 0%, transparent 70%)'}} />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{background: 'radial-gradient(ellipse, var(--gold) 0%, transparent 70%)'}} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <p className="section-label mb-6" data-aos="fade-up">CHEGOU SUA VEZ</p>

        <h2 className="font-bebas mb-8 leading-none" data-aos="fade-up" data-aos-delay="100"
          style={{fontSize: 'clamp(2.46rem, 7.04vw, 7.04rem)', color: 'var(--text-primary)'}}>
          DO ANONIMATO AO{' '}
          <span className="gold-gradient block">PROTAGONISMO</span>
        </h2>

        <p className="mb-12 text-lg max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}} data-aos="fade-up" data-aos-delay="150">
          Conteúdo, Estratégia e Vendas. Os três pilares que transformam presença digital em resultado real. O método está aqui. A decisão é sua.
        </p>

        <div data-aos="fade-up" data-aos-delay="200">
          <a href="#produtos" className="btn-gold inline-flex items-center gap-3 px-14 py-5 text-base rounded-sm">
            QUERO APRENDER O MÉTODO CEV
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs" style={{color: 'var(--text-muted)'}}>
          {['🔒 Pagamento 100% Seguro', '⚡ Acesso Imediato', '🇧🇷 Para Todo o Brasil', '✓ Suporte Incluso'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
