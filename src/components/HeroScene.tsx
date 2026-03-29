import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#4ade80"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
};

const WireframeRing = ({ radius, color, speed }: { radius: number; color: string; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * speed;
      ref.current.rotation.z = clock.getElapsedTime() * speed * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  );
};

const DataPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#4ade80" size={0.015} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#4ade80" />
        <pointLight position={[-5, -5, 3]} intensity={0.5} color="#a855f7" />
        
        <AnimatedSphere />
        <WireframeRing radius={2.5} color="#4ade80" speed={0.2} />
        <WireframeRing radius={3} color="#a855f7" speed={-0.15} />
        <WireframeRing radius={3.5} color="#06b6d4" speed={0.1} />
        <DataPoints />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
