'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection({ data }) {
  const handleCall = () => {
    window.location.href = `tel:${data.phone}`
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.heroImage}
          alt="Signature Dish"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0f0a]/100 via-[#1a0f0a]/40 to-[#1a0f0a]/0" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-32 lg:py-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <div className="space-y-8 lg:space-y-10">
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-amber-50 leading-tight">
              {data.headline}
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-amber-100/80 leading-relaxed max-w-xl font-light">
              {data.subheadline}
            </p>

            <Button
              onClick={handleCall}
              size="lg"
              className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-black font-semibold px-10 py-7 text-lg rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              {data.cta}
            </Button>

            {/* Contact Info */}
            {/* <div className="flex items-center gap-8 pt-6 border-t border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-amber-100/60 uppercase tracking-wider">Guest</p>
                  <p className="text-amber-50 font-semibold">{data.phone}</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}