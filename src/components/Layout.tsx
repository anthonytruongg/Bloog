import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import { isMobile } from "react-device-detect";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div className="h-full w-full bg-neutral-focus">
      {isMobile ? null : <TopNav />}

      {isMobile ? (
        <div className="flex flex-col w-full justify-center items-center">
          {props.children}
          {isMobile ? (
            <div className="pt-12">
              <TopNav />
            </div>
          ) : null}
        </div>
      ) : (
        // render this side nav component on desktop
        <SideNav>
          <div className="flex flex-col h-full w-full p-8">
            {props.children}
            {isMobile ? <TopNav /> : null}
          </div>
        </SideNav>
      )}
    </div>
  );
}

export default Layout;
