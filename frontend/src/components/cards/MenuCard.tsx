import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Cake } from "../../models/Cake";
import ProductDialog from "../models/CartModel";
import { useState } from "react";

export default function MenuCard({ data }: { data: Cake }) {
  const [model, setModal] = useState<Cake | null>(null);

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
          <img src={data.image_url} className="menu-card_img" />
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
            {/* <Typography
              sx={{
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "16px",
                color: "grey.600",
              }}
            >
              {data.description}
            </Typography> */}
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "22px",
              lineHeight: "20px",
              alignSelf: "flex-end",
            }}
          >
            {data.price}
          </Typography>
        </Box>
      </div>
    </>
  );
}
