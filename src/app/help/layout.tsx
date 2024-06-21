import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Help Places",
  description: "This is the Help Places website.",
};

export default function HelpPlacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
