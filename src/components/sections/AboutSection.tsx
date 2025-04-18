
import React from 'react';
import { Award, Briefcase, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="glass p-8 rounded-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Who I Am</h3>
            <p className="text-white/80 mb-4">
              I'm a dedicated full stack web developer with a passion for creating intuitive and engaging digital experiences. 
              With a strong foundation in both front-end and back-end technologies, as well as UI/UX design and AI/ML, 
              I strive to build applications that are not only functional but also aesthetically pleasing.
            </p>
            <p className="text-white/80">
              Currently working at Future Intern as a Full Stack Web Developer, I've had valuable experiences at NIELIT as an AI/ML Intern 
              and at Assam Down Town University as a UI/UX Designer. These diverse roles have equipped me with a unique perspective 
              on creating comprehensive digital solutions.
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Briefcase className="text-portfolio-purple" size={20} />
                </div>
                <span>Full Stack Web Developer</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Award className="text-portfolio-blue" size={20} />
                </div>
                <span>UI/UX Designer</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <MapPin className="text-portfolio-pink" size={20} />
                </div>
                <span>India</span>
              </div>
            </div>
          </div>
          
          <div
            className="glass p-8 rounded-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Personal Details</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex">
                <span className="font-semibold w-24">Name:</span>
                <span>Binayak Joshi</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Email:</span>
                <span>binayakjoshi@example.com</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Phone:</span>
                <span>+91 9876543210</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Location:</span>
                <span>India</span>
              </li>
              <li className="flex">
                <span className="font-semibold w-24">Availability:</span>
                <span>Full-time</span>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-xl font-heading font-semibold mb-3">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Web Development</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">AI/ML</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Reading</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Technology</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
