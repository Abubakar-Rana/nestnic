// File: components/Team.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Hafiz Muhammed Abu Bakar",
    role: "CEO and Lead Tech Architect",
    image: "/abubakr.webp",
  },
  {
    name: "Hasnain Ahmed",
    role: "COO and Associate Software Engineer",
    image: "/hasnain.jpg",
  },

];

export default function Team() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Meet the Team</h2>
        <p className="text-gray-400 mt-2">The passionate professionals behind Nestnic Solutions</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl text-center shadow-md"
              >
                <div className="mb-4 overflow-hidden rounded-full w-24 h-24 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{member.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}