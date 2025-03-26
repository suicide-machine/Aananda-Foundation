import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Fossil Fuels Exposed",
    description:
      "Call out the fossil fuel industry with us. The David Suzuki Foundation wants to partner with you, and others from around the world, to fight against the fossil fuel industry’s harmful pollution, practices and disinformation.",
    image:
      "https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    buttonText: "LEARN MORE",
  },
  {
    title: "HOW TO STOP OIL AND GAS INDUSTRY MISINFORMATION",
    description:
      "Businesses in the oil and gas sector committing to sustainability does not equal climate action. These tips will help you spot industry’s false climate claims and misinformation.",
    image:
      "https://images.pexels.com/photos/31039333/pexels-photo-31039333/free-photo-of-elegant-barcelona-balcony-view-from-apartment.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    buttonText: "LEARN MORE",
  },
]

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    )
  }

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 text-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-700 mb-8">
            FEATURED PROJECTS
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Side (Text and Buttons) */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <button onClick={prevSlide} className="p-2 border rounded-full">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <span className="text-sm text-gray-500">
                  {String(currentIndex + 1).padStart(2, "0")} of{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <button onClick={nextSlide} className="p-2 border rounded-full">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700">
                {projects[currentIndex].title}
              </h3>
              <p className="mt-2 text-gray-600">
                {projects[currentIndex].description}
              </p>
              <button className="mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-md shadow-md hover:bg-green-800 transition">
                {projects[currentIndex].buttonText}
              </button>
            </div>

            {/* Right Side (Image Card) */}
            {projects[currentIndex].image && (
              <div className="flex-1 h-full w-full">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt="Project"
                    className="w-full h-auto max-h-80 object-cover object-center"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {projects[currentIndex].title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      {projects[currentIndex].description.slice(0, 100)}...
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-medium mt-2 inline-block"
                    >
                      LEARN MORE →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="w-full mx-auto">
        <div
          className="relative w-full h-48 md:h-64 lg:h-72 bg-cover bg-center rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-end pr-10">
            <h2 className="text-white text-lg md:text-2xl font-semibold">
              View all projects
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
