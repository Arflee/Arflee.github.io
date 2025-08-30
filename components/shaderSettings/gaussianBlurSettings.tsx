"use client";

import { Slider } from "@heroui/slider";

export default function GaussianBlurSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  return (
      <Slider
        size="lg"
        label="Blur Intensity"
        step={0.1}
        minValue={0.0}
        maxValue={100.0}
        value={uniforms.uIntensity?.value || 0.0}
        onChange={(sliderValue) => {setUniform("uIntensity", sliderValue);}}
      />
  );
}
