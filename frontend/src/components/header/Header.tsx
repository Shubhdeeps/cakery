import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDrawer from "./Drawer";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCart from "../cart/Cart";
const pages = ["Home", "Menu", "About us", "Contact"];

const paths = {
  "/": "Home",
  "/home": "Home",
  "/menu": "Menu",
  "/contact": "Contact",
  "/aboutus": "About us",
};
function ResponsiveAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = paths[location.pathname as "/"];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [cart, setCartOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pathName: string) => {
    navigate(pathName.replace(/\s/g, "").toLowerCase());
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Joti One",
              fontWeight: 800,
              fontSize: "32px",
              letterSpacing: ".1rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            Panda K<span className="text-red">öö</span>k
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <CustomDrawer
              pages={pages}
              mobileOpen={Boolean(anchorElNav)}
              handleDrawerToggle={handleCloseNavMenu}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Joti One",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            Panda K<span className="text-red">öö</span>k
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => {
              const color =
                page === currentPath ? "primary.main" : "secondary.main";
              return (
                <Typography
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  color={color}
                  sx={{ my: 2, cursor: "pointer", fontSize: "24px" }}
                >
                  {page}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
              <IconButton
                onClick={() => setCartOpen(true)}
                sx={{ p: 0, color: "secondary.main" }}
              >
                <ShoppingBasketIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            {cart && (
              <ShoppingCart open={cart} onClose={() => setCartOpen(false)} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
