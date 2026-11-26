"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Cloud, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Tree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.14, 1.3, 8]} />
        <meshStandardMaterial color="#765039" />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial color="#315d38" roughness={1} />
      </mesh>
      <mesh position={[0.35, 1.35, 0.1]} castShadow>
        <icosahedronGeometry args={[0.48, 1]} />
        <meshStandardMaterial color="#477a45" roughness={1} />
      </mesh>
    </group>
  );
}

function Farmhouse() {
  return (
    <group position={[0, 0, -1.5]}>
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[2.1, 1.3, 1.7]} />
        <meshStandardMaterial color="#e5d7bd" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.55, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[1.55, 1.15, 4]} />
        <meshStandardMaterial color="#754a35" roughness={1} />
      </mesh>
      <mesh position={[0, 0.48, 0.87]}>
        <boxGeometry args={[0.42, 0.85, 0.06]} />
        <meshStandardMaterial color="#68452f" />
      </mesh>
      {[-0.62, 0.62].map((x) => (
        <mesh key={x} position={[x, 0.88, 0.88]}>
          <boxGeometry args={[0.34, 0.35, 0.05]} />
          <meshStandardMaterial color="#8bb2b0" />
        </mesh>
      ))}
    </group>
  );
}

function FieldRows() {
  return (
    <group position={[0, -0.05, 3]}>
      {Array.from({ length: 9 }).map((_, i) => (
        <group key={i} position={[(i - 4) * 0.48, 0, 0]}>
          {Array.from({ length: 8 }).map((__, j) => (
            <mesh key={j} position={[0, 0.15, j * 0.55]} castShadow>
              <coneGeometry args={[0.13, 0.42 + (j % 2) * 0.08, 5]} />
              <meshStandardMaterial color={j % 2 ? "#71904b" : "#52783e"} roughness={1} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function Landscape() {
  const group = useRef();
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        (state.pointer.x * 0.09),
        delta * 1.2
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        (-state.pointer.y * 0.025),
        delta * 1.2
      );
    }
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow>
        <planeGeometry args={[80, 80, 1, 1]} />
        <meshStandardMaterial color="#557849" roughness={1} />
      </mesh>
      <mesh position={[-5, 0.1, -9]} scale={[8, 2.5, 4]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshStandardMaterial color="#66855a" roughness={1} />
      </mesh>
      <mesh position={[5, 0.05, -12]} scale={[9, 2, 5]}>
        <sphereGeometry args={[1, 32, 24]} />
        <meshStandardMaterial color="#78916a" roughness={1} />
      </mesh>
      <Farmhouse />
      <FieldRows />
      <Tree position={[-3, 0, -1]} scale={1.15} />
      <Tree position={[3.2, 0, -2.5]} scale={1.35} />
      <Tree position={[-4.5, 0, 3]} scale={0.9} />
      <Tree position={[4.5, 0, 2]} scale={1.1} />
      <Tree position={[6, 0, -5]} scale={0.85} />
      <Tree position={[-6, 0, -5]} scale={1.25} />
    </group>
  );
}

export default function FarmScene() {
  return (
    <Canvas shadows camera={{ position: [0, 4.5, 12], fov: 42 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#b7c8b0"]} />
      <fog attach="fog" args={["#b7c8b0", 13, 32]} />
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[-5, 9, 5]}
        intensity={2.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Sky distance={450000} sunPosition={[8, 3, -10]} inclination={0.48} azimuth={0.25} />
      <Suspense fallback={null}>
        <Landscape />
        <Cloud position={[-7, 5, -8]} speed={0.12} opacity={0.35} />
        <Cloud position={[7, 6, -12]} speed={0.08} opacity={0.3} />
        <Float speed={0.5} floatIntensity={0.15}>
          <mesh position={[7, 4, -8]}>
            <sphereGeometry args={[0.55, 24, 24]} />
            <meshBasicMaterial color="#f8e4a8" />
          </mesh>
        </Float>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.05}
        rotateSpeed={0.25}
      />
    </Canvas>
  );
}
