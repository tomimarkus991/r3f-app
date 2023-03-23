import { NavbarBottom, NavbarTop } from "@redlotus/ui";

import { NavbarBottomContent, PartialPageWrapper } from "components";

interface Props {
  children: React.ReactNode;
  RightSide?: React.ReactNode;
}

export const DefaultPageWrapper = ({ children, RightSide }: Props) => {
  const username = "Galaxy";

  return (
    <PartialPageWrapper
      MobileContent={
        <>
          <NavbarTop
            title="Template"
            user={{ id: "1", username, email: "galaxy@gmail.com", avatar: null }}
          />
          <div className="px-4">{children}</div>
          <NavbarBottom>
            <NavbarBottomContent />
          </NavbarBottom>
        </>
      }
      Sidebar={<></>}
      RightSide={RightSide}
    >
      {children}
    </PartialPageWrapper>
  );
};
