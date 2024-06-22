import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Місця де потрібна допомога",
  description: "Місця де потрібна допомога",
};

export default function HelpPlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
