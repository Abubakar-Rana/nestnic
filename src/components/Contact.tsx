// File: components/Contact.tsx

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          Let&apos;s discuss how we can work together to build something amazing.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-[#0d0d0d] text-white border border-gray-700 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00e676] text-black px-6 py-2 font-semibold rounded-md hover:bg-[#00c864] transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Our Details</h3>
          <p className="text-gray-400 mb-2">📍 123 Digital Street, Tech City, Global 78901</p>
          <p className="text-gray-400 mb-2">📧 info@nestnicsolutions.com</p>
          <p className="text-gray-400 mb-6">📞 +1 (555) 123-4567</p>

          <h4 className="text-lg font-semibold text-white mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-[#00e676] hover:underline">Instagram</a>
            <a href="#" className="text-[#00e676] hover:underline">Twitter</a>
            <a href="#" className="text-[#00e676] hover:underline">LinkedIn</a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
