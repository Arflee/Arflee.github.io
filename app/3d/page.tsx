"use client";

import CalmingTerrain from "@/components/calmingTerrain";
import ColorPicker from "@/components/colorPicker";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <section className="flex w-screen h-screen overflow-hidden"> {/* overflow-hidden removes scroll */}
      {/* Left half */}
      <div className="w-1/2 flex justify-center items-start"> {/* items-start avoids vertical overflow */}
        <ColorPicker className="w-3/4" />
      </div>

      {/* Right half */}
      <div className="w-1/2 flex justify-center items-start">
        <div className="w-full h-full">
          <Canvas
            shadows
            className="w-full h-full"
            camera={{ position: [-1.5, 1.5, 1], fov: 60 }}
          >
            <CalmingTerrain />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
