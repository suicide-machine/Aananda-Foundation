import React from "react"

const EducationPhilosophy = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We believe that education is both the means as well as the end to a
            better life
          </h2>

          <div className="space-y-6 text-gray-700">
            <p>
              The means because it empowers an individual to earn his/her
              livelihood and the end because it increases one's awareness on a
              range of issues – from healthcare to appropriate social behaviour
              to understanding one's rights – and in the process help him/her
              evolve as a better citizen.
            </p>
            <p>
              Education is the most effective tool which helps children build a
              strong foundation: enabling them to free themselves from the
              vicious cycle of ignorance, poverty and disease.
            </p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            BUT while working on the ground, we realised that child education
            cannot be done in isolation, without ensuring the welfare of the
            whole family.
          </p>
          <div className="space-y-4 text-gray-700">
            <p>
              Health is also a part of education. A child will not go to school
              if he is sick. If a child's parents are afflicted with health
              problems, he might drop-out of school and start earning instead.
              Unless the mother is healthy and empowered, the child cannot be
              either. It is all interlinked.
            </p>
            <p>
              Our other programmes evolved as a logical progression to our
              education programme – be it livelihood, health or women
              empowerment. Today, children and education continue to remain at
              the centre of all we do, but through the lifecycle approach we
              also address the needs of the children's families and communities.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "APPROPRIATE SOCIAL BEHAVIOUR",
            "BETTER UNDERSTANDING OF RIGHTS",
            "AN EMPOWERED AND AWARE CITIZEN",
            "EMPOWERED MOTHERS",
            "EDUCATION",
            "RELATED OPPORTUNITIES FOR LEARNING",
            "HEALTHY CHILD",
            "HEALTHY COMMUNITIES",
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 text-center">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationPhilosophy
