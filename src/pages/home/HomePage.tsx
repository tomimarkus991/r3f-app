import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";

import { DefaultPageWrapper } from "components";

import { Hamburger } from "../about/Hamburger";
import { Fox } from "./Fox";

export const HomePage = () => {
  const directionalLight = useRef<any>(null!);
  // useHelper(directionalLight, DirectionalLightHelper, 0);
  return (
    <DefaultPageWrapper>
      <Canvas shadows>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <ambientLight />
        <directionalLight
          castShadow
          ref={directionalLight}
          position={[10, 10, 5]}
          intensity={1.5}
        />

        <color args={["#3ea9ef"]} attach="background" />
        {/* <mesh position={[0, -1, 0]}>
          <Blaster />
        </mesh> */}
        <Fox position={[0, -2, 0]} scale={0.03} />
        <Hamburger
          position={[0, -2, 0]}
          scale={0.2}
          onClick={event => {
            console.log(event.object.name);
            event.stopPropagation();
          }}
        />


        <mesh
          receiveShadow
          rotation-x={-Math.PI * 0.5}
          scale={300}
          position={[4.91, -3, 0]}
          rotation={[-1.5707963267948966, 0, 0]}
        >
          <planeGeometry />
          <meshStandardMaterial color={"#11801a"} />
        </mesh>

        {/* <Float castShadow>
          <Text3D position-y={3.5} font="/fonts/Open_Sans_Regular.json">
            Hello world!
            <meshNormalMaterial />
          </Text3D>
        </Float> */}
        {/* <Float castShadow>
          <Text
            color={"#E50815"}
            fontSize={1}
            position-y={3}
            textAlign="center"
            font="/fonts/font.woff"
          >
            This is threeJS
          </Text>
        </Float> */}
      </Canvas>
    </DefaultPageWrapper>
  );
};
