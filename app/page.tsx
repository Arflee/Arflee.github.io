"use client";

import PerlinBackground from "@/components/perlinBackground";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <section className="flex grow relative w-full min-h-screen overflow-hidden">
      <Canvas className="pt-16" orthographic camera={{ position: [0, 0, 1] }}>
        <PerlinBackground />
      </Canvas>
    </section>
  );
}
