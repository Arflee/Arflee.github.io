"use client";
import Box from "@/components/box";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Canvas shadows>
        <mesh scale={1.5}>
          <Box />
        </mesh>
      </Canvas>
    </section>
  );
}
