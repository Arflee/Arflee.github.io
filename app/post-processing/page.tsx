"use client";

import { fallbackShader, postProcessingEffects } from "@/config/post-processingEffects";
import { RadioGroup, Radio } from "@heroui/radio";
import LennaImage from "@/components/lennaImage";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";

export default function Page() {
  const [shaderType, setShader] = useState("none");
  const selectedEffect = postProcessingEffects.find(e => e.id === shaderType);
  const fragmentShader = selectedEffect?.shader ?? fallbackShader;
  
  return (
    <main>
      <div className="flex flex-col p-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <RadioGroup
            onChange={(radioBtn) => setShader(radioBtn.target.value)}
            value={shaderType}
          >
            {postProcessingEffects.map((effect) => (
              <React.Fragment key={effect.id}>
                <Radio value={effect.id}>{effect.radioButtonLabel}</Radio>
                {shaderType === effect.id && <p>Settings panel appears...</p>}
              </React.Fragment>
            ))}
          </RadioGroup>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-[512px] h-[512px]">
            <Canvas orthographic camera={{ position: [0, 0, 1] }}>
              <LennaImage selectedShader={fragmentShader} />
            </Canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
