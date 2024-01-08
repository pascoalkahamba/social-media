import { Box } from "@mantine/core";
import React from "react";
import HeaderMegaMenu from "./headerMegaMenu";
import FooterCentered from "./footerCentered";
import classes from "../styles/layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box component="section" className={classes.layout}>
      <HeaderMegaMenu />
      <div className={classes.contanier}>{children}</div>
      <FooterCentered />
    </Box>
  );
}
