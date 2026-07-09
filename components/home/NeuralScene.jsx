"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function NeuralSphere() {
  const pointsRef = useRef();
  const count = 400; // Adjusted for a cleaner look

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      pos.set([
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
      ], i * 3);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    pointsRef.current.rotation.y += delta * 0.15;
    pointsRef.current.rotation.x += delta * 0.08;
  });

  return (
    <group ref={pointsRef} scale={1.8}> {/* Controlled scale to keep it small/round */}
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#e31e24"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Sphere args={[0.98, 16, 16]}>
        <meshBasicMaterial color="#e31e24" transparent opacity={0.05} wireframe />
      </Sphere>
    </group>
  );
}

export default function NeuralScene() {
  return (
    <div className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px] max-w-full aspect-square"> {/* Square container for perfect roundness */}
      <Canvas camera={{ position: [0, 0, 5.6], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#e31e24" intensity={2} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <NeuralSphere />
        </Float>
      </Canvas>
    </div>
  );
}