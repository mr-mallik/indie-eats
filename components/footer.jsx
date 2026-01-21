'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Footer({ social, badges }) {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="container mx-auto px-4">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-yellow-500 border-yellow-500/50 text-sm px-4 py-2"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <Twitter className="h-5 w-5 text-white" />
          </a>
        </div>

        {/* Brand */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-black text-white mb-2">
            Indie <span className="text-red-500">Eats</span>
          </h3>
          <p className="text-gray-500 text-sm">
            Bold flavours. Late night cravings.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Indie Eats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}