"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CalmingTerrain from "./calmingTerrain";

export default function MainPageScene() {
  return (
      <Canvas shadows camera={{ position: [-1.5, 1.5, 1], fov: 50 }}>
        <CalmingTerrain />
        <axesHelper />
        <OrbitControls />
      </Canvas>
  );
}
