import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaBrain, FaChartLine, FaBullhorn, FaShareAlt } from "react-icons/fa";

const services = [
  {
    title: "Branding & Design",
    icon: <FaPaintBrush size={28} />,
    desc: "Crafting compelling brand identities and stunning visual designs that resonate with your audience and leave a lasting impression.",
  },
  {
    title: "Web & App Development",
    icon: <FaCode size={28} />,
    desc: "Building robust, scalable, and user-friendly web and mobile applications tailored to your business needs and objectives.",
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain size={28} />,
    desc: "Leveraging AI and ML to automate processes, gain insights from data, and create intelligent solutions for complex problems.",
  },
  {
    title: "Data Science & Analytics",
    icon: <FaChartLine size={28} />,
    desc: "Transforming raw data into actionable insights, enabling data-driven decisions and strategic growth for your business.",
  },
  {
    title: "Marketing & Advertising",
    icon: <FaBullhorn size={28} />,
    desc: "Designing and executing targeted marketing and advertising strategies to expand your reach and drive conversions.",
  },
  {
    title: "Social Media & Content",
    icon: <FaShareAlt size={28} />,
    desc: "Developing engaging content and strategic social media campaigns to boost your online presence and connect with your audience.",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#111]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00e676]">Our Core & Comprehensive Services</h2>
        <p className="text-gray-400 mt-3">Explore how we turn ideas into high-impact digital products.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-800"
          >
            <div className="text-[#00e676] mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}