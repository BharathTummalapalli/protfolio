import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="images/profile1.jpg"
                alt="Bharath Tummalapalli"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">Frontend Development Enthusiast</p>
                </div> */}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Hey, I'm Bharath, a frontend development enthusiast pursuing a BTech in IT. With over 2 years of hands-on experience, 
                I specialize in building sleek, responsive web interfaces that prioritize user experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                My toolkit includes HTML, CSS, JavaScript, and a sprinkle of React, which I use to create intuitive designs and optimize performance. 
                I thrive on creative problem-solving and collaboration, aiming to craft digital solutions that connect people and ideas.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">BTech in Information Technology</p>
                  <p className="text-gray-600 dark:text-gray-400">Currently Pursuing</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                  <p className="text-gray-700 dark:text-gray-300">2+ Years</p>
                  <p className="text-gray-600 dark:text-gray-400">Frontend Development</p>
                </div>
              </div>
              
              <a 
                href="dist\assets\Bharath Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;