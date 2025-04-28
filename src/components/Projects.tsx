
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Award } from "lucide-react";

const projects = [
  {
    title: "Estimating Above Ground Biomass and Carbon Stocks",
    description: "Used Polarimetric SAR Interferometry to estimate biomass and carbon stocks in the Budongo Tropical Rainforest.",
    tags: ["Remote Sensing", "SAR", "Carbon Stocks"],
    period: "2021-2023",
    highlight: true
  },
  {
    title: "Identifying Deforestation Hotspots in Budongo Tropical Rainforest",
    description: "Used the Digital Earth Africa Sandbox to identify deforestation hotspots through advanced satellite imagery analysis.",
    tags: ["Landsat8", "Python", "GIS"],
    period: "2021-2023",
    award: "Digital Earth Africa Innovations Award"
  },
  {
    title: "Assessing Land Productivity Status of Masindi district",
    description: "Used MODIS satellite imagery and soil productivity index to assess land productivity across all sub counties.",
    tags: ["MODIS", "Soil Productivity", "GIS"],
    period: "2021-2023"
  },
  {
    title: "Illuminating Energy Access Inequities in informal urban settlements",
    description: "Conducted physical survey of energy infrastructure in 25 informal settlements of Kampala using geospatial tools.",
    tags: ["Urban Mapping", "Energy", "Field Survey"],
    period: "May 2022-July 2023"
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div 
    className={`glass-card rounded-lg p-6 relative overflow-hidden ${project.highlight ? 'border border-neon-blue/50' : ''}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 150, 255, 0.3)" }}
  >
    {project.highlight && (
      <div className="absolute top-0 right-0">
        <div className="bg-neon-blue text-white text-xs px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
          Featured
        </div>
      </div>
    )}
    
    {project.award && (
      <div className="flex items-center gap-2 text-neon-purple mb-2">
        <Award size={16} />
        <span className="text-sm">{project.award}</span>
      </div>
    )}
    
    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
    
    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
      <Calendar size={14} />
      <span>{project.period}</span>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag: string, i: number) => (
        <span key={i} className="px-2 py-1 bg-space rounded-full text-xs text-neon-blue border border-neon-blue/30">
          {tag}
        </span>
      ))}
    </div>
    
    <motion.button
      className="text-white text-sm flex items-center gap-2 hover:text-neon-blue transition-colors"
      whileHover={{ x: 5 }}
    >
      View details <ExternalLink size={14} />
    </motion.button>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-space-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Research Projects
        </motion.h2>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <motion.a
            href="#"
            className="px-6 py-3 bg-transparent text-white border border-neon-blue rounded-lg font-medium hover:bg-neon-blue/10 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
