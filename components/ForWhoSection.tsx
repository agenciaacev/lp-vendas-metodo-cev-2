'use client'
import Image from 'next/image'

const pillars = [
  {
    letter: '',
    symbol: '✦',
    label: 'Conteúdo',
    image: '/conteudo.png',
    text: 'Você aprende a criar conteúdo com intenção: cada post com um papel específico dentro da jornada do cliente. Fim do conteúdo aleatório que não leva a lugar nenhum.',
  },
  {
    letter: '',
    symbol: '◆',
    label: 'Estratégia',
    image: '/estrategia.png',
    text: 'Posicionamento, calendário editorial, análise de mercado e construção de autoridade. Você passa a entender o jogo inteiro, não apenas o próximo post.',
  },
  {
    letter: '',
    symbol: '▲',
    label: 'Vendas',
    image: '/vendas.png',
    text: 'Técnicas de conversão, estrutura de oferta, gatilhos e CTAs que funcionam. Porque conteúdo sem venda não paga conta.',
  },
]

export default function ForWhoSection() {
  return (
    <section className="py-28 mesh-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="section-label mb-4">O FRAMEWORK</p>
          <h2 className="font-bebas gold-gradient mb-4" style={{fontSize: 'clamp(2.11rem, 4.22vw, 4.22rem)', lineHeight: '1.15'}}>
            VOCÊ PRODUZ CONTEÚDO.<br />
            MAS NÃO VÊ DINHEIRO
          </h2>
          <p className="max-w-2xl mx-auto" style={{color: '#ffffff', lineHeight: '1.8'}}>
            O método CEV resolve exatamente isso do primeiro post à primeira venda. três letras. um sitema. zero achismos
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className="relative rounded-3xl overflow-hidden group"
              style={{border: '1px solid rgba(214,163,84,0.2)'}}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Image — natural dimensions, no crop */}
              <div className="relative" style={{maxHeight: '540px', overflow: 'hidden'}}>
                <Image
                  src={pillar.image}
                  alt={pillar.label}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay at bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
                  }}
                />

                {/* Caption / legend at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span style={{color: 'var(--gold)'}}>{pillar.symbol}</span>
                    <p className="font-bebas tracking-widest uppercase"
                      style={{color: 'var(--gold)', lineHeight: 1, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', textShadow: '0 0 20px rgba(214,163,84,0.5)'}}>
                      {pillar.letter} {pillar.label}
                    </p>
                    <span style={{color: 'var(--gold)'}}>{pillar.symbol}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.82)', textShadow: '0 1px 6px rgba(0,0,0,1), 0 2px 16px rgba(0,0,0,1), 0 4px 32px rgba(0,0,0,0.95)'}}>
                    {pillar.text}
                  </p>

                  {/* Bottom gold line on hover */}
                  <div className="mt-4 h-px mx-auto w-0 group-hover:w-full transition-all duration-500"
                    style={{background: 'linear-gradient(90deg, transparent, var(--gold), transparent)'}} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
