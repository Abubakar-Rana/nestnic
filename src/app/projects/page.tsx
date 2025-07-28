'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 'project-1',
    title: 'Build faster than AI with Once UI',
    description: 'The open-source stack that helps you ship faster than VC-backed startups.',
    image: '/project1.png',
  },
  {
    id: 'project-2',
    title: 'AI-Powered SaaS Platform',
    description: 'Revolutionizing business automation through intelligent workflows and integrations.',
    image: '/project2.png',
  },
  {
    id: 'project-3',
    title: 'Smart Irrigation Dashboard',
    description: 'Real-time analytics for agricultural irrigation, powered by geospatial AI.',
    image: '/project3.png',
  },
];

export default function ProjectsPage() {
  return (
      <>
      <Navbar />
    <main className="min-h-screen bg-[#0d0d0d] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <motion.div
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:shadow-2xl transition-all bg-[#131313]"
              >
                <div className="relative h-[280px] md:h-[360px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
