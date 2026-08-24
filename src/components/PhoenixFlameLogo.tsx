import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import phoenixFireImg from "@/assets/phoenix_logo_fire.png";

interface PhoenixFlameLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showParticles?: boolean;
  interactive?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  swaySpeed: number;
  swayAmount: number;
  seed: number;
}

const FIRE_COLORS = [
  "#ffffff", // Core hot white
  "#fef08a", // Bright yellow
  "#fde047", // Yellow gold
  "#fbbf24", // Warm amber
  "#f97316", // Flame orange
  "#ea580c", // Deep fiery orange
  "#ef4444", // Ruby flame
  "#dc2626", // Crimson flame
];

export function PhoenixFlameLogo({
  size = "lg",
  className = "",
  showParticles = true,
  interactive = true,
}: PhoenixFlameLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  // Size dimensions mapping
  const sizeMap = {
    sm: { box: "w-16 h-16", img: "w-12 h-12", particles: 20 },
    md: { box: "w-32 h-32", img: "w-24 h-24", particles: 35 },
    lg: { box: "w-64 h-64 sm:w-72 sm:h-72", img: "w-52 h-52 sm:w-60 sm:h-60", particles: 55 },
    xl: { box: "w-80 h-80 sm:w-96 sm:h-96", img: "w-64 h-64 sm:w-80 sm:h-80", particles: 75 },
  };

  const currentSize = sizeMap[size];

  useEffect(() => {
    if (!showParticles) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Handle high DPI
    const updateCanvasDimensions = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateCanvasDimensions();

    const particles: Particle[] = [];
    const maxParticles = currentSize.particles + (isHovered ? 25 : 0);

    const createParticle = (spawnBurst = false, burstX?: number, burstY?: number): Particle => {
      const rect = containerRef.current?.getBoundingClientRect() || { width: 280, height: 280 };
      const w = rect.width;
      const h = rect.height;

      // Spawn near bottom center / wings of phoenix
      const x = spawnBurst && burstX !== undefined
        ? burstX + (Math.random() - 0.5) * 30
        : w * 0.5 + (Math.random() - 0.5) * (w * 0.7);

      const y = spawnBurst && burstY !== undefined
        ? burstY + (Math.random() - 0.5) * 20
        : h * 0.85 - Math.random() * (h * 0.5);

      const colorIdx = Math.floor(Math.random() * FIRE_COLORS.length);

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.6 + 0.8), // Upward speed
        size: Math.random() * 2.8 + 1.2,
        alpha: Math.random() * 0.8 + 0.2,
        decay: Math.random() * 0.012 + 0.008,
        color: FIRE_COLORS[colorIdx],
        swaySpeed: Math.random() * 0.04 + 0.02,
        swayAmount: Math.random() * 1.5 + 0.5,
        seed: Math.random() * Math.PI * 2,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      const p = createParticle();
      // Distribute randomly across initial lifetime
      p.y = (containerRef.current?.getBoundingClientRect().height || 280) * (0.3 + Math.random() * 0.6);
      particles.push(p);
    }

    let tick = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick++;
      const rect = containerRef.current?.getBoundingClientRect() || { width: 280, height: 280 };
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Spawn extra particles if hovered or mouse active
      if (isHovered && Math.random() < 0.4 && particles.length < maxParticles + 20) {
        if (mousePos.current.active) {
          particles.push(createParticle(true, mousePos.current.x, mousePos.current.y));
        } else {
          particles.push(createParticle(true));
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Motion physics
        p.seed += p.swaySpeed;
        p.x += p.vx + Math.sin(p.seed) * p.swayAmount * 0.4;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size = Math.max(0.2, p.size - 0.015);

        // Draw glowing ember
        if (p.alpha > 0 && p.y > -20 && p.x > -20 && p.x < w + 20) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          // Recycle particle
          particles[i] = createParticle();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Intersection observer to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleResize = () => updateCanvasDimensions();
    window.addEventListener("resize", handleResize);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [showParticles, size, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mousePos.current.active = false;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none ${currentSize.box} ${className}`}
    >
      {/* 1. Ambient Background Flame Glows */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-40 transition-opacity duration-700 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(234,88,12,0.2) 50%, transparent 75%)",
          transform: isHovered ? "scale(1.25)" : "scale(1)",
        }}
      />

      {/* 2. Hot Golden Fire Core Aura */}
      <div
        className="pointer-events-none absolute w-3/4 h-3/4 rounded-full blur-2xl opacity-60 transition-all duration-500"
        style={{
          background: "radial-gradient(ellipse at 50% 60%, rgba(251,191,36,0.65) 0%, rgba(249,115,22,0.35) 45%, transparent 70%)",
          transform: isHovered ? "scale(1.15)" : "scale(1)",
        }}
      />

      {/* 3. Dynamic Flame Ring Glow */}
      <motion.div
        className="pointer-events-none absolute w-[110%] h-[110%] rounded-full blur-xl opacity-30"
        animate={{
          scale: [0.95, 1.08, 0.95],
          rotate: [0, 10, -10, 0],
          opacity: isHovered ? [0.45, 0.7, 0.45] : [0.25, 0.4, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        style={{
          background: "conic-gradient(from 180deg at 50% 50%, rgba(234,88,12,0.4) 0deg, rgba(251,191,36,0.6) 90deg, rgba(239,68,68,0.5) 180deg, rgba(245,158,11,0.6) 270deg, rgba(234,88,12,0.4) 360deg)",
        }}
      />

      {/* 4. Canvas Particle Embers & Rising Sparks */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 w-full h-full z-10"
        />
      )}

      {/* 5. The Phoenix Bird Logo */}
      <motion.div
        className="relative z-20 flex items-center justify-center cursor-pointer"
        animate={{
          y: [-3, 3, -3],
          scale: isHovered ? 1.06 : [1, 1.02, 1],
        }}
        transition={{
          y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
          scale: isHovered ? { duration: 0.3 } : { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        whileTap={{ scale: 0.96 }}
      >
        <img
          src={phoenixFireImg}
          alt="Phoenix Logo"
          className={`${currentSize.img} object-contain transition-all duration-500`}
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 16px rgba(254,240,138,0.9)) drop-shadow(0 0 32px rgba(249,115,22,0.85)) drop-shadow(0 0 60px rgba(234,88,12,0.6)) brightness(1.15)"
              : "drop-shadow(0 0 12px rgba(251,191,36,0.75)) drop-shadow(0 0 25px rgba(249,115,22,0.6)) drop-shadow(0 0 50px rgba(234,88,12,0.35))",
          }}
        />
      </motion.div>
    </div>
  );
}
