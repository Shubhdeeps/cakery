import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDrawer from "./Drawer";
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
  const [settings, setSettings] = React.useState(["EN", "EE"]);

  const handleChnageLanguage = () => {
    setSettings((prevState) => prevState.reverse());
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
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
            <Tooltip title="Language">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "primary.main", fontSize: "16px" }}
              >
                {settings[0]} <ArrowDropDownIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "25px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    onClick={() => handleChnageLanguage()}
                    textAlign="center"
                  >
                    {settings[1]}
                  </Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
