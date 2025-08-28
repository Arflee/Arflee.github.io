"use client";

import { useState } from "react";
import { Input } from "@heroui/input";

type ColorPickerProps = {
  value?: string;
  onChange?: (color: string) => void;
  className?: string;
};

export default function ColorPicker({
  value = "#ff0000",
  onChange,
  className
}: ColorPickerProps) {
  const [color, setColor] = useState(value);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    onChange?.(newColor);
  };

  return (
    <Input
      type="color"
      label="Pick a color"
      value={color}
      onChange={(e) => handleChange(e.target.value)}
      className={className}
    />
  );
}
