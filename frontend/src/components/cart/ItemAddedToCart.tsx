import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function CartItemSnackbar({
  title,
  open,
  setOpen,
}: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //   const [open, setOpen] = React.useState(initState);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      message={`${title} added to the cart!`}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    />
  );
}
