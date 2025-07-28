// File: components/Testimonials.tsx

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">What Our Clients Say</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 text-gray-300"
        >
          <p className="italic">
            &quot;Nestnic Solutions transformed our online presence. Their web development and marketing expertise are unmatched!&quot;
          </p>
          <p className="mt-4 font-semibold text-white">- Jane Doe, CEO of InnovateCorp</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 text-gray-300"
        >
          <p className="italic">
            &quot;The AI solutions they implemented have significantly boosted our operational efficiency. Highly recommend!&quot;
          </p>
          <p className="mt-4 font-semibold text-white">- John Smith, CTO of TechGenius</p>
        </motion.div>
      </motion.div>
    </section>
  );
}