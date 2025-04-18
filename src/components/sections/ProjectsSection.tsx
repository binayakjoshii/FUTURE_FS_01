
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and professional experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with user authentication, task creation, and organization features.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Firebase', 'Redux'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather forecast application that displays current and future weather conditions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      tags: ['JavaScript', 'API', 'CSS'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  const filters = ['all', 'React', 'Node.js', 'JavaScript', 'MongoDB', 'Firebase'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="glass overflow-hidden rounded-2xl transition-all duration-500 hover:transform hover:scale-[1.02] group"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.codeLink}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
