'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingOrb({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });
  return (
    <Float speed={speed} floatIntensity={0.6}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#d4af37"
          emissive="#8a5a12"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.25}
          distort={0.28}
          speed={1.5}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

export default function DishesSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="absolute! inset-0"
    >
      <ambientLight intensity={0.4} color="#ffe9b0" />
      <pointLight position={[4, 2, 3]} intensity={20} color="#f5d67b" />
      <pointLight position={[-4, -2, 2]} intensity={15} color="#c1121f" />

      <FloatingOrb position={[-3.5, 1.2, -2]} scale={0.55} speed={1.1} />
      <FloatingOrb position={[3.8, -0.8, -1]} scale={0.7} speed={0.8} />
      <FloatingOrb position={[0.5, 2.5, -3]} scale={0.4} speed={1.4} />
      <Sparkles count={60} scale={10} size={1.8} speed={0.2} color="#f5d67b" opacity={0.35} />
    </Canvas>
  );
}
