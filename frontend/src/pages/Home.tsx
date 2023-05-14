import React from "react";
import Box from "@mui/material/Box";
import Tagline from "../components/home/Tagline";
import HighlightedCake from "../components/home/HighlightedCake";
import OurSpecial from "../components/home/OurSpecial";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          mt: "70px",
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tagline />
        <HighlightedCake />
      </Box>
      <OurSpecial />
    </>
  );
}
