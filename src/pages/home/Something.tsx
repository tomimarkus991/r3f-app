import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

export const Blaster = () => {
  const group = useRef(null!);
  const { nodes: n, materials } = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/blaster-a/model.gltf"
  );
  const nodes = n as any;
  return (
    <group ref={group} dispose={null}>
      <group rotation={[0, Math.PI / 2, 0]} scale={3.06}>
        <mesh geometry={nodes.Mesh_blasterA.geometry} material={materials.metal} />
        <mesh geometry={nodes.Mesh_blasterA_1.geometry} material={materials.dark} />
        <mesh geometry={nodes.Mesh_blasterA_2.geometry} material={materials.darkMetal} />
        <mesh geometry={nodes.Mesh_blasterA_3.geometry} material={materials.purple} />
      </group>
    </group>
  );
};

useGLTF.preload(
  "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/blaster-a/model.gltf"
);
