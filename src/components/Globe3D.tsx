import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Wireframe globe
    const globe = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2, 3),
      new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      })
    );
    scene.add(globe);

    // Inner core
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 2),
      new THREE.MeshPhongMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      })
    );
    scene.add(core);

    // Outer ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.02, 16, 100),
      new THREE.MeshPhongMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.3,
      })
    );
    ring.rotation.x = Math.PI / 3;
    scene.add(ring);

    // Second ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.015, 16, 100),
      new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.15,
      })
    );
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    scene.add(ring2);

    // Floating points
    const pointsGeom = new THREE.BufferGeometry();
    const pointsCount = 200;
    const positions = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + (Math.random() - 0.5) * 0.3;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    pointsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.03,
      transparent: true,
      opacity: 0.6,
    });
    scene.add(new THREE.Points(pointsGeom, pointsMat));

    // Lighting
    scene.add(new THREE.AmbientLight(0x404040, 2));
    const pl1 = new THREE.PointLight(0x00ff88, 2, 100);
    pl1.position.set(10, 10, 10);
    scene.add(pl1);
    const pl2 = new THREE.PointLight(0x8b5cf6, 1.5, 100);
    pl2.position.set(-10, -10, 5);
    scene.add(pl2);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      globe.rotation.x += 0.001;
      core.rotation.y -= 0.005;
      core.rotation.z += 0.002;
      ring.rotation.z += 0.002;
      ring2.rotation.z -= 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[400px] h-[400px] mx-auto" />;
};

export default Globe3D;
