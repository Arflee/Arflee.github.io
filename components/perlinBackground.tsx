"use client";

import { useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrthographicCamera } from "@react-three/drei";

import perlinShader from "@/shaders/background/perlin.frag";
import vertexShader from "@/shaders/post-processing/plainTexture.vert";

export default function PerlinBackground() {
  const { viewport } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: perlinShader,
      uniforms: {
        uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) },
        uTime: { value: 0.0 },
      },
    });
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <>
      <mesh>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <primitive object={material} attach="material" />
      </mesh>
      <OrthographicCamera makeDefault position={[0, 0, 1]} />
    </>
  );
}
