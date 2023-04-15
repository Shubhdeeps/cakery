import Typography from "@mui/material/Typography";

export default function Title({ category }: { category: string }) {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        color: "primary.main",
        fontSize: "32px",
        letterSpacing: "2px",
      }}
    >
      {category}
    </Typography>
  );
}
