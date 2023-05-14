import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Cake } from "../../models/Cake";
import { useState } from "react";
import ProductDialog from "../models/CartModel";

export default function SpecialCard({ data }: { data: Cake }) {
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
      <div className="special-card" onClick={() => setModal(data)}>
        <Box
          sx={{
            height: "140px",
          }}
        >
          <img
            width="100%"
            height="100%"
            src={data.image_url}
            className="special-card_img"
          />
        </Box>
        <Box
          sx={{
            px: 1,
            py: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
            }}
          >
            {data.price}
          </Typography>
        </Box>
      </div>
    </>
  );
}
