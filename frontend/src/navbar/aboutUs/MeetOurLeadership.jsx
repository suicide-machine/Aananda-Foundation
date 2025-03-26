import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const MeetOurLeadership = () => {
  const leaders = [
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
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Meet Our Leadership
        </h3>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".leader-pagination",
            bulletClass: "leader-bullet",
            bulletActiveClass: "leader-bullet-active",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="pb-12"
        >
          {leaders.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="mx-2">
                <div className="relative group overflow-hidden rounded-xl shadow-lg h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 bg-white flex-grow">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-green-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="leader-pagination flex justify-center mt-8 gap-2"></div>
      </div>

      <style jsx global>{`
        .leader-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .leader-bullet-active {
          background-color: #10b981;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  )
}

export default MeetOurLeadership
