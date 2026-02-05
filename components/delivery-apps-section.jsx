'use client'

export default function DeliveryAppsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f0a] to-black relative overflow-hidden">
      {/* Top Wavy Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - App Buttons */}
            <div className="flex flex-col gap-6 justify-center">
                <div className="mb-12">
                <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 mb-4">
                    ORDER ON DEMAND
                </h2>
                <p className="text-white text-xl md:text-2xl mb-2">
                    SAVE UP TO 10% ON direct orders!
                </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-start max-w-md">
                    <a
                        href="https://www.ubereats.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl transition-all duration-300 hover:scale-105 p-3 shadow-lg"
                    >
                        <img width="80" height="80" src="https://img.icons8.com/ios-filled/100/uber-eats-app.png" alt="uber-eats-app" className="w-20 h-20"/>
                    </a>

                    <a
                        href="https://deliveroo.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl transition-all duration-300 hover:scale-105 p-3 shadow-lg"
                    >
                        <img width="80" height="80" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-deliveroo-a-british-online-food-delivery-company-industry-color-tal-revivo.png" alt="deliveroo" className="w-20 h-20"/>
                    </a>
                    <a
                        href="https://just-eat.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl transition-all duration-300 hover:scale-105 p-3 shadow-lg"
                    >
                        <img width="80" height="80" src="https://img.icons8.com/color/480/just-eat.png" alt="just-eat" className="w-20 h-20"/>
                    </a>
                </div>
            </div>

            {/* Right Side - Phone Mockup with Food */}
            <div className="relative flex justify-center items-center min-h-[500px]">
              {/* Food Images around phone */}
              <img
                src="https://pngimg.com/d/burger_sandwich_PNG4135.png"
                alt="Tomatoes"
                className="absolute top-0 left-0 w-32 z-10"
              />
              
              <img
                src="https://pngimg.com/d/burger_sandwich_PNG4135.png"
                alt="Fries"
                className="absolute bottom-0 right-0 w-40 z-10"
              />
              
              <img
                src="https://pngimg.com/d/pizza_PNG44095.png"
                alt="Burger"
                className="absolute bottom-20 left-10 w-48 z-10"
              />

              {/* Phone Mockup */}
              <div className="relative z-20">
                <div className="relative w-64 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                        <h3 className="text-white font-bold text-2xl mb-2">Home Delivery</h3>
                        <p className="text-white/90 text-sm">Order Now</p>
                      </div>
                    </div>
                    
                    {/* App Icons Mockup */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl"></div>
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl"></div>
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-xl"></div>
                    </div>
                  </div>
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl"></div>
                </div>
              </div>

              {/* Coca-Cola Can */}
              <img
                src="https://pngimg.com/d/pizza_PNG44095.png"
                alt="Coca Cola"
                className="absolute top-20 right-0 w-24 z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wavy Border */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#000000"></path>
        </svg>
      </div>
    </section>
  )
}