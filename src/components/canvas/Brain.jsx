import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Brain = ({ }) => {
  const brain = useGLTF("./brain/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-10, 100, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.5} />
      <primitive
        object={brain.scene}
        scale={2.6}
        position={ [0, -2.2, 0.2]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const BrainCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 100,
        position: [-5, 3.3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Brain />
      </Suspense>
    </Canvas>
  );
};

export default BrainCanvas;