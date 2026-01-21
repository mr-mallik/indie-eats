'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function MenuSection({ data }) {
  const [openCategory, setOpenCategory] = useState(0)

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? -1 : index)
  }

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-red-500 border-red-500/50 text-sm px-4 py-1 mb-4">
            OUR MENU
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Explore Our <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Flavours</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every dish crafted with passion and premium ingredients
          </p>
        </div>

        {/* Menu Categories */}
        <div className="max-w-4xl mx-auto space-y-4">
          {data.categories.map((category, index) => (
            <Card
              key={index}
              className={`bg-zinc-900/80 border-zinc-800 backdrop-blur-sm transition-all duration-300 ${
                openCategory === index ? 'border-red-500/50 shadow-lg shadow-red-500/10' : ''
              }`}
            >
              <CardHeader
                className="cursor-pointer hover:bg-zinc-800/50 transition-colors"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {category.image && (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <CardTitle className="text-2xl font-bold text-white">
                        {category.name}
                      </CardTitle>
                      {category.description && (
                        <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-red-500">
                    {openCategory === index ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </div>
                </div>
              </CardHeader>

              {openCategory === index && (
                <CardContent className="pt-0 pb-6">
                  <div className="space-y-4 mt-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700/50"
                      >
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                          )}
                          {item.size && (
                            <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                              {item.size}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-xl font-bold text-red-500">
                            £{item.price.toFixed(2)}
                          </p>
                          {item.size && (
                            <p className="text-xs text-gray-500">from</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}