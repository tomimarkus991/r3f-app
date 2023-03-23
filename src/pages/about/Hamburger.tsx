import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";

export const Hamburger = (props: GroupProps) => {
  const hamburger: any = useRef(null!);
  const { nodes: n, materials } = useGLTF("/models/hamburger/Hamburger.glb");
  const nodes = n as any;
  console.log(nodes);

  return (
    <group ref={hamburger} {...props} dispose={null}>
      <mesh name="bottom-bun" geometry={nodes.Cube.geometry} material={materials.BunMaterial} />
      <mesh
        name="meat"
        geometry={nodes.Cube001.geometry}
        material={materials.MeatMaterial}
        position={[0, 1.61, 0]}
        scale={1.11}
      />
      <mesh
        name="cheese"
        geometry={nodes.Plane.geometry}
        material={materials.CheeseMaterial}
        position={[-0.31, 4.37, 0]}
      />
      <mesh
        name="top-bun"
        geometry={nodes.Cube002.geometry}
        material={materials.BunMaterial}
        position={[0, 0.08, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/hamburger/Hamburger.gltf");
