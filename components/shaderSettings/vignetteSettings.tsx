"use client";

import { Slider } from "@heroui/slider";
import ColorPicker from "../colorPicker";
import { useState } from "react";

export default function VignetteSettings({
  uniforms,
  setUniform,
}: {
  uniforms: any;
  setUniform: (key: string, value: any) => void;
}) {
  const [color, setColor] = useState("#000000");
  
  const handleColorChange = (newColor: string) => {
    setColor(newColor);

    const r = parseInt(newColor.slice(1, 3), 16) / 255;
    const g = parseInt(newColor.slice(3, 5), 16) / 255;
    const b = parseInt(newColor.slice(5, 7), 16) / 255;
    setUniform("uColor", [r, g, b]);
  };

  return (
    <>
      <Slider
        size="lg"
        label="Vignette Intensity"
        step={0.01}
        minValue={0.0}
        maxValue={1.0}
        value={uniforms.uIntensity?.value || 0.0}
        onChange={(sliderValue) => {
          setUniform("uIntensity", sliderValue);
        }}
      />
      <Slider
        size="lg"
        label="Edge Start"
        step={0.01}
        minValue={0.0}
        maxValue={1.0}
        value={uniforms.uEdgeStart?.value || 0.0}
        onChange={(sliderValue) => {
          setUniform("uEdgeStart", sliderValue);
        }}
      />
      <Slider
        size="lg"
        label="Edge End"
        step={0.01}
        minValue={0.0}
        maxValue={1.0}
        value={uniforms.uEdgeEnd?.value || 0.0}
        onChange={(sliderValue) => {
          setUniform("uEdgeEnd", sliderValue);
        }}
      />
      <ColorPicker onChange={handleColorChange} value={color}/>
    </>
  );
}
