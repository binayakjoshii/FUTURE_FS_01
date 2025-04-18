
import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const SkillsSection: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 90, color: 'from-portfolio-blue to-portfolio-purple' },
    { name: 'JavaScript', level: 85, color: 'from-portfolio-blue to-portfolio-purple' },
    { name: 'React.js', level: 80, color: 'from-portfolio-blue to-portfolio-purple' },
    { name: 'TypeScript', level: 75, color: 'from-portfolio-blue to-portfolio-purple' },
    { name: 'Tailwind CSS', level: 85, color: 'from-portfolio-blue to-portfolio-purple' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 75, color: 'from-portfolio-purple to-portfolio-pink' },
    { name: 'Express.js', level: 70, color: 'from-portfolio-purple to-portfolio-pink' },
    { name: 'MongoDB', level: 65, color: 'from-portfolio-purple to-portfolio-pink' },
    { name: 'SQL', level: 60, color: 'from-portfolio-purple to-portfolio-pink' },
    { name: 'RESTful APIs', level: 80, color: 'from-portfolio-purple to-portfolio-pink' },
  ];

  const otherSkills: String[] = [
    'Git', 'GitHub', 'Webpack', 'Vite', 'Jest', 'Figma', 'VS Code', 
    'Responsive Design', 'UI/UX', 'PWA', 'SEO', 'Performance Optimization'
  ];

  return (
    <section id="skills" className="section-padding bg-portfolio-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            className="glass p-8 rounded-2xl"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">Frontend Development</h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/80">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="glass p-8 rounded-2xl"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">Backend Development</h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/80">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          className="glass p-8 rounded-2xl mt-12"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-heading font-semibold mb-6">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/5 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
