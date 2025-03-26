import React from "react"

const AnotherPara = () => {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-gray-50 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header with Stylish Underline */}
        <h3 className="text-lg md:text-xl font-extrabold text-green-800 mb-8 text-left relative inline-block">
          🌿 What Is Hope Health Services?
          <span className="absolute left-0 bottom-0 w-12 h-1 bg-green-600 rounded-md"></span>
        </h3>

        {/* Left-aligned content with improved aesthetics */}
        <div className="space-y-6 text-left">
          <p className="text-gray-800 text-lg leading-relaxed">
            Established in{" "}
            <span className="font-semibold text-green-700">2005</span>,{" "}
            <span className="font-bold text-green-800">
              Hope Health Services
            </span>{" "}
            is committed to delivering compassionate healthcare solutions 💖
            that enhance the well-being of individuals and families facing
            medical challenges.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            We specialize in:
          </p>

          {/* Key Points Section */}
          <ul className="list-none space-y-3">
            <li className="text-lg text-gray-700 flex items-center">
              ✅{" "}
              <span className="ml-2 font-medium text-green-700">
                Home Healthcare
              </span>{" "}
              🏡 - Personalized care in the comfort of your home.
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              ✅{" "}
              <span className="ml-2 font-medium text-green-700">
                Chronic Disease Management
              </span>{" "}
              💊 - Specialized support for long-term illnesses.
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              ✅{" "}
              <span className="ml-2 font-medium text-green-700">
                Rehabilitation Services
              </span>{" "}
              🏥 - Helping patients regain independence.
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              ✅{" "}
              <span className="ml-2 font-medium text-green-700">
                Mental Health Support
              </span>{" "}
              🧠 - Providing emotional and psychological care.
            </li>
            <li className="text-lg text-gray-700 flex items-center">
              ✅{" "}
              <span className="ml-2 font-medium text-green-700">
                Holistic Wellness Programs
              </span>{" "}
              🌱 - Promoting overall well-being through lifestyle care.
            </li>
          </ul>

          {/* Highlighted Section with Drop Shadow & Border Animation */}
          <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500 shadow-lg transition-all duration-300 hover:border-green-700 hover:shadow-2xl">
            <p className="text-gray-900 text-lg leading-relaxed">
              🌍{" "}
              <span className="font-semibold text-green-700">
                Hope Health Services
              </span>{" "}
              is dedicated to creating a healthier, happier community by
              prioritizing{" "}
              <span className="font-bold text-green-800">
                patient-centered care
              </span>{" "}
              and innovative medical solutions.
            </p>
          </div>

          <p className="text-gray-800 text-lg leading-relaxed">
            Our mission is to ensure **accessible and high-quality healthcare**
            for all, guided by:
          </p>

          {/* Mission Values */}
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>💖 **Compassion** - Care with empathy and kindness.</li>
            <li>🛡️ **Integrity** - Upholding trust and transparency.</li>
            <li>
              🚀 **Excellence** - Striving for the highest quality service.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AnotherPara
