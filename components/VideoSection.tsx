'use client'
export default function VideoSection() {
  return (
    <section className="py-28 relative" style={{background: 'var(--bg-secondary)'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'}} />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="section-label mb-4">ASSISTA AGORA</p>
          <h2 className="font-bebas gold-gradient" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)'}}>
            O MÉTODO QUE VOCÊ PRECISA PARA CRESCER NO DIGITAL
          </h2>
        </div>

        {/* Video placeholder */}
        <div className="relative max-w-4xl mx-auto card-gold-border rounded-sm overflow-hidden" data-aos="fade-up" data-aos-delay="100">
          <div className="aspect-video flex items-center justify-center" style={{background: 'var(--bg-card)'}}>
            {/* Replace src below with the actual video embed URL */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all hover:scale-110"
                style={{background: 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-highlight))', boxShadow: '0 0 40px rgba(214,163,84,0.4)'}}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M9 6l14 8-14 8V6z" fill="#050505"/>
                </svg>
              </div>
              <p className="section-label">[ VÍDEO DE APRESENTAÇÃO ]</p>
              <p className="text-xs mt-2" style={{color: 'var(--text-muted)'}}>Inserir embed do vídeo aqui</p>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 mb-10 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
          Assista e entenda por que o CEV é a metodologia mais completa para quem quer vender todos os dias — com conteúdo que posiciona, estratégia que direciona e vendas que convertem.
        </p>

        <div className="flex justify-center">
          <a href="#produtos" className="btn-gold inline-flex items-center gap-3 px-10 py-4 text-sm rounded-sm">
            QUERO APRENDER O MÉTODO CEV
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
