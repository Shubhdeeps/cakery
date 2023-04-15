import React from "react";
import "../assets/styles/layout.css";
import { blueSVG } from "./blurSvg";
import Header from "../components/header/Header";
import Container from "@mui/material/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <div className="blur-bg">{blueSVG}</div>
      <div className="layout_child">
        <Header />
        <Container>{children}</Container>
      </div>
    </div>
  );
}
