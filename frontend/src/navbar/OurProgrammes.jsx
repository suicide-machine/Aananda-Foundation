import React from "react"

const programs = [
  {
    title: "EDUCATION",
    description: "Education, nutrition and holistic development of children",
    icon: "📖",
    color: "text-yellow-600",
  },
  {
    title: "HEALTHCARE",
    description:
      "Taking healthcare services to doorsteps of hard-to-reach communities",
    icon: "💜",
    color: "text-purple-600",
  },
  {
    title: "WOMEN EMPOWERMENT",
    description:
      "Empowering adolescent girls & women through community engagement",
    icon: "✊",
    color: "text-teal-600",
  },
  {
    title: "LIVELIHOOD",
    description:
      "Skill training and placement support for underprivileged youth",
    icon: "📜",
    color: "text-orange-600",
  },
  {
    title: "EMPOWERING GRASSROOTS",
    description:
      "Helping community-based organizations become locally sustainable",
    icon: "🌱",
    color: "text-green-600",
  },
  {
    title: "DISASTER RESPONSE",
    description:
      "Reach out and respond to the needs of the disaster-affected people",
    icon: "🚨",
    color: "text-red-600",
  },
]

const OurProgrammes = () => {
  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="text-center max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-black uppercase">
          Our Programmes
        </h2>
        {/* ✅ FIXED: Using Flexbox to ensure correct row-wise placement */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-8 pt-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] flex items-start gap-4"
            >
              <div className={`p-3 text-4xl ${program.color}`}>
                {program.icon}
              </div>
              <div className="text-left">
                <h3 className={`text-lg font-bold uppercase ${program.color}`}>
                  {program.title}
                </h3>
                <p className="text-gray-700">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProgrammes
