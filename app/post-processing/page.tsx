"use client";

import LennaImage from "@/components/lennaImage";
import { RadioGroup, Radio } from "@heroui/radio";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Page() {
  const [type, setType] = useState("");

  return (
    <main>
      <div className="flex p-4">
        <div className="w-1/2">
          <RadioGroup
            onChange={(val) => setType(val.target.value)}
            value={type}
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            {type === "buenos-aires" && <p>{type}</p>}
            <Radio value="sydney">Sydney</Radio>
            {type === "sydney" && <p>{type}</p>}
            <Radio value="san-francisco">San Francisco</Radio>
            {type === "san-francisco" && <p>{type}</p>}
          </RadioGroup>
        </div>
        <div className="w-[512px] h-[512px] flex items-center justify-center">
          <Canvas orthographic camera={{ position: [0, 0, 1] }}>
            <LennaImage />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
