
import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const awards = [
  {
    title: "The YouthClimate Award ($30,000)",
    organization: "UNDP YouthClimate Coalition",
    date: "August 2024",
    project: "Advancing Fire Management in Uganda's Protected Areas Through Advanced Geospatial Technology"
  },
  {
    title: "Best YouthMappers Blog",
    organization: "USAID GeoCenter",
    date: "March 2024",
    project: "Assessing Forest Cover Changes Over the Budongo CFR Using the Digital Earth Africa Sandbox"
  },
  {
    title: "The Digital Earth Africa Innovations Award ($2000)",
    organization: "Geoscience Australia",
    date: "November 2022-June 2023",
    project: "Assessing forest cover loss in the Budongo Tropical Rainforest using Cloud Based Geo-Computing"
  },
  {
    title: "The Pre-GORILLA Conference Hackathon",
    organization: "",
    date: "December 2022",
    project: "Geospatial-Based Cloud Computing for Biodiversity and Ecosystem Resilience"
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Honours & Awards
        </motion.h2>
        
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 150, 255, 0.3)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{award.title}</h3>
              </div>
              
              {award.organization && (
                <p className="text-neon-purple mb-2">{award.organization}</p>
              )}
              
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <Calendar size={16} />
                <span>{award.date}</span>
              </div>
              
              <p className="text-gray-300">
                <span className="font-medium">Project:</span> {award.project}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
