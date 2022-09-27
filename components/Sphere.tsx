import React from "react";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import mars from "../textures/2k_mars.jpg";
import * as THREE from "three";

const Sphere = (props: any) => {
  return (
    <>
      {/* learn about mesh . vertices, rendiering engine */}
      {/* mesh */}

      <ambientLight color={0x404040} intensity={0.5} castShadow={true} />
      <directionalLight intensity={1} castShadow />

      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <torusGeometry args={[5, 1, 20, 100]} />
        <meshBasicMaterial color={0xffff00} side={THREE.DoubleSide} />

        <OrbitControls
          enableRotate={true}
          enablePan={true}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Sphere;
