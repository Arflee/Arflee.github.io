"use client";

import { Slider } from "@heroui/slider";

export default function PixelateFilterSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  return (
    <>
      <Slider
        size="lg"
        label="Pixelation Intensity"
        step={0.01}
        minValue={0.0}
        maxValue={1.0}
        value={uniforms.uIntensity?.value || 0.0}
        onChange={(sliderValue) => {setUniform("uIntensity", sliderValue);}}
      />
      <Slider
        size="lg"
        label="Pixel Size"
        step={0.1}
        minValue={0.1}
        maxValue={512.0}
        value={uniforms.uPixelSize?.value || 0.0}
        onChange={(sliderValue) => {setUniform("uPixelSize", sliderValue);}}
      />
    </>
  );
}
