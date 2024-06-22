import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Волонтери",
  description: "Список усіх доступних волонтерів за категоріями",
};

export default function VolunteersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
