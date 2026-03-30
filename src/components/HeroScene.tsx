import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GlowOrb = ({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={ref} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.12}
        />
      </Sphere>
    </Float>
  );
};

const FloatingRing = ({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = tilt + clock.getElapsedTime() * speed;
      ref.current.rotation.z = clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
};

const ParticleCloud = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 600;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const blue = new THREE.Color('#6366f1');
    const purple = new THREE.Color('#a855f7');
    const cyan = new THREE.Color('#06b6d4');
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      const c = [blue, purple, cyan][Math.floor(Math.random() * 3)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} transparent opacity={0.5} sizeAttenuation vertexColors />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#6366f1" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#a855f7" />
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#06b6d4" />
        
        <GlowOrb position={[2, 0.5, -1]} color="#6366f1" size={1.5} />
        <GlowOrb position={[-2.5, -0.5, -2]} color="#a855f7" size={1.2} />
        <GlowOrb position={[0, -2, -1.5]} color="#06b6d4" size={0.8} />
        
        <FloatingRing radius={2.8} color="#6366f1" speed={0.12} tilt={0.5} />
        <FloatingRing radius={3.3} color="#a855f7" speed={-0.08} tilt={1.2} />
        <FloatingRing radius={3.8} color="#06b6d4" speed={0.06} tilt={0.8} />
        
        <ParticleCloud />
        <Stars radius={60} depth={60} count={800} factor={2.5} saturation={0.2} fade speed={0.8} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
