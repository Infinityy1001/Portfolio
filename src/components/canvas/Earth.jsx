import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const meshRef = useRef();

  // Ajouter une rotation légère
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; // Vitesse de rotation lente
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.5} groundColor="black" />
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
        object={earth.scene}
        scale={2.6}
        position={[0, -1.5, 0]} // Centré dans la scène
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 100,
        position: [0, 1.5, 35], // Centré sur l'objet
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
