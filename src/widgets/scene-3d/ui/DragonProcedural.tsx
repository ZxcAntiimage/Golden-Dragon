'use client';

import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const TAU = Math.PI * 2;

function buildSpineCurve(phase: number): THREE.CatmullRomCurve3 {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    const angle = t * TAU * 1.35 + phase;
    pts.push(
      new THREE.Vector3(
        Math.cos(angle) * (3.4 - t * 0.6),
        Math.sin(t * TAU * 1.8 + phase * 1.2) * 1.1,
        Math.sin(angle) * 1.7 - 1.4,
      ),
    );
  }
  return new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.6);
}

/** Запасной дракон из золотых трубок — если GLB-модель недоступна. */
export function DragonProcedural() {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const phase = useRef(0);
  const vecA = useMemo(() => new THREE.Vector3(), []);
  const vecB = useMemo(() => new THREE.Vector3(), []);

  const goldMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#d4af37',
        emissive: '#5a3d0a',
        emissiveIntensity: 0.5,
        metalness: 0.95,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    [],
  );

  const { bodyGeom, curve } = useMemo(() => {
    const c = buildSpineCurve(0);
    return { bodyGeom: new THREE.TubeGeometry(c, 180, 0.32, 24, false), curve: c };
  }, []);

  useFrame((state, delta) => {
    phase.current += delta * 0.12;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.35;
    }
    if (headRef.current) {
      curve.getPointAt(0.01, vecA);
      curve.getTangentAt(0.01, vecB);
      headRef.current.position.copy(vecA);
      headRef.current.lookAt(vecA.clone().add(vecB));
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.45}>
      <group ref={groupRef}>
        <mesh geometry={bodyGeom} material={goldMat} castShadow />

        <group ref={headRef}>
          <mesh material={goldMat}>
            <sphereGeometry args={[0.55, 24, 24]} />
          </mesh>
          <mesh position={[0, -0.05, 0.55]} rotation={[0.3, 0, 0]} material={goldMat}>
            <coneGeometry args={[0.3, 0.75, 16]} />
          </mesh>
          <mesh position={[0.22, 0.5, -0.05]} rotation={[0.2, 0, 0.45]} material={goldMat}>
            <coneGeometry args={[0.07, 0.85, 10]} />
          </mesh>
          <mesh position={[-0.22, 0.5, -0.05]} rotation={[0.2, 0, -0.45]} material={goldMat}>
            <coneGeometry args={[0.07, 0.85, 10]} />
          </mesh>
          <mesh position={[0.22, 0.1, 0.38]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial color="#c1121f" emissive="#ff2a3d" emissiveIntensity={2.5} />
          </mesh>
          <mesh position={[-0.22, 0.1, 0.38]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial color="#c1121f" emissive="#ff2a3d" emissiveIntensity={2.5} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}
