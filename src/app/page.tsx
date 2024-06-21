"use client";

import * as React from "react";
import AppLayout from "@/components/layouts/AppLayout";
import SectionOne from "@/components/homePage/SectionOne";
import SectionTwo from "@/components/homePage/SectionTwo";
import SectionThree from "@/components/homePage/SectionThree";
import FooterData from "@/components/Footer";
import SectionFour from "@/components/homePage/SectionFour";

export default function HomePage() {
  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const leviesRef = React.useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLeviesClick = () => {
    leviesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppLayout
      onLeviesClick={handleLeviesClick}
      onAboutUsClick={handleAboutClick}
    >
      <div className="px-16">
        <SectionOne />

        <div ref={aboutUsRef}>
          <SectionTwo />
        </div>

        <div ref={leviesRef}>
          <SectionThree />
        </div>
      </div>

      <SectionFour />

      <FooterData />
    </AppLayout>
  );
}
