'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'O Método CEV funciona mesmo?',
    a: 'O CEV não é sobre motivação. É um processo sólido e aplicável com metodologia real de Conteúdo, Estratégia e Vendas. Quem aplica, vende. Quem não aplica, continua igual.',
  },
  {
    q: 'Como funciona o acesso após a compra?',
    a: 'Após a confirmação do pagamento, você recebe o acesso imediato no seu e-mail. É só entrar na plataforma e começar.',
  },
  {
    q: 'É possível usar 2 cartões no pagamento?',
    a: 'Sim. Pagamentos com até 2 cartões podem ser utilizados para aprovar a compra.',
  },
  {
    q: 'Qual a diferença entre o Essencial e o Completo?',
    a: 'O Essencial tem 25 módulos com o conteúdo central do método. O Completo tem 27 módulos, inclui participantes especiais, cases de sucesso, conteúdos exclusivos e o livro digital de bônus.',
  },
  {
    q: 'O que é o AI CEV?',
    a: 'É o Agente de Marketing com Inteligência Artificial disponível 24 horas. Ele gera textos, scripts, prompts, áudios, fotos, vídeos e PDFs baseados na metodologia da Cleane, tudo validado e pronto para usar.',
  },
  {
    q: 'Tem suporte e comunidade?',
    a: 'Sim. Todos os planos incluem suporte e acesso à comunidade de alunos.',
  },
  {
    q: 'O livro físico tem frete?',
    a: 'Não. O livro físico tem frete grátis para todo o Brasil.',
  },
  {
    q: 'Nunca dei certo no digital. O Método CEV funciona para mim?',
    a: 'É exatamente por isso que você precisa do CEV. Sem método, sem estratégia, sem resultado. Com o CEV você aprende o caminho, e o caminho funciona.',
  },
  {
    q: 'Tenho medo de investir e não ter retorno...',
    a: 'Esse medo já te custou mais do que qualquer investimento. Você consegue calcular quantas vendas você perdeu por não ter posicionamento, estratégia e conteúdo que converte? O CEV te dá as ferramentas. O que você faz com elas, é com você.',
  },
  {
    q: 'Por onde devo começar, pelo livro ou pelo curso?',
    a: 'Se você ainda está conhecendo o método, o e-book é uma ótima porta de entrada por R$ 37. Se você quer resultado agora, vá direto para o Essencial ou o Completo.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-28 relative mesh-bg">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-label mb-4">TIRE SUAS DÚVIDAS</p>
          <h2 className="font-bebas" style={{fontSize: 'clamp(2.11rem, 4.93vw, 4.93rem)', color: 'var(--text-primary)'}}>
            Dúvidas{' '}
            <span className="gold-gradient">frequentes</span>
          </h2>
        </div>

        <div className="space-y-0" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="w-full text-left py-6 flex items-center justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-base group-hover:text-yellow-300 transition-colors"
                  style={{color: open === i ? 'var(--gold)' : 'var(--text-primary)'}}>
                  {faq.q}
                </span>
                <div className="flex-shrink-0 w-7 h-7 rounded-sm flex items-center justify-center transition-all duration-300"
                  style={{
                    background: open === i ? 'rgba(214,163,84,0.15)' : 'rgba(255,255,255,0.04)',
                    border: open === i ? '1px solid rgba(214,163,84,0.4)' : '1px solid var(--border)',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke={open === i ? '#D6A354' : '#777'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-48 pb-6' : 'max-h-0'}`}>
                <p style={{color: 'var(--text-secondary)', lineHeight: '1.7'}}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
