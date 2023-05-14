import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

export default function Tagline() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: {
          xs: "center",
          sm: "start",
        },
      }}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontWeight: 700,
          fontSize: {
            xs: "48px",
            md: "64px",
          },
          lineHeight: {
            xs: "46px",
            md: "68px",
          },
          width: {
            xs: "250px",
            md: "345px",
          },
        }}
      >
        Indulge in sweetness, one slice at a time.
      </Typography>
      <Button
        onClick={() => navigate("/menu")}
        size="large"
        variant="contained"
        sx={{
          borderRadius: "50px",
          width: "260px",
        }}
      >
        Explore Menu
      </Button>
    </Box>
  );
}
