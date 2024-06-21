"use client";

import * as React from "react";

import Navigation from "@/components/Navigation";

function AppLayout({
  children,
  onLeviesClick,
  onAboutUsClick,
}: {
  children?: React.ReactNode;
  onLeviesClick?: () => void;
  onAboutUsClick?: () => void;
}) {
  return (
    <div className="text-black min-h-screen 2xl:flex 2xl:flex-col 2xl:items-center">
      <Navigation
        onLeviesClick={onLeviesClick}
        onAboutUsClick={onAboutUsClick}
      />

      <div className="w-full 2xl:max-w-screen-2xl">{children}</div>
    </div>
  );
}

export default AppLayout;
