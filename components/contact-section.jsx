'use client'

import { Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactSection({ data }) {
  const handleCall = () => {
    window.location.href = `tel:${data.phone}`
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Ready to <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Order?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Call us now and get 10% off your order
          </p>
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-red-500/50 hover:shadow-red-600/60 transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-3 h-6 w-6" />
            Call {data.phone}
          </Button>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Phone */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <Phone className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">{data.phone}</p>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-400">{data.address}</p>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <Clock className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mon-Sat: {data.hours.monday}</p>
                <p>Sun: {data.hours.sunday}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=22+Newsome+Rd,+Huddersfield+HD4+6NY&zoom=15`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}