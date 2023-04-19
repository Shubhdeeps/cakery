import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SpecialCard from "../cards/SpecialCard";
import dish1 from "../../assets/dishes/kana_magushapus.png";
import dish2 from "../../assets/dishes/meekana.png";
import dish3 from "../../assets/dishes/kana_sojakastmes.png";
import React from "react";

// const dish1 = https://firebasestorage.googleapis.com/v0/b/pandakook-35cc6.appspot.com/o/images%2Fkana_magushapus.png?alt=media&token=62f452e1-088b-44b9-94cd-5926c41e7940
// const dish2 = https://firebasestorage.googleapis.com/v0/b/pandakook-35cc6.appspot.com/o/images%2Fmeekana.png?alt=media&token=7a9d5d1f-e4ce-44c1-ac8c-abf7bf7313ed
// const dish3 = https://firebasestorage.googleapis.com/v0/b/pandakook-35cc6.appspot.com/o/images%2Fkana_sojakastmes.png?alt=media&token=b8273e88-de14-4bbc-9807-8219641516f7

export const ourSpecialDishes = [
  {
    img: dish1,
    name: "Kana magushapus kastmes",
    description: "Praetud praetud kana köögiviljadega magushapus kastmes",
    id: "dish-1",
    cost: 7.99,
  },
  {
    cost: 7.99,
    id: "dish-2",
    img: dish2,
    name: "Meekana",
    description: "Praetud kana meekastmes",
  },
  {
    cost: 7.99,
    id: "dish-3",
    img: dish3,
    name: "Kana sojakastmes",
    description:
      "Kana küüslauguga, porgand, rohelised herned, paprika, seened, tšilli ja bambusevõrsed",
  },
];
export default function OurSpecial() {
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
        {ourSpecialDishes.map((cuisine) => {
          return (
            <React.Fragment key={cuisine.id}>
              <SpecialCard data={cuisine} />
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
