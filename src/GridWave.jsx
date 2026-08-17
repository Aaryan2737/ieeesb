import React, { useRef, useEffect } from 'react';

const GridWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      time += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 45;
      const cols = Math.floor(canvas.width / spacing) + 2;
      const rows = Math.floor(canvas.height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 250;
          let wave = Math.sin(time + (i * 0.3) + (j * 0.3)) * 3;

          let size = 1.5;
          let alpha = 0.2;

          if (distance < maxDist) {
            const influence = (1 - distance / maxDist);
            size += influence * 3;
            alpha += influence * 0.6;
            // Wave gets stronger near mouse
            wave += Math.sin(time * 3 - distance * 0.05) * influence * 8;
          }

          ctx.beginPath();
          ctx.arc(x, y + wave, size, 0, Math.PI * 2);
          
          // Using a mid-gray color with mix-blend-difference
          // Over dark backgrounds, it will appear light. 
          // Over light backgrounds, it will appear dark.
          ctx.fillStyle = `rgba(160, 160, 160, ${alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none mix-blend-difference z-[100]"
      style={{ opacity: 0.8 }}
    />
  );
};

export default GridWave;
