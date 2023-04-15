import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  img: string;
  name: string;
  description: string;
  id: string;
  cost: number;
};

export default function SpecialCard({ data }: { data: Props }) {
  return (
    <div className="special-card">
      <img src={data.img} className="special-card_img" />
      <Box
        sx={{
          mt: "80px",
          px: 1,
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "120px",
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
          {data.cost}
        </Typography>
      </Box>
    </div>
  );
}
