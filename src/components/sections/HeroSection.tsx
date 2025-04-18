
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="max-w-3xl text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            <span className="text-gradient">Hi, I'm</span> <br />
            <span className="text-white">Binayak Joshi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10">
            I'm a passionate full stack web developer with experience in UI/UX design and AI/ML, 
            specializing in creating beautiful, functional, and user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-primary group">
              <span>View My Work</span>
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="btn-outline group">
              <span>Get In Touch</span>
              <span className="inline-block ml-1 opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
