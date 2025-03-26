import React from "react"

const RainbowCommunityCare = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header with proper capitalization */}
        <h3 className="text-sm md:text-sm font-bold text-blue-800 mb-8 text-left">
          What Is Rainbow Community Care?
        </h3>

        {/* Left-aligned paragraphs with improved spacing */}
        <div className="space-y-6 text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded by volunteers in 1990, Rainbow Community Care provides
            services that support patients and families throughout the entire
            journey with aging, serious illness, and loss.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Highly regarded for excellence in hospice care, palliative care,
            advance care planning, grief support, parish nursing, and volunteer
            programs, we care for people living in their homes, assisted living
            facilities, nursing homes, and at the Rainbow Hospice Care Inpatient
            Center in Johnson Creek.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg leading-relaxed">
              Rainbow Community Care is dedicated to improving the overall
              health of the communities we serve in rural southern Wisconsin.
            </p>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Guiding our day-to-day work at Rainbow is a set of values centered
            around caring for the most vulnerable people living among us. We are
            here to serve you with the core belief that this is your life and
            your journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RainbowCommunityCare
