"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

export default function BackgroundCanvas({ children }: { children: ReactNode }) {
  return (
    <section className="fixed top-0 left-0 w-full h-full">
      <Canvas orthographic camera={{ position: [0, 0, 1] }}>
        {children}
      </Canvas>
    </section>
  );
}
