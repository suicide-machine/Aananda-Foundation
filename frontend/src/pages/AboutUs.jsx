import React from "react"
import RainbowCommunityCare from "../navbar/aboutUs/RainbowCommunityCare"
import HeroBanner from "../navbar/aboutUs/HeroBanner"
import MissionAndVision from "../navbar/aboutUs/MissionAndVision"
import MeetOurLeadership from "../navbar/aboutUs/MeetOurLeadership"
import AnotherPara from "../navbar/aboutUs/AnotherPara"

const AboutUs = () => {
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <HeroBanner />

      <RainbowCommunityCare />
      <RainbowCommunityCare />

      <MissionAndVision />

      <AnotherPara />

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 w-full">
          {/* Our Story Section */}
          {/* <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-24 h-1.5 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 w-full mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos inventore magni quam exercitationem fugiat est dolores
              delectus perferendis voluptatum eius quae id corporis unde ex
              saepe, tempore facere suscipit qui dolore? In nulla reiciendis
              neque ipsam aliquid et voluptatem accusamus inventore itaque
              dignissimos perspiciatis adipisci mollitia pariatur sequi magni
              aut, libero cupiditate quisquam exercitationem hic? Libero
              laboriosam, quis blanditiis ut ea iste molestias distinctio
              exercitationem optio rerum laborum possimus eaque nobis! Tenetur
              architecto laborum unde fuga temporibus pariatur saepe, esse a
              excepturi aperiam aut reiciendis, commodi, repellendus neque
              magnam similique blanditiis? Veniam quia, dignissimos praesentium
              similique sunt quam voluptatem repudiandae!
            </p>

            <p className="text-xl text-gray-700 w-full mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos inventore magni quam exercitationem fugiat est dolores
              delectus perferendis voluptatum eius quae id corporis unde ex
              saepe, tempore facere suscipit qui dolore? In nulla reiciendis
              neque ipsam aliquid et voluptatem accusamus inventore itaque
              dignissimos perspiciatis adipisci mollitia pariatur sequi magni
              aut, libero cupiditate quisquam exercitationem hic? Libero
              laboriosam, quis blanditiis ut ea iste molestias distinctio
              exercitationem optio rerum laborum possimus eaque nobis! Tenetur
              architecto laborum unde fuga temporibus pariatur saepe, esse a
              excepturi aperiam aut reiciendis, commodi, repellendus neque
              magnam similique blanditiis? Veniam quia, dignissimos praesentium
              similique sunt quam voluptatem repudiandae!
            </p>
          </div> */}

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
            {/* Image Column */}
            {/* <div className="relative flex items-center min-h-[400px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Our team working together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
              </div>
            </div> */}

            {/* Content Column */}
            {/* <div className="flex flex-col justify-center space-y-8 p-4 md:p-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To empower businesses through innovative technology
                      solutions that drive growth, efficiency, and exceptional
                      customer experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To be the most trusted partner for digital transformation,
                      recognized globally for our commitment to excellence and
                      positive impact.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Core Values */}
          {/* <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-14 h-14 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Integrity",
                  description:
                    "We build trust through honest communication and ethical business practices.",
                },
                {
                  icon: (
                    <svg
                      className="w-14 h-14 text-green-600"
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
                  ),
                  title: "Innovation",
                  description:
                    "We embrace creativity and continuous improvement to deliver cutting-edge solutions.",
                },
                {
                  icon: (
                    <svg
                      className="w-14 h-14 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Collaboration",
                  description:
                    "We believe in the power of teamwork and building strong partnerships.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="mb-6 flex justify-center">{value.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Team Section */}
          {/* <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Meet Our Leadership
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Founder",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                  bio: "Visionary leader with 15+ years in tech innovation.",
                },
                {
                  name: "Maria Garcia",
                  role: "CTO",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                  bio: "Technology strategist passionate about scalable solutions.",
                },
                {
                  name: "David Kim",
                  role: "Head of Design",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                  bio: "Creative director focused on user-centered design.",
                },
                {
                  name: "Sarah Williams",
                  role: "VP of Operations",
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                  bio: "Operations expert ensuring seamless delivery.",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6 group overflow-hidden rounded-lg shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-green-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div> */}

          <MeetOurLeadership />

          {/* Stats */}
          <div className="bg-green-50 rounded-2xl p-12 shadow-inner">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "200+", label: "Clients Worldwide" },
                { number: "50+", label: "Team Members" },
                { number: "12", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="p-4">
                  <p className="text-5xl font-bold text-green-600 mb-3">
                    {stat.number}
                  </p>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
