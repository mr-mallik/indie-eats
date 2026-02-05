import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Indie Eats - Bold Flavours. Late Night Cravings.',
  description: 'Premium street food in Huddersfield. Order by phone and save 10%. Burgers, pizza, wings, and more. Open late every night.',
  keywords: 'indie eats, huddersfield food, late night food, burgers, pizza, halal food, takeaway',
  openGraph: {
    title: 'Indie Eats - Bold Flavours. Late Night Cravings.',
    description: 'Premium street food in Huddersfield. Order by phone and save 10%.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}