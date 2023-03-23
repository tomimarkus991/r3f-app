import { Canvas } from "@react-three/fiber";

import { DefaultPageWrapper } from "components";

import { Portal } from "../home/Portal";

export const AboutPage = () => {
  return (
    <DefaultPageWrapper>
      <Canvas flat>
        <Portal />
      </Canvas>
    </DefaultPageWrapper>
  );
};
