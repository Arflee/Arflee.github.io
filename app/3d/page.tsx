"use client";

import CalmingTerrain from "@/components/calmingTerrain";
import ColorPicker from "@/components/colorPicker";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Page() {
  return (
    <section className="pt-20 flex flex-col md:flex-row w-full h-screen">
      <div className="w-1/2 flex justify-center items-start">
        <ColorPicker className="w-3/4" />
      </div>

      <div className="w-1/2 flex justify-center items-start">
        <div className="w-full h-full">
          <Canvas
            shadows
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
