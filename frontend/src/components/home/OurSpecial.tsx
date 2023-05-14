import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SpecialCard from "../cards/SpecialCard";
import React from "react";
import { useFetchSpecialCake } from "../../service/useFetchAllCakes";

export default function OurSpecial() {
  const { cake, loading, error, fetch } = useFetchSpecialCake();
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "60px",
      }}
    >
      <Typography fontSize={42} mb={5}>
        <span className="text-red">
          <FastfoodIcon /> Our{" "}
        </span>{" "}
        Special
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          mb: "50px",
          gap: {
            xs: "100px",
            sm: "80px",
          },
        }}
      >
        {cake.map((special) => {
          return (
            <React.Fragment key={special.id}>
              <SpecialCard data={special} />
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
