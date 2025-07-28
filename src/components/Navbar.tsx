// File: components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinkClass =
    "relative text-white hover:text-[#00e676] transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#00e676] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out";

  return (
    <header className="bg-white dark:bg-[#0d0d0d] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/favicon1.png" alt="Nestnic Logo" width={56} height={56} />
          <span className="text-[#00e676] font-bold text-lg dark:text-[#00b76d]">
            Nestnic Solutions
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {[
            { href: "#", label: "Home" },
            { href: "#services", label: "Services" },
            { href: "/projects", label: "Projects" },
            { href: "#tech", label: "Technologies" },
            { href: "#blog", label: "Blog" },
            { href: "#about", label: "About Us" },
            { href: "#contact", label: "Contact Us" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsOpen(true)} className="text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Theme toggle button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:inline-flex bg-gray-700 dark:bg-gray-200 p-2 rounded-full"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="w-4 h-4 text-white dark:text-black" />
            ) : (
              <Moon className="w-4 h-4 text-black" />
            ))}
        </button>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-64 bg-[#0d0d0d] dark:bg-white shadow-lg border-l border-gray-800 p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#00e676] font-bold text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white dark:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/projects", label: "Projects" },
                  { href: "/tech", label: "Technologies" },
                  { href: "/blog", label: "Blog" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={navLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
