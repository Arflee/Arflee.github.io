"use client";

import LennaImage from "@/components/lennaImage";
import { postProcessingEffects } from "@/config/post-processingEffects";
import { RadioGroup, Radio } from "@heroui/radio";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";

export default function Page() {
  const [shaderType, setShader] = useState("plainTexture");

  return (
    <main>
      <div className="flex flex-col p-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <RadioGroup
            onChange={(radioBtn) => setShader(radioBtn.target.value)}
            value={shaderType}
          >
            {postProcessingEffects.map((effect, index) => (
              <React.Fragment key={index}>
                <Radio value={effect.fragmentShader}>
                  {effect.radioButtonLabel}
                </Radio>
                {shaderType === effect.fragmentShader && <p>Settings panel appears...</p>}
              </React.Fragment>
            ))}
          </RadioGroup>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-[512px] h-[512px]">
            <Canvas orthographic camera={{ position: [0, 0, 1] }}>
              <LennaImage selectedShader={shaderType}/>
            </Canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
