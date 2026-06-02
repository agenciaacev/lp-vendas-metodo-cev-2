import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Método CEV: Conteúdo · Estratégia · Vendas | Cleane Fontenele',
  description: 'O método que transforma conteúdo em vendas. Conheça o Método CEV de Cleane Fontenele e descubra como crescer no digital com estratégia e resultado.',
  keywords: 'Método CEV, Cleane Fontenele, marketing digital, conteúdo, estratégia, vendas',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
