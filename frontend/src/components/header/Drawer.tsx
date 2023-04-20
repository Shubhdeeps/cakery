import Drawer from "@material-ui/core/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core";

// const pages = ["Home", "Menu", "About us", "Contact"];

const useStyles = makeStyles(() => ({
  drawer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
  },
}));

export default function CustomDrawer({
  mobileOpen,
  handleDrawerToggle,
  pages,
}: {
  mobileOpen: boolean;
  handleDrawerToggle: any;
  pages: string[];
}) {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const classes = useStyles();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        Panda K<span className="text-red">öö</span>k
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleDrawerToggle(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Drawer
        classes={{ paper: classes.drawer }}
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        // sx={{
        //   display: { xs: "block", sm: "none" },
        //   "& .MuiDrawer-paper": {
        //     boxSizing: "border-box",
        //     width: 370,
        //   },
        // }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
