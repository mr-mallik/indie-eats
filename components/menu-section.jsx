'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function MenuSection({ data }) {
  const [activeTab, setActiveTab] = useState(0)
  const [featuredItem, setFeaturedItem] = useState(data.categories[0]?.items[0])

  const currentCategory = data.categories[activeTab]

  return (
    <section id="menu" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Menu</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {data.categories.map((category, index) => {
            const isNew = ['Dosas', 'Rice Box', 'Chaats'].includes(category.name)
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index)
                  setFeaturedItem(category.items[0])
                }}
                className={`relative font-playfair text-lg md:text-xl transition-all duration-300 ${
                  activeTab === index
                    ? 'text-white border-b-2 border-amber-500 pb-1'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {category.name}
                {isNew && (
                  <span className="absolute -top-2 -right-8 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[10px] font-bold px-1 py-0.4 rounded-full">
                    NEW
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Featured Daily Dish */}
          <div className="relative group">
            <div className="relative h-[600px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={currentCategory.image}
                alt={currentCategory.name}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Featured Item Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                  <p className="text-white/80 text-sm uppercase tracking-wider">Daily Dish</p>
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
                  {featuredItem?.name || currentCategory.items[0]?.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6 max-w-md">
                  {featuredItem?.description || currentCategory.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-amber-500 font-bold text-2xl">
                    £{(featuredItem?.price || currentCategory.items[0]?.price)?.toFixed(2)}
                  </span>
                  {featuredItem?.size && (
                    <span className="text-gray-400 text-sm">{featuredItem.size}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="relative">
            <div className="max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-6">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setFeaturedItem(item)}
                    className="cursor-pointer group/item hover:bg-white/5 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-playfair text-xl font-semibold text-white mb-2 group-hover/item:text-amber-500 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-2">
                          {item.description}
                        </p>
                        {item.size && (
                          <p className="text-gray-500 text-xs">{item.size}</p>
                        )}
                      </div>
                      
                      {/* Dotted Line */}
                      <div className="flex-1 border-b-2 border-dotted border-gray-700 mb-6 mx-4"></div>
                      
                      <div className="text-right">
                        <p className="text-amber-500 font-bold text-xl">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* See All Button */}
            {/* <div className="text-center mt-8">
              <Button
                className="bg-white text-black hover:bg-gray-200 px-12 py-6 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              >
                See All
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.7);
        }
      `}</style>
    </section>
  )
}