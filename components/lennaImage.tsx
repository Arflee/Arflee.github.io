"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Image as DreiImage, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";

export default function LennaImage() {
  const { viewport } = useThree();

  return (
    <>
      <DreiImage
        url="/Lenna.png" // put your image in /public
        position={[0, 0, 0]}
        scale={[viewport.width, viewport.height]}
        transparent
        toneMapped={false}
      />
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
    </>
  );
}
