import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Вхід",
  description: "Вхід у свій обліковий запис",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
