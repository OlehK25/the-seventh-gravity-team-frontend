import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Profile",
  description: "This is the profile page.",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
