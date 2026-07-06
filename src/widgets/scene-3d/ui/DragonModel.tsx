'use client';

import { Float, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

const MODEL_PATH = '/models/dragon.glb';

/** Детализированная 3D-модель дракона (Stanford Dragon, CC0) с золотым покрытием. */
export function DragonModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);

  const goldMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#c9a227',
        emissive: '#4a3208',
        emissiveIntensity: 0.55,
        metalness: 0.92,
        roughness: 0.22,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
    [],
  );

  const cloned = useMemo(() => {
    const root = scene.clone(true);
    root.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const name = child.name.toLowerCase();
      if (name.includes('backdrop') || name.includes('cloth') || name.includes('plane')) {
        child.visible = false;
        return;
      }
      child.material = goldMat;
      child.castShadow = true;
      child.receiveShadow = true;
    });
    return root;
  }, [scene, goldMat]);

  useEffect(() => () => goldMat.dispose(), [goldMat]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.22) * 0.45 + t * 0.08;
    groupRef.current.position.y = Math.sin(t * 0.55) * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.85} rotation={[0.15, -0.6, 0]}>
        <primitive object={cloned} />
      </group>
    </Float>
  );
}

useGLTF.preload(MODEL_PATH);
