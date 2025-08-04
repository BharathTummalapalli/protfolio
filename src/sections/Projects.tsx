import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Task Tracker App",
    description: "A minimalist task management application built with React. Features include task creation, deletion, and status tracking. The clean interface helps users stay organized and boost productivity.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "CSS", "Local Storage"],
    demoUrl: "https://bharathtummalapalli.github.io/Tasktracker/",
    repoUrl: "https://github.com/BharathTummalapalli/Tasktracker"
  },
  {
    id: 2,
    title: "Jamps Electronics E-commerce",
    description: "A modern e-commerce platform for electronics, featuring a responsive design, product catalog, and shopping cart functionality. Built with attention to user experience and performance.",
    image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://bharathtummalapalli.github.io/Jamps-Electronics/",
    repoUrl: "https://github.com/BharathTummalapalli/Jamps-Electronics"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A modern portfolio website showcasing my frontend development skills and projects. Features responsive design, dark mode support, and smooth animations for enhanced user experience.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "https://github.com/BharathTummalapalli/portfolio"
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const uniqueTags = Array.from(
    new Set(['All', ...projects.flatMap(project => project.tags)])
  );
  
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one presented unique challenges and
              opportunities to learn and grow as a developer.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeFilter === tag
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <a 
                          href={project.demoUrl} 
                          className="text-white bg-primary hover:bg-primary-dark px-3 py-1 rounded-full text-sm font-medium transition-colors flex items-center"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Live Demo
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                        <a 
                          href={project.repoUrl}
                          className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium transition-colors flex items-center"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Code
                          <Github size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={`${project.id}-${tag}`} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
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
      </div>
    </section>
  );
};

export default Projects;