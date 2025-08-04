import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-10 md:pt-20 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 md:w-64 md:h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 md:bottom-1/3 left-1/4 w-24 h-24 md:w-56 md:h-56 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="text-primary dark:text-primary-light">Hello, I'm </span>
            <span className="relative inline-block">
              Bharath Tummalapalli
              <span className="absolute bottom-0 left-0 w-full h-1 bg-accent transform -translate-y-2"></span>
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm a BTech IT student passionate about crafting vibrant, user-friendly web experiences with HTML, CSS, and JavaScript. I love turning ideas into responsive designs that engage and inspire!
          </p>

          <div className="flex items-center justify-center space-x-4 mb-12">
            <a
              href="https://github.com/yourusername"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/bharath-tummalapalli-23a897352"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-medium transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <div className="relative z-10 pb-6 md:pb-8 flex justify-center">
        <a
          href="#about"
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
