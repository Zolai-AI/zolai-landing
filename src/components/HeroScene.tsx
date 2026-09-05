import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function BrainSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#22c55e"
          emissive="#16a34a"
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.1}
          distort={0.2}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#4ade80" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function ConnectionLines() {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: { points: [number, number, number][]; color: string }[] = [];
    for (let i = 0; i < 15; i++) {
      const a = [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6] as [number, number, number];
      const b = [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6] as [number, number, number];
      result.push({ points: [a, b], color: i % 3 === 0 ? "#22d3ee" : "#22c55e" });
    }
    return result;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color={line.color}
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <BrainSphere />
        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
