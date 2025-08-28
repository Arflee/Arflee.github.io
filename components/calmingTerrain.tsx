import { useMemo, useRef } from "react";
import { Color, Mesh, ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";

import vertexShader from "../shaders/calmingTerrain/vertexShader.vert";
import fragmentShader from "../shaders/calmingTerrain/fragmentShader.frag";

export default function CalmingTerrain({}) {
  const mesh = useRef<Mesh>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;
      material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });
  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
      
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
