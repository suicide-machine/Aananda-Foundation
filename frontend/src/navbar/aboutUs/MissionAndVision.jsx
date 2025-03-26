const MissionAndVision = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
      {/* Image Column - Now on the right side */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[400px]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Our team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent"></div>
        </div>
      </div>

      {/* Content Column - Now on the left side */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 p-4">
        {/* Mission Box */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start hover:bg-gray-50 transition-colors duration-200">
          <div className="bg-blue-50 p-4 rounded-lg mr-4 flex-shrink-0">
            <svg
              className="w-8 h-8 text-blue-600" // Larger icon size
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses through innovative technology solutions that
              drive growth, efficiency, and exceptional customer experiences.
            </p>
          </div>
        </div>

        {/* Vision Box */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start hover:bg-gray-50 transition-colors duration-200">
          <div className="bg-blue-50 p-4 rounded-lg mr-4 flex-shrink-0">
            <svg
              className="w-8 h-8 text-blue-600" // Larger icon size
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted partner for digital transformation,
              recognized globally for our commitment to excellence and positive
              impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionAndVision
