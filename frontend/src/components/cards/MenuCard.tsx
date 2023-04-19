import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Dish } from "../../types/Dish";
import ProductDialog from "../models/CartModel";
import { useState } from "react";

export default function MenuCard({ data }: { data: Dish }) {
  const [model, setModal] = useState<Dish | null>(null);

  return (
    <>
      {!!model && (
        <ProductDialog
          open={model !== null}
          onClose={() => setModal(null)}
          product={model}
        />
      )}
      <div onClick={() => setModal(data)} className="menu-card">
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            gap: "10px",
          }}
        >
          {data.img ? (
            <img src={data.img} className="menu-card_img" />
          ) : (
            <Box
              className="menu-card_img"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                fontWeight: 700,
                border: "1px solid grey",
              }}
            >
              {data.name.charAt(0)}
            </Box>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
              }}
            >
              {data.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "16px",
                color: "grey.600",
              }}
            >
              {data.description}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "20px",
              alignSelf: "flex-end",
            }}
          >
            {data.cost}
          </Typography>
        </Box>
      </div>
    </>
  );
}
