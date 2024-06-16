import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Register",
  description: "There you can register to the website.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
