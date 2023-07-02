import * as React from "react";
import logo from "./logo.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";

const pages = ["Home", "About"];
const pagePaths = {
  Home: "/",
  About: "/about",
};

function HideOnScroll(props) {
  const { children } = props;
  const { closeMenu } = props;
  const trigger = useScrollTrigger();

  if (trigger) {
    closeMenu();
  }
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props} closeMenu={() => handleCloseNavMenu()}>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: 48,
                  display: { xs: "none", md: "flex" },
                  my: 1.5,
                  mx: 2,
                }}
                src={logo}
                alt="logo"
              ></Box>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="navigation for current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                disableScrollLock={true}
              >
                {pages.map((page) => (
                  <MenuItem
                    component={Link}
                    to={pagePaths[page]}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <Link to="/">
                <Box
                  component="img"
                  sx={{ height: 48, my: 1.5, mx: 2 }}
                  src={logo}
                  alt="logo"
                ></Box>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={pagePaths[page]}
                  key={page}
                  onClick={handleCloseNavMenu}
                  size="large"
                  sx={{ my: 1, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
