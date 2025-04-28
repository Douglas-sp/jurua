
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-space py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.div 
              className="text-xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-neon-blue">M</span>ichael <span className="text-neon-blue">J</span>urua
            </motion.div>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Michael Jurua. All rights reserved.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#home" className="text-gray-300 hover:text-neon-blue transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-neon-blue transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-neon-blue transition-colors">Experience</a>
            <a href="#contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
