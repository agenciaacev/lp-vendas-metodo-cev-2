'use client'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer style={{background: 'var(--bg-primary)', borderTop: '1px solid var(--border)'}}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/logo-principal.webp" alt="Método CEV" width={80} height={80} style={{width: 'auto', height: '60px'}} />
          <div className="text-center">
            <p className="text-xs mb-1" style={{color: '#555555'}}>
              Cleane Fontenele 2026 | Todos os Direitos Reservados
            </p>
            <p className="text-xs" style={{color: '#333333'}}>
              CONTEÚDO · ESTRATÉGIA · VENDAS
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-xs transition-colors hover:text-yellow-400" style={{color: '#555555'}}>
              Política de Privacidade
            </a>
            <a href="#" className="text-xs transition-colors hover:text-yellow-400" style={{color: '#555555'}}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
