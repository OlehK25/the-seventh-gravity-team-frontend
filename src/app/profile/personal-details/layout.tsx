import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Personal Details",
  description:
    "This is the personal details page: a form to collect personal details.",
};

export default function PersonalDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
