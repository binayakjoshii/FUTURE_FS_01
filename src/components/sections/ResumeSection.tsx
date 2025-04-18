
import React, { useState } from 'react';
import { Calendar, Briefcase, GraduationCap, Award, Download, ExternalLink, ArrowRight } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'education';
  skills?: string[];
  link?: string;
}

const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      company: 'Future Intern',
      date: 'Present',
      description: 'Currently working as a full stack web developer, building responsive web applications using modern technologies. Collaborating with cross-functional teams to develop and maintain client websites and applications.',
      type: 'work',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript', 'Git'],
      link: 'https://futureintern.com'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Assam Down Town University',
      date: '2023',
      description: 'Designed user interfaces and experiences for web applications. Created wireframes, prototypes, and high-fidelity designs. Conducted user research and implemented user-centric design principles.',
      type: 'work',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping', 'Wireframing'],
      link: 'https://adtu.in'
    },
    {
      id: 3,
      title: 'AI/ML Intern',
      company: 'NIELIT',
      date: '2022',
      description: 'Worked on implementing machine learning algorithms and AI models. Collaborated with data scientists and engineers to develop and deploy ML solutions. Analyzed and visualized data for decision-making.',
      type: 'work',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'],
      link: 'https://nielit.gov.in'
    },
    {
      id: 4,
      title: 'Master of Computer Science',
      company: 'University Name',
      date: '2020 - 2022',
      description: 'Specialized in web technologies and software engineering. Completed thesis on modern JavaScript frameworks and their impact on web development.',
      type: 'education',
    },
    {
      id: 5,
      title: 'Bachelor of Science in Computer Science',
      company: 'University Name',
      date: '2016 - 2020',
      description: 'Studied computer science fundamentals, data structures, algorithms, and web development. Participated in various coding competitions and hackathons.',
      type: 'education',
    },
    {
      id: 6,
      title: 'Web Development Certification',
      company: 'Online Platform',
      date: '2019',
      description: 'Completed comprehensive certification in web development covering HTML, CSS, JavaScript, and responsive design principles.',
      type: 'education',
    },
  ];

  const filteredItems = timelineItems.filter(item => item.type === activeTab);
  
  const toggleItemDetails = (id: number) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <section id="resume" className="section-padding bg-portfolio-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 p-1 rounded-full">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'work' 
                  ? 'bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('work')}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'education' 
                  ? 'bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={16} />
              <span>Education</span>
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="glass p-6 rounded-2xl mb-6 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-white/60">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                    <p className="text-white/80">{item.company}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleItemDetails(item.id)}
                    className="mt-4 sm:mt-0 text-portfolio-purple hover:text-portfolio-blue transition-colors self-start"
                    aria-label={activeItem === item.id ? "Hide details" : "Show details"}
                  >
                    <ArrowRight size={20} className={`transition-transform duration-300 ${activeItem === item.id ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/70 mb-4">{item.description}</p>
                  
                  {item.skills && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Skills Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-portfolio-blue hover:text-portfolio-purple transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 btn-primary"
            download
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
