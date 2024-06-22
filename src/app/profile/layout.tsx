import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Профіль",
  description: "Профіль волонтера",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
