import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Dish } from "../../types/Dish";
import { makeStyles, Dialog } from "@material-ui/core";
import {
  getCartItems,
  removeItemsFromCart,
} from "../../utils/persistanceStore";
import { useEffect, useState } from "react";

type ShoppingCartProps = {
  open: boolean;
  onClose: () => void;
};

const useStyles = makeStyles(() => ({
  cart: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
    borderRadius: "20px",
    paddingBottom: "10px",
  },
}));

const ShoppingCart = ({ open, onClose }: ShoppingCartProps) => {
  const classes = useStyles();
  const [dishes, setDishes] = useState(() => getCartItems());
  const totalcost = dishes.reduce((total, item) => total + item.cost, 0);

  const handleRemoveItems = (id: string) => {
    setDishes(removeItemsFromCart(id));
  };
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.cart }}>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">Shopping Cart</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ overflowX: "hidden" }}>
        <List
          sx={{
            maxHeight: "40vh",
            minWidth: "370px",
            overflow: "auto",
            overflowX: "hidden",
          }}
        >
          {!dishes.length && (
            <Typography sx={{ fontSize: "22px" }}>
              Your cart is empty!
            </Typography>
          )}
          {dishes.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                px: "5px",
                mb: "5px",
              }}
            >
              <img
                className="img_border"
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
              />
              <ListItemText
                primary={item.name}
                secondary={`$${item.cost.toFixed(2)}`}
              />
              <Typography sx={{ fontSize: "16px" }}>{item.count}x </Typography>

              <IconButton
                edge="end"
                aria-label="remove"
                onClick={() => handleRemoveItems(item.id)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
        </List>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography variant="subtitle1">Total:</Typography>
          <Typography variant="subtitle1">${totalcost.toFixed(2)}</Typography>
        </Box>
        <DialogContentText sx={{ mt: 2 }}>Ready to checkout?</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("Order placed")}
        >
          Order Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShoppingCart;
