import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Indie Eats - Bold Flavours. Late Night Cravings. | Huddersfield Takeaway',
  description: 'Premium street food in Huddersfield. Order by phone and save 10%. Burgers, pizza, wings, loaded fries and more. Open late every night. Available on Uber Eats, Deliveroo & Just Eat.',
  keywords: 'indie eats, huddersfield food, late night food, burgers, pizza, halal food, takeaway, uber eats, deliveroo, just eat, huddersfield takeaway, loaded fries, wings',
  authors: [{ name: 'Indie Eats' }],
  creator: 'Indie Eats',
  publisher: 'Indie Eats',
  metadataBase: new URL('https://indie-eats-uk.vercel.app/'),
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    title: 'Indie Eats - Bold Flavours. Late Night Cravings.',
    description: 'Premium street food in Huddersfield. Order by phone and save 10%. Burgers, pizza, wings, loaded fries and more.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://indie-eats-uk.vercel.app/',
    siteName: 'Indie Eats',
    images: [
      {
        url: '/favicon/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Indie Eats - Bold Flavours. Late Night Cravings.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indie Eats - Bold Flavours. Late Night Cravings.',
    description: 'Premium street food in Huddersfield. Order by phone and save 10%.',
    images: ['/favicon/web-app-manifest-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Indie Eats',
    description: 'Premium street food in Huddersfield. Order by phone and save 10%. Burgers, pizza, wings, loaded fries and more. Open late every night.',
    image: '/favicon/web-app-manifest-512x512.png',
    '@id': 'https://indie-eats-uk.vercel.app/',
    url: 'https://indie-eats-uk.vercel.app/',
    telephone: '+441484621575',
    priceRange: '£',
    servesCuisine: ['Fast Food', 'Indian', 'Pizza', 'Burgers', 'Halal'],
    acceptsReservations: 'False',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '22 Newsome Rd',
      addressLocality: 'Huddersfield',
      postalCode: 'HD4 6NY',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.6280,
      longitude: -1.7766
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '16:00',
        closes: '23:45'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '16:00',
        closes: '22:45'
      }
    ],
    menu: 'https://indie-eats.co.uk/#menu',
    hasMenu: {
      '@type': 'Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Burgers',
          description: 'Served with chips'
        },
        {
          '@type': 'MenuSection',
          name: 'Pizza',
          description: 'Stone-baked perfection'
        },
        {
          '@type': 'MenuSection',
          name: 'Loaded Box',
          description: 'Boxes packed with flavour'
        }
      ]
    },
    sameAs: [
      'https://www.ubereats.com/store/indie-eats/ZWI0dk03Q_6bPoTmAUu3KQ',
      'https://deliveroo.co.uk/menu/leeds/huddersfield/indie-eats',
      'https://www.just-eat.co.uk/restaurants-indie-eats-newsome/menu'
    ]
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${montserrat.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}