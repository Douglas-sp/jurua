
import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="canopy-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-8 mt-8">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Michael Jurua</h3>
            <p className="text-gray-300 mb-6">
              Conservation Science & MEL Manager at the Jane Goodall Institute Uganda, specializing in advanced remote sensing applications, geospatial modeling, and geo-artificial intelligence for environmental conservation.
            </p>
            
            <div className="mb-6">
              <h4 className="text-satellite font-semibold mb-3">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Advanced Remote Sensing", "Geospatial Modeling", "Geo AI", "Photogrammetry"].map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 bg-forest-light/10 rounded-full text-sm text-gray-300 border border-forest-light/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-satellite font-semibold mb-3">Education</h4>
              <div className="glass-card p-4 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-white">BSc (Hons) Land Surveying and Geomatics</span>
                  <span className="text-canopy">June 2023</span>
                </div>
                <div className="text-gray-400 text-sm">Makerere University</div>
                <p className="text-gray-300 mt-2 text-sm">
                  <span className="font-medium">Thesis:</span> Estimating Above Ground Biomass and Carbon Stocks of the Budongo Tropical Rainforest Using Polarimetric SAR Interferometry
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6 rounded-lg h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="text-canopy mt-1" size={18} />
                  <div>
                    <h4 className="font-medium text-white">Conservation Science & MEL Manager</h4>
                    <p className="text-gray-400 text-sm">The Jane Goodall Institute Uganda</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-canopy" size={18} />
                  <a href="mailto:michaeljurua@gmail.com" className="text-gray-300 hover:text-satellite transition-colors">
                    michaeljurua@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-canopy" size={18} />
                  <a href="tel:+256784420183" className="text-gray-300 hover:text-satellite transition-colors">
                    +256784420183
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-canopy mt-1" size={18} />
                  <address className="text-gray-300 not-italic">
                    Victoria Loop, Lubowa<br />
                    Kampala, Uganda
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
