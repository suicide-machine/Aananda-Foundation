import { Link } from "react-router-dom"

export default function ActOnline() {
  const petitions = [
    {
      title: "Make Election 2025 count for people and the planet",
      image:
        "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      title: "People and planet, NOT polluter profits!",
      image:
        "https://images.pexels.com/photos/929385/pexels-photo-929385.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
    {
      title: "Help create sustainable communities",
      image:
        "https://images.pexels.com/photos/3884154/pexels-photo-3884154.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "#",
    },
  ]

  return (
    <section className="py-16 px-6 text-gray-700 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 uppercase">
          Our Fellows
        </h2>
        <p className="text-xl text-blue-700 mt-2">Your voice matters</p>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Political leaders earn their positions from votes. They care about
          public opinion and keep close tabs on issues constituents raise in
          letters, meetings, phone calls, and the editorial pages of local
          papers.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-green-700 text-white font-semibold !rounded-md shadow-md hover:bg-green-800 transition">
            <a href="https://google.com" target="_blank" className="text-white">
              <span className="text-white">Apply For Fellowship</span>
            </a>
          </button>
        </div>
      </div>

      {/* Petition Cards - Fixed Image Height */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-wrap justify-center md:justify-between gap-6">
        {petitions.map((petition, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 flex flex-col w-full md:w-[30%]"
          >
            {/* Image Container with Fixed Height */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={petition.image}
                alt={petition.title} // Better alt text
                className="w-full h-full object-cover bg-amber-200"
                loading="lazy" // Lazy loading for performance
              />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                SIGN A PETITION
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col">
              <h4 className="text-sm font-semibold text-blue-600 line-clamp-3">
                {petition.title}
              </h4>
              <a
                href={petition.link}
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
