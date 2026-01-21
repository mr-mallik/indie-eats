'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection({ data }) {
  const handleCall = () => {
    window.location.href = `tel:${data.phone}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.heroImage}
          alt="Indie Eats Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Offer Badge */}
        <div className="inline-block mb-6 animate-pulse">
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-full border border-red-400/50 shadow-lg shadow-red-500/50">
            <p className="text-white font-bold text-sm md:text-base tracking-wide">
              {data.offerHighlight}
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
          <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
            {data.headline}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light tracking-wide">
          {data.subheadline}
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleCall}
          size="lg"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-red-500/50 hover:shadow-red-600/60 transition-all duration-300 hover:scale-105 border-2 border-red-400/30"
        >
          <Phone className="mr-3 h-6 w-6" />
          {data.cta}
        </Button>

        {/* Phone Number */}
        <p className="mt-8 text-gray-400 text-lg">
          Call us: <span className="text-white font-bold text-2xl">{data.phone}</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}