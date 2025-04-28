
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Satellite } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient -z-10"></div>
      <div className="canopy-pattern -z-10"></div>
      <div className="satellite-dots -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest-glow rounded-full blur-3xl -z-10 opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-forest-glow rounded-full blur-3xl -z-10 opacity-10"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="text-canopy">Conservation</span> Science & 
            <span className="block">Geospatial Technology</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
            Leveraging advanced remote sensing, GIS, and data science to drive innovative conservation solutions for our planet's future.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-forest text-white rounded-lg font-medium flex items-center gap-2 hover:bg-forest-light transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#experience"
              className="px-6 py-3 bg-transparent text-white border border-forest-light/30 rounded-lg font-medium hover:bg-forest/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View experience
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-forest-glow opacity-20 rounded-full blur-xl"></div>
          <div className="relative w-full h-full aspect-square max-w-md mx-auto">
            {/* Profile image container with organic border */}
            <div className="w-full h-full rounded-full overflow-hidden neon-border p-1 animate-pulse-glow">
              <img
                src="/lovable-uploads/00d70263-22ab-49e4-bc5a-7234caeb3502.png"
                alt="Michael Jurua"
                className="w-full h-full rounded-full object-cover bg-forest-dark"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-xl glass-card flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <span className="text-canopy font-bold flex items-center gap-1">
                <Leaf size={16} />
                GIS
              </span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-28 h-28 rounded-xl glass-card flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <span className="text-satellite font-bold flex items-center gap-1">
                <Satellite size={16} />
                Remote<br/>Sensing
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
