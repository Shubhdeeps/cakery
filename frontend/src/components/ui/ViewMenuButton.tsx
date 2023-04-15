import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    border: "1px solid white",
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 0 10px white,
                  0 0 20px white,
                  0 0 30px white,
                  0 0 40px white,
                  0 0 50px white,
                  0 0 60px white,
                  0 0 70px white`,
      transition: "all 0.3s ease-in-out",
    },
  },
}));

export function GlowingButton() {
  const classes = useStyles();

  return <Button className={classes.button}>View Menu</Button>;
}
