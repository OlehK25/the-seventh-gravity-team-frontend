"use client";

import { useRouter } from "next/navigation";

export default function Redirect() {
  const router = useRouter();

  return router.push("/login");
}
