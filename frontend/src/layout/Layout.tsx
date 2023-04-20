import React from "react";
import "../assets/styles/layout.css";
import { blueSVG } from "./blurSvg";
import Header from "../components/header/Header";
import Container from "@mui/material/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  const innerwidth = window.innerWidth < 500;
  return (
    <div className="layout">
      {!innerwidth && <div className="blur-bg">{blueSVG}</div>}
      <div className="layout_child">
        <Header />
        <Container maxWidth="xl">{children}</Container>
      </div>
    </div>
  );
}
