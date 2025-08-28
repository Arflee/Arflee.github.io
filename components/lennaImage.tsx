"use client";

import { useThree, useLoader } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Mesh, TextureLoader } from "three";
import { shaders } from "@/shaders";
import * as THREE from "three";

import vertexShader from "../shaders/post-processing/plainTexture.vert";

export default function LennaImage({
  selectedShader,
}: {
  selectedShader?: string;
}) {
  const { viewport } = useThree();
  const mesh = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, "/Lenna.png");
  const fragmentShader = selectedShader
    ? shaders[selectedShader]
    : shaders.plainTexture;

  const uniforms = useMemo(
    () => ({
      u_texture: { value: texture },
    }),
    [texture, viewport]
  );
  return (
    <>
      <mesh
        key={selectedShader}
        ref={mesh}
        position={[0, 0, 0]}
        scale={[viewport.width, viewport.height, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
    </>
  );
}
