import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2 + 0.5; // Depth factor
        this.vx = (Math.random() - 0.5) * 0.3 / this.z;
        this.vy = (Math.random() - 0.5) * 0.3 / this.z;
        this.size = (Math.random() * 1.5 + 0.5) * dpr;
        const opacity = 0.1 / this.z;
        this.color = `rgba(16, 185, 129, ${opacity})`; // Emerald theme
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth * dpr;
      height = window.innerHeight * dpr;
      
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      ctx.scale(1, 1);

      const particleCount = Math.min(Math.floor((width * height) / 15000), window.innerWidth < 768 ? 40 : 120);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let time = 0;
    const animate = () => {
      time += 0.002;
      
      // Background Mesh Gradient
      const g1x = width * (0.5 + Math.cos(time * 0.5) * 0.2);
      const g1y = height * (0.5 + Math.sin(time * 0.3) * 0.2);
      const g2x = width * (0.5 + Math.sin(time * 0.4) * 0.3);
      const g2y = height * (0.5 + Math.cos(time * 0.6) * 0.3);

      const gradient = ctx.createRadialGradient(g1x, g1y, 0, g1x, g1y, width * 0.8);
      gradient.addColorStop(0, '#050505');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle secondary glow
      const glow = ctx.createRadialGradient(g2x, g2y, 0, g2x, g2y, width * 0.5);
      glow.addColorStop(0, 'rgba(16, 185, 129, 0.03)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Particles & Connections
      if (!prefersReducedMotion) {
        particles.forEach((p, i) => {
          p.update();
          p.draw();

          // Occasional faint connections
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;
            const maxDist = 150 * dpr;

            if (distSq < maxDist * maxDist) {
              const distance = Math.sqrt(distSq);
              const opacity = (1 - distance / maxDist) * 0.05 / (p.z * p2.z);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
              ctx.lineWidth = 0.5 * dpr;
              ctx.stroke();
            }
          }
        });
      }

      // Noise Texture (Static but layered)
      ctx.globalCompositeOperation = 'overlay';
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.01)';
        ctx.fillRect(x, y, 1, 1);
      }
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#000' }}
    />
  );
};

export default AnimatedBackground;
