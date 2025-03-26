import React from "react"
import FeaturedProjects from "../navbar/FeaturedProject"
import ActOnline from "../navbar/ActOnline"
import { ArrowRight } from "lucide-react"
import OurProgrammes from "../navbar/OurProgrammes"
import EducationPhilosophy from "../navbar/EducationPhilosophy"
import SignUpSection from "../navbar/SignUpSection"
import AnotherPara from "../navbar/aboutUs/AnotherPara"

const Home = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "url('https://davidsuzuki.org/wp-content/uploads/2021/03/solar-farm-energy-900x540.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Ananda, Minoti & Suresh Rajkhowa Memorial Foundation
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Celebrate his tireless work for a better world with a gift to
            support critical climate work. Give before midnight March 24 to get
            your gift matched!
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
            AANADA, MINOTI & SURESH RAJKHOWA MEMORIAL FOUNDATION
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 text-sm">
          <span className="text-white">SCROLL</span>
        </div>

        <div className="pt-5 max-w-6xl">
          <p>
            The Ananda, Minoti & Suresh Rajkhowa Memorial Foundation is built on
            the profound belief that true happiness lies in sharing and
            uplifting others. Rooted in compassion and service, our foundation
            is dedicated to making a meaningful difference in the lives of those
            in need.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center p-10 text-2xl">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
          libero optio modi, iusto nulla, a dignissimos repellendus facilis
          earum vitae ducimus pariatur assumenda natus et id. Dolore minus fuga
          eos error sequi rem cum quasi, culpa ab illum facere libero
          repudiandae ipsam? Alias minus quod modi! Error accusantium
          praesentium cum?
        </p>

        <div className="flex items-center gap-2 group justify-center text-white rounded-xl">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:from-blue-700 hover:to-blue-900 active:scale-95 flex items-center gap-2 relative overflow-hidden ">
            Read More
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            {/* Subtle Glow Effect */}
            <span className="absolute inset-0 bg-white opacity-10 blur-lg rounded-full"></span>
          </button>
        </div>
      </div>

      {/* <EducationPhilosophy /> */}

      {/* <AnotherPara /> */}

      <OurProgrammes />

      <FeaturedProjects />

      <ActOnline />

      <SignUpSection />
    </div>
  )
}

export default Home
