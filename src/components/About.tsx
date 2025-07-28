// File: components/About.tsx

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#0d0d0d]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">About Nestnic Solutions</h2>
        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Nestnic Solutions is a pioneering digital agency dedicated to empowering businesses with innovative technology and creative strategies. We believe in building lasting partnerships and delivering measurable results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        {["Mission", "Vision", "Values"].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-[#00e676] mb-2">{title}</h3>
            {title === "Mission" && (
              <p className="text-gray-300 text-sm">
                To deliver exceptional digital solutions that drive growth, foster innovation, and create value for our clients worldwide.
              </p>
            )}
            {title === "Vision" && (
              <p className="text-gray-300 text-sm">
                To be the leading partner in digital transformation, recognized for our expertise, integrity, and client-centric approach.
              </p>
            )}
            {title === "Values" && (
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Innovation</li>
                <li>• Integrity</li>
                <li>• Excellence</li>
                <li>• Collaboration</li>
                <li>• Client Success</li>
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
