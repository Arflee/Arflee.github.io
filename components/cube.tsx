"use client";

import { Canvas } from "@react-three/fiber";

export default function Cube() {
  return (
    <Canvas
      shadows
      camera={{
        position: [-6, 7, 7],
      }}>
      <mesh receiveShadow>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
    </Canvas>
  );
}
