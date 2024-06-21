import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/Mariupol-Regular.ttf",
  display: "swap",
});

function NavLink({
  listItemText,
  href,
  onClick,
  classes,
}: {
  listItemText: string;
  href: string;
  onClick?: () => void;
  classes?: any;
}) {
  const pathname = usePathname();

  const basePath = href.split("/")[1];

  const active = pathname.includes(basePath);

  return (
    <Link href={href || "#"} onClick={onClick}>
      <Typography
        sx={{
          whiteSpace: "nowrap",
          color: "#000000",
          fontSize: "20px",
          lineHeight: "20px",
          fontWeight: active ? "bold" : "normal",
          padding: classes?.padding
            ? `${classes.padding.y} ${classes.padding.x}`
            : "16px",
          "&:hover": {
            color: "#7a7d81",
          },
          transitionProperty: "all",
          transitionDuration: "0.2s",
          transitionTimingFunction: "ease-in-out",
        }}
        className={myFont.className}
      >
        {listItemText}
      </Typography>
    </Link>
  );
}

export default NavLink;
