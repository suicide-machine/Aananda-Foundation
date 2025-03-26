import React from "react"

const HeroBanner = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://davidsuzuki.org/wp-content/uploads/2021/03/solar-farm-energy-900x540.jpg')",
        }}
      >
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content container with max-width */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Celebrate his tireless work for a better world with a gift to
            support critical climate work. Give before midnight March 24 to get
            your gift matched!
          </p>

          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            MY BIRTHDAY GIFT FOR DAVID'S 89TH
          </button>
        </div>

        {/* Scroll indicator with animation */}
        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
          <span className="text-white text-sm block mt-1">SCROLL</span>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
