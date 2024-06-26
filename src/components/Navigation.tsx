"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

import NavLink from "@/components/NavLink";
import { Avatar } from "@mui/material";
import { useUser } from "@/contexts/userContext";

const AppBar = styled(MuiAppBar)(
  (): { background: string; boxShadow: string } => ({
    background: "transparent",
    boxShadow: "none",
  }),
);

function Navigation({
  onLeviesClick,
  onAboutUsClick,
}: {
  onLeviesClick?: () => void;
  onAboutUsClick?: () => void;
}) {
  const [languagesSelected, setLanguagesSelected] =
    React.useState<string>("ua");
  const { isLoggedIn, userType, login } = useUser();

  const router = useRouter();

  const handleLanguagesClick = (name: string) => {
    setLanguagesSelected(name);
  };

  return (
    <AppBar position="static" className="w-full 2xl:max-w-screen-2xl py-6">
      <Container
        maxWidth="xl"
        sx={{
          paddingX: {
            xs: "32px",
            md: "64px",
          },
          paddingLeft: { xs: "20px" },
          "& .MuiToolbar-root": {
            minHeight: `64px`,
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div
            className="text-6xl text-black text-start mr-10 hover:cursor-pointer"
            onClick={() => router.push("/")}
          >
            Logo
          </div>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              flexWrap: "wrap",
            }}
          >
            <NavLink listItemText={"Допомогти"} href={"/help"} />
            <NavLink listItemText={"Волонтери"} href={"/volunteers"} />
            <NavLink listItemText={"Збори"} href={""} onClick={onLeviesClick} />
            <NavLink
              listItemText={"Про нас"}
              href={""}
              onClick={onAboutUsClick}
            />
            <NavLink listItemText={"Звіти"} href={""} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000000",
                fontSize: "16px",
                lineHeight: "16px",
                padding: "16px",
              }}
            >
              <button
                type="button"
                className="shadow-none uppercase hover:underline hover:text-[#7a7d81] transition-all duration-200 ease-in-out"
                onClick={() => handleLanguagesClick("ua")}
              >
                ua
              </button>

              <p>/</p>

              <button
                type="button"
                className="shadow-none uppercase hover:underline hover:text-[#7a7d81] transition-all duration-200 ease-in-out"
                onClick={() => handleLanguagesClick("en")}
              >
                en
              </button>
            </Box>
          </Box>

          {!isLoggedIn && (
            <button
              onClick={() => router.push("/login")}
              className="ml-10 inline-flex w-[138px] h-[40px] items-center justify-center rounded-2xl font-normal leading-7 text-white hover:bg-slate-950 bg-slate-950"
            >
              Вхід
            </button>
          )}

          {isLoggedIn && (
            <Avatar
              onClick={() =>
                userType === "volunteer"
                  ? router.push("/profile")
                  : router.push("/profile/personal-details")
              }
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
