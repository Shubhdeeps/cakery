import Box from "@mui/material/Box";
import Title from "../components/titles/Title";
import React, { useEffect, useState } from "react";
import MenuCard from "../components/cards/MenuCard";
import { useFetchAllCake } from "../service/useFetchAllCakes";
import { Cake } from "../models/Cake";

export default function Menu() {
  const { cake, loading, error, fetch } = useFetchAllCake();
  useEffect(() => {
    fetch();
  }, []);

  if (loading || !cake.length) {
    return <>Loading...</>;
  }
  if (error) {
    console.log(error);
    return <>Something went wrong!</>;
  }
  const unfilteredCategories = cake.map((data) => data.category);
  const filteredCategories = new Set(unfilteredCategories);
  const categories = Array.from(filteredCategories);
  console.log(categories);

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
        {categories.map((category) => {
          return (
            <React.Fragment key={category}>
              <Category
                title={category}
                data={cake.filter((eachCake) => eachCake.category === category)}
              />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
}

const Category = ({ title, data }: { title: string; data: Cake[] }) => {
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
        {data.map((cake) => {
          return (
            <React.Fragment key={cake.id}>
              <MenuCard data={cake} />
            </React.Fragment>
          );
        })}
      </Box>
    </>
  );
};
