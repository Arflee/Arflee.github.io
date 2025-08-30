"use client";

import { Slider } from "@heroui/slider";

export default function BoxBlurSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  return (
      <Slider
        aria-label="Blur Intensity"
        size="lg"
        step={0.1}
        minValue={0.0}
        maxValue={100.0}
        value={uniforms.uIntensity?.value || 2.0}
        onChange={(sliderValue) => {setUniform("uIntensity", sliderValue);}}
      />
  );
}
