"use client";

import { useThree, useLoader } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { shaders } from "@/shaders";
import * as THREE from "three";

export default function LennaImage({
  selectedShader,
}: {
  selectedShader: string;
}) {
  const { viewport } = useThree();
  const texture = useLoader(TextureLoader, "/Lenna.png");

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture },
        },
        vertexShader: shaders.vertex,
        fragmentShader: selectedShader,
      }),
    [selectedShader]
  );
  return (
    <>
      <mesh key={selectedShader}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <primitive object={material} attach="material" />
      </mesh>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
    </>
  );
}
