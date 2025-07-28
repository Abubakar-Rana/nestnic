// File: components/TechStack.tsx

import { motion } from "framer-motion";

const techs = [
  { title: "Next.js", desc: "React framework for production" },
  { title: "React", desc: "JavaScript library for UI" },
  { title: "Tailwind CSS", desc: "Utility-first CSS framework" },
  { title: "Python", desc: "Versatile programming language" },
  { title: "AI/ML", desc: "Artificial Intelligence & Machine Learning" },
  { title: "CRM", desc: "Customer Relationship Management" },
  { title: "Framer Motion", desc: "Animation library for React" },
  { title: "Data Science", desc: "Extracting insights from data" },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#0d0d0d]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Our Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {techs.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a1a] border border-gray-800 p-6 rounded-xl text-center hover:shadow-md transition-all"
          >
            <h4 className="text-lg font-semibold text-white">{t.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}