'use client'
import Image from 'next/image'

const books = [
  {
    tag: 'E-BOOK',
    name: 'Versão Digital',
    subtitle: 'Acesso imediato após a compra',
    price: 'R$ 37,00',
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="rgba(214,163,84,0.15)" stroke="rgba(214,163,84,0.4)" strokeWidth="1"/>
      <path d="M5 8l2 2 4-4" stroke="#D6A354" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function ProductsSection() {
  return (
    <section className="py-28 relative" style={{background: 'var(--bg-secondary)'}}>
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-label mb-2">COMECE PELO LIVRO</p>
          <h2 className="font-bebas" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', color: 'var(--text-primary)', lineHeight: '1.1'}}>
            Livro <span className="gold-gradient">Conteúdo · Estratégia · Vendas</span><br />
            7 Continentes
          </h2>
        </div>

        {/* Main layout: book image left + cards right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Book image */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="900">
            <div className="relative">
              {/* Glow behind book */}
              <div className="absolute inset-0 rounded-lg"
                style={{background: 'radial-gradient(ellipse at center, rgba(214,163,84,0.25) 0%, transparent 70%)', filter: 'blur(40px)', transform: 'scale(1.2)'}} />
              <Image
                src="/livro.webp"
                alt="Livro Método CEV"
                width={420}
                height={540}
                className="relative z-10 object-contain"
                style={{
                  borderRadius: '6px',
                  border: '2px solid rgba(214,163,84,0.3)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(214,163,84,0.1)',
                  maxHeight: '70vh',
                  width: 'auto',
                }}
              />
              {/* Badge */}
              <div className="absolute -top-4 -right-4 z-20 font-bebas text-xs px-4 py-2 rounded-full"
                style={{background: 'linear-gradient(135deg, #9A6A2F, #D6A354)', color: '#050505', letterSpacing: '0.1em'}}>
                BEST-SELLER
              </div>
            </div>
          </div>

          {/* RIGHT: Description + cards */}
          <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">
            <p className="mb-8 leading-relaxed" style={{color: '#ffffff', fontSize: '1rem'}}>
              Um guia direto ao ponto para você entender como se posicionar, comunicar com clareza e transformar seguidores em clientes. Mais que um livro — uma visão viva, prática e atual sobre como usar conteúdo com estratégia para vender todos os dias, em qualquer mercado.
            </p>

            <div className="space-y-4">
              {books.map((book, i) => (
                <div
                  key={i}
                  className="card-gold-border rounded-2xl p-6"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="section-label text-[0.65rem] px-2 py-1 rounded-full"
                      style={{background: 'rgba(214,163,84,0.08)', border: '1px solid rgba(214,163,84,0.2)'}}>
                      {book.tag}
                    </div>
                    {book.highlight && (
                      <div className="px-2 py-1 text-xs font-bold rounded-full"
                        style={{background: 'rgba(0,180,80,0.15)', color: '#00B450', border: '1px solid rgba(0,180,80,0.3)'}}>
                        {book.highlight}
                      </div>
                    )}
                  </div>

                  <h3 className="font-bebas text-center mb-3 w-full" style={{color: 'var(--text-primary)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)'}}>{book.name}</h3>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-10">
                    <div>
                      <p className="text-xs mb-2 text-center sm:text-left" style={{color: '#ffffff'}}>{book.subtitle}</p>
                      <ul className="space-y-1.5">
                        {book.features.map((feat, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs justify-center sm:justify-start" style={{color: '#ffffff'}}>
                            <CheckIcon />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center sm:text-right shrink-0">
                      <div className="font-bebas text-5xl gold-gradient leading-none mb-3">{book.price}</div>
                      <a href="#" className="btn-gold px-5 py-2.5 text-xs rounded-full text-center block whitespace-nowrap">
                        {book.cta}
                      </a>
                    </div>
                  </div>

                  <p className="text-center text-[0.65rem] mt-3" style={{color: 'rgba(255,255,255,0.5)'}}>{book.footer}</p>
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
