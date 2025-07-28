// File: components/Footer.tsx

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0d0d0d] border-t border-gray-800 py-12 px-6 text-sm"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-[#00e676] font-bold text-lg mb-2">Nestnic Solutions</h3>
          <p>
            Innovating digital experiences and empowering businesses with cutting-edge technology and creative strategies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <p>Email: nestnicsolutions@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">💼</a>
          </div>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-600 mt-10"
      >
        © 2025 Nestnic Solutions. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}