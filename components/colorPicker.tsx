"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Input } from "@heroui/input";

type ColorPickerProps = {
  value?: string;
  onChange?: (color: string) => void;
};

export default function ColorPicker({
  value = "#ff0000",
  onChange,
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
    />
  );
}
