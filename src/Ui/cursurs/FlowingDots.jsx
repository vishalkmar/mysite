'use client';
import { useEffect, useRef, useCallback } from 'react';
const FlowingDots = ({
  backgroundColor = '#0d0118',
  lineColor = '80, 80, 80',
  particleColor = '255, 255, 255',
  animationSpeed = 0.005,
}) => {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const animationFrameId = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const flowPointsRef = useRef([]);
  const noise = (x, y, t) => {
    const sin1 = Math.sin(x * 0.01 + t);
    const sin2 = Math.sin(y * 0.01 + t * 0.8);
    const sin3 = Math.sin((x + y) * 0.005 + t * 1.2);
    return (sin1 + sin2 + sin3) / 3;
  };
  const getMouseInfluence = (x, y) => {
    const dx = x - mouseRef.current.x;
    const dy = y - mouseRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;
    return Math.max(0, 1 - distance / maxDistance);
  };
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement?.getBoundingClientRect();
    const displayWidth = rect?.width ?? window.innerWidth;
    const displayHeight = rect?.height ?? window.innerHeight;
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    const gridSize = 12;
    flowPointsRef.current = [];
    for (let x = gridSize / 2; x < displayWidth; x += gridSize) {
      for (let y = gridSize / 2; y < displayHeight; y += gridSize) {
        flowPointsRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          angle: Math.random() * Math.PI * 2,
          phase: Math.random() * Math.PI * 2,
          noiseOffset: Math.random() * 1000,
          originalX: x,
          originalY: y,
        });
      }
    }
  }, []);
  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;
    mouseRef.current.x = newX;
    mouseRef.current.y = newY;
  }, []);
  const handleMouseDown = useCallback((e) => {
    mouseRef.current.isDown = true;
  }, []);
  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    timeRef.current += animationSpeed;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    flowPointsRef.current.forEach((point) => {
      const noiseValue = noise(point.x, point.y, timeRef.current);
      const angle = noiseValue * Math.PI * 4;
      const dx = mouseRef.current.x - point.x;
      const dy = mouseRef.current.y - point.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const pushFactor = (1 - dist / 150) * 0.5;
        point.vx += (dx / dist) * pushFactor;
        point.vy += (dy / dist) * pushFactor;
      }
      point.vx += Math.cos(angle) * 0.1;
      point.vy += Math.sin(angle) * 0.1;
      point.vx *= 0.95;
      point.vy *= 0.95;
      const nextX = point.x + point.vx;
      const nextY = point.y + point.vy;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(nextX, nextY);
      const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
      const alpha = Math.min(0.8, speed * 8 + 0.3);
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${particleColor}, ${alpha})`;
      ctx.fill();
      point.x = nextX;
      point.y = nextY;
      if (nextX < 0) point.x = canvas.width;
      if (nextX > canvas.width) point.x = 0;
      if (nextY < 0) point.y = canvas.height;
      if (nextY > canvas.height) point.y = 0;
      const returnForce = 0.01;
      point.vx += (point.originalX - point.x) * returnForce;
      point.vy += (point.originalY - point.y) * returnForce;
    });
    animationFrameId.current = requestAnimationFrame(animate);
  }, [lineColor, particleColor, animationSpeed, backgroundColor]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    resizeCanvas();
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      timeRef.current = 0;
      flowPointsRef.current = [];
    };
  }, [animate, resizeCanvas, handleMouseMove, handleMouseDown, handleMouseUp]);
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ backgroundColor }}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
export default FlowingDots;
