import { useAnimations, useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const Fox = (props: GroupProps) => {
  const fox: any = useRef(null!);
  const { nodes: n, materials, animations } = useGLTF("/models/fox/Fox.gltf");
  const nodes = n as any;
  const { actions }: any = useAnimations(animations, fox);
  console.log(actions);
  console.log(n);

  useFrame(() => {
    setTimeout(() => {
      fox.current.position.x += 0.09;
    }, 3000);
  });

  useEffect(() => {
    actions.Survey.play();
    setTimeout(() => {
      actions.Run.play();
      actions.Walk.fadeIn(1).play();
    }, 2000);
  }, []);

  return (
    <group ref={fox} {...props} dispose={null}>


          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            name="fox"
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />


    </group>
  );
};

useGLTF.preload("/models/fox/Fox.gltf");
