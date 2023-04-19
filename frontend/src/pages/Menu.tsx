import Box from "@mui/material/Box";
import Title from "../components/titles/Title";
import React, { useState } from "react";
import MenuCard from "../components/cards/MenuCard";
import cuisines from "../assets/cuisine.json";
import { Dish } from "../types/Dish";

export default function Menu() {
  return (
    <>
      <Box
        sx={{
          mt: "50px",
          mb: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        {cuisines.cuisines.map((category) => {
          const key = Object.keys(category)[0] as "Noodles";
          const data = category[key] as unknown as Dish[];
          console.log(key);

          return (
            <React.Fragment key={key}>
              <Category title={key} data={data} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
}

const Category = ({ title, data }: { title: string; data: Dish[] }) => {
  return (
    <>
      <Title category={title} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            sm: "start",
          },
          gap: {
            xs: "40px",
            sm: "20px",
          },
        }}
      >
        {data.map((cuisine) => {
          return (
            <React.Fragment key={cuisine.id}>
              <MenuCard data={cuisine} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};
