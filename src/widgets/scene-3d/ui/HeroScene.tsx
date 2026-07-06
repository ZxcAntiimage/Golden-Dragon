'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  AdaptiveDpr,
  Environment,
  Preload,
  Sparkles,
  Stars,
} from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Dragon } from './Dragon';
import { Lanterns } from './Lanterns';
import { GoldDust } from './GoldDust';

/** Лёгкий параллакс: камера мягко следует за курсором. */
function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame(() => {
    target.current.set(pointer.x * 1.4, pointer.y * 0.9, 8);
    camera.position.lerp(target.current, 0.045);
    camera.lookAt(0, 0, -1);
  });
  return null;
}

/** Медленно вращающееся золотое кольцо — дополнительный 3D-акцент. */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI * 0.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    ref.current.rotation.z = state.clock.elapsedTime * 0.12;
  });
  return (
    <mesh ref={ref} position={[0, -0.5, -2]}>
      <torusGeometry args={[5.5, 0.03, 16, 120]} />
      <meshStandardMaterial
        color="#f5d67b"
        emissive="#d4af37"
        emissiveIntensity={1.2}
        metalness={1}
        roughness={0.2}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
      className="absolute! inset-0"
      shadows
    >
      <color attach="background" args={['#0a0807']} />
      <fog attach="fog" args={['#0a0807', 8, 22]} />

      <ambientLight intensity={0.28} color="#ffe9b0" />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.4}
        color="#ffd27a"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-6, -2, 2]} intensity={50} color="#c1121f" distance={20} />
      <pointLight position={[6, 3, 3]} intensity={35} color="#f5d67b" distance={20} />
      <spotLight
        position={[0, 6, 4]}
        angle={0.45}
        penumbra={0.8}
        intensity={25}
        color="#fff0c8"
        castShadow
      />

      <Suspense fallback={null}>
        <Environment preset="night" />
        <Stars radius={80} depth={40} count={2800} factor={3.5} saturation={0.4} fade speed={0.6} />
        <Sparkles count={120} scale={14} size={2.2} speed={0.35} color="#f5d67b" opacity={0.55} />
        <Dragon />
        <Lanterns />
        <GoldDust />
        <OrbitRing />
        <Preload all />
      </Suspense>

      <CameraRig />
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
