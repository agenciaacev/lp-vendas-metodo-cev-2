'use client'
import Image from 'next/image'

export default function MethodSection() {
  return (
    <section className="py-28 relative" style={{background: 'var(--bg-secondary)'}}>
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-label mb-4">A METODOLOGIA</p>
          <h2 className="font-bebas flex flex-wrap items-center justify-center gap-3" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', color: 'var(--text-primary)'}}>
            Conheça o
            <span className="gold-gradient">MÉTODO CEV</span>
            em Detalhes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Ideal para empresários e empreendedores que querem se posicionar com autoridade, criar conteúdo estratégico e converter seguidores em clientes reais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Platform screenshot */}
          <div data-aos="fade-right" data-aos-duration="800">
            <div className="relative rounded-sm overflow-hidden" style={{border: '1px solid rgba(214,163,84,0.15)'}}>
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5" style={{background: '#161616', borderBottom: '1px solid #2A2A2A'}}>
                <div className="w-3 h-3 rounded-full" style={{background: '#FF5F57'}} />
                <div className="w-3 h-3 rounded-full" style={{background: '#FFBD2E'}} />
                <div className="w-3 h-3 rounded-full" style={{background: '#28C840'}} />
                <div className="flex-1 mx-4 rounded-sm py-1 px-3 text-xs" style={{background: '#0d0d0d', color: 'var(--text-muted)'}}>
                  plataforma.metodoCEV.com.br
                </div>
              </div>
              <Image
                src="/plataforma.png"
                alt="Plataforma Método CEV"
                width={720}
                height={460}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Quote + Cleane photo */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
            <div className="relative rounded-sm overflow-hidden card-gold-border p-8"
              style={{background: 'linear-gradient(135deg, rgba(214,163,84,0.05), rgba(17,17,17,0.9))'}}>

              {/* Big quote mark */}
              <div className="absolute top-4 left-6 font-bebas text-8xl opacity-10" style={{color: 'var(--gold)', lineHeight: 1}}>"</div>

              <div className="flex gap-6 items-start relative z-10">
                <div className="flex-shrink-0">
                  <Image
                    src="/cleane-bio.webp"
                    alt="Cleane Fontenele"
                    width={100}
                    height={100}
                    className="rounded-sm object-cover"
                    style={{width: '100px', height: '100px', border: '2px solid rgba(214,163,84,0.4)'}}
                  />
                </div>
                <div>
                  <blockquote className="text-lg font-medium leading-relaxed mb-4" style={{color: 'var(--text-primary)'}}>
                    "O posicionamento estratégico define o sucesso da sua marca. Quem vende mais é quem se comunica mais e com propósito."
                  </blockquote>
                  <div className="font-bebas text-lg gold-gradient">CLEANE FONTENELE</div>
                  <div className="text-xs tracking-widest uppercase" style={{color: 'var(--text-muted)'}}>Criadora do Método CEV</div>
                </div>
              </div>

              {/* Three pillars */}
              <div className="mt-8 pt-6 grid grid-cols-3 gap-4" style={{borderTop: '1px solid var(--border)'}}>
                {['CONTEÚDO', 'ESTRATÉGIA', 'VENDAS'].map((pillar) => (
                  <div key={pillar} className="text-center">
                    <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                      style={{background: 'rgba(214,163,84,0.1)', border: '1px solid rgba(214,163,84,0.3)'}}>
                      <div className="w-2 h-2 rounded-full" style={{background: 'var(--gold)'}} />
                    </div>
                    <div className="section-label text-[0.6rem]">{pillar}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
