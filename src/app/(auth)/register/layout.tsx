import type { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "Реєстрація",
  description: "Створення та налаштування нового облікового запису",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
