import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
export default function Title({ category }: { category: string }) {
  return (
    <>
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "12px",
          letterSpacing: "1px",
          marginBottom: "-50px",
        }}
      >
        <span
          className="text-red"
          style={{ fontWeight: 700, fontSize: "18px" }}
        >
          {category.charAt(0)}
        </span>
        {category.slice(1, category.length)}
      </Typography>
      <Divider />
    </>
  );
}
