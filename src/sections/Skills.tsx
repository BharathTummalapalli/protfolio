import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'technical' | 'soft';
}

const skills: Skill[] = [
  // Frontend Skills
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'React', level: 70, category: 'frontend' },
  
  // Technical Skills
  { name: 'UI/UX Design', level: 75, category: 'technical' },
  { name: 'Web Optimization', level: 80, category: 'technical' },
  { name: 'Responsive Design', level: 85, category: 'technical' },
  { name: 'Version Control', level: 75, category: 'technical' },
  
  // Soft Skills
  { name: 'Creativity', level: 90, category: 'soft' },
  { name: 'Collaboration', level: 85, category: 'soft' },
  { name: 'Problem Solving', level: 85, category: 'soft' },
  { name: 'Communication', level: 80, category: 'soft' },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'technical', label: 'Technical' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              These are the technologies and tools I work with to bring ideas to life. 
              I'm constantly learning and expanding my skillset.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;