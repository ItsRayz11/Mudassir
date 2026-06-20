"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Brand palette (True Black & Gold) in hex for the 3D materials.
const COLORS = {
  walnut: "#454049", // graphite
  caramel: "#ECC877", // bright gold (hero accent)
  sand: "#CDC3AC", // warm light
  espresso: "#050506", // deepest black
};

/**
 * A cluster of small floating orbs used as a subtle ambient accent
 * around the hero portrait. The whole group eases toward the pointer
 * for a gentle parallax feel.
 */
function Orbs() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const orbs = useMemo(
    () => [
      { pos: [2.9, 1.6, -1] as const, scale: 0.42, color: COLORS.caramel, metal: 0.9 },
      { pos: [-3.0, -1.2, -0.5] as const, scale: 0.3, color: COLORS.sand, metal: 0.2 },
      { pos: [2.4, -1.9, 0.4] as const, scale: 0.24, color: COLORS.caramel, metal: 0.9 },
      { pos: [-2.5, 1.9, -1.2] as const, scale: 0.34, color: COLORS.walnut, metal: 0.4 },
      { pos: [3.3, -0.3, -0.8] as const, scale: 0.18, color: COLORS.sand, metal: 0.2 },
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const px = (state.pointer.x * viewport.width) / 14;
    const py = (state.pointer.y * viewport.height) / 14;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px, 0.04);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, py, 0.04);
  });

  return (
    <group ref={group}>
      {orbs.map((o, i) => (
        <Float key={i} speed={1 + i * 0.25} rotationIntensity={0.4} floatIntensity={1.8}>
          <mesh position={o.pos} scale={o.scale}>
            <sphereGeometry args={[1, 48, 48]} />
            <meshStandardMaterial
              color={o.color}
              roughness={o.metal > 0.5 ? 0.18 : 0.4}
              metalness={o.metal}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={1.3} />
      <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#ECC877" />
      <Orbs />
      {/* Environment drives the metallic gold reflections on the orbs. */}
      <Environment preset="night" />
    </Canvas>
  );
}
