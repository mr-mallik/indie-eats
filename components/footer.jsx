'use client'

import { Facebook, Instagram, Twitter, Phone } from 'lucide-react'

export default function Footer({ social, badges }) {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/5254926/pexels-photo-5254926.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/90 via-orange-500/90 to-red-600/95"></div>
      </div>

      {/* Top Wavy Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-20">
        {/* Call to Action */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_25d1f7f2-af75-4451-807c-20d347c6d6af/artifacts/3f735dlj_indie-eats.png" 
              alt="Indie Eats" 
              className="h-12 md:h-16"
            />
          </div>
          <p className="font-playfair font-bold text-white text-sm md:text-lg mb-3 tracking-wide">
            Ready to Order? Call Us Now!
          </p>
          <a 
            href="tel:01484621575" 
            className="text-white font-bold text-3xl md:text-4xl lg:text-5xl hover:text-red-700 transition-colors inline-flex items-center gap-3"
          >
            <Phone className="h-8 w-8 md:h-10 md:w-10" />
            01484 621575
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-700 hover:text-amber-600 transition-all duration-300 border border-white/20"
          >
            <Facebook className="h-5 w-5 text-white" />
          </a>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-700 hover:text-amber-600 transition-all duration-300 border border-white/20"
          >
            <Instagram className="h-5 w-5 text-white" />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-700 hover:text-amber-600 transition-all duration-300 border border-white/20"
          >
            <Twitter className="h-5 w-5 text-white" />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <a href="#" className="text-white hover:text-red-700 transition-colors text-sm md:text-base font-medium">
            HOME
          </a>
          <a href="#menu" className="text-white hover:text-red-700 transition-colors text-sm md:text-base font-medium">
            MENU
          </a>
          <a href="#offers" className="text-white hover:text-red-700 transition-colors text-sm md:text-base font-medium">
            OFFERS
          </a>
          <a href="#contact" className="text-white hover:text-red-700 transition-colors text-sm md:text-base font-medium">
            CONTACT
          </a>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-white/10 backdrop-blur-sm text-white text-xs md:text-sm px-4 py-2 rounded-full border border-white/20"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-xs md:text-sm border-t border-white/10 pt-6">
          <p>&copy; {new Date().getFullYear()} Indie Eats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}