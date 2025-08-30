"use client";

import { Slider } from "@heroui/slider";

export default function PrewittOperatorSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  return (
      <Slider
        size="lg"
        label="Edge scale"
        step={0.1}
        minValue={0.1}
        maxValue={100.0}
        value={uniforms.uIntensity?.value || 0.0}
        onChange={(sliderValue) => {setUniform("uIntensity", sliderValue);}}
      />
  );
}
