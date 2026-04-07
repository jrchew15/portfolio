import { Canvas } from "@react-three/fiber";
import { Container } from "../common/Container";
import { useRef } from "react";

const SCENE_CONSTANTS = {
  camera_height: 4,
  camera_fov: 75,
  camera_angle: -(Math.PI * 2) / 36,
  light_height: 25,
  light_depth: 40,
} as const;

export const Body = () => {
  const blurb = `Full Stack Software Engineer with a background in theoretical Mathematics.`;

  return (
    <>
      <Container className="h-full">
        <h1 className="text-4xl">Jason Chew</h1>
        <h3 className="text-2xl">{blurb}</h3>
      </Container>
      <Scene />
    </>
  );
};

function Scene() {
  return (
    <div className="absolute top-0 h-full w-full">
      <Canvas
        shadows
        camera={{
          position: [0, SCENE_CONSTANTS.camera_height, -4],
          fov: SCENE_CONSTANTS.camera_fov,
          rotation: [SCENE_CONSTANTS.camera_angle, Math.PI, 0],
        }}
      >
        <MySpotLightHelper />
        <ambientLight intensity={0.2} />
        <mesh position={[4, 1, 8]} castShadow>
          <sphereGeometry />
          <meshPhongMaterial color="#344561" />
        </mesh>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0, 25]}
          receiveShadow
        >
          <planeGeometry args={[500, 50]} />
          <meshStandardMaterial color="#344561" />
        </mesh>
      </Canvas>
    </div>
  );
}

function MySpotLightHelper() {
  const ref = useRef(null);
  // useHelper(ref, SpotLightHelper, "orange");

  return (
    <spotLight
      ref={ref}
      position={[0, SCENE_CONSTANTS.light_height, SCENE_CONSTANTS.light_depth]}
      shadow-mapSize={[2048, 2048]}
      color="white"
      intensity={50}
      decay={1}
      penumbra={1}
      castShadow
    />
  );
}
