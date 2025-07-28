import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-12 text-center bg-gradient-to-b from-[#0d0d0d] to-[#111]">
      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Innovate. Create. Elevate.
          <br />
          <span className="text-[#00e676]">Your Digital Partner.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
        >
          At Nestnic Solutions, we transform ideas into impactful digital
          realities. From cutting-edge AI to stunning web experiences, we
          deliver excellence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button className="bg-[#00e676] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#00c864] transition-all cursor-pointer">
            Get a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
