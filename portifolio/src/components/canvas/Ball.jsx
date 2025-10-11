import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import Loader from "../Loader";

const Ball = (props) => {
  // Fix 1: Use the correct prop name that matches what's passed
  const [decal] = useTexture([props.imgUrl]); // Changed from props.imageUrl to props.imgUrl
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading // Fix 2: Changed from floatShading to flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  // Fix 3: Add validation to prevent undefined errors
  if (!icon) {
    console.warn("BallCanvas: icon prop is undefined");
    return (
      <div className="w-28 h-28 flex items-center justify-center bg-gray-800 rounded-full">
        <span className="text-white text-sm">No icon</span>
      </div>
    );
  }

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;