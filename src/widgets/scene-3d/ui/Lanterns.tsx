'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

interface LanternDef {
  pos: [number, number, number];
  scale: number;
  speed: number;
  phase: number;
}

const LANTERNS: LanternDef[] = [
  { pos: [-4.2, 1.8, -1], scale: 0.7, speed: 0.7, phase: 0 },
  { pos: [4.4, 2.4, -2], scale: 0.9, speed: 0.5, phase: 1.6 },
  { pos: [-3.1, -1.9, -0.5], scale: 0.6, speed: 0.9, phase: 3.1 },
  { pos: [3.4, -1.4, -1.5], scale: 0.75, speed: 0.6, phase: 4.4 },
  { pos: [0.4, 2.9, -3], scale: 0.8, speed: 0.45, phase: 2.2 },
];

/** Один парящий красный фонарик с золотыми навершиями и кисточкой. */
function Lantern({ def }: { def: LanternDef }) {
  const ref = useRef<THREE.Group>(null);

  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#c1121f',
        emissive: '#e0273a',
        emissiveIntensity: 1.5,
        roughness: 0.4,
        metalness: 0.2,
      }),
    [],
  );
  const goldMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#f5d67b',
        emissive: '#d4af37',
        emissiveIntensity: 0.8,
        metalness: 1,
        roughness: 0.3,
      }),
    [],
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = def.pos[1] + Math.sin(t * def.speed + def.phase) * 0.35;
    ref.current.rotation.y = Math.sin(t * 0.3 + def.phase) * 0.4;
  });

  return (
    <group ref={ref} position={def.pos} scale={def.scale}>
      {/* Тело фонаря */}
      <mesh material={bodyMat} scale={[1, 0.8, 1]}>
        <sphereGeometry args={[0.5, 20, 16]} />
      </mesh>
      {/* Верхнее и нижнее навершие */}
      <mesh position={[0, 0.42, 0]} material={goldMat}>
        <cylinderGeometry args={[0.22, 0.3, 0.14, 12]} />
      </mesh>
      <mesh position={[0, -0.42, 0]} material={goldMat}>
        <cylinderGeometry args={[0.3, 0.22, 0.14, 12]} />
      </mesh>
      {/* Кисточка */}
      <mesh position={[0, -0.72, 0]} material={goldMat}>
        <coneGeometry args={[0.09, 0.4, 8]} />
      </mesh>
    </group>
  );
}

export function Lanterns() {
  return (
    <group>
      {LANTERNS.map((def, i) => (
        <Lantern key={i} def={def} />
      ))}
    </group>
  );
}
