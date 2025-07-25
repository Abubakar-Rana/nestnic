"use client";
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

// Import Lucide React icons
import {
  Sun, Moon, Menu, X, Palette, Code, Brain, BarChart, Share2, Megaphone,
  Video, ShoppingCart, FileText, Settings, TrendingUp, Shield, Lightbulb,
  LineChart, Phone, MapPin, Mail, MessageSquare, Instagram, Twitter, Linkedin,
  ChevronDown,
} from 'lucide-react';

// --- Theme Context ---
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
      }
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Reusable Section Component ---
const Section = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => {
  return (
    <section id={id} className={`py-10 sm:py-16 md:py-24 ${className}`}>
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// --- Data for Services ---
const servicesData = [
  {
    id: 'branding-design',
    title: 'Branding & Design',
    icon: <Palette size={40} />,
    description: 'Crafting compelling brand identities and stunning visual designs that resonate with your audience and leave a lasting impression.',
    details: 'From logo design and brand guidelines to UI/UX for web and mobile applications, we ensure your visual presence is cohesive and impactful. Our design process focuses on user experience and aesthetic appeal to create memorable digital products.'
  },
  {
    id: 'web-app-development',
    title: 'Web & App Development',
    icon: <Code size={40} />,
    description: 'Building robust, scalable, and user-friendly web and mobile applications tailored to your business needs and objectives.',
    details: 'Specializing in modern frameworks like React and Next.js, we develop responsive and high-performance websites. For mobile, we build native or cross-platform applications ensuring seamless functionality and engaging user interfaces.'
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    icon: <Brain size={40} />,
    description: 'Leveraging AI and ML to automate processes, gain insights from data, and create intelligent solutions for complex problems.',
    details: 'Our AI/ML services include predictive analytics, natural language processing, computer vision, and custom model development. We help businesses integrate AI into their operations to enhance efficiency and decision-making.'
  },
  {
    id: 'data-science-analysis',
    title: 'Data Science & Analysis',
    icon: <BarChart size={40} />,
    description: 'Transforming raw data into actionable insights, enabling data-driven decisions and strategic growth for your business.',
    details: 'We offer comprehensive data analysis services, including data visualization, statistical modeling, and business intelligence reporting. Our goal is to uncover hidden patterns and trends to optimize your strategies.'
  },
  {
    id: 'social-media-content',
    title: 'Social Media & Content',
    icon: <Share2 size={40} />,
    description: 'Developing engaging content and strategic social media campaigns to boost your online presence and connect with your audience.',
    details: 'From content creation (articles, videos, infographics) to social media management and community engagement, we help you build a strong online narrative and foster meaningful connections with your target audience across all platforms.'
  },
  {
    id: 'marketing-advertising',
    title: 'Marketing & Advertising',
    icon: <Megaphone size={40} />,
    description: 'Designing and executing targeted marketing and advertising strategies to expand your reach and drive conversions.',
    details: 'Our services cover digital marketing, SEO, PPC campaigns, email marketing, and traditional advertising. We craft compelling campaigns that deliver measurable results and maximize your return on investment.'
  },
  {
    id: 'video-editing-ad-production',
    title: 'Video Editing & Ad Production',
    icon: <Video size={40} />,
    description: 'Producing high-quality video content and captivating advertisements that tell your story and engage your viewers.',
    details: 'We provide end-to-end video production services, including concept development, scriptwriting, filming (if applicable), editing, motion graphics, and sound design. Perfect for commercials, corporate videos, and social media content.'
  },
  {
    id: 'e-commerce-online-shops',
    title: 'E-Commerce & Online Shops',
    icon: <ShoppingCart size={40} />,
    description: 'Building secure, scalable, and visually appealing e-commerce platforms that provide seamless shopping experiences for your customers.',
    details: 'Whether you need a new online store or an optimization of an existing one, we specialize in platforms like Shopify, WooCommerce, and custom solutions. We focus on conversion optimization, secure payment gateways, and inventory management.'
  },
  {
    id: 'business-tools-documents',
    title: 'Business Tools & Documents',
    icon: <FileText size={40} />,
    description: 'Providing essential business tools and professional document creation to streamline your operations and enhance productivity.',
    details: 'This includes custom software tools, CRM integration, project management solutions, and professional document services like business plans, proposals, and presentations. We equip you with the resources to run your business efficiently.'
  },
  {
    id: 'automation-crm',
    title: 'Automation & CRM',
    icon: <Settings size={40} />,
    description: 'Implementing automation solutions and CRM systems to optimize workflows, improve customer relationships, and boost efficiency.',
    details: 'We help you integrate and customize CRM systems like Salesforce, HubSpot, or Zoho, and automate repetitive tasks across various departments. This leads to reduced manual effort and improved customer satisfaction.'
  },
  {
    id: 'lead-generation-campaigns',
    title: 'Lead Generation & Campaigns',
    icon: <TrendingUp size={40} />,
    description: 'Developing effective strategies and running targeted campaigns to generate high-quality leads and grow your customer base.',
    details: 'Our lead generation services include inbound marketing, outbound sales strategies, content marketing for lead nurturing, and performance tracking. We focus on delivering qualified leads that convert into loyal customers.'
  },
  {
    id: 'insurance-business-support',
    title: 'Insurance & Business Support',
    icon: <Shield size={40} />,
    description: 'Offering comprehensive support for insurance-related needs and general business operations to ensure smooth functioning.',
    details: 'We provide guidance on various insurance aspects relevant to businesses and offer administrative and operational support to help you manage day-to-day tasks efficiently, allowing you to focus on core business activities.'
  },
  {
    id: 'business-problem-solving',
    title: 'Business Problem Solving',
    icon: <Lightbulb size={40} />,
    description: 'Identifying challenges, analyzing root causes, and developing innovative solutions to overcome complex business problems.',
    details: 'Through strategic consulting, process optimization, and innovative thinking, we help businesses navigate obstacles and seize opportunities. Our approach is tailored to your unique challenges to deliver sustainable solutions.'
  },
  {
    id: 'analytics-strategy',
    title: 'Analytics & Strategy',
    icon: <LineChart size={40} />,
    description: 'Utilizing advanced analytics to inform strategic planning, optimize performance, and drive sustainable business growth.',
    details: 'We provide in-depth analysis of market trends, competitor activities, and internal performance data to formulate robust business strategies. Our insights help you make informed decisions and achieve your long-term goals.'
  },
  {
    id: 'cold-outreach-sales-strategies',
    title: 'Cold Outreach & Sales Strategies',
    icon: <Phone size={40} />,
    description: 'Crafting effective cold outreach campaigns and sales strategies to expand your market reach and acquire new clients.',
    details: 'Our expertise includes developing compelling sales scripts, optimizing email outreach, and implementing CRM-driven sales funnels. We focus on building relationships and converting prospects into valuable clients through strategic communication.'
  },
];

// --- Header Component ---
const Header = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Technologies', id: 'technologies' },
    { name: 'Blog', id: 'blog' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-zinc-900/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/favicon.jpg"
            alt="Nestnic Logo"
            className="w-13 h-13 mr-3 rounded-full shadow-md border-2 border-emerald-400 dark:border-emerald-600 bg-white dark:bg-zinc-900"
            style={{ objectFit: 'cover' }}
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-emerald-600 dark:text-emerald-400"
          >
            Nestnic Solutions
          </motion.div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle dark/light mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-800 shadow-lg md:hidden py-4"
            >
              <ul className="flex flex-col items-center space-y-4">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); onNavigate(item.id); setIsMenuOpen(false); }}
                      className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-lg transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

// --- Home Section ---
const HomeSection = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-zinc-900 text-gray-900 dark:text-gray-100">
      <div className="text-center w-full">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Innovate. Create. Elevate.
            <br />
            Your Digital Partner.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
            At Nestnic Solutions, we transform ideas into impactful digital realities. From cutting-edge AI to stunning web experiences, we deliver excellence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 text-base sm:text-lg"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>

        {/* Animated Services Preview */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <h2 className="col-span-full text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-emerald-600 dark:text-emerald-400">Our Core Services</h2>
          {servicesData.slice(0, 6).map((service) => ( // Show a preview of 6 services
            <motion.div
              key={service.id}
              variants={fadeIn}
              whileHover={{ scale: 1.03, boxShadow: isDarkMode ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 cursor-pointer"
              onClick={() => onNavigate('services')}
            >
              <div className="text-4xl sm:text-5xl mb-2 sm:mb-4 text-emerald-600 dark:text-emerald-400">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{service.description}</p>
              <button className="mt-2 sm:mt-4 text-emerald-600 dark:text-emerald-400 hover:underline text-sm sm:text-base">Explore More</button>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder for Featured Projects, Testimonials, CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Featured Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">Discover our impactful work across various industries.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
                <img src={`https://placehold.co/400x250/E0E7FF/4338CA?text=Project+${i}`} alt={`Project ${i}`} className="w-full h-32 sm:h-48 object-cover rounded-lg mb-2 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Project Title {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Brief description of the project and its impact.</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="mt-10 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
          >
            View All Projects
          </button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 sm:mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
              <p className="italic text-gray-700 dark:text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">"Nestnic Solutions transformed our online presence. Their web development and marketing expertise are unmatched!"</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-base">- Jane Doe, CEO of InnovateCorp</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
              <p className="italic text-gray-700 dark:text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">"The AI solutions they implemented have significantly boosted our operational efficiency. Highly recommend!"</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-base">- John Smith, CTO of TechGenius</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// --- Services Section ---
const ServicesSection = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const { isDarkMode } = useContext(ThemeContext);

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="services" className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">Our Comprehensive Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 flex flex-col"
          >
            <div className="flex items-center mb-2 sm:mb-4">
              <div className="text-3xl sm:text-4xl mr-2 sm:mr-4 text-emerald-600 dark:text-emerald-400">{service.icon}</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">{service.title}</h3>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
            <button
              onClick={() => toggleService(service.id)}
              className="mt-2 sm:mt-4 self-start px-3 sm:px-4 py-1 sm:py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors flex items-center text-xs sm:text-base"
            >
              {openServiceId === service.id ? 'Show Less' : 'Explore Details'}
              <motion.span
                animate={{ rotate: openServiceId === service.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1 sm:ml-2"
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>
            <AnimatePresence>
              {openServiceId === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mt-2 sm:mt-4 text-gray-700 dark:text-gray-300 overflow-hidden text-xs sm:text-sm md:text-base"
                >
                  <p>{service.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Projects Section (Placeholder) ---
const ProjectsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="projects" className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">Our Projects</h2>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore our diverse portfolio of successful projects across various domains.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            className="bg-gray-100 dark:bg-zinc-700 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-600"
          >
            <img src={`https://placehold.co/400x250/C3DAFE/3B82F6?text=Project+${i}`} alt={`Project ${i}`} className="w-full h-32 sm:h-48 object-cover rounded-lg mb-2 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Project Name {i}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
              Category: {i % 2 === 0 ? 'Web Dev' : 'AI'}{i % 3 === 0 ? ', Marketing' : ''}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
              A brief overview of the project's goals and achievements.
            </p>
          </motion.div>
          ))}
        </div>
        <p className="mt-10 text-gray-700 dark:text-gray-300">More projects coming soon!</p>
      </motion.div>
    </Section>
  );
};

// --- Technologies Section (Placeholder) ---
const TechnologiesSection = () => {
  const techStack = [
    { name: 'Next.js', logo: <Code size={40} />, description: 'React framework for production' },
    { name: 'React', logo: <Brain size={40} />, description: 'JavaScript library for UI' },
    { name: 'Tailwind CSS', logo: <Palette size={40} />, description: 'Utility-first CSS framework' },
    { name: 'Python', logo: <Code size={40} />, description: 'Versatile programming language' },
    { name: 'AI/ML', logo: <Brain size={40} />, description: 'Artificial Intelligence & Machine Learning' },
    { name: 'CRM', logo: <Settings size={40} />, description: 'Customer Relationship Relationship Management' },
    { name: 'Framer Motion', logo: <Video size={40} />, description: 'Animation library for React' },
    { name: 'Data Science', logo: <LineChart size={40} />, description: 'Extracting insights from data' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="technologies" className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">Our Tech Stack</h2>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700 text-center"
          >
            <div className="text-4xl sm:text-6xl mb-2 sm:mb-4 text-emerald-600 dark:text-emerald-400 flex justify-center">{tech.logo}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-gray-200">{tech.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

// --- Blog Section (Placeholder) ---
const BlogSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="blog" className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">Our Insights & Blog</h2>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Stay updated with our latest articles on AI, Marketing, Strategy, and Innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
            className="bg-gray-100 dark:bg-zinc-700 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-600"
          >
            <img src={`https://placehold.co/400x200/D1E7DD/28A745?text=Blog+Post+${i}`} alt={`Blog Post ${i}`} className="w-full h-24 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Post Title {i}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
              Category: {i % 2 === 0 ? 'AI' : 'Marketing'} | Date: July 25, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
              A short excerpt from the blog post, enticing readers to click and learn more.
            </p>
            <button className="mt-2 sm:mt-4 text-emerald-600 dark:text-emerald-400 hover:underline text-xs sm:text-base">Read More</button>
          </motion.div>
          ))}
        </div>
        <p className="mt-10 text-gray-700 dark:text-gray-300">More articles are published regularly!</p>
      </motion.div>
    </Section>
  );
};

// --- About Us Section ---
const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="about" className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">About Nestnic Solutions</h2>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Nestnic Solutions is a pioneering digital agency dedicated to empowering businesses with innovative technology and creative strategies. We believe in building lasting partnerships and delivering measurable results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">To deliver exceptional digital solutions that drive growth, foster innovation, and create value for our clients worldwide.</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">To be the leading partner in digital transformation, recognized for our expertise, integrity, and client-centric approach.</p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-600 dark:text-emerald-400">Values</h3>
            <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Collaboration</li>
              <li>Client Success</li>
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-bold mb-8 text-emerald-600 dark:text-emerald-400">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { name: 'Hafiz Abubakar', role: 'CEO and Lead Tech Architect', img: './abubakr.webp' },
            { name: 'Hasnain Ahmad', role: 'COO and Associate Software Engineer', img: './hasnain.jpg' },
            { name: 'Jarvis Ezlon', role: 'CTO and Full Stack Developer', img: './ai.jpeg' },
            
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-zinc-800 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-zinc-700"
            >
              <img src={member.img} alt={member.name} className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 sm:mb-4 object-cover border-2 sm:border-4 border-emerald-200 dark:border-emerald-700" />
              <h4 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{member.name}</h4>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium text-xs sm:text-base">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

// --- Contact Us Section ---
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear form
    setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="contact" className="bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-emerald-600 dark:text-emerald-400">Get in Touch</h2>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-4 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">Send Us a Message</h3>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-md mb-4 text-sm"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500 text-xs sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500 text-xs sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-2 sm:p-3 border border-gray-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100 focus:ring-emerald-500 focus:border-emerald-500 text-xs sm:text-base"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 transition-colors text-xs sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-4 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">Our Details</h3>
            <div className="space-y-2 sm:space-y-4 text-gray-700 dark:text-gray-300 text-xs sm:text-base">
              <p className="flex items-center">
                <MapPin size={24} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                123 Digital Street, Tech City, Global 78901
              </p>
              <p className="flex items-center">
                <Mail size={24} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                info@nestnicsolutions.com
              </p>
              <p className="flex items-center">
                <Phone size={24} className="mr-3 text-emerald-600 dark:text-emerald-400" />
                +1 (555) 123-4567
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600 dark:text-emerald-400">Find Us on Map</h3>
            <div className="w-full h-32 sm:h-48 bg-gray-200 dark:bg-zinc-700 rounded-md overflow-hidden">
              {/* Placeholder for Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.292973453878!2d144.9630579153162!3d-37.8172097797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c21cb29b%3A0x1d43500e61a4d92!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678901234567!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-600 dark:text-emerald-400">Connect With Us</h3>
            <div className="flex space-x-2 sm:space-x-4 justify-center md:justify-start">
              <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-3xl transition-colors" aria-label="Instagram">
                <Instagram size={30} />
              </a>
              <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-3xl transition-colors" aria-label="Twitter">
                <Twitter size={30} />
              </a>
              <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-3xl transition-colors" aria-label="LinkedIn">
                <Linkedin size={30} />
              </a>
              <a href="#" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-3xl transition-colors" aria-label="WhatsApp">
                <MessageSquare size={30} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

// --- Footer Component ---
const Footer = ({ onNavigate }: { onNavigate: (id: string) => void }) => {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-gray-300 py-12">
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">Nestnic Solutions</h3>
          <p className="text-sm leading-relaxed">
            Innovating digital experiences and empowering businesses with cutting-edge technology and creative strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Services', 'Projects', 'About Us', 'Contact Us'].map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase().replace(' ', '-')); }}
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
          <p className="text-sm mb-2">Email: nestnicsolutions@gmail.com</p>
          <p className="text-sm mb-4">Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-2xl" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-2xl" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors text-2xl" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Nestnic Solutions. All rights reserved.
      </div>
    </footer>
  );
};

// --- Main App Component ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const pageRefs = useRef({});

  // Function to scroll to the section
  const navigateToSection = (id: string) => {
    setCurrentPage(id);
    // Use a timeout to ensure the component has rendered before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to allow DOM to update
  };

  return (
    <ThemeProvider>
      <div className="font-inter antialiased min-h-screen flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-300">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
          body { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
          .container { max-width: 1280px; } /* Consistent max-width for content */
          `}
        </style>
        <Header onNavigate={navigateToSection} />

        <main className="flex-grow pt-20"> {/* Add padding-top to account for sticky header */}
          <HomeSection onNavigate={navigateToSection} />
          <ServicesSection />
          <ProjectsSection />
          <TechnologiesSection />
          <BlogSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer onNavigate={navigateToSection} />
      </div>
    </ThemeProvider>
  );
}
