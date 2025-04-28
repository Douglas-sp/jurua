
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Award } from "lucide-react";

const experiences = [
  {
    title: "Conservation Science & MEL Manager",
    company: "The Jane Goodall Institute, Uganda",
    period: "January 2025-Present",
    responsibilities: [
      "Providing technical support and training related to the use of geospatial technologies within JGI projects/programs",
      "Supervising and coordinating the work of GIS assistants and forest monitors in the collection, transmitting, and storage of geospatial data",
      "Developing and maintaining geospatial and informational databases for project/program management"
    ]
  },
  {
    title: "East Africa Regional Ambassador",
    company: "YouthMappers Program (USAID)",
    period: "January 2025-Present",
    responsibilities: [
      "Serving as the regional lead for promoting YouthMappers chapter activities",
      "Actively highlighting regional mapping projects and their outcomes within the local and global YouthMappers community",
      "Working closely with ambassadors to cohesively promote training sessions, mapping projects, and chapter-building initiatives across the region"
    ]
  },
  {
    title: "Executive Director",
    company: "MAPRI Initiative, Uganda",
    period: "January 2024-Present",
    responsibilities: [
      "Leading a youth-founded and led nonprofit organization committed to improving the wellbeing of marginalized communities in Uganda through geospatial technology",
      "Providing strategic leadership and oversight to program development, partnerships and institutional growth"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-space-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-lg p-6 border-l-4 border-neon-blue"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase className="text-neon-blue" size={18} />
                    {exp.title}
                  </h3>
                  <p className="text-neon-purple">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-neon-blue mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.a
            href="#"
            className="px-6 py-3 bg-transparent text-white border border-neon-blue rounded-lg font-medium hover:bg-neon-blue/10 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award size={18} />
            View All Experience
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
