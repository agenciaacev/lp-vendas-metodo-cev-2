'use client'
import Image from 'next/image'

export default function BioSection() {
  return (
    <section className="py-28 mesh-bg relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-5"
        style={{background: 'radial-gradient(ellipse at 100% 50%, var(--gold) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center" data-aos="fade-right" data-aos-duration="900">
            <div className="relative">
              {/* Gold frame effect */}
              <div className="absolute -inset-3 rounded-sm opacity-30"
                style={{background: 'linear-gradient(135deg, var(--gold-dark), transparent, var(--gold))'}} />
              <Image
                src="/bannerid.png"
                alt="Cleane Fontenele"
                width={480}
                height={560}
                loading="eager"
                className="relative z-10 rounded-sm object-cover"
                style={{
                  maxHeight: '70vh',
                  width: 'auto',
                  border: '1px solid rgba(214,163,84,0.2)',
                }}
              />
              {/* Stats overlay */}
              <div className="absolute -bottom-4 -right-4 z-20 card-gold-border rounded-sm px-6 py-4 backdrop-blur-sm"
                style={{background: 'rgba(5,5,5,0.9)'}}>
                <div className="font-bebas text-3xl gold-gradient">+6 MI</div>
                <div className="text-xs tracking-widest uppercase" style={{color: '#ffffff'}}>Seguidores</div>
              </div>
            </div>
          </div>

          {/* Right: Bio text */}
          <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <p className="section-label mb-4 text-center lg:text-left">SOBRE A MENTORA</p>
            <h2 className="font-bebas mb-6 leading-none text-center lg:text-left" style={{fontSize: 'clamp(2.46rem, 6.34vw, 6.34rem)'}}>
              <span className="gold-gradient">CLEANE </span>
              <span style={{color: 'var(--text-primary)'}}>FONTENELE</span>
            </h2>

            <div className="space-y-4 text-left" style={{color: '#ffffff', lineHeight: '1.8', fontSize: '0.97rem', textWrap: 'balance'} as React.CSSProperties}>
              <p>
                Cristã, empresária, apresentadora de televisão e especialista em Marketing Digital e Posicionamento Estratégico. Com <strong style={{color: 'var(--text-primary)'}}>17 anos de experiência</strong> em comunicação, é a criadora do Método CEV: Conteúdo, Estratégia e Vendas.
              </p>
              <p>
                Uma trajetória construída na prática, da comunicação tradicional ao marketing digital, que resultou em um método real, testado e aplicado por pessoas de todos os mercados do Brasil.
              </p>
              <p>
                Nas redes sociais é acompanhada por <strong style={{color: 'var(--text-primary)'}}>mais de 5 milhões de seguidores</strong> e soma mais de <strong style={{color: 'var(--text-primary)'}}>1 bilhão de visualizações</strong> em todas as plataformas.
              </p>
              <p>
                Seu propósito é claro: transformar presença em resultado. Conectar propósito e performance. Levar o empresário brasileiro do anonimato ao protagonismo.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {['@cleanefontenele', '@cleanementora'].map((handle) => (
                <div key={handle} className="flex flex-1 items-center justify-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{background: 'rgba(214,163,84,0.08)', border: '1px solid rgba(214,163,84,0.2)', color: 'var(--gold)'}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {handle}
                </div>
              ))}
            </div>

            {/* Roles */}
            <div className="mt-6 pt-6 flex flex-wrap gap-2" style={{borderTop: '1px solid var(--border)'}}>
              {['Agência ACEV', 'Programa Corpo e Estilo de Vida', 'Clube CleanFit'].map((role) => (
                <span key={role} className="px-3 py-1 text-xs rounded-full"
                  style={{background: 'rgba(17,17,17,0.8)', border: '1px solid var(--border)', color: '#ffffff'}}>
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
