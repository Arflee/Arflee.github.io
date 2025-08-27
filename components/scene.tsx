"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas shadows>
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={null}>
            <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh>
        </Suspense>
    </Canvas>
  );
}