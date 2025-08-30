"use client";

import { Slider } from "@heroui/slider";
import { useState } from "react";

export default function GrayscaleSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  const [redWeight, setRed] = useState(0.0);
  const [greenWeight, setGreen] = useState(0.0);
  const [blueWeight, setBlue] = useState(0.0);

  const verticalSliderClass = "h-40";

  return (
    <>
      <Slider
        size="lg"
        label="Grayscale Intensity"
        step={0.01}
        minValue={0.0}
        maxValue={1.0}
        value={uniforms.uIntensity?.value || 0.0}
        onChange={(sliderValue) => {
          setUniform("uIntensity", sliderValue);
        }}
      />
      <div className="flex gap-4 mt-4">
        <Slider
          size="lg"
          label="Red weight"
          step={0.01}
          minValue={0.0}
          maxValue={1.0}
          color="danger"
          className={verticalSliderClass}
          value={uniforms.uRgbWeights?.value[0] || 0.0}
          onChange={(v) =>
            setUniform("uRgbWeights", [
              v,
              uniforms.uRgbWeights?.value[1] || 0.0,
              uniforms.uRgbWeights?.value[2] || 0.0,
            ])
          }
          orientation="vertical"
        />
        <Slider
          size="lg"
          label="Green weight"
          step={0.01}
          minValue={0.0}
          maxValue={1.0}
          color="success"
          className={verticalSliderClass}
          value={uniforms.uRgbWeights?.value[1] || 0.0}
          onChange={(v) =>
            setUniform("uRgbWeights", [
              uniforms.uRgbWeights?.value[0] || 0.0,
              v,
              uniforms.uRgbWeights?.value[2] || 0.0,
            ])
          }
          orientation="vertical"
        />
        <Slider
          size="lg"
          label="Blue weight"
          step={0.01}
          minValue={0.0}
          maxValue={1.0}
          color="primary"
          className={verticalSliderClass}
          value={uniforms.uRgbWeights?.value[2] || 0.0}
          onChange={(v) =>
            setUniform("uRgbWeights", [
              uniforms.uRgbWeights?.value[0] || 0.0,
              uniforms.uRgbWeights?.value[1] || 0.0,
              v,
            ])
          }
          orientation="vertical"
        />
      </div>
    </>
  );
}
