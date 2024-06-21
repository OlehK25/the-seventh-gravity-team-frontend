import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "This is the volunteer page",
};

export default function VolunteersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
