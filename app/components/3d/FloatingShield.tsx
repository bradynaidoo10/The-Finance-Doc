"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function DNAHelix() {
  const group = useRef<THREE.Group>(null);
  const sphere = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.25;
      group.current.position.y = Math.sin(t * 0.7) * 0.1;
    }
    if (sphere.current) {
      sphere.current.rotation.x = t * 0.2;
      sphere.current.rotation.z = t * 0.15;
    }
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.6;
      ring1.current.rotation.z = t * 0.3;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.4;
      ring2.current.rotation.y = t * 0.5;
    }
    if (ring3.current) {
      ring3.current.rotation.z = t * 0.35;
      ring3.current.rotation.x = -t * 0.25;
    }
  });

  return (
    <group ref={group}>
      {/* Core sphere — medical blue */}
      <Sphere ref={sphere} args={[1.0, 64, 64]}>
        <MeshDistortMaterial
          color="#1a6fb5"
          emissive="#1a6fb5"
          emissiveIntensity={0.2}
          metalness={0.7}
          roughness={0.2}
          distort={0.2}
          speed={1.5}
        />
      </Sphere>

      {/* Gold orbit ring 1 */}
      <Torus ref={ring1} args={[1.6, 0.028, 16, 100]}>
        <meshStandardMaterial
          color="#c8a84b"
          metalness={1}
          roughness={0.1}
          emissive="#c8a84b"
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* Blue orbit ring 2 */}
      <Torus ref={ring2} args={[2.0, 0.018, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial
          color="#2d8fd4"
          metalness={0.9}
          roughness={0.2}
          emissive="#1a6fb5"
          emissiveIntensity={0.3}
        />
      </Torus>

      {/* Gold orbit ring 3 — tilted */}
      <Torus ref={ring3} args={[2.4, 0.012, 16, 100]} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <meshStandardMaterial
          color="#e8c96e"
          metalness={1}
          roughness={0.15}
          emissive="#c8a84b"
          emissiveIntensity={0.2}
        />
      </Torus>
    </group>
  );
}

export default function FloatingShield() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,111,181,0.1)_0%,transparent_70%)]" />
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={1.0} color="#1a6fb5" />
        <pointLight position={[2, 3, -2]} intensity={0.6} color="#c8a84b" />
        <Environment preset="city" />
        <DNAHelix />
      </Canvas>
    </div>
  );
}
