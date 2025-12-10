import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Check if WebGL is available
const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

interface ParticlesProps {
  count: number;
  mouse: { x: number; y: number };
}

const Particles = ({ count, mouse }: ParticlesProps) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Blue to cyan gradient colors
      const t = Math.random();
      colors[i3] = 0.1 + t * 0.1; // R
      colors[i3 + 1] = 0.5 + t * 0.3; // G
      colors[i3 + 2] = 0.8 + t * 0.2; // B

      sizes[i] = Math.random() * 2 + 0.5;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.02;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.05;
    
    // Respond to mouse
    mesh.current.position.x = mouse.x * 0.5;
    mesh.current.position.y = mouse.y * 0.3;

    if (light.current) {
      light.current.position.x = mouse.x * 3;
      light.current.position.y = mouse.y * 2;
    }
  });

  return (
    <>
      <pointLight ref={light} color="#1fb6ff" intensity={2} distance={10} />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};

// Animated trading line component
const TradingLine = ({ delay, baseY, amplitude, speed, color, opacity }: { 
  delay: number; 
  baseY: number; 
  amplitude: number; 
  speed: number; 
  color: string;
  opacity: number;
}) => {
  const [points, setPoints] = useState<string>("");
  
  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const segments = 50;
      const width = 1200;
      
      let path = "";
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * width;
        const phase = elapsed * speed + delay;
        
        // Create realistic trading chart movement
        const wave1 = Math.sin(phase + i * 0.15) * amplitude * 0.5;
        const wave2 = Math.sin(phase * 1.3 + i * 0.08) * amplitude * 0.3;
        const wave3 = Math.sin(phase * 0.7 + i * 0.25) * amplitude * 0.2;
        const noise = Math.sin(phase * 3 + i * 0.5) * amplitude * 0.1;
        
        const y = baseY + wave1 + wave2 + wave3 + noise;
        path += `${i === 0 ? 'M' : 'L'}${x},${y} `;
      }
      
      setPoints(path);
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationId);
  }, [delay, baseY, amplitude, speed]);
  
  return (
    <path
      d={points}
      fill="none"
      stroke={color}
      strokeWidth="2"
      opacity={opacity}
      className="drop-shadow-lg"
      style={{
        filter: `drop-shadow(0 0 8px ${color})`,
      }}
    />
  );
};

// Enhanced CSS-only fallback with always-active animations for mobile
const FallbackScene = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0]?.clientY : e.clientY;
      if (clientX !== undefined && clientY !== undefined) {
        setMousePos({
          x: (clientX / window.innerWidth) * 2 - 1,
          y: -(clientY / window.innerHeight) * 2 + 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 transition-all duration-500"
        style={{
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        }}
      />
      
      {/* 3D perspective container for trading lines */}
      <div 
        className="absolute inset-0"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          style={{
            transform: `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg) translateZ(0)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2ce89a" stopOpacity="0" />
              <stop offset="20%" stopColor="#2ce89a" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#2ce89a" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#2ce89a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4d6d" stopOpacity="0" />
              <stop offset="20%" stopColor="#ff4d6d" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#ff4d6d" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff4d6d" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Multiple animated trading lines at different depths */}
          <g style={{ transform: 'translateZ(-100px)' }}>
            <TradingLine delay={0} baseY={300} amplitude={80} speed={0.8} color="url(#lineGradient1)" opacity={1} />
          </g>
          <g style={{ transform: 'translateZ(-50px)' }}>
            <TradingLine delay={1.5} baseY={350} amplitude={60} speed={0.6} color="url(#lineGradient2)" opacity={0.7} />
          </g>
          <g style={{ transform: 'translateZ(-150px)' }}>
            <TradingLine delay={3} baseY={250} amplitude={50} speed={0.5} color="url(#lineGradient3)" opacity={0.5} />
          </g>
          <g style={{ transform: 'translateZ(-200px)' }}>
            <TradingLine delay={4.5} baseY={400} amplitude={40} speed={0.4} color="url(#lineGradient1)" opacity={0.3} />
          </g>
          <g style={{ transform: 'translateZ(-250px)' }}>
            <TradingLine delay={6} baseY={200} amplitude={35} speed={0.35} color="url(#lineGradient2)" opacity={0.2} />
          </g>
        </svg>
      </div>
      
      {/* Floating dollar symbols - always active */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 font-bold select-none"
            style={{
              fontSize: `${12 + Math.random() * 14}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translate(${mousePos.x * (10 + i * 0.5)}px, ${mousePos.y * (10 + i * 0.5)}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {i % 3 === 0 ? "$" : i % 3 === 1 ? "€" : "£"}
          </div>
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
    </div>
  );
};

const HeroScene = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    setWebGLSupported(isWebGLAvailable());
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        setMouse({
          x: (e.touches[0].clientX / window.innerWidth) * 2 - 1,
          y: -(e.touches[0].clientY / window.innerHeight) * 2 + 1,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    setIsReady(true);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isReady) return null;

  // Use enhanced fallback for mobile or when WebGL is not supported
  if (!webGLSupported || isMobile) {
    return <FallbackScene />;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.2} />
        <Particles count={500} mouse={mouse} />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
};

export default HeroScene;
