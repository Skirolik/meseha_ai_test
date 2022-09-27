import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
import { Suspense } from "react";
import Sphere from "../components/Sphere";

const Landing: NextPage = () => {
  return (
    <div className=" w-screen h-screen">
      <Canvas camera={{ position: [-1, 2, 4], fov: 90 }}>
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Landing;
