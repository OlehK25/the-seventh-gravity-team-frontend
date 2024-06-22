import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NextAuthProvider from "@/providers/SessionProvider";
import { UserProvider } from "@/contexts/userContext";

const myFont = localFont({
  src: "../fonts/Mariupol-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Волонтер.тут - Головна",
  description:
    "Вебсайт, де можна знайти волонтерів та місця, де потрібна допомога",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${myFont.className} text-black`}>
      <body>
        <UserProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </UserProvider>
      </body>
    </html>
  );
}
