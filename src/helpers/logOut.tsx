import { signOut } from "next-auth/react";
import Redirect from "@/helpers/redirect";

export default async function logOut() {
  await signOut({ redirect: false });

  return Redirect();
}
