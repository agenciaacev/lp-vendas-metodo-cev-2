'use client'

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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
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
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="section-label mb-2">COMECE PELO LIVRO DIGITAL</p>
          <h2 className="font-bebas" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', color: 'var(--text-primary)'}}>
            Livro{' '}
            <span className="gold-gradient">Conteúdo · Estratégia · Vendas</span>
            <br />7 Continentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            Um guia direto ao ponto para você entender como se posicionar, comunicar com clareza e transformar seguidores em clientes. Mais que um livro, uma visão viva, prática e atual sobre como usar conteúdo com estratégia para vender todos os dias, em qualquer mercado.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
            {books.map((book, i) => (
              <div
                key={i}
                className="card-gold-border rounded-2xl p-8 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex items-center justify-between mb-4">
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

                <h3 className="font-bebas text-xl mb-1" style={{color: 'var(--text-primary)', fontSize: '1.5rem'}}>
                  {book.name}
                </h3>
                <p className="text-xs mb-6" style={{color: 'var(--text-muted)'}}>{book.subtitle}</p>

                <div className="font-bebas text-5xl gold-gradient mb-6">{book.price}</div>

                <ul className="space-y-3 flex-1 mb-6">
                  {book.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{color: 'var(--text-secondary)'}}>
                      <CheckIcon />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a href="#" className="btn-gold w-full py-3.5 text-sm rounded-full text-center block mb-3">
                  {book.cta}
                </a>
                <p className="text-center text-xs" style={{color: 'var(--text-muted)'}}>{book.footer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  )
}
