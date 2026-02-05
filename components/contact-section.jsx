'use client'

import { Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactSection({ data }) {
  const handleCall = () => {
    window.location.href = `tel:${data.phone}`
  }

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready to <span className="text-amber-500">Order?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Call us now and get 10% off your order
          </p>
          <Button
            onClick={handleCall}
            size="lg"
            className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-black px-12 py-6 text-xl font-bold rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-600/60 transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-3 h-6 w-6" />
            Call {data.phone}
          </Button>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Phone */}
          <Card className="backdrop-blur-sm bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Phone className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{data.phone}</p>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="backdrop-blur-sm bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300">{data.address}</p>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card className="backdrop-blur-sm bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                <Clock className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-2">Opening Hours</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon-Sat: {data.hours.monday}</p>
                <p>Sun: {data.hours.sunday}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/[0.02] border border-white/10 overflow-hidden">
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