import Box from "@mui/material/Box";
import Title from "../components/titles/Title";
import { ourSpecialDishes } from "../components/home/OurSpecial";
import React from "react";
import SpecialCard from "../components/cards/SpecialCard";

export default function Menu() {
  return (
    <Box
      sx={{
        mt: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Category />
      <Category />
      <Category />
      <Category />
    </Box>
  );
}

const Category = () => {
  return (
    <>
      <Title category="CHICKEN ROAD" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            sm: "start",
          },
          mt: "50px",
          mb: "50px",
          gap: {
            xs: "100px",
            sm: "80px",
          },
        }}
      >
        {ourSpecialDishes.map((cuisine) => {
          return (
            <React.Fragment key={cuisine.id}>
              <SpecialCard data={cuisine} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};
