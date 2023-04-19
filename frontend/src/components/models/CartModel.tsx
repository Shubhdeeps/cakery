import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import { Dish } from "../../types/Dish";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
    // padding: theme.spacing(3),
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function ProductDialog({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: Dish;
}) {
  const classes = useStyles();

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.dialog }}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <img src={product.img} alt={product.name} className={classes.image} />
        <DialogContentText>{product.description}</DialogContentText>
        <Typography variant="h6" color="secondary">
          {`$${product.cost}`}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleAddToCart}
          variant="contained"
          size="medium"
          color="primary"
          sx={{
            borderRadius: "50px",
            px: "50px",
          }}
        >
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}
