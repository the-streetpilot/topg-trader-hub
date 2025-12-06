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

const ChartMesh = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(8, 4, 50, 25);
    const positions = geo.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.5;
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    meshRef.current.rotation.x = -0.4 + mouse.y * 0.1;
    meshRef.current.rotation.z = mouse.x * 0.05;
    
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.5 + time * 0.5) * Math.cos(y * 0.5 + time * 0.3) * 0.3;
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -1, 0]}>
      <meshBasicMaterial
        color="#1fb6ff"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
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
      
      {/* Floating dollar symbols - always active */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/40 font-bold select-none"
            style={{
              fontSize: `${12 + Math.random() * 16}px`,
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
      
      {/* Grid lines for chart feel - with parallax */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--neon-blue-rgb),0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--neon-blue-rgb),0.15)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      {/* Animated wave lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d="M0,50 Q250,30 500,50 T1000,50"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            className="animate-wave"
            style={{
              transform: `translateY(${30 + i * 20}%)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </svg>
      
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
        <ChartMesh mouse={mouse} />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
};

export default HeroScene;
