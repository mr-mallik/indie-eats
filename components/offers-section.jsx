'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function OffersSection({ data }) {
  return (
    <section id="offers" className="py-32 bg-black relative overflow-hidden">
      {/* Pizza Background - positioned at bottom right */}
       <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/33592985/pexels-photo-33592985.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
             Special <span className="text-amber-500">Offers</span>
          </h2>
        </div>

        {/* Offers Row */}
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {data.map((offer, index) => (
            <div
              key={offer.id}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="relative backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-visible">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Food Image - Floating Effect */}
                  <div className={`relative h-64 md:h-80 flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative w-full h-full">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
                        style={{
                          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white">
                      {offer.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {offer.description}
                    </p>
                    
                    {offer.expires && (
                      <div className="inline-block">
                        <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider border border-amber-500/30 px-4 py-2 rounded-full">
                          {offer.expires}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4">
                      <Button
                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Order Now
                      </Button>
                      <button className="w-12 h-12 rounded-full border-2 border-amber-500/50 flex items-center justify-center text-amber-500 hover:bg-amber-500/10 transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}