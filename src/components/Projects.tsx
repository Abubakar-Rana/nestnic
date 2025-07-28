// File: components/Projects.tsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Title 1",
    subtitle: "Brief description of the project and its impact.",
    image: "/project1.png",
  },
  {
    title: "Project Title 2",
    subtitle: "Brief description of the project and its impact.",
    image: "/project2.png",
  },
  {
    title: "Project Title 3",
    subtitle: "Brief description of the project and its impact.",
    image: "/project3.png",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#0d0d0d]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Featured Projects</h2>
        <p className="text-gray-400 mt-3">Discover our impactful work across various industries.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md border border-gray-800 cursor-pointer" 
              >
                <div className="h-48 bg-gray-800 flex items-center justify-center text-xl text-purple-400">
                  {project.title}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}