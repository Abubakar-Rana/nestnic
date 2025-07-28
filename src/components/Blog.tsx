// File: components/Blog.tsx

import { motion } from "framer-motion";

const blogs = [
  {
    title: "Blog Post Title 1",
    category: "Marketing",
    date: "July 25, 2025",
    excerpt: "A short excerpt from the blog post, enticing readers to click and learn more.",
  },
  {
    title: "Blog Post Title 2",
    category: "AI",
    date: "July 25, 2025",
    excerpt: "A short excerpt from the blog post, enticing readers to click and learn more.",
  },
  {
    title: "Blog Post Title 3",
    category: "Marketing",
    date: "July 25, 2025",
    excerpt: "A short excerpt from the blog post, enticing readers to click and learn more.",
  },
];

export default function Blog() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#111]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Our Insights & Blog</h2>
        <p className="text-gray-400 mt-2">
          Stay updated with our latest articles on AI, Marketing, Strategy, and Innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="bg-green-100 text-[#00b76d] font-bold py-2 text-center rounded-md mb-4">
              Blog Post {i + 1}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
            <p className="text-xs text-gray-400 mb-2">
              Category: {b.category} | Date: {b.date}
            </p>
            <p className="text-sm text-gray-300 mb-3">{b.excerpt}</p>
            <a href="#" className="text-[#00e676] text-sm font-semibold hover:underline">
              Read More
            </a>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-400 mt-8"
      >
        More articles are published regularly!
      </motion.p>
    </section>
  );
}
