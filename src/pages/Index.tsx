
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResumeSection from '../components/sections/ResumeSection';
import ContactSection from '../components/sections/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    // Animation initialization
    const animateElements = () => {
      const animatedElements = document.querySelectorAll('[data-aos]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('animate-fade-up');
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(el => {
        observer.observe(el);
      });
    };

    // Add interactive cursor effect
    const addCursorEffect = () => {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      
      const cursorInner = document.createElement('div');
      cursorInner.className = 'custom-cursor-inner';
      document.body.appendChild(cursorInner);
      
      document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
      
      // Add hover effect to interactive elements
      const interactiveElements = document.querySelectorAll('a, button');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
          cursorInner.classList.add('cursor-inner-hover');
        });
        
        el.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
          cursorInner.classList.remove('cursor-inner-hover');
        });
      });
    };

    // Call the animation functions
    setTimeout(animateElements, 100);
    
    // Only add cursor effect on non-touch devices
    if (!('ontouchstart' in window)) {
      addCursorEffect();
    }
    
    // Cleanup
    return () => {
      const cursor = document.querySelector('.custom-cursor');
      const cursorInner = document.querySelector('.custom-cursor-inner');
      
      if (cursor && cursorInner) {
        document.body.removeChild(cursor);
        document.body.removeChild(cursorInner);
      }
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
