'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'

export default function OffersSection({ data }) {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <Badge variant="outline" className="text-yellow-500 border-yellow-500/50 text-sm px-4 py-1">
              SPECIAL OFFERS
            </Badge>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Latest <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Deals</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive offers
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((offer) => (
            <Card
              key={offer.id}
              className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                {offer.expires && (
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white border-none">
                    {offer.expires}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {offer.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}