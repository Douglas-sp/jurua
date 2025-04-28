
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, WhatsApp } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-forest-dark/90 py-12 border-t border-forest-light/20 relative">
      <div className="satellite-dots opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.div 
              className="text-xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-canopy">M</span>ichael <span className="text-canopy">J</span>urua
            </motion.div>
            <p className="text-gray-400 text-sm">
              Conservation Science & Geospatial Technology
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-gray-400 hover:text-canopy transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-canopy transition-colors text-sm">About</a>
              <a href="#experience" className="text-gray-400 hover:text-canopy transition-colors text-sm">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-canopy transition-colors text-sm">Contact</a>
            </div>
          </div>
          
          {/* Designer Credits */}
          <div>
            <h3 className="text-white font-semibold mb-4">Designed by</h3>
            <p className="text-gray-400 mb-4 text-sm">Wamani Raymond Douglas</p>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/wamani-raymond-douglas" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-satellite transition-colors text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href="https://wa.me/256783067926" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-satellite transition-colors text-sm"
              >
                <WhatsApp size={16} />
                +256 783 067 926
              </a>
              <a 
                href="mailto:wamaniray@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-satellite transition-colors text-sm"
              >
                <Mail size={16} />
                wamaniray@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-forest-light/20" />
        
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
