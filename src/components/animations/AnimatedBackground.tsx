
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  growing: boolean;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mousePosition = useRef({ x: 0, y: 0 });
  const hovered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
      
      // Create new particles on mouse move for interactive effect
      if (hovered.current && particles.current.length < 150) {
        addParticleAtPosition(mousePosition.current.x, mousePosition.current.y);
      }
    };
    
    const handleMouseEnter = () => {
      hovered.current = true;
    };
    
    const handleMouseLeave = () => {
      hovered.current = false;
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 80);
      
      const colors = [
        'rgba(37, 99, 235, 0.7)',   // Blue
        'rgba(79, 70, 229, 0.7)',   // Indigo
        'rgba(124, 58, 237, 0.7)',  // Purple
        'rgba(219, 39, 119, 0.7)',  // Pink
      ];
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
          growing: Math.random() > 0.5
        });
      }
    };
    
    // Add a new particle at specified position
    const addParticleAtPosition = (x: number, y: number) => {
      const colors = [
        'rgba(37, 99, 235, 0.7)',   // Blue
        'rgba(79, 70, 229, 0.7)',   // Indigo
        'rgba(124, 58, 237, 0.7)',  // Purple
        'rgba(219, 39, 119, 0.7)',  // Pink
      ];
      
      particles.current.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.3,
        growing: Math.random() > 0.5
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Create breathing effect with size
        if (particle.growing) {
          particle.size += 0.03;
          if (particle.size > 7) {
            particle.growing = false;
          }
        } else {
          particle.size -= 0.03;
          if (particle.size < 2) {
            particle.growing = true;
          }
        }
        
        // Create interactive effect with mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = 0.3;
          const angle = Math.atan2(dy, dx);
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
          // Increase opacity when near mouse
          particle.opacity = Math.min(0.8, particle.opacity + 0.02);
        } else {
          // Gradually return to original opacity
          particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }
        
        // Add some random movement
        particle.speedX += (Math.random() - 0.5) * 0.01;
        particle.speedY += (Math.random() - 0.5) * 0.01;
        
        // Limit speed
        const maxSpeed = 1.5;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        const color = particle.color.slice(0, -2) + particle.opacity + ')';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Remove old particles when too many
        if (particles.current.length > 200) {
          particles.current.splice(0, 50);
        }
      });
      
      // Connect nearby particles with lines
      connectParticles(ctx);
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Connect particles that are close to each other
    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 0.2 * (1 - distance / maxDistance);
            
            // Get the color from first particle but adjust opacity
            const color1 = particles.current[i].color;
            const baseColor = color1.substring(0, color1.lastIndexOf(',')) + `,${opacity})`;
            
            ctx.beginPath();
            ctx.strokeStyle = baseColor;
            ctx.lineWidth = 1;
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: 'linear-gradient(to bottom right, #0f172a, #111827, #1e1b4b)',
      }}
    />
  );
};

export default AnimatedBackground;
