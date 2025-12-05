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

// CSS-only fallback component when WebGL is not available
const FallbackScene = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-neon-blue/5" />
      
      {/* Floating particles using CSS */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-neon-blue/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Grid lines for chart feel */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,182,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(31,182,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
};

const HeroScene = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsReady(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isReady) return null;

  // Use fallback if WebGL is not supported
  if (!webGLSupported) {
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
