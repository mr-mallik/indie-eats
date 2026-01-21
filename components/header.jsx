'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header({ phone }) {
  const handleCall = () => {
    window.location.href = `tel:${phone}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_25d1f7f2-af75-4451-807c-20d347c6d6af/artifacts/3f735dlj_indie-eats.png" 
            alt="Indie Eats" 
            className="h-12 md:h-16"
          />
        </div>

        {/* Call Button */}
        <Button
          onClick={handleCall}
          size="sm"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-bold rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-600/40 transition-all duration-300"
        >
          <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          {phone}
        </Button>
      </div>
    </header>
  )
}
