'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import OffersSection from '@/components/offers-section'
import MenuSection from '@/components/menu-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/content.json')
      .then(res => res.json())
      .then(data => {
        setContent(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load content:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4" />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-xl">Failed to load content</p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black">
      <Header phone={content.contact.phone} />
      <HeroSection data={content.hero} />
      <OffersSection data={content.offers} />
      <MenuSection data={content.menu} />
      <ContactSection data={content.contact} />
      <Footer social={content.social} badges={content.badges} />
    </main>
  )
}