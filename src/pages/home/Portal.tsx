import { Center, OrbitControls, Sparkles, useGLTF, useTexture } from "@react-three/drei";

interface Nodes {
  baked: {
    geometry: any;
  };
  PoleLightA: {
    geometry: any;
    position: any;
    rotation: any;
    scale: any;
  };
  PoleLightB: {
    geometry: any;
    position: any;
    rotation: any;
    scale: any;
  };
  Ring: {
    geometry: any;
    position: any;
    rotation: any;
    scale: any;
  };
}
// https://codesandbox.io/s/threejs-journey-ni6v4?file=/src/App.js:269-273
// https://www.npmjs.com/package/vite-plugin-glsl
export const Portal = () => {
  const { nodes: n } = useGLTF("/models/portal/portal.glb");
  const nodes = n as unknown as Nodes;
  console.log(nodes);

  const bakedTexture = useTexture("/models/portal/baked.jpg");
  bakedTexture.flipY = false;
  return (
    <>
      <color args={["#201919"]} attach="background" />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.PoleLightA.geometry}
          position={nodes.PoleLightA.position}
          scale={nodes.PoleLightA.scale}
        />
        <mesh
          position={nodes.PoleLightB.position}
          geometry={nodes.PoleLightB.geometry}
          scale={nodes.PoleLightB.scale}
        />

        <mesh
          geometry={nodes.Ring.geometry}
          position={nodes.Ring.position}
          //   rotation={nodes.Ring.rotation}
          scale={nodes.Ring.scale}
        >
          <shaderMaterial />
        </mesh>
        <Sparkles size={6} scale={[4, 2, 4]} position={[0, 0.3, -1]} speed={0.3} />
      </Center>
    </>
  );
};

useGLTF.preload("/models/portal/portal.glb");
