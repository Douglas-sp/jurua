
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Layers, Map, Satellite } from "lucide-react";

const SkillCategory = ({ title, skills, icon, delay }: { title: string; skills: string[]; icon: React.ReactNode; delay: number }) => (
  <motion.div 
    className="glass-card rounded-lg p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-forest-light/20 flex items-center justify-center text-canopy">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <motion.div 
          key={i}
          className="px-3 py-1 bg-forest rounded-full text-sm border border-forest-light/10 text-gray-300"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(144, 238, 144, 0.2)" }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "GIS & Remote Sensing",
      icon: <Layers size={20} />,
      skills: ["ArcGIS Pro", "QGIS", "ArcGIS Online", "SNAP", "AutoCAD", "Kobo Toolbox", "ODK", "DSM Tracker"]
    },
    {
      title: "Programming & Data Science",
      icon: <Code size={20} />,
      skills: ["Python", "R", "JavaScript", "HTML", "CSS", "C++", "SQL", "GeoDjango", "Machine Learning"]
    },
    {
      title: "Field Techniques",
      icon: <Globe size={20} />,
      skills: ["GNSS Surveys", "UAV Mapping", "Field Data Collection", "Cadastral Surveys", "Point Cloud Processing"]
    },
    {
      title: "Database & Cloud",
      icon: <Database size={20} />,
      skills: ["Database Management", "Cloud-Based Geoprocessing", "GIS Data Standards", "Data Visualization"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="canopy-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 glass-card p-6 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Languages</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-satellite">English</h4>
              <p className="text-gray-300 text-sm">Distinguished level in Listening, Speaking, Reading, and Writing</p>
            </div>
            <div>
              <h4 className="font-medium text-satellite">Runyoro</h4>
              <p className="text-gray-300 text-sm">Very good in speaking, listening and writing</p>
            </div>
            <div>
              <h4 className="font-medium text-satellite">Luganda</h4>
              <p className="text-gray-300 text-sm">Very good in speaking, listening and writing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
