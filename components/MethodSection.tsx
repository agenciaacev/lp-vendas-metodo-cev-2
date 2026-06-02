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
          <p className="mt-4 max-w-2xl mx-auto" style={{color: '#ffffff'}}>
            Ideal para empresários e empreendedores que querem se posicionar com autoridade, criar conteúdo estratégico e converter seguidores em clientes reais.
          </p>
        </div>

        {/* Platform + Book — centered, large */}
        <div className="relative max-w-4xl mx-auto mb-20 pb-12" data-aos="fade-up" data-aos-duration="800">
          <div className="rounded-sm overflow-visible" style={{border: '1px solid rgba(214,163,84,0.2)'}}>
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-2.5" style={{background: '#161616', borderBottom: '1px solid #2A2A2A'}}>
              <div className="w-3 h-3 rounded-full" style={{background: '#FF5F57'}} />
              <div className="w-3 h-3 rounded-full" style={{background: '#FFBD2E'}} />
              <div className="w-3 h-3 rounded-full" style={{background: '#28C840'}} />
              <div className="flex-1 mx-4 rounded-sm py-1 px-3 text-xs" style={{background: '#0d0d0d', color: '#ffffff'}}>
                plataforma.metodoCEV.com.br
              </div>
            </div>
            <Image
              src="/plataforma.png"
              alt="Plataforma Método CEV"
              width={960}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Book overlaid bottom-right */}
          <div className="absolute -bottom-6 -right-4 z-10"
            style={{filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.8))'}}>
            <Image
              src="/livro.webp"
              alt="Livro Método CEV"
              width={260}
              height={340}
              className="object-contain"
              style={{border: '2px solid rgba(214,163,84,0.35)', borderRadius: '4px'}}
            />
          </div>
        </div>

        {/* Quote card — compact */}
        <div className="max-w-xl mx-auto" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <div className="rounded-sm card-gold-border px-6 py-5 text-center"
            style={{background: 'rgba(214,163,84,0.04)'}}>
            <p className="text-base leading-relaxed mb-3" style={{color: '#ffffff'}}>
              &ldquo;O posicionamento estratégico define o sucesso da sua marca. Quem vende mais é quem se comunica mais e com propósito.&rdquo;
            </p>
            <div className="font-bebas text-base gold-gradient">CLEANE FONTENELE</div>
            <div className="text-[0.65rem] tracking-widest uppercase" style={{color: '#ffffff'}}>Criadora do Método CEV</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
