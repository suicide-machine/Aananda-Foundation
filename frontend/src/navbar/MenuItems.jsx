const menuItems = [
  {
    id: 268,
    title: "Climate solutions",
    description:
      "Let's overcome the climate crisis and create a promising future for all.",
    link: "https://davidsuzuki.org/our-work/climate-solutions/",
    imageSmall:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/solar-farm-energy-600x360.jpg",
    imageLarge:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/solar-farm-energy-900x540.jpg",
  },
  {
    id: 27018,
    title: "Thriving nature",
    description:
      "Let’s respect, protect and restore nature so it can sustain all life.",
    link: "https://davidsuzuki.org/our-work/thriving-nature/",
    imageSmall:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/thriving-nature-1-600x360.jpg",
    imageLarge:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/thriving-nature-1-900x540.jpg",
  },
  {
    id: 27019,
    title: "Sustainable communities",
    description:
      "Let’s reimagine communities to build resilience and increase well-being.",
    link: "https://davidsuzuki.org/our-work/sustainable-communities/",
    imageSmall:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/sustainable-communities-600x360.jpg",
    imageLarge:
      "https://davidsuzuki.org/wp-content/uploads/2021/03/sustainable-communities-900x540.jpg",
  },
]

const DropdownMenu = () => {
  return (
    <div className="dropdown__menu bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_self"
            onClick={() => window.dataLayer?.push({ event: "nav0-sub1-click" })}
            className="bucket bucket--static block relative rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div
              className="w-full h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.imageSmall})`,
              }}
            ></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <span className="text-blue-600 font-semibold mt-2 inline-block">
                Learn More
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default DropdownMenu
