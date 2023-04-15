import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Tagline() {
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
        It’s not just Food, It’s an Experience.
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{
          borderRadius: "50px",
          width: "220px",
        }}
      >
        Explore Menu
      </Button>
    </Box>
  );
}
