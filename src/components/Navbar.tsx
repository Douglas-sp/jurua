
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-space/80 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-neon-blue">M</span>ichael <span className="text-neon-blue">J</span>urua
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          className="block md:hidden text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
