import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Here you can login to your account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
