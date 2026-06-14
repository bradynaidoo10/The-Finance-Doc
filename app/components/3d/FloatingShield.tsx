"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Torus, Environment } from "@react-three/drei";
import * as THREE from "three";

function GoldOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.3;
      outerRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
      outerRef.current.position.y = Math.sin(t * 0.8) * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.5;
      ringRef.current.rotation.z = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.4;
      ring2Ref.current.rotation.y = t * 0.6;
    }
  });

  return (
    <group>
      <Sphere ref={outerRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#c8a84b"
          emissive="#c8a84b"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.1}
          distort={0.25}
          speed={2}
          wireframe={false}
        />
      </Sphere>

      <Torus ref={ringRef} args={[1.8, 0.025, 16, 100]}>
        <meshStandardMaterial
          color="#e8c96e"
          metalness={1}
          roughness={0.1}
          emissive="#c8a84b"
          emissiveIntensity={0.4}
        />
      </Torus>

      <Torus ref={ring2Ref} args={[2.2, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial
          color="#c8a84b"
          metalness={1}
          roughness={0.2}
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
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,168,75,0.12)_0%,transparent_70%)]" />
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={0.8} color="#c8a84b" />
        <pointLight position={[0, 3, -3]} intensity={0.5} color="#e8c96e" />
        <Environment preset="city" />
        <GoldOrb />
      </Canvas>
    </div>
  );
}
