import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Персональні дані",
  description:
    "Персональні дані - це інформація, що дозволяє ідентифікувати конкретну особу",
};

export default function PersonalDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
